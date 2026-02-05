import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.uuid().optional(),
      ticketCode: z.string().max(20).optional(),
    })
    .strict();
export const TicketWhereUniqueInputObjectSchema: z.ZodType<Prisma.TicketWhereUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.TicketWhereUniqueInput>;
export const TicketWhereUniqueInputObjectZodSchema = makeSchema();
