import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventCreateWithoutTicketsInputObjectSchema as EventCreateWithoutTicketsInputObjectSchema } from './EventCreateWithoutTicketsInput.schema';
import { EventUncheckedCreateWithoutTicketsInputObjectSchema as EventUncheckedCreateWithoutTicketsInputObjectSchema } from './EventUncheckedCreateWithoutTicketsInput.schema';
import { EventCreateOrConnectWithoutTicketsInputObjectSchema as EventCreateOrConnectWithoutTicketsInputObjectSchema } from './EventCreateOrConnectWithoutTicketsInput.schema';
import { EventUpsertWithoutTicketsInputObjectSchema as EventUpsertWithoutTicketsInputObjectSchema } from './EventUpsertWithoutTicketsInput.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventUpdateToOneWithWhereWithoutTicketsInputObjectSchema as EventUpdateToOneWithWhereWithoutTicketsInputObjectSchema } from './EventUpdateToOneWithWhereWithoutTicketsInput.schema';
import { EventUpdateWithoutTicketsInputObjectSchema as EventUpdateWithoutTicketsInputObjectSchema } from './EventUpdateWithoutTicketsInput.schema';
import { EventUncheckedUpdateWithoutTicketsInputObjectSchema as EventUncheckedUpdateWithoutTicketsInputObjectSchema } from './EventUncheckedUpdateWithoutTicketsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutTicketsInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutTicketsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutTicketsInputObjectSchema).optional(),
  upsert: z.lazy(() => EventUpsertWithoutTicketsInputObjectSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EventUpdateToOneWithWhereWithoutTicketsInputObjectSchema), z.lazy(() => EventUpdateWithoutTicketsInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutTicketsInputObjectSchema)]).optional()
}).strict();
export const EventUpdateOneRequiredWithoutTicketsNestedInputObjectSchema: z.ZodType<Prisma.EventUpdateOneRequiredWithoutTicketsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateOneRequiredWithoutTicketsNestedInput>;
export const EventUpdateOneRequiredWithoutTicketsNestedInputObjectZodSchema = makeSchema();
