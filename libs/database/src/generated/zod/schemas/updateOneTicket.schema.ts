import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TicketSelectObjectSchema as TicketSelectObjectSchema } from './objects/TicketSelect.schema';
import { TicketIncludeObjectSchema as TicketIncludeObjectSchema } from './objects/TicketInclude.schema';
import { TicketUpdateInputObjectSchema as TicketUpdateInputObjectSchema } from './objects/TicketUpdateInput.schema';
import { TicketUncheckedUpdateInputObjectSchema as TicketUncheckedUpdateInputObjectSchema } from './objects/TicketUncheckedUpdateInput.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './objects/TicketWhereUniqueInput.schema';

export const TicketUpdateOneSchema: z.ZodType<Prisma.TicketUpdateArgs> = z.object({ select: TicketSelectObjectSchema.optional(), include: TicketIncludeObjectSchema.optional(), data: z.union([TicketUpdateInputObjectSchema, TicketUncheckedUpdateInputObjectSchema]), where: TicketWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TicketUpdateArgs>;

export const TicketUpdateOneZodSchema = z.object({ select: TicketSelectObjectSchema.optional(), include: TicketIncludeObjectSchema.optional(), data: z.union([TicketUpdateInputObjectSchema, TicketUncheckedUpdateInputObjectSchema]), where: TicketWhereUniqueInputObjectSchema }).strict();