import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventStatusSchema } from '../enums/EventStatus.schema';
import { UserCreateNestedOneWithoutEventsInputObjectSchema as UserCreateNestedOneWithoutEventsInputObjectSchema } from './UserCreateNestedOneWithoutEventsInput.schema';
import { TicketCreateNestedManyWithoutEventInputObjectSchema as TicketCreateNestedManyWithoutEventInputObjectSchema } from './TicketCreateNestedManyWithoutEventInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z.uuid().optional(),
      title: z.string().max(191),
      description: z.string().optional().nullable(),
      date: z.coerce.date(),
      location: z.string().max(255),
      capacity: z.number().int().optional(),
      price: z.number().int().optional(),
      status: EventStatusSchema.optional(),
      createdAt: z.coerce.date().optional(),
      organizer: z.lazy(() => UserCreateNestedOneWithoutEventsInputObjectSchema),
      tickets: z.lazy(() => TicketCreateNestedManyWithoutEventInputObjectSchema).optional(),
    })
    .strict();
export const EventCreateInputObjectSchema: z.ZodType<Prisma.EventCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.EventCreateInput>;
export const EventCreateInputObjectZodSchema = makeSchema();
