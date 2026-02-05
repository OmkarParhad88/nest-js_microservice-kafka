import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TicketSelectObjectSchema as TicketSelectObjectSchema } from './objects/TicketSelect.schema';
import { TicketUpdateManyMutationInputObjectSchema as TicketUpdateManyMutationInputObjectSchema } from './objects/TicketUpdateManyMutationInput.schema';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './objects/TicketWhereInput.schema';

export const TicketUpdateManyAndReturnSchema: z.ZodType<Prisma.TicketUpdateManyAndReturnArgs> = z
  .object({
    select: TicketSelectObjectSchema.optional(),
    data: TicketUpdateManyMutationInputObjectSchema,
    where: TicketWhereInputObjectSchema.optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.TicketUpdateManyAndReturnArgs>;

export const TicketUpdateManyAndReturnZodSchema = z
  .object({
    select: TicketSelectObjectSchema.optional(),
    data: TicketUpdateManyMutationInputObjectSchema,
    where: TicketWhereInputObjectSchema.optional(),
  })
  .strict();
