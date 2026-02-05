import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { CreateEventDto, EventQueryDto, SERVICES_PORT, UpdateEventDto } from '@app/shared';

@Injectable()
export class EventService {
  private readonly eventServiceUrl = `http://localhost:${SERVICES_PORT.EVENT_SERVICE}`;

  constructor(private readonly httpService: HttpService) {}

  async create(createEventDto: CreateEventDto, organizerId: string) {
    const response = await firstValueFrom(
      this.httpService.post(this.eventServiceUrl, createEventDto, {
        headers: {
          'x-organizer-id': organizerId,
        },
      }),
    );
    return response.data;
  }

  async findAll(query: EventQueryDto) {
    const response = await firstValueFrom(
      this.httpService.get(this.eventServiceUrl, { params: query }),
    );
    return response.data;
  }

  async findOne(id: string) {
    const response = await firstValueFrom(this.httpService.get(`${this.eventServiceUrl}/${id}`));
    return response.data;
  }

  async update(id: string, updateEventDto: UpdateEventDto, organizerId: string, role: string) {
    const response = await firstValueFrom(
      this.httpService.put(`${this.eventServiceUrl}/${id}`, updateEventDto, {
        headers: {
          'x-organizer-id': organizerId,
          'x-role': role,
        },
      }),
    );
    return response.data;
  }

  async publish(id: string, organizerId: string, role: string) {
    const response = await firstValueFrom(
      this.httpService.post(
        `${this.eventServiceUrl}/${id}/publish`,
        {},
        {
          headers: {
            'x-organizer-id': organizerId,
            'x-role': role,
          },
        },
      ),
    );
    return response.data;
  }

  async cancel(id: string, organizerId: string, role: string) {
    const response = await firstValueFrom(
      this.httpService.post(
        `${this.eventServiceUrl}/${id}/cancel`,
        {},
        {
          headers: {
            'x-organizer-id': organizerId,
            'x-role': role,
          },
        },
      ),
    );
    return response.data;
  }

  async findMyEvents(id: string) {
    console.log(id);
    const response = await firstValueFrom(
      this.httpService.get(`${this.eventServiceUrl}/my-events/${id}`),
    );
    return response.data;
  }
}
