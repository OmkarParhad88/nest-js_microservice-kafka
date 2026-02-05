import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TicketCreateManyEventInputObjectSchema as TicketCreateManyEventInputObjectSchema } from './TicketCreateManyEventInput.schema';

const makeSchema = () =>
  z
    .object({
      data: z.union([
        z.lazy(() => TicketCreateManyEventInputObjectSchema),
        z.lazy(() => TicketCreateManyEventInputObjectSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();
export const TicketCreateManyEventInputEnvelopeObjectSchema: z.ZodType<Prisma.TicketCreateManyEventInputEnvelope> =
  makeSchema() as unknown as z.ZodType<Prisma.TicketCreateManyEventInputEnvelope>;
export const TicketCreateManyEventInputEnvelopeObjectZodSchema = makeSchema();
