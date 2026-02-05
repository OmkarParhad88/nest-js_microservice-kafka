import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventScalarWhereInputObjectSchema as EventScalarWhereInputObjectSchema } from './EventScalarWhereInput.schema';
import { EventUpdateManyMutationInputObjectSchema as EventUpdateManyMutationInputObjectSchema } from './EventUpdateManyMutationInput.schema';
import { EventUncheckedUpdateManyWithoutOrganizerInputObjectSchema as EventUncheckedUpdateManyWithoutOrganizerInputObjectSchema } from './EventUncheckedUpdateManyWithoutOrganizerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => EventUpdateManyMutationInputObjectSchema), z.lazy(() => EventUncheckedUpdateManyWithoutOrganizerInputObjectSchema)])
}).strict();
export const EventUpdateManyWithWhereWithoutOrganizerInputObjectSchema: z.ZodType<Prisma.EventUpdateManyWithWhereWithoutOrganizerInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateManyWithWhereWithoutOrganizerInput>;
export const EventUpdateManyWithWhereWithoutOrganizerInputObjectZodSchema = makeSchema();
