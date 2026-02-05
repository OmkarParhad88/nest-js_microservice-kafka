import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithoutEventInputObjectSchema as TicketUpdateWithoutEventInputObjectSchema } from './TicketUpdateWithoutEventInput.schema';
import { TicketUncheckedUpdateWithoutEventInputObjectSchema as TicketUncheckedUpdateWithoutEventInputObjectSchema } from './TicketUncheckedUpdateWithoutEventInput.schema';
import { TicketCreateWithoutEventInputObjectSchema as TicketCreateWithoutEventInputObjectSchema } from './TicketCreateWithoutEventInput.schema';
import { TicketUncheckedCreateWithoutEventInputObjectSchema as TicketUncheckedCreateWithoutEventInputObjectSchema } from './TicketUncheckedCreateWithoutEventInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TicketUpdateWithoutEventInputObjectSchema),
        z.lazy(() => TicketUncheckedUpdateWithoutEventInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TicketCreateWithoutEventInputObjectSchema),
        z.lazy(() => TicketUncheckedCreateWithoutEventInputObjectSchema),
      ]),
    })
    .strict();
export const TicketUpsertWithWhereUniqueWithoutEventInputObjectSchema: z.ZodType<Prisma.TicketUpsertWithWhereUniqueWithoutEventInput> =
  makeSchema() as unknown as z.ZodType<Prisma.TicketUpsertWithWhereUniqueWithoutEventInput>;
export const TicketUpsertWithWhereUniqueWithoutEventInputObjectZodSchema = makeSchema();
