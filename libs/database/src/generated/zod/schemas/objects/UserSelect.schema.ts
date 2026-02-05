import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventFindManySchema as EventFindManySchema } from '../findManyEvent.schema';
import { TicketFindManySchema as TicketFindManySchema } from '../findManyTicket.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  password: z.boolean().optional(),
  role: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  events: z.union([z.boolean(), z.lazy(() => EventFindManySchema)]).optional(),
  tickets: z.union([z.boolean(), z.lazy(() => TicketFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
