import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './TicketWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountTicketsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountTicketsArgsObjectZodSchema = makeSchema();
