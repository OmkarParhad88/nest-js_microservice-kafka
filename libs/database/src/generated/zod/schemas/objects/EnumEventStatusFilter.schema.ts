import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventStatusSchema } from '../enums/EventStatus.schema';
import { NestedEnumEventStatusFilterObjectSchema as NestedEnumEventStatusFilterObjectSchema } from './NestedEnumEventStatusFilter.schema'

const makeSchema = () => z.object({
  equals: EventStatusSchema.optional(),
  in: EventStatusSchema.array().optional(),
  notIn: EventStatusSchema.array().optional(),
  not: z.union([EventStatusSchema, z.lazy(() => NestedEnumEventStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumEventStatusFilterObjectSchema: z.ZodType<Prisma.EnumEventStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumEventStatusFilter>;
export const EnumEventStatusFilterObjectZodSchema = makeSchema();
