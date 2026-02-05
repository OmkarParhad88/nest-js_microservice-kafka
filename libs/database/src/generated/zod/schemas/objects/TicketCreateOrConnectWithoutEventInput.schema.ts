import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketCreateWithoutEventInputObjectSchema as TicketCreateWithoutEventInputObjectSchema } from './TicketCreateWithoutEventInput.schema';
import { TicketUncheckedCreateWithoutEventInputObjectSchema as TicketUncheckedCreateWithoutEventInputObjectSchema } from './TicketUncheckedCreateWithoutEventInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TicketCreateWithoutEventInputObjectSchema),
        z.lazy(() => TicketUncheckedCreateWithoutEventInputObjectSchema),
      ]),
    })
    .strict();
export const TicketCreateOrConnectWithoutEventInputObjectSchema: z.ZodType<Prisma.TicketCreateOrConnectWithoutEventInput> =
  makeSchema() as unknown as z.ZodType<Prisma.TicketCreateOrConnectWithoutEventInput>;
export const TicketCreateOrConnectWithoutEventInputObjectZodSchema = makeSchema();
