import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TicketScalarWhereInputObjectSchema as TicketScalarWhereInputObjectSchema } from './TicketScalarWhereInput.schema';
import { TicketUpdateManyMutationInputObjectSchema as TicketUpdateManyMutationInputObjectSchema } from './TicketUpdateManyMutationInput.schema';
import { TicketUncheckedUpdateManyWithoutEventInputObjectSchema as TicketUncheckedUpdateManyWithoutEventInputObjectSchema } from './TicketUncheckedUpdateManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TicketScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TicketUpdateManyMutationInputObjectSchema), z.lazy(() => TicketUncheckedUpdateManyWithoutEventInputObjectSchema)])
}).strict();
export const TicketUpdateManyWithWhereWithoutEventInputObjectSchema: z.ZodType<Prisma.TicketUpdateManyWithWhereWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.TicketUpdateManyWithWhereWithoutEventInput>;
export const TicketUpdateManyWithWhereWithoutEventInputObjectZodSchema = makeSchema();
