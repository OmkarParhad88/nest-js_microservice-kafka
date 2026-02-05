import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './objects/TicketWhereInput.schema';

export const TicketDeleteManySchema: z.ZodType<Prisma.TicketDeleteManyArgs> = z.object({ where: TicketWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TicketDeleteManyArgs>;

export const TicketDeleteManyZodSchema = z.object({ where: TicketWhereInputObjectSchema.optional() }).strict();