import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { EnumTicketStatusFilterObjectSchema as EnumTicketStatusFilterObjectSchema } from './EnumTicketStatusFilter.schema';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { EventScalarRelationFilterObjectSchema as EventScalarRelationFilterObjectSchema } from './EventScalarRelationFilter.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';

const ticketwhereinputSchema = z
  .object({
    AND: z
      .union([
        z.lazy(() => TicketWhereInputObjectSchema),
        z.lazy(() => TicketWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TicketWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TicketWhereInputObjectSchema),
        z.lazy(() => TicketWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => UuidFilterObjectSchema), z.uuid()]).optional(),
    eventId: z.union([z.lazy(() => UuidFilterObjectSchema), z.uuid()]).optional(),
    userId: z.union([z.lazy(() => UuidFilterObjectSchema), z.uuid()]).optional(),
    status: z
      .union([z.lazy(() => EnumTicketStatusFilterObjectSchema), TicketStatusSchema])
      .optional(),
    quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
    totalPrice: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
    ticketCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(20)]).optional(),
    purchasedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    checkedInAt: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    event: z
      .union([
        z.lazy(() => EventScalarRelationFilterObjectSchema),
        z.lazy(() => EventWhereInputObjectSchema),
      ])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserScalarRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();
export const TicketWhereInputObjectSchema: z.ZodType<Prisma.TicketWhereInput> =
  ticketwhereinputSchema as unknown as z.ZodType<Prisma.TicketWhereInput>;
export const TicketWhereInputObjectZodSchema = ticketwhereinputSchema;
