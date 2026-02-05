import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCountOutputTypeCountEventsArgsObjectSchema as UserCountOutputTypeCountEventsArgsObjectSchema } from './UserCountOutputTypeCountEventsArgs.schema';
import { UserCountOutputTypeCountTicketsArgsObjectSchema as UserCountOutputTypeCountTicketsArgsObjectSchema } from './UserCountOutputTypeCountTicketsArgs.schema'

const makeSchema = () => z.object({
  events: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountEventsArgsObjectSchema)]).optional(),
  tickets: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountTicketsArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
