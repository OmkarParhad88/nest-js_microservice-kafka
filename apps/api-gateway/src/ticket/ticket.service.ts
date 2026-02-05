import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { CheckInTicketDto, PurchaseTicketDto, SERVICES_PORT } from '@app/shared';

@Injectable()
export class TicketService {
  private readonly ticketServiceUrl = `http://localhost:${SERVICES_PORT.TICKET_SERVICE}`;

  constructor(private readonly httpService: HttpService) {}

  async purchaseTicket(purchaseTicketDto: PurchaseTicketDto, userId: string) {
    const response = await firstValueFrom(
      this.httpService.post(`${this.ticketServiceUrl}/purchase`, purchaseTicketDto, {
        headers: { 'x-user-id': userId },
      }),
    );
    return response.data;
  }

  async findMyTickets(userId: string) {
    const response = await firstValueFrom(
      this.httpService.get(`${this.ticketServiceUrl}/my-tickets`, {
        headers: { 'x-user-id': userId },
      }),
    );
    return response.data;
  }

  async findOne(id: string, userId: string) {
    const response = await firstValueFrom(
      this.httpService.get(`${this.ticketServiceUrl}/${id}`, {
        headers: { 'x-user-id': userId },
      }),
    );
    return response.data;
  }

  async cancelTicket(id: string, userId: string) {
    const response = await firstValueFrom(
      this.httpService.post(
        `${this.ticketServiceUrl}/${id}/cancel`,
        {},
        {
          headers: { 'x-user-id': userId },
        },
      ),
    );
    return response.data;
  }

  async checkInTicket(checkInTicketDto: CheckInTicketDto, userId: string) {
    const response = await firstValueFrom(
      this.httpService.post(`${this.ticketServiceUrl}/check-in`, checkInTicketDto, {
        headers: { 'x-user-id': userId },
      }),
    );
    return response.data;
  }

  async findEventTicket(eventId: string, userId: string) {
    const response = await firstValueFrom(
      this.httpService.get(`${this.ticketServiceUrl}/event/${eventId}`, {
        headers: { 'x-user-id': userId },
      }),
    );
    return response.data;
  }
}
