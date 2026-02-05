import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TicketSelectObjectSchema as TicketSelectObjectSchema } from './objects/TicketSelect.schema';
import { TicketCreateManyInputObjectSchema as TicketCreateManyInputObjectSchema } from './objects/TicketCreateManyInput.schema';

export const TicketCreateManyAndReturnSchema: z.ZodType<Prisma.TicketCreateManyAndReturnArgs> = z.object({ select: TicketSelectObjectSchema.optional(), data: z.union([ TicketCreateManyInputObjectSchema, z.array(TicketCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TicketCreateManyAndReturnArgs>;

export const TicketCreateManyAndReturnZodSchema = z.object({ select: TicketSelectObjectSchema.optional(), data: z.union([ TicketCreateManyInputObjectSchema, z.array(TicketCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();