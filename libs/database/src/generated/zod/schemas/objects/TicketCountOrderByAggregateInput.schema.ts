import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: z.uuid().optional(),
  eventId: z.uuid().optional(),
  userId: z.uuid().optional(),
  status: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  totalPrice: SortOrderSchema.optional(),
  ticketCode: SortOrderSchema.optional(),
  purchasedAt: SortOrderSchema.optional(),
  checkedInAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const TicketCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TicketCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCountOrderByAggregateInput>;
export const TicketCountOrderByAggregateInputObjectZodSchema = makeSchema();
