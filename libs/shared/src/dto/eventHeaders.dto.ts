import { createZodDto } from 'nestjs-zod';
import { RoleSchema } from '@app/database/generated/zod/schemas/enums/Role.schema';
import z from 'zod';

export const EventHeadersSchema = z
  .object({
    'x-organizer-id': z.uuid({ error: 'x-organizer-id is required in headers' }),
    'x-role': RoleSchema.describe('x-role is required in headers'),
  })
  .strict();

export class EventHeadersDto extends createZodDto(EventHeadersSchema) { }
