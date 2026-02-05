import { Body, Controller, Get, Headers, Param, Post, Put, Query } from '@nestjs/common';
import { EventServiceService } from './event-service.service';
import {
  CreateEventDto,
  EventHeadersDto,
  EventQueryDto,
  UpdateEventDto,
  UniqueEventIdDto,
} from '@app/shared';

@Controller()
export class EventServiceController {
  constructor(private readonly eventService: EventServiceService) {}

  @Post()
  async create(
    @Body() event: CreateEventDto,
    @Headers() { 'x-organizer-id': organizerId }: EventHeadersDto,
  ) {
    return await this.eventService.create(event, organizerId);
  }

  @Get()
  async findAll(@Query() query: EventQueryDto) {
    return await this.eventService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param() { id }: UniqueEventIdDto) {
    return await this.eventService.findOne({ id });
  }

  @Put(':id')
  async update(
    @Param() { id }: UniqueEventIdDto,
    @Body() event: UpdateEventDto,
    @Headers() { 'x-organizer-id': organizerId, 'x-role': role }: EventHeadersDto,
  ) {
    return await this.eventService.update({ id }, event, organizerId, role);
  }

  @Post(':id/publish')
  async publish(
    @Param() { id }: UniqueEventIdDto,
    @Headers() { 'x-organizer-id': organizerId, 'x-role': role }: EventHeadersDto,
  ) {
    return await this.eventService.publish({ id }, organizerId, role);
  }

  @Post(':id/cancel')
  async cancel(
    @Param() { id }: UniqueEventIdDto,
    @Headers() { 'x-organizer-id': organizerId, 'x-role': role }: any,
  ) {
    return await this.eventService.cancel({ id }, organizerId, role);
  }

  @Get('my-events/:id')
  async findMyEvent(@Param() { id }: { id: string }) {
    return await this.eventService.findMyEvents({ id });
  }
}
