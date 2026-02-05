import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TicketWhereUniqueInputObjectSchema as TicketWhereUniqueInputObjectSchema } from './TicketWhereUniqueInput.schema';
import { TicketUpdateWithoutEventInputObjectSchema as TicketUpdateWithoutEventInputObjectSchema } from './TicketUpdateWithoutEventInput.schema';
import { TicketUncheckedUpdateWithoutEventInputObjectSchema as TicketUncheckedUpdateWithoutEventInputObjectSchema } from './TicketUncheckedUpdateWithoutEventInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => TicketWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TicketUpdateWithoutEventInputObjectSchema),
        z.lazy(() => TicketUncheckedUpdateWithoutEventInputObjectSchema),
      ]),
    })
    .strict();
export const TicketUpdateWithWhereUniqueWithoutEventInputObjectSchema: z.ZodType<Prisma.TicketUpdateWithWhereUniqueWithoutEventInput> =
  makeSchema() as unknown as z.ZodType<Prisma.TicketUpdateWithWhereUniqueWithoutEventInput>;
export const TicketUpdateWithWhereUniqueWithoutEventInputObjectZodSchema = makeSchema();
