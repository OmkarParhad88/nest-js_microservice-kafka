import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TicketCreateWithoutUserInputObjectSchema as TicketCreateWithoutUserInputObjectSchema } from './TicketCreateWithoutUserInput.schema';
import { TicketUncheckedCreateWithoutUserInputObjectSchema as TicketUncheckedCreateWithoutUserInputObjectSchema } from './TicketUncheckedCreateWithoutUserInput.schema';
import { TicketCreateOrConnectWithoutUserInputObjectSchema as TicketCreateOrConnectWithoutUserInputObjectSchema } from './TicketCreateOrConnectWithoutUserInput.schema';
import { TicketCreateManyUserInputEnvelopeObjectSchema as TicketCreateManyUserInputEnvelopeObjectSchema } from './TicketCreateManyUserInputEnvelope.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';

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
      createMany: z.lazy(() => TicketCreateManyUserInputEnvelopeObjectSchema).optional(),
      connect: z
        .union([
          z.lazy(() => TicketWhereUniqueInputObjectSchema),
          z.lazy(() => TicketWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();
export const TicketUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.TicketUncheckedCreateNestedManyWithoutUserInput> =
  makeSchema() as unknown as z.ZodType<Prisma.TicketUncheckedCreateNestedManyWithoutUserInput>;
export const TicketUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
