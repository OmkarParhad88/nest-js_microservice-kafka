import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './TicketWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TicketWhereInputObjectSchema).optional(),
  some: z.lazy(() => TicketWhereInputObjectSchema).optional(),
  none: z.lazy(() => TicketWhereInputObjectSchema).optional()
}).strict();
export const TicketListRelationFilterObjectSchema: z.ZodType<Prisma.TicketListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TicketListRelationFilter>;
export const TicketListRelationFilterObjectZodSchema = makeSchema();
