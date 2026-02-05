import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutTicketsInputObjectSchema as EventCreateWithoutTicketsInputObjectSchema } from './EventCreateWithoutTicketsInput.schema';
import { EventUncheckedCreateWithoutTicketsInputObjectSchema as EventUncheckedCreateWithoutTicketsInputObjectSchema } from './EventUncheckedCreateWithoutTicketsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EventCreateWithoutTicketsInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutTicketsInputObjectSchema)])
}).strict();
export const EventCreateOrConnectWithoutTicketsInputObjectSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateOrConnectWithoutTicketsInput>;
export const EventCreateOrConnectWithoutTicketsInputObjectZodSchema = makeSchema();
