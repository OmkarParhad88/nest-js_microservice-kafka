import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TicketCreateWithoutUserInputObjectSchema as TicketCreateWithoutUserInputObjectSchema } from './TicketCreateWithoutUserInput.schema';
import { TicketUncheckedCreateWithoutUserInputObjectSchema as TicketUncheckedCreateWithoutUserInputObjectSchema } from './TicketUncheckedCreateWithoutUserInput.schema';
import { TicketCreateOrConnectWithoutUserInputObjectSchema as TicketCreateOrConnectWithoutUserInputObjectSchema } from './TicketCreateOrConnectWithoutUserInput.schema';
import { TicketUpsertWithWhereUniqueWithoutUserInputObjectSchema as TicketUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './TicketUpsertWithWhereUniqueWithoutUserInput.schema';
import { TicketCreateManyUserInputEnvelopeObjectSchema as TicketCreateManyUserInputEnvelopeObjectSchema } from './TicketCreateManyUserInputEnvelope.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithWhereUniqueWithoutUserInputObjectSchema as TicketUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './TicketUpdateWithWhereUniqueWithoutUserInput.schema';
import { TicketUpdateManyWithWhereWithoutUserInputObjectSchema as TicketUpdateManyWithWhereWithoutUserInputObjectSchema } from './TicketUpdateManyWithWhereWithoutUserInput.schema';
import { TicketScalarWhereInputObjectSchema as TicketScalarWhereInputObjectSchema } from './TicketScalarWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(() => TicketCreateWithoutUserInputObjectSchema),
          z.lazy(() => TicketCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => TicketUncheckedCreateWithoutUserInputObjectSchema),
          z.lazy(() => TicketUncheckedCreateWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TicketCreateOrConnectWithoutUserInputObjectSchema),
          z.lazy(() => TicketCreateOrConnectWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => TicketUpsertWithWhereUniqueWithoutUserInputObjectSchema),
          z.lazy(() => TicketUpsertWithWhereUniqueWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => TicketCreateManyUserInputEnvelopeObjectSchema).optional(),
      set: z
        .union([
          z.lazy(() => TicketWhereUniqueInputObjectSchema),
          z.lazy(() => TicketWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => TicketWhereUniqueInputObjectSchema),
          z.lazy(() => TicketWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => TicketWhereUniqueInputObjectSchema),
          z.lazy(() => TicketWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => TicketWhereUniqueInputObjectSchema),
          z.lazy(() => TicketWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => TicketUpdateWithWhereUniqueWithoutUserInputObjectSchema),
          z.lazy(() => TicketUpdateWithWhereUniqueWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => TicketUpdateManyWithWhereWithoutUserInputObjectSchema),
          z.lazy(() => TicketUpdateManyWithWhereWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => TicketScalarWhereInputObjectSchema),
          z.lazy(() => TicketScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();
export const TicketUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.TicketUncheckedUpdateManyWithoutUserNestedInput> =
  makeSchema() as unknown as z.ZodType<Prisma.TicketUncheckedUpdateManyWithoutUserNestedInput>;
export const TicketUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
