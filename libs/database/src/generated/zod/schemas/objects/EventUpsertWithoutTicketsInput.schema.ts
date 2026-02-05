import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventUpdateWithoutTicketsInputObjectSchema as EventUpdateWithoutTicketsInputObjectSchema } from './EventUpdateWithoutTicketsInput.schema';
import { EventUncheckedUpdateWithoutTicketsInputObjectSchema as EventUncheckedUpdateWithoutTicketsInputObjectSchema } from './EventUncheckedUpdateWithoutTicketsInput.schema';
import { EventCreateWithoutTicketsInputObjectSchema as EventCreateWithoutTicketsInputObjectSchema } from './EventCreateWithoutTicketsInput.schema';
import { EventUncheckedCreateWithoutTicketsInputObjectSchema as EventUncheckedCreateWithoutTicketsInputObjectSchema } from './EventUncheckedCreateWithoutTicketsInput.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EventUpdateWithoutTicketsInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutTicketsInputObjectSchema)]),
  create: z.union([z.lazy(() => EventCreateWithoutTicketsInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutTicketsInputObjectSchema)]),
  where: z.lazy(() => EventWhereInputObjectSchema).optional()
}).strict();
export const EventUpsertWithoutTicketsInputObjectSchema: z.ZodType<Prisma.EventUpsertWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpsertWithoutTicketsInput>;
export const EventUpsertWithoutTicketsInputObjectZodSchema = makeSchema();
