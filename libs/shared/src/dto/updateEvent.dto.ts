import { createZodDto } from 'nestjs-zod';
import { EventUpdateInputObjectZodSchema } from '@app/database';

export const UpdateEventSchema = EventUpdateInputObjectZodSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export class UpdateEventDto extends createZodDto(UpdateEventSchema) {}
