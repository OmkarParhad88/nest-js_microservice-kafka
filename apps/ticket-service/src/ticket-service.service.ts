import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { DatabaseService, EventStatus, TicketStatus } from '@app/database';
import { ClientKafka } from '@nestjs/microservices';
import { KAFKA_SERVICE, KAFKA_TOPIC } from '@app/kafka';
import { randomBytes } from 'crypto';
import { CheckInTicketDto, EventUuidDto, PurchaseTicketDto, UuidDto } from '@app/shared';

@Injectable()
export class TicketServiceService implements OnModuleInit {
  constructor(
    private readonly dbService: DatabaseService,
    @Inject(KAFKA_SERVICE) private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    await this.kafkaClient.connect();
    console.log('Ticket service is initialized');
  }

  private generateTicketCode() {
    return randomBytes(6).toString('hex').toUpperCase();
  }

  async purchaseTicket(purchaseTicketDto: PurchaseTicketDto, userId: string) {
    const event = await this.dbService.event.findUnique({
      where: { id: purchaseTicketDto.eventId },
    });
    if (!event) {
      throw new NotFoundException('Event not found');
    }
    if (event.status !== EventStatus.PUBLISHED) {
      throw new BadRequestException('Event is not published');
    }
    const result = await this.dbService.ticket.aggregate({
      _sum: {
        quantity: true,
      },
      where: {
        eventId: event.id,
        status: TicketStatus.CONFIRMED,
      },
    });

    const soletickets = result._sum.quantity || 0;
    const remaning = event.capacity - soletickets;

    if (remaning < purchaseTicketDto.quantity) {
      throw new BadRequestException(`only ${remaning} tickets available`);
    }

    const totalPrice = event.price * purchaseTicketDto.quantity;

    const soldTicket = await this.dbService.ticket.create({
      data: {
        eventId: event.id,
        userId: userId,
        quantity: purchaseTicketDto.quantity,
        totalPrice,
        ticketCode: this.generateTicketCode(),
        status: TicketStatus.CONFIRMED,
      },
    });

    this.kafkaClient.emit(KAFKA_TOPIC.TICKET_PURCHASED, {
      ticketId: soldTicket.id,
      eventId: soldTicket.eventId,
      userId: soldTicket.userId,
      quantity: soldTicket.quantity,
      totalPrice: soldTicket.totalPrice,
      ticketCode: soldTicket.ticketCode,
      timeStamp: soldTicket.createdAt,
    });
    return {
      message: 'Ticket purchased successfully',
      ticket: soldTicket,
    };
  }

  async findMyTicket(userId: string) {
    const userTickets = await this.dbService.ticket.findMany({
      where: {
        userId: userId,
      },
      select: {
        id: true,
        ticketCode: true,
        quantity: true,
        totalPrice: true,
        status: true,
        purchasedAt: true,
        checkedInAt: true,
        event: {
          select: {
            id: true,
            title: true,
            date: true,
            location: true,
          },
        },
      },
    });

    return userTickets;
  }

  async findOne({ id }: UuidDto, userId: string) {
    if (!id) {
      throw new BadRequestException('Ticket id is required');
    }
    const ticket = await this.dbService.ticket.findUnique({
      where: {
        id: id,
        userId: userId,
      },
      select: {
        id: true,
        ticketCode: true,
        quantity: true,
        totalPrice: true,
        status: true,
        purchasedAt: true,
        checkedInAt: true,
        userId: true,
        event: {
          select: {
            id: true,
            title: true,
            date: true,
            location: true,
          },
        },
      },
    });

    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }

    if (ticket.userId !== userId) {
      throw new ForbiddenException('You are not authorized to access this ticket');
    }

    return ticket;
  }

  async cancelTicket({ id }: UuidDto, userId: string) {
    if (!id) {
      throw new BadRequestException('Ticket id is required');
    }
    const ticket = await this.dbService.ticket.findUnique({
      where: {
        id: id,
        userId: userId,
      },
    });

    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }

    if (ticket.userId !== userId) {
      throw new ForbiddenException('You are not authorized to access this ticket');
    }

    if (ticket.status === TicketStatus.CANCELLED) {
      throw new BadRequestException('Ticket is already cancelled');
    }

    if (ticket.status === TicketStatus.CHECKED_IN) {
      throw new BadRequestException('Ticket is already checked in');
    }

    const cancelledTicket = await this.dbService.ticket.update({
      where: {
        id: id,
      },
      data: {
        status: TicketStatus.CANCELLED,
      },
    });

    this.kafkaClient.emit(KAFKA_TOPIC.TICKET_CANCELLED, {
      ticketId: cancelledTicket.id,
      eventId: cancelledTicket.eventId,
      userId: cancelledTicket.userId,
      timeStamp: cancelledTicket.createdAt,
    });
    return {
      message: 'Ticket cancelled successfully',
      ticket: cancelledTicket,
    };
  }

  async checkInTicket({ ticketCode }: CheckInTicketDto, userId: string) {
    const ticket = await this.dbService.ticket.findUnique({
      where: {
        ticketCode,
      },
      select: {
        id: true,
        quantity: true,
        status: true,
        event: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }

    if (ticket.status === TicketStatus.CHECKED_IN) {
      throw new BadRequestException('Ticket is already checked in');
    }

    const event = await this.dbService.event.findUnique({
      where: {
        id: ticket.event.id,
      },
    });

    if (!event) {
      throw new NotFoundException('Event not found');
    }

    if (event.organizerId !== userId) {
      throw new ForbiddenException('You are not authorized to access this event');
    }

    if (event.status === EventStatus.CANCELLED) {
      throw new BadRequestException('Event is not cancelled');
    }

    const checkedInTicket = await this.dbService.ticket.update({
      where: {
        id: ticket.id,
      },
      data: {
        status: TicketStatus.CHECKED_IN,
        checkedInAt: new Date(),
      },
    });

    this.kafkaClient.emit(KAFKA_TOPIC.TICKET_CHECKED_IN, {
      ticketId: checkedInTicket.id,
      eventId: checkedInTicket.eventId,
      ticketCode: checkedInTicket.ticketCode,
      timeStamp: checkedInTicket.checkedInAt,
    });
    return {
      message: 'Ticket checked in successfully',
      ticket: checkedInTicket,
    };
  }

  async findEventTicket({ eventId }: EventUuidDto, userId: string) {
    const event = await this.dbService.event.findUnique({
      where: {
        id: eventId,
      },
    });

    if (!event) {
      throw new NotFoundException('Event not found');
    }

    if (event.organizerId !== userId) {
      throw new ForbiddenException('You are not authorized to access this event');
    }

    if (event.status === EventStatus.CANCELLED) {
      throw new BadRequestException('Event is not cancelled');
    }

    const eventTickets = await this.dbService.ticket.findMany({
      where: {
        eventId: eventId,
      },
    });

    return eventTickets;
  }
}
