import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { TicketServiceService } from './ticket-service.service';
import { CheckInTicketDto, EventUuidDto, PurchaseTicketDto, UuidDto } from '@app/shared';

@Controller()
export class TicketServiceController {
  constructor(private readonly ticketServiceService: TicketServiceService) {}

  @Post('purchase')
  async purchaseTicket(
    @Body() purchaseTicketDto: PurchaseTicketDto,
    @Headers('x-user-id') userId: string,
  ) {
    return this.ticketServiceService.purchaseTicket(purchaseTicketDto, userId);
  }

  @Get('my-tickets')
  async findMyTickets(@Headers('x-user-id') userId: string) {
    return this.ticketServiceService.findMyTicket(userId);
  }

  @Get(':id')
  async findOne(@Param() { id }: UuidDto, @Headers('x-user-id') userId: string) {
    return this.ticketServiceService.findOne({ id }, userId);
  }

  @Post(':id/cancel')
  async cancelTicket(@Param() { id }: UuidDto, @Headers('x-user-id') userId: string) {
    return this.ticketServiceService.cancelTicket({ id }, userId);
  }

  @Post('check-in')
  async checkInTicket(
    @Body() checkInTicketDto: CheckInTicketDto,
    @Headers('x-user-id') userId: string,
  ) {
    return this.ticketServiceService.checkInTicket(checkInTicketDto, userId);
  }

  @Get('event/:eventId')
  async findEventTicket(@Param() { eventId }: EventUuidDto, @Headers('x-user-id') userId: string) {
    return this.ticketServiceService.findEventTicket({ eventId }, userId);
  }
}
