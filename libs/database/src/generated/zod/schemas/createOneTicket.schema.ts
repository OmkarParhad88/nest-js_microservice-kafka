import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TicketSelectObjectSchema as TicketSelectObjectSchema } from './objects/TicketSelect.schema';
import { TicketIncludeObjectSchema as TicketIncludeObjectSchema } from './objects/TicketInclude.schema';
import { TicketCreateInputObjectSchema as TicketCreateInputObjectSchema } from './objects/TicketCreateInput.schema';
import { TicketUncheckedCreateInputObjectSchema as TicketUncheckedCreateInputObjectSchema } from './objects/TicketUncheckedCreateInput.schema';

export const TicketCreateOneSchema: z.ZodType<Prisma.TicketCreateArgs> = z
  .object({
    select: TicketSelectObjectSchema.optional(),
    include: TicketIncludeObjectSchema.optional(),
    data: z.union([TicketCreateInputObjectSchema, TicketUncheckedCreateInputObjectSchema]),
  })
  .strict() as unknown as z.ZodType<Prisma.TicketCreateArgs>;

export const TicketCreateOneZodSchema = z
  .object({
    select: TicketSelectObjectSchema.optional(),
    include: TicketIncludeObjectSchema.optional(),
    data: z.union([TicketCreateInputObjectSchema, TicketUncheckedCreateInputObjectSchema]),
  })
  .strict();
