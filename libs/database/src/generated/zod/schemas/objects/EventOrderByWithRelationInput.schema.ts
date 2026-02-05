import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { TicketOrderByRelationAggregateInputObjectSchema as TicketOrderByRelationAggregateInputObjectSchema } from './TicketOrderByRelationAggregateInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z.uuid().optional(),
      title: SortOrderSchema.optional(),
      description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
      date: SortOrderSchema.optional(),
      location: SortOrderSchema.optional(),
      capacity: SortOrderSchema.optional(),
      price: SortOrderSchema.optional(),
      status: SortOrderSchema.optional(),
      organizerId: z.uuid().optional(),
      createdAt: SortOrderSchema.optional(),
      updatedAt: SortOrderSchema.optional(),
      organizer: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
      tickets: z.lazy(() => TicketOrderByRelationAggregateInputObjectSchema).optional(),
    })
    .strict();
export const EventOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.EventOrderByWithRelationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.EventOrderByWithRelationInput>;
export const EventOrderByWithRelationInputObjectZodSchema = makeSchema();
