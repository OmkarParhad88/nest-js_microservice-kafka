import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TicketCreateWithoutEventInputObjectSchema as TicketCreateWithoutEventInputObjectSchema } from './TicketCreateWithoutEventInput.schema';
import { TicketUncheckedCreateWithoutEventInputObjectSchema as TicketUncheckedCreateWithoutEventInputObjectSchema } from './TicketUncheckedCreateWithoutEventInput.schema';
import { TicketCreateOrConnectWithoutEventInputObjectSchema as TicketCreateOrConnectWithoutEventInputObjectSchema } from './TicketCreateOrConnectWithoutEventInput.schema';
import { TicketCreateManyEventInputEnvelopeObjectSchema as TicketCreateManyEventInputEnvelopeObjectSchema } from './TicketCreateManyEventInputEnvelope.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';

const makeSchema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(() => TicketCreateWithoutEventInputObjectSchema),
          z.lazy(() => TicketCreateWithoutEventInputObjectSchema).array(),
          z.lazy(() => TicketUncheckedCreateWithoutEventInputObjectSchema),
          z.lazy(() => TicketUncheckedCreateWithoutEventInputObjectSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TicketCreateOrConnectWithoutEventInputObjectSchema),
          z.lazy(() => TicketCreateOrConnectWithoutEventInputObjectSchema).array(),
        ])
        .optional(),
      createMany: z.lazy(() => TicketCreateManyEventInputEnvelopeObjectSchema).optional(),
      connect: z
        .union([
          z.lazy(() => TicketWhereUniqueInputObjectSchema),
          z.lazy(() => TicketWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();
export const TicketCreateNestedManyWithoutEventInputObjectSchema: z.ZodType<Prisma.TicketCreateNestedManyWithoutEventInput> =
  makeSchema() as unknown as z.ZodType<Prisma.TicketCreateNestedManyWithoutEventInput>;
export const TicketCreateNestedManyWithoutEventInputObjectZodSchema = makeSchema();
