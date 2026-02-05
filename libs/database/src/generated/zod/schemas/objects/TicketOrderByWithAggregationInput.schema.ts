import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TicketCountOrderByAggregateInputObjectSchema as TicketCountOrderByAggregateInputObjectSchema } from './TicketCountOrderByAggregateInput.schema';
import { TicketAvgOrderByAggregateInputObjectSchema as TicketAvgOrderByAggregateInputObjectSchema } from './TicketAvgOrderByAggregateInput.schema';
import { TicketMaxOrderByAggregateInputObjectSchema as TicketMaxOrderByAggregateInputObjectSchema } from './TicketMaxOrderByAggregateInput.schema';
import { TicketMinOrderByAggregateInputObjectSchema as TicketMinOrderByAggregateInputObjectSchema } from './TicketMinOrderByAggregateInput.schema';
import { TicketSumOrderByAggregateInputObjectSchema as TicketSumOrderByAggregateInputObjectSchema } from './TicketSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: z.uuid().optional(),
  eventId: z.uuid().optional(),
  userId: z.uuid().optional(),
  status: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  totalPrice: SortOrderSchema.optional(),
  ticketCode: SortOrderSchema.optional(),
  purchasedAt: SortOrderSchema.optional(),
  checkedInAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => TicketCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TicketAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TicketMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TicketMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TicketSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TicketOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TicketOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketOrderByWithAggregationInput>;
export const TicketOrderByWithAggregationInputObjectZodSchema = makeSchema();
