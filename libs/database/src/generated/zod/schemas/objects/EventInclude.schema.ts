import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { TicketFindManySchema as TicketFindManySchema } from '../findManyTicket.schema';
import { EventCountOutputTypeArgsObjectSchema as EventCountOutputTypeArgsObjectSchema } from './EventCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  organizer: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  tickets: z.union([z.boolean(), z.lazy(() => TicketFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EventCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EventIncludeObjectSchema: z.ZodType<Prisma.EventInclude> = makeSchema() as unknown as z.ZodType<Prisma.EventInclude>;
export const EventIncludeObjectZodSchema = makeSchema();
