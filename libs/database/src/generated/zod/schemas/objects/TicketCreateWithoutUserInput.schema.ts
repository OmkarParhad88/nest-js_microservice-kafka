import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { EventCreateNestedOneWithoutTicketsInputObjectSchema as EventCreateNestedOneWithoutTicketsInputObjectSchema } from './EventCreateNestedOneWithoutTicketsInput.schema'

const makeSchema = () => z.object({
  id: z.uuid().optional(),
  status: TicketStatusSchema.optional(),
  quantity: z.number().int().optional(),
  totalPrice: z.number().int().optional(),
  ticketCode: z.string().max(20),
  purchasedAt: z.coerce.date().optional(),
  checkedInAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  event: z.lazy(() => EventCreateNestedOneWithoutTicketsInputObjectSchema)
}).strict();
export const TicketCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.TicketCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketCreateWithoutUserInput>;
export const TicketCreateWithoutUserInputObjectZodSchema = makeSchema();
