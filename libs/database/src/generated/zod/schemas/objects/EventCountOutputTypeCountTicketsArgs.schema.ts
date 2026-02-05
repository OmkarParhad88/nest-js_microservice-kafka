import * as z from 'zod';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './TicketWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => TicketWhereInputObjectSchema).optional(),
    })
    .strict();
export const EventCountOutputTypeCountTicketsArgsObjectSchema = makeSchema();
export const EventCountOutputTypeCountTicketsArgsObjectZodSchema = makeSchema();
