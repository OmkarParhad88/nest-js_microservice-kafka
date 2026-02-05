import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TicketOrderByWithRelationInputObjectSchema as TicketOrderByWithRelationInputObjectSchema } from './objects/TicketOrderByWithRelationInput.schema';
import { TicketWhereInputObjectSchema as TicketWhereInputObjectSchema } from './objects/TicketWhereInput.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './objects/TicketWhereUniqueInput.schema';
import { TicketCountAggregateInputObjectSchema as TicketCountAggregateInputObjectSchema } from './objects/TicketCountAggregateInput.schema';
import { TicketMinAggregateInputObjectSchema as TicketMinAggregateInputObjectSchema } from './objects/TicketMinAggregateInput.schema';
import { TicketMaxAggregateInputObjectSchema as TicketMaxAggregateInputObjectSchema } from './objects/TicketMaxAggregateInput.schema';
import { TicketAvgAggregateInputObjectSchema as TicketAvgAggregateInputObjectSchema } from './objects/TicketAvgAggregateInput.schema';
import { TicketSumAggregateInputObjectSchema as TicketSumAggregateInputObjectSchema } from './objects/TicketSumAggregateInput.schema';

export const TicketAggregateSchema: z.ZodType<Prisma.TicketAggregateArgs> = z
  .object({
    orderBy: z
      .union([
        TicketOrderByWithRelationInputObjectSchema,
        TicketOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: TicketWhereInputObjectSchema.optional(),
    cursor: TicketWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z.union([z.literal(true), TicketCountAggregateInputObjectSchema]).optional(),
    _min: TicketMinAggregateInputObjectSchema.optional(),
    _max: TicketMaxAggregateInputObjectSchema.optional(),
    _avg: TicketAvgAggregateInputObjectSchema.optional(),
    _sum: TicketSumAggregateInputObjectSchema.optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.TicketAggregateArgs>;

export const TicketAggregateZodSchema = z
  .object({
    orderBy: z
      .union([
        TicketOrderByWithRelationInputObjectSchema,
        TicketOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: TicketWhereInputObjectSchema.optional(),
    cursor: TicketWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z.union([z.literal(true), TicketCountAggregateInputObjectSchema]).optional(),
    _min: TicketMinAggregateInputObjectSchema.optional(),
    _max: TicketMaxAggregateInputObjectSchema.optional(),
    _avg: TicketAvgAggregateInputObjectSchema.optional(),
    _sum: TicketSumAggregateInputObjectSchema.optional(),
  })
  .strict();
