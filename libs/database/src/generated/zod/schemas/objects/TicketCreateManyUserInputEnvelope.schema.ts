import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TicketCreateManyUserInputObjectSchema as TicketCreateManyUserInputObjectSchema } from './TicketCreateManyUserInput.schema';

const makeSchema = () =>
  z
    .object({
      data: z.union([
        z.lazy(() => TicketCreateManyUserInputObjectSchema),
        z.lazy(() => TicketCreateManyUserInputObjectSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();
export const TicketCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.TicketCreateManyUserInputEnvelope> =
  makeSchema() as unknown as z.ZodType<Prisma.TicketCreateManyUserInputEnvelope>;
export const TicketCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
