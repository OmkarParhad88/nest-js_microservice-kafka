import { createZodDto } from 'nestjs-zod';
import { TicketInputSchema } from '@app/database';

export const UuidDtoSchema = TicketInputSchema.pick({
  id: true,
});

export class UuidDto extends createZodDto(UuidDtoSchema) { }

export const EventUuidDtoSchema = TicketInputSchema.pick({
  eventId: true,
});

export class EventUuidDto extends createZodDto(EventUuidDtoSchema) { }


