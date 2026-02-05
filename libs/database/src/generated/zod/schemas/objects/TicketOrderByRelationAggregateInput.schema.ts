import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TicketOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TicketOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketOrderByRelationAggregateInput>;
export const TicketOrderByRelationAggregateInputObjectZodSchema = makeSchema();
