import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TicketOrderByWithRelationInputObjectSchema as TicketOrderByWithRelationInputObjectSchema } from './objects/TicketOrderByWithRelationInput.schema';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './objects/TicketWhereInput.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './objects/TicketWhereUniqueInput.schema';
import { TicketCountAggregateInputObjectSchema as TicketCountAggregateInputObjectSchema } from './objects/TicketCountAggregateInput.schema';

export const TicketCountSchema: z.ZodType<Prisma.TicketCountArgs> = z.object({ orderBy: z.union([TicketOrderByWithRelationInputObjectSchema, TicketOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketWhereInputObjectSchema.optional(), cursor: TicketWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TicketCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TicketCountArgs>;

export const TicketCountZodSchema = z.object({ orderBy: z.union([TicketOrderByWithRelationInputObjectSchema, TicketOrderByWithRelationInputObjectSchema.array()]).optional(), where: TicketWhereInputObjectSchema.optional(), cursor: TicketWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TicketCountAggregateInputObjectSchema ]).optional() }).strict();