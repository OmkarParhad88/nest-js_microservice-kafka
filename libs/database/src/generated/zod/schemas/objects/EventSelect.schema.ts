import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { TicketFindManySchema as TicketFindManySchema } from '../findManyTicket.schema';
import { EventCountOutputTypeArgsObjectSchema as EventCountOutputTypeArgsObjectSchema } from './EventCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  date: z.boolean().optional(),
  location: z.boolean().optional(),
  capacity: z.boolean().optional(),
  price: z.boolean().optional(),
  status: z.boolean().optional(),
  organizerId: z.boolean().optional(),
  organizer: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  tickets: z.union([z.boolean(), z.lazy(() => TicketFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => EventCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EventSelectObjectSchema: z.ZodType<Prisma.EventSelect> = makeSchema() as unknown as z.ZodType<Prisma.EventSelect>;
export const EventSelectObjectZodSchema = makeSchema();
