import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventCreateWithoutTicketsInputObjectSchema as EventCreateWithoutTicketsInputObjectSchema } from './EventCreateWithoutTicketsInput.schema';
import { EventUncheckedCreateWithoutTicketsInputObjectSchema as EventUncheckedCreateWithoutTicketsInputObjectSchema } from './EventUncheckedCreateWithoutTicketsInput.schema';
import { EventCreateOrConnectWithoutTicketsInputObjectSchema as EventCreateOrConnectWithoutTicketsInputObjectSchema } from './EventCreateOrConnectWithoutTicketsInput.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';

const makeSchema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(() => EventCreateWithoutTicketsInputObjectSchema),
          z.lazy(() => EventUncheckedCreateWithoutTicketsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutTicketsInputObjectSchema).optional(),
      connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional(),
    })
    .strict();
export const EventCreateNestedOneWithoutTicketsInputObjectSchema: z.ZodType<Prisma.EventCreateNestedOneWithoutTicketsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.EventCreateNestedOneWithoutTicketsInput>;
export const EventCreateNestedOneWithoutTicketsInputObjectZodSchema = makeSchema();
