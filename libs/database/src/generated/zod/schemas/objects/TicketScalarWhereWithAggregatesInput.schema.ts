import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { EnumTicketStatusWithAggregatesFilterObjectSchema as EnumTicketStatusWithAggregatesFilterObjectSchema } from './EnumTicketStatusWithAggregatesFilter.schema';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';

const ticketscalarwherewithaggregatesinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => TicketScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => TicketScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TicketScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TicketScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => TicketScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.uuid()]).optional(),
    eventId: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.uuid()]).optional(),
    userId: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.uuid()]).optional(),
    status: z
      .union([z.lazy(() => EnumTicketStatusWithAggregatesFilterObjectSchema), TicketStatusSchema])
      .optional(),
    quantity: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()])
      .optional(),
    totalPrice: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()])
      .optional(),
    ticketCode: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(20)])
      .optional(),
    purchasedAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional(),
    checkedInAt: z
      .union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();
export const TicketScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TicketScalarWhereWithAggregatesInput> =
  ticketscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TicketScalarWhereWithAggregatesInput>;
export const TicketScalarWhereWithAggregatesInputObjectZodSchema =
  ticketscalarwherewithaggregatesinputSchema;
