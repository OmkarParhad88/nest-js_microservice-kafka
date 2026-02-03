import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCountOutputTypeCountEventsArgsObjectSchema as UserCountOutputTypeCountEventsArgsObjectSchema } from './UserCountOutputTypeCountEventsArgs.schema';

const makeSchema = () =>
  z
    .object({
      events: z
        .union([z.boolean(), z.lazy(() => UserCountOutputTypeCountEventsArgsObjectSchema)])
        .optional(),
    })
    .strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> =
  makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
