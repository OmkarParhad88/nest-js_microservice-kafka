import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventCreateManyOrganizerInputObjectSchema as EventCreateManyOrganizerInputObjectSchema } from './EventCreateManyOrganizerInput.schema';

const makeSchema = () =>
  z
    .object({
      data: z.union([
        z.lazy(() => EventCreateManyOrganizerInputObjectSchema),
        z.lazy(() => EventCreateManyOrganizerInputObjectSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();
export const EventCreateManyOrganizerInputEnvelopeObjectSchema: z.ZodType<Prisma.EventCreateManyOrganizerInputEnvelope> =
  makeSchema() as unknown as z.ZodType<Prisma.EventCreateManyOrganizerInputEnvelope>;
export const EventCreateManyOrganizerInputEnvelopeObjectZodSchema = makeSchema();
