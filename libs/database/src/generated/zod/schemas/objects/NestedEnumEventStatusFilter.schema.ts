import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventStatusSchema } from '../enums/EventStatus.schema';

const nestedenumeventstatusfilterSchema = z
  .object({
    equals: EventStatusSchema.optional(),
    in: EventStatusSchema.array().optional(),
    notIn: EventStatusSchema.array().optional(),
    not: z
      .union([EventStatusSchema, z.lazy(() => NestedEnumEventStatusFilterObjectSchema)])
      .optional(),
  })
  .strict();
export const NestedEnumEventStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumEventStatusFilter> =
  nestedenumeventstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumEventStatusFilter>;
export const NestedEnumEventStatusFilterObjectZodSchema = nestedenumeventstatusfilterSchema;
