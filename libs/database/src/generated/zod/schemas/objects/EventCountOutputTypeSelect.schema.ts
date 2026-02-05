import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventCountOutputTypeCountTicketsArgsObjectSchema as EventCountOutputTypeCountTicketsArgsObjectSchema } from './EventCountOutputTypeCountTicketsArgs.schema';

const makeSchema = () =>
  z
    .object({
      tickets: z
        .union([z.boolean(), z.lazy(() => EventCountOutputTypeCountTicketsArgsObjectSchema)])
        .optional(),
    })
    .strict();
export const EventCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.EventCountOutputTypeSelect> =
  makeSchema() as unknown as z.ZodType<Prisma.EventCountOutputTypeSelect>;
export const EventCountOutputTypeSelectObjectZodSchema = makeSchema();
