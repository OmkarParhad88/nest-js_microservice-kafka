import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { EventUpdateWithoutTicketsInputObjectSchema as EventUpdateWithoutTicketsInputObjectSchema } from './EventUpdateWithoutTicketsInput.schema';
import { EventUncheckedUpdateWithoutTicketsInputObjectSchema as EventUncheckedUpdateWithoutTicketsInputObjectSchema } from './EventUncheckedUpdateWithoutTicketsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => EventUpdateWithoutTicketsInputObjectSchema), z.lazy(() => EventUncheckedUpdateWithoutTicketsInputObjectSchema)])
}).strict();
export const EventUpdateToOneWithWhereWithoutTicketsInputObjectSchema: z.ZodType<Prisma.EventUpdateToOneWithWhereWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateToOneWithWhereWithoutTicketsInput>;
export const EventUpdateToOneWithWhereWithoutTicketsInputObjectZodSchema = makeSchema();
