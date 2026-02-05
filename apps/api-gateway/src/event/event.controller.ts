import {
  Body,
  Controller,
  Get,
  Headers,
  HttpException,
  Logger,
  Param,
  Post,
  Put,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto, EventHeadersDto, EventQueryDto, UpdateEventDto } from '@app/shared';
import { AuthGuard } from '@nestjs/passport';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() createEventDto: CreateEventDto,
    @Request() req: { user: { userId: string; role: string } },
  ) {
    try {
      return await this.eventService.create(createEventDto, req.user.userId);
    } catch (error) {
      this.handleError(error);
    }
  }

  @Get()
  async findAll(@Query() query: EventQueryDto) {
    try {
      return await this.eventService.findAll(query);
    } catch (error) {
      this.handleError(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.eventService.findOne(id);
    } catch (error) {
      this.handleError(error);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
    @Request() req: { user: { userId: string; role: string } },
  ) {
    try {
      const organizerId = req.user.userId;
      const role = req.user.role;
      Logger.log(organizerId);
      Logger.log(role);
      return await this.eventService.update(id, updateEventDto, organizerId, role);
    } catch (error) {
      this.handleError(error);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Post(':id/publish')
  async publish(
    @Request() req: { user: { userId: string; role: string } },
    @Param('id') id: string,
  ) {
    try {
      const organizerId = req.user.userId;
      const role = req.user.role;
      return await this.eventService.publish(id, organizerId, role);
    } catch (error) {
      this.handleError(error);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Post(':id/cancel')
  async cancel(
    @Param('id') id: string,
    @Request() req: { user: { userId: string; role: string } },
  ) {
    try {
      const organizerId = req.user.userId;
      const role = req.user.role;
      Logger.log(organizerId);
      Logger.log(role);
      return await this.eventService.cancel(id, organizerId, role);
    } catch (error) {
      this.handleError(error);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('my-events')
  async findMyEvents(@Request() req: { user: { userId: string } }) {
    try {
      Logger.log(req.user.userId);
      return await this.eventService.findMyEvents(req.user.userId);
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any) {
    throw new HttpException(
      error.response?.data || 'Error communicating with event service',
      error.response?.status || 500,
    );
  }
}
