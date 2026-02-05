import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventFindManySchema as EventFindManySchema } from '../findManyEvent.schema';
import { TicketFindManySchema as TicketFindManySchema } from '../findManyTicket.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

const makeSchema = () =>
  z
    .object({
      events: z.union([z.boolean(), z.lazy(() => EventFindManySchema)]).optional(),
      tickets: z.union([z.boolean(), z.lazy(() => TicketFindManySchema)]).optional(),
      _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> =
  makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
