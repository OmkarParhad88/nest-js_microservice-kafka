import { createZodDto } from 'nestjs-zod';
import { EventCreateInputObjectZodSchema } from '@app/database';

export const CreateEventSchema = EventCreateInputObjectZodSchema.omit({
  id: true,
  createdAt: true,
  organizer: true,
});

export class CreateEventDto extends createZodDto(CreateEventSchema) {}
