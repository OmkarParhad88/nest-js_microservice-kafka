import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';

const makeSchema = () =>
  z
    .object({
      id: z.uuid().optional(),
      eventId: z.uuid(),
      userId: z.uuid(),
      status: TicketStatusSchema.optional(),
      quantity: z.number().int().optional(),
      totalPrice: z.number().int().optional(),
      ticketCode: z.string().max(20),
      purchasedAt: z.coerce.date().optional(),
      checkedInAt: z.coerce.date().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();
export const TicketCreateManyInputObjectSchema: z.ZodType<Prisma.TicketCreateManyInput> =
  makeSchema() as unknown as z.ZodType<Prisma.TicketCreateManyInput>;
export const TicketCreateManyInputObjectZodSchema = makeSchema();
