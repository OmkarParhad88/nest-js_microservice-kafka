import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventCreateWithoutOrganizerInputObjectSchema as EventCreateWithoutOrganizerInputObjectSchema } from './EventCreateWithoutOrganizerInput.schema';
import { EventUncheckedCreateWithoutOrganizerInputObjectSchema as EventUncheckedCreateWithoutOrganizerInputObjectSchema } from './EventUncheckedCreateWithoutOrganizerInput.schema';
import { EventCreateOrConnectWithoutOrganizerInputObjectSchema as EventCreateOrConnectWithoutOrganizerInputObjectSchema } from './EventCreateOrConnectWithoutOrganizerInput.schema';
import { EventUpsertWithWhereUniqueWithoutOrganizerInputObjectSchema as EventUpsertWithWhereUniqueWithoutOrganizerInputObjectSchema } from './EventUpsertWithWhereUniqueWithoutOrganizerInput.schema';
import { EventCreateManyOrganizerInputEnvelopeObjectSchema as EventCreateManyOrganizerInputEnvelopeObjectSchema } from './EventCreateManyOrganizerInputEnvelope.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateWithWhereUniqueWithoutOrganizerInputObjectSchema as EventUpdateWithWhereUniqueWithoutOrganizerInputObjectSchema } from './EventUpdateWithWhereUniqueWithoutOrganizerInput.schema';
import { EventUpdateManyWithWhereWithoutOrganizerInputObjectSchema as EventUpdateManyWithWhereWithoutOrganizerInputObjectSchema } from './EventUpdateManyWithWhereWithoutOrganizerInput.schema';
import { EventScalarWhereInputObjectSchema as EventScalarWhereInputObjectSchema } from './EventScalarWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(() => EventCreateWithoutOrganizerInputObjectSchema),
          z.lazy(() => EventCreateWithoutOrganizerInputObjectSchema).array(),
          z.lazy(() => EventUncheckedCreateWithoutOrganizerInputObjectSchema),
          z.lazy(() => EventUncheckedCreateWithoutOrganizerInputObjectSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => EventCreateOrConnectWithoutOrganizerInputObjectSchema),
          z.lazy(() => EventCreateOrConnectWithoutOrganizerInputObjectSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => EventUpsertWithWhereUniqueWithoutOrganizerInputObjectSchema),
          z.lazy(() => EventUpsertWithWhereUniqueWithoutOrganizerInputObjectSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => EventCreateManyOrganizerInputEnvelopeObjectSchema).optional(),
      set: z
        .union([
          z.lazy(() => EventWhereUniqueInputObjectSchema),
          z.lazy(() => EventWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => EventWhereUniqueInputObjectSchema),
          z.lazy(() => EventWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => EventWhereUniqueInputObjectSchema),
          z.lazy(() => EventWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => EventWhereUniqueInputObjectSchema),
          z.lazy(() => EventWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => EventUpdateWithWhereUniqueWithoutOrganizerInputObjectSchema),
          z.lazy(() => EventUpdateWithWhereUniqueWithoutOrganizerInputObjectSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => EventUpdateManyWithWhereWithoutOrganizerInputObjectSchema),
          z.lazy(() => EventUpdateManyWithWhereWithoutOrganizerInputObjectSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => EventScalarWhereInputObjectSchema),
          z.lazy(() => EventScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();
export const EventUpdateManyWithoutOrganizerNestedInputObjectSchema: z.ZodType<Prisma.EventUpdateManyWithoutOrganizerNestedInput> =
  makeSchema() as unknown as z.ZodType<Prisma.EventUpdateManyWithoutOrganizerNestedInput>;
export const EventUpdateManyWithoutOrganizerNestedInputObjectZodSchema = makeSchema();
