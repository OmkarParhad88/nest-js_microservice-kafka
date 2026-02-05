import { Body, Controller, Get, HttpException, Param, Post, Req, UseGuards } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CheckInTicketDto, PurchaseTicketDto } from '@app/shared';
import { AuthGuard } from '@nestjs/passport';

@Controller('ticket')
@UseGuards(AuthGuard('jwt'))
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post('purchase')
  async purchaseTicket(
    @Body() purchaseTicketDto: PurchaseTicketDto,
    @Req() req: { user: { userId: string } },
  ) {
    try {
      return await this.ticketService.purchaseTicket(purchaseTicketDto, req.user.userId);
    } catch (error) {
      this.handleError(error);
    }
  }

  @Get('my-tickets')
  async findMyTickets(@Req() req: { user: { userId: string } }) {
    try {
      return await this.ticketService.findMyTickets(req.user.userId);
    } catch (error) {
      this.handleError(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Req() req: { user: { userId: string } }) {
    try {
      return await this.ticketService.findOne(id, req.user.userId);
    } catch (error) {
      this.handleError(error);
    }
  }

  @Post(':id/cancel')
  async cancelTicket(@Param('id') id: string, @Req() req: { user: { userId: string } }) {
    try {
      return await this.ticketService.cancelTicket(id, req.user.userId);
    } catch (error) {
      this.handleError(error);
    }
  }

  @Post('check-in')
  async checkInTicket(
    @Body() checkInTicketDto: CheckInTicketDto,
    @Req() req: { user: { userId: string } },
  ) {
    try {
      return await this.ticketService.checkInTicket(checkInTicketDto, req.user.userId);
    } catch (error) {
      this.handleError(error);
    }
  }

  @Get('event/:eventId')
  async findEventTicket(
    @Param('eventId') eventId: string,
    @Req() req: { user: { userId: string } },
  ) {
    try {
      return await this.ticketService.findEventTicket(eventId, req.user.userId);
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any) {
    throw new HttpException(
      error.response?.data || 'Error communicating with ticket service',
      error.response?.status || 500,
    );
  }
}
