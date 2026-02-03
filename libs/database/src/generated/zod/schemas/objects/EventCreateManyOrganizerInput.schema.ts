import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventStatusSchema } from '../enums/EventStatus.schema';

const makeSchema = () =>
  z
    .object({
      id: z.uuid().optional(),
      title: z.string().max(191),
      description: z.string().optional().nullable(),
      date: z.coerce.date(),
      location: z.string().max(255),
      capacity: z.number().int().optional(),
      price: z.number().int().optional(),
      status: EventStatusSchema.optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();
export const EventCreateManyOrganizerInputObjectSchema: z.ZodType<Prisma.EventCreateManyOrganizerInput> =
  makeSchema() as unknown as z.ZodType<Prisma.EventCreateManyOrganizerInput>;
export const EventCreateManyOrganizerInputObjectZodSchema = makeSchema();
