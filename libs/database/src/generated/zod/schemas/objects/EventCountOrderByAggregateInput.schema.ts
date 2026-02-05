import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: z.uuid().optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  location: SortOrderSchema.optional(),
  capacity: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  organizerId: z.uuid().optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const EventCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EventCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCountOrderByAggregateInput>;
export const EventCountOrderByAggregateInputObjectZodSchema = makeSchema();
