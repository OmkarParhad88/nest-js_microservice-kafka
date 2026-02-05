import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TicketUpdateManyMutationInputObjectSchema as TicketUpdateManyMutationInputObjectSchema } from './objects/TicketUpdateManyMutationInput.schema';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './objects/TicketWhereInput.schema';

export const TicketUpdateManySchema: z.ZodType<Prisma.TicketUpdateManyArgs> = z.object({ data: TicketUpdateManyMutationInputObjectSchema, where: TicketWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TicketUpdateManyArgs>;

export const TicketUpdateManyZodSchema = z.object({ data: TicketUpdateManyMutationInputObjectSchema, where: TicketWhereInputObjectSchema.optional() }).strict();