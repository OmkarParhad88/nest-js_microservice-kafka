import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutOrganizerInputObjectSchema as EventCreateWithoutOrganizerInputObjectSchema } from './EventCreateWithoutOrganizerInput.schema';
import { EventUncheckedCreateWithoutOrganizerInputObjectSchema as EventUncheckedCreateWithoutOrganizerInputObjectSchema } from './EventUncheckedCreateWithoutOrganizerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EventWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EventCreateWithoutOrganizerInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutOrganizerInputObjectSchema)])
}).strict();
export const EventCreateOrConnectWithoutOrganizerInputObjectSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutOrganizerInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateOrConnectWithoutOrganizerInput>;
export const EventCreateOrConnectWithoutOrganizerInputObjectZodSchema = makeSchema();
