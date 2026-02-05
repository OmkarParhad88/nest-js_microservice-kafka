import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';

const makeSchema = () =>
  z
    .object({
      quantity: z.literal(true).optional(),
      totalPrice: z.literal(true).optional(),
    })
    .strict();
export const TicketAvgAggregateInputObjectSchema: z.ZodType<Prisma.TicketAvgAggregateInputType> =
  makeSchema() as unknown as z.ZodType<Prisma.TicketAvgAggregateInputType>;
export const TicketAvgAggregateInputObjectZodSchema = makeSchema();
