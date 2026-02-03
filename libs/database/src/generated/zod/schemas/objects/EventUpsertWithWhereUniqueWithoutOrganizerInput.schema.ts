import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithoutOrganizerInputObjectSchema as EventUpdateWithoutOrganizerInputObjectSchema } from './EventUpdateWithoutOrganizerInput.schema';
import { EventUncheckedUpdateWithoutOrganizerInputObjectSchema as EventUncheckedUpdateWithoutOrganizerInputObjectSchema } from './EventUncheckedUpdateWithoutOrganizerInput.schema';
import { EventCreateWithoutOrganizerInputObjectSchema as EventCreateWithoutOrganizerInputObjectSchema } from './EventCreateWithoutOrganizerInput.schema';
import { EventUncheckedCreateWithoutOrganizerInputObjectSchema as EventUncheckedCreateWithoutOrganizerInputObjectSchema } from './EventUncheckedCreateWithoutOrganizerInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => EventWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => EventUpdateWithoutOrganizerInputObjectSchema),
        z.lazy(() => EventUncheckedUpdateWithoutOrganizerInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => EventCreateWithoutOrganizerInputObjectSchema),
        z.lazy(() => EventUncheckedCreateWithoutOrganizerInputObjectSchema),
      ]),
    })
    .strict();
export const EventUpsertWithWhereUniqueWithoutOrganizerInputObjectSchema: z.ZodType<Prisma.EventUpsertWithWhereUniqueWithoutOrganizerInput> =
  makeSchema() as unknown as z.ZodType<Prisma.EventUpsertWithWhereUniqueWithoutOrganizerInput>;
export const EventUpsertWithWhereUniqueWithoutOrganizerInputObjectZodSchema = makeSchema();
