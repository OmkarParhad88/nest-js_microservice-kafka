import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.literal(true).optional(),
      eventId: z.literal(true).optional(),
      userId: z.literal(true).optional(),
      status: z.literal(true).optional(),
      quantity: z.literal(true).optional(),
      totalPrice: z.literal(true).optional(),
      ticketCode: z.literal(true).optional(),
      purchasedAt: z.literal(true).optional(),
      checkedInAt: z.literal(true).optional(),
      createdAt: z.literal(true).optional(),
      updatedAt: z.literal(true).optional(),
    })
    .strict();
export const TicketMaxAggregateInputObjectSchema: z.ZodType<Prisma.TicketMaxAggregateInputType> =
  makeSchema() as unknown as z.ZodType<Prisma.TicketMaxAggregateInputType>;
export const TicketMaxAggregateInputObjectZodSchema = makeSchema();
