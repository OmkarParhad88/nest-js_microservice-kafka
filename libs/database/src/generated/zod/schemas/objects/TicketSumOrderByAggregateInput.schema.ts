import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  quantity: SortOrderSchema.optional(),
  totalPrice: SortOrderSchema.optional()
}).strict();
export const TicketSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketSumOrderByAggregateInput>;
export const TicketSumOrderByAggregateInputObjectZodSchema = makeSchema();
