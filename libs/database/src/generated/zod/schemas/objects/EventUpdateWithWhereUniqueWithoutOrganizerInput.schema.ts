import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutOrganizerInputObjectSchema as EventUpdateWithoutOrganizerInputObjectSchema } from './EventUpdateWithoutOrganizerInput.schema';
import { EventUncheckedUpdateWithoutOrganizerInputObjectSchema as EventUncheckedUpdateWithoutOrganizerInputObjectSchema } from './EventUncheckedUpdateWithoutOrganizerInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => EventWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => EventUpdateWithoutOrganizerInputObjectSchema),
        z.lazy(() => EventUncheckedUpdateWithoutOrganizerInputObjectSchema),
      ]),
    })
    .strict();
export const EventUpdateWithWhereUniqueWithoutOrganizerInputObjectSchema: z.ZodType<Prisma.EventUpdateWithWhereUniqueWithoutOrganizerInput> =
  makeSchema() as unknown as z.ZodType<Prisma.EventUpdateWithWhereUniqueWithoutOrganizerInput>;
export const EventUpdateWithWhereUniqueWithoutOrganizerInputObjectZodSchema = makeSchema();
