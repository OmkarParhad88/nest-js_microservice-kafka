import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventStatusSchema } from '../enums/EventStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumEventStatusFilterObjectSchema as NestedEnumEventStatusFilterObjectSchema } from './NestedEnumEventStatusFilter.schema'

const nestedenumeventstatuswithaggregatesfilterSchema = z.object({
  equals: EventStatusSchema.optional(),
  in: EventStatusSchema.array().optional(),
  notIn: EventStatusSchema.array().optional(),
  not: z.union([EventStatusSchema, z.lazy(() => NestedEnumEventStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumEventStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumEventStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumEventStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumEventStatusWithAggregatesFilter> = nestedenumeventstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumEventStatusWithAggregatesFilter>;
export const NestedEnumEventStatusWithAggregatesFilterObjectZodSchema = nestedenumeventstatuswithaggregatesfilterSchema;
