import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UuidFilterObjectSchema as UuidFilterObjectSchema } from './UuidFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumEventStatusFilterObjectSchema as EnumEventStatusFilterObjectSchema } from './EnumEventStatusFilter.schema';
import { EventStatusSchema } from '../enums/EventStatus.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { TicketListRelationFilterObjectSchema as TicketListRelationFilterObjectSchema } from './TicketListRelationFilter.schema'

const eventwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => EventWhereInputObjectSchema), z.lazy(() => EventWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EventWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EventWhereInputObjectSchema), z.lazy(() => EventWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => UuidFilterObjectSchema), z.uuid()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(191)]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  location: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  capacity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  price: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => EnumEventStatusFilterObjectSchema), EventStatusSchema]).optional(),
  organizerId: z.union([z.lazy(() => UuidFilterObjectSchema), z.uuid()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  organizer: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  tickets: z.lazy(() => TicketListRelationFilterObjectSchema).optional()
}).strict();
export const EventWhereInputObjectSchema: z.ZodType<Prisma.EventWhereInput> = eventwhereinputSchema as unknown as z.ZodType<Prisma.EventWhereInput>;
export const EventWhereInputObjectZodSchema = eventwhereinputSchema;
