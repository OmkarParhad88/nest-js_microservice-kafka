import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EventOrderByWithRelationInputObjectSchema as EventOrderByWithRelationInputObjectSchema } from './EventOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: z.uuid().optional(),
  eventId: z.uuid().optional(),
  userId: z.uuid().optional(),
  status: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  totalPrice: SortOrderSchema.optional(),
  ticketCode: SortOrderSchema.optional(),
  purchasedAt: SortOrderSchema.optional(),
  checkedInAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  event: z.lazy(() => EventOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const TicketOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TicketOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketOrderByWithRelationInput>;
export const TicketOrderByWithRelationInputObjectZodSchema = makeSchema();
