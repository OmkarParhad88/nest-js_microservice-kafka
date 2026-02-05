import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TicketCreateWithoutEventInputObjectSchema as TicketCreateWithoutEventInputObjectSchema } from './TicketCreateWithoutEventInput.schema';
import { TicketUncheckedCreateWithoutEventInputObjectSchema as TicketUncheckedCreateWithoutEventInputObjectSchema } from './TicketUncheckedCreateWithoutEventInput.schema';
import { TicketCreateOrConnectWithoutEventInputObjectSchema as TicketCreateOrConnectWithoutEventInputObjectSchema } from './TicketCreateOrConnectWithoutEventInput.schema';
import { TicketUpsertWithWhereUniqueWithoutEventInputObjectSchema as TicketUpsertWithWhereUniqueWithoutEventInputObjectSchema } from './TicketUpsertWithWhereUniqueWithoutEventInput.schema';
import { TicketCreateManyEventInputEnvelopeObjectSchema as TicketCreateManyEventInputEnvelopeObjectSchema } from './TicketCreateManyEventInputEnvelope.schema';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithWhereUniqueWithoutEventInputObjectSchema as TicketUpdateWithWhereUniqueWithoutEventInputObjectSchema } from './TicketUpdateWithWhereUniqueWithoutEventInput.schema';
import { TicketUpdateManyWithWhereWithoutEventInputObjectSchema as TicketUpdateManyWithWhereWithoutEventInputObjectSchema } from './TicketUpdateManyWithWhereWithoutEventInput.schema';
import { TicketScalarWhereInputObjectSchema as TicketScalarWhereInputObjectSchema } from './TicketScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TicketCreateWithoutEventInputObjectSchema), z.lazy(() => TicketCreateWithoutEventInputObjectSchema).array(), z.lazy(() => TicketUncheckedCreateWithoutEventInputObjectSchema), z.lazy(() => TicketUncheckedCreateWithoutEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TicketCreateOrConnectWithoutEventInputObjectSchema), z.lazy(() => TicketCreateOrConnectWithoutEventInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TicketUpsertWithWhereUniqueWithoutEventInputObjectSchema), z.lazy(() => TicketUpsertWithWhereUniqueWithoutEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TicketCreateManyEventInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TicketWhereUniqueInputObjectSchema), z.lazy(() => TicketWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TicketWhereUniqueInputObjectSchema), z.lazy(() => TicketWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TicketWhereUniqueInputObjectSchema), z.lazy(() => TicketWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TicketWhereUniqueInputObjectSchema), z.lazy(() => TicketWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TicketUpdateWithWhereUniqueWithoutEventInputObjectSchema), z.lazy(() => TicketUpdateWithWhereUniqueWithoutEventInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TicketUpdateManyWithWhereWithoutEventInputObjectSchema), z.lazy(() => TicketUpdateManyWithWhereWithoutEventInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TicketScalarWhereInputObjectSchema), z.lazy(() => TicketScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TicketUncheckedUpdateManyWithoutEventNestedInputObjectSchema: z.ZodType<Prisma.TicketUncheckedUpdateManyWithoutEventNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketUncheckedUpdateManyWithoutEventNestedInput>;
export const TicketUncheckedUpdateManyWithoutEventNestedInputObjectZodSchema = makeSchema();
