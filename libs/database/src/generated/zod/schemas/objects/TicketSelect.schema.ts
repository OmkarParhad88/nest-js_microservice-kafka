import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventArgsObjectSchema as EventArgsObjectSchema } from './EventArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';

const makeSchema = () =>
  z
    .object({
      id: z.boolean().optional(),
      eventId: z.boolean().optional(),
      event: z.union([z.boolean(), z.lazy(() => EventArgsObjectSchema)]).optional(),
      userId: z.boolean().optional(),
      user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
      status: z.boolean().optional(),
      quantity: z.boolean().optional(),
      totalPrice: z.boolean().optional(),
      ticketCode: z.boolean().optional(),
      purchasedAt: z.boolean().optional(),
      checkedInAt: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
    })
    .strict();
export const TicketSelectObjectSchema: z.ZodType<Prisma.TicketSelect> =
  makeSchema() as unknown as z.ZodType<Prisma.TicketSelect>;
export const TicketSelectObjectZodSchema = makeSchema();
