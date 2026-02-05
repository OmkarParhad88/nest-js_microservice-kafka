import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TicketCreateManyInputObjectSchema as TicketCreateManyInputObjectSchema } from './objects/TicketCreateManyInput.schema';

export const TicketCreateManySchema: z.ZodType<Prisma.TicketCreateManyArgs> = z
  .object({
    data: z.union([TicketCreateManyInputObjectSchema, z.array(TicketCreateManyInputObjectSchema)]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.TicketCreateManyArgs>;

export const TicketCreateManyZodSchema = z
  .object({
    data: z.union([TicketCreateManyInputObjectSchema, z.array(TicketCreateManyInputObjectSchema)]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();
