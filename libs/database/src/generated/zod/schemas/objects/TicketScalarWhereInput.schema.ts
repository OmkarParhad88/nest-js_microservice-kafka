import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { EnumTicketStatusFilterObjectSchema as EnumTicketStatusFilterObjectSchema } from './EnumTicketStatusFilter.schema';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const ticketscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TicketScalarWhereInputObjectSchema), z.lazy(() => TicketScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TicketScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TicketScalarWhereInputObjectSchema), z.lazy(() => TicketScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  eventId: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => UuidFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumTicketStatusFilterObjectSchema), TicketStatusSchema]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  totalPrice: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  ticketCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  purchasedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  checkedInAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TicketScalarWhereInputObjectSchema: z.ZodType<Prisma.TicketScalarWhereInput> = ticketscalarwhereinputSchema as unknown as z.ZodType<Prisma.TicketScalarWhereInput>;
export const TicketScalarWhereInputObjectZodSchema = ticketscalarwhereinputSchema;
