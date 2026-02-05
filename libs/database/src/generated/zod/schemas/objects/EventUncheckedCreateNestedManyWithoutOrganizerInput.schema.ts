import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventCreateWithoutOrganizerInputObjectSchema as EventCreateWithoutOrganizerInputObjectSchema } from './EventCreateWithoutOrganizerInput.schema';
import { EventUncheckedCreateWithoutOrganizerInputObjectSchema as EventUncheckedCreateWithoutOrganizerInputObjectSchema } from './EventUncheckedCreateWithoutOrganizerInput.schema';
import { EventCreateOrConnectWithoutOrganizerInputObjectSchema as EventCreateOrConnectWithoutOrganizerInputObjectSchema } from './EventCreateOrConnectWithoutOrganizerInput.schema';
import { EventCreateManyOrganizerInputEnvelopeObjectSchema as EventCreateManyOrganizerInputEnvelopeObjectSchema } from './EventCreateManyOrganizerInputEnvelope.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EventCreateWithoutOrganizerInputObjectSchema), z.lazy(() => EventCreateWithoutOrganizerInputObjectSchema).array(), z.lazy(() => EventUncheckedCreateWithoutOrganizerInputObjectSchema), z.lazy(() => EventUncheckedCreateWithoutOrganizerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => EventCreateOrConnectWithoutOrganizerInputObjectSchema), z.lazy(() => EventCreateOrConnectWithoutOrganizerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => EventCreateManyOrganizerInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => EventWhereUniqueInputObjectSchema), z.lazy(() => EventWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const EventUncheckedCreateNestedManyWithoutOrganizerInputObjectSchema: z.ZodType<Prisma.EventUncheckedCreateNestedManyWithoutOrganizerInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedCreateNestedManyWithoutOrganizerInput>;
export const EventUncheckedCreateNestedManyWithoutOrganizerInputObjectZodSchema = makeSchema();
