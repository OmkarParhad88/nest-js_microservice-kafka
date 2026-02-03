import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumEventStatusWithAggregatesFilterObjectSchema as EnumEventStatusWithAggregatesFilterObjectSchema } from './EnumEventStatusWithAggregatesFilter.schema';
import { EventStatusSchema } from '../enums/EventStatus.schema';

const eventscalarwherewithaggregatesinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EventScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => EventScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.uuid()]).optional(),
    title: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(191)])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    date: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional(),
    location: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)])
      .optional(),
    capacity: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()])
      .optional(),
    price: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()])
      .optional(),
    status: z
      .union([z.lazy(() => EnumEventStatusWithAggregatesFilterObjectSchema), EventStatusSchema])
      .optional(),
    organizerId: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.uuid()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();
export const EventScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.EventScalarWhereWithAggregatesInput> =
  eventscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.EventScalarWhereWithAggregatesInput>;
export const EventScalarWhereWithAggregatesInputObjectZodSchema =
  eventscalarwherewithaggregatesinputSchema;
