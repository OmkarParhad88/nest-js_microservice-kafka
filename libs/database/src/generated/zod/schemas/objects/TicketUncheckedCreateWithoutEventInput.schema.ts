import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      userId: z.string(),
      status: TicketStatusSchema.optional(),
      quantity: z.number().int().optional(),
      totalPrice: z.number().int().optional(),
      ticketCode: z.string(),
      purchasedAt: z.coerce.date().optional(),
      checkedInAt: z.coerce.date().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();
export const TicketUncheckedCreateWithoutEventInputObjectSchema: z.ZodType<Prisma.TicketUncheckedCreateWithoutEventInput> =
  makeSchema() as unknown as z.ZodType<Prisma.TicketUncheckedCreateWithoutEventInput>;
export const TicketUncheckedCreateWithoutEventInputObjectZodSchema = makeSchema();
