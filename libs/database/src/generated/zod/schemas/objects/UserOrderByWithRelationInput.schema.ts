import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EventOrderByRelationAggregateInputObjectSchema as EventOrderByRelationAggregateInputObjectSchema } from './EventOrderByRelationAggregateInput.schema';
import { TicketOrderByRelationAggregateInputObjectSchema as TicketOrderByRelationAggregateInputObjectSchema } from './TicketOrderByRelationAggregateInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z.uuid().optional(),
      email: z.email().optional(),
      name: SortOrderSchema.optional(),
      password: SortOrderSchema.optional(),
      role: SortOrderSchema.optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      events: z.lazy(() => EventOrderByRelationAggregateInputObjectSchema).optional(),
      tickets: z.lazy(() => TicketOrderByRelationAggregateInputObjectSchema).optional(),
    })
    .strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
