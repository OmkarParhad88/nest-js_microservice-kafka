import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventStatusSchema } from '../enums/EventStatus.schema';
import { NestedEnumEventStatusWithAggregatesFilterObjectSchema as NestedEnumEventStatusWithAggregatesFilterObjectSchema } from './NestedEnumEventStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumEventStatusFilterObjectSchema as NestedEnumEventStatusFilterObjectSchema } from './NestedEnumEventStatusFilter.schema';

const makeSchema = () =>
  z
    .object({
      equals: EventStatusSchema.optional(),
      in: EventStatusSchema.array().optional(),
      notIn: EventStatusSchema.array().optional(),
      not: z
        .union([
          EventStatusSchema,
          z.lazy(() => NestedEnumEventStatusWithAggregatesFilterObjectSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
      _min: z.lazy(() => NestedEnumEventStatusFilterObjectSchema).optional(),
      _max: z.lazy(() => NestedEnumEventStatusFilterObjectSchema).optional(),
    })
    .strict();
export const EnumEventStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumEventStatusWithAggregatesFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.EnumEventStatusWithAggregatesFilter>;
export const EnumEventStatusWithAggregatesFilterObjectZodSchema = makeSchema();
