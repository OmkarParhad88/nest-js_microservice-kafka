import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TicketSelectObjectSchema as TicketSelectObjectSchema } from './objects/TicketSelect.schema';
import { TicketIncludeObjectSchema as TicketIncludeObjectSchema } from './objects/TicketInclude.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './objects/TicketWhereUniqueInput.schema';
import { TicketCreateInputObjectSchema as TicketCreateInputObjectSchema } from './objects/TicketCreateInput.schema';
import { TicketUncheckedCreateInputObjectSchema as TicketUncheckedCreateInputObjectSchema } from './objects/TicketUncheckedCreateInput.schema';
import { TicketUpdateInputObjectSchema as TicketUpdateInputObjectSchema } from './objects/TicketUpdateInput.schema';
import { TicketUncheckedUpdateInputObjectSchema as TicketUncheckedUpdateInputObjectSchema } from './objects/TicketUncheckedUpdateInput.schema';

export const TicketUpsertOneSchema: z.ZodType<Prisma.TicketUpsertArgs> = z
  .object({
    select: TicketSelectObjectSchema.optional(),
    include: TicketIncludeObjectSchema.optional(),
    where: TicketWhereUniqueInputObjectSchema,
    create: z.union([TicketCreateInputObjectSchema, TicketUncheckedCreateInputObjectSchema]),
    update: z.union([TicketUpdateInputObjectSchema, TicketUncheckedUpdateInputObjectSchema]),
  })
  .strict() as unknown as z.ZodType<Prisma.TicketUpsertArgs>;

export const TicketUpsertOneZodSchema = z
  .object({
    select: TicketSelectObjectSchema.optional(),
    include: TicketIncludeObjectSchema.optional(),
    where: TicketWhereUniqueInputObjectSchema,
    create: z.union([TicketCreateInputObjectSchema, TicketUncheckedCreateInputObjectSchema]),
    update: z.union([TicketUpdateInputObjectSchema, TicketUncheckedUpdateInputObjectSchema]),
  })
  .strict();
