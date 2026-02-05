import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';

const makeSchema = () =>
  z
    .object({
      quantity: z.literal(true).optional(),
      totalPrice: z.literal(true).optional(),
    })
    .strict();
export const TicketSumAggregateInputObjectSchema: z.ZodType<Prisma.TicketSumAggregateInputType> =
  makeSchema() as unknown as z.ZodType<Prisma.TicketSumAggregateInputType>;
export const TicketSumAggregateInputObjectZodSchema = makeSchema();
