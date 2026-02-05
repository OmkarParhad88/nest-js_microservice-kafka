import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventStatusSchema } from '../enums/EventStatus.schema'

const makeSchema = () => z.object({
  set: EventStatusSchema.optional()
}).strict();
export const EnumEventStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumEventStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumEventStatusFieldUpdateOperationsInput>;
export const EnumEventStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
