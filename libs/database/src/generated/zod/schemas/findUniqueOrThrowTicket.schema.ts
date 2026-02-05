import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TicketSelectObjectSchema as TicketSelectObjectSchema } from './objects/TicketSelect.schema';
import { TicketIncludeObjectSchema as TicketIncludeObjectSchema } from './objects/TicketInclude.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './objects/TicketWhereUniqueInput.schema';

export const TicketFindUniqueOrThrowSchema: z.ZodType<Prisma.TicketFindUniqueOrThrowArgs> = z.object({ select: TicketSelectObjectSchema.optional(), include: TicketIncludeObjectSchema.optional(), where: TicketWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TicketFindUniqueOrThrowArgs>;

export const TicketFindUniqueOrThrowZodSchema = z.object({ select: TicketSelectObjectSchema.optional(), include: TicketIncludeObjectSchema.optional(), where: TicketWhereUniqueInputObjectSchema }).strict();