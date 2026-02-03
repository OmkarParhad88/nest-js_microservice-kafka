import {
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { DatabaseService, Prisma, Role } from '@app/database';
import { CreateEventType } from '@app/shared';
import { KAFKA_SERVICE, KAFKA_TOPIC } from '@app/kafka';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class EventServiceService implements OnModuleInit {
  constructor(
    private readonly dbService: DatabaseService,
    @Inject(KAFKA_SERVICE) private readonly kafkaClient: ClientKafka,
  ) { }

  async onModuleInit() {
    await this.kafkaClient.connect();
    console.log('Event service is initialized');
  }

  async create(event: CreateEventType, organizerId: string) {
    const createdEvent = await this.dbService.event.create({
      data: {
        ...event,
        organizer: {
          connect: {
            id: organizerId,
          },
        },
      },
    });
    this.kafkaClient.emit(KAFKA_TOPIC.EVENT_CREATED, {
      eventId: createdEvent.id,
      organizerId: createdEvent.organizerId,
      timeStamp: createdEvent.createdAt,
    });
    return createdEvent;
  }

  async findAll(where: Prisma.EventWhereInput) {
    const events = await this.dbService.event.findMany({
      where,
      include: {
        organizer: true,
      },
    });
    return events;
  }

  async findOne(where: Prisma.EventWhereUniqueInput) {
    const event = await this.dbService.event.findUnique({
      where,
      include: {
        organizer: true,
      },
    });
    if (!event) {
      throw new NotFoundException('Event not found');
    }
    return event;
  }

  async update(
    where: Prisma.EventWhereUniqueInput,
    data: Prisma.EventUpdateInput,
    organizerId: string,
    role: Role,
  ) {
    const event = await this.dbService.event.findUnique({
      where,
      include: {
        organizer: true,
      },
    });
    if (!event) {
      throw new NotFoundException('Event not found');
    }
    if (role !== 'ADMIN' && organizerId !== event.organizerId) {
      throw new ForbiddenException('You are not authorized to update this event');
    }

    const updatedEvent = await this.dbService.event.update({
      where,
      data,
      include: {
        organizer: true,
      },
    });

    this.kafkaClient.emit(KAFKA_TOPIC.EVENT_UPDATED, {
      eventId: updatedEvent.id,
      updatedData: updatedEvent,
      timeStamp: updatedEvent.updatedAt,
    });
    return updatedEvent;
  }

  async publish(where: Prisma.EventWhereUniqueInput, organizerId: string, role: Role) {
    const event = await this.findOne(where);

    if (role !== 'ADMIN' && organizerId !== event.organizerId) {
      throw new ForbiddenException('You are not authorized to publish this event');
    }

    const updatedEvent = await this.dbService.event.update({
      where,
      data: {
        status: 'PUBLISHED',
      },
    });
    return updatedEvent;
  }

  async cancel(where: Prisma.EventWhereUniqueInput, organizerId: string, role: Role) {
    const event = await this.findOne(where);

    if (role !== 'ADMIN' && organizerId !== event.organizerId) {
      throw new ForbiddenException('You are not authorized to cancel this event');
    }

    const updatedEvent = await this.dbService.event.update({
      where,
      data: {
        status: 'CANCELLED',
      },
      include: {
        organizer: true,
      },
    });

    this.kafkaClient.emit(KAFKA_TOPIC.EVENT_CANCELLED, {
      eventId: updatedEvent.id,
      organizerId: updatedEvent.organizerId,
      timeStamp: updatedEvent.updatedAt,
    });
    return updatedEvent;
  }

  async findMyEvents({ id }: Prisma.UserWhereUniqueInput) {
    const events = await this.findAll({ organizerId: id });

    if (events.length === 0) {
      throw new NotFoundException('Events not found');
    }
    return events;
  }
}
