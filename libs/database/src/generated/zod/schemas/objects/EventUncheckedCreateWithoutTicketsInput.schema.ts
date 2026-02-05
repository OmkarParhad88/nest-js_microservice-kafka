import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventStatusSchema } from '../enums/EventStatus.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      title: z.string(),
      description: z.string().optional().nullable(),
      date: z.coerce.date(),
      location: z.string(),
      capacity: z.number().int().optional(),
      price: z.number().int().optional(),
      status: EventStatusSchema.optional(),
      organizerId: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();
export const EventUncheckedCreateWithoutTicketsInputObjectSchema: z.ZodType<Prisma.EventUncheckedCreateWithoutTicketsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedCreateWithoutTicketsInput>;
export const EventUncheckedCreateWithoutTicketsInputObjectZodSchema = makeSchema();
