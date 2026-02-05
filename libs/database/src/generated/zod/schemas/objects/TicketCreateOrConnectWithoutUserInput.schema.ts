import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketCreateWithoutUserInputObjectSchema as TicketCreateWithoutUserInputObjectSchema } from './TicketCreateWithoutUserInput.schema';
import { TicketUncheckedCreateWithoutUserInputObjectSchema as TicketUncheckedCreateWithoutUserInputObjectSchema } from './TicketUncheckedCreateWithoutUserInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TicketCreateWithoutUserInputObjectSchema),
        z.lazy(() => TicketUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();
export const TicketCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.TicketCreateOrConnectWithoutUserInput> =
  makeSchema() as unknown as z.ZodType<Prisma.TicketCreateOrConnectWithoutUserInput>;
export const TicketCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
