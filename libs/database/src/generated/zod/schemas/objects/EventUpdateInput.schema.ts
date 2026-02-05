import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { EventStatusSchema } from '../enums/EventStatus.schema';
import { EnumEventStatusFieldUpdateOperationsInputObjectSchema as EnumEventStatusFieldUpdateOperationsInputObjectSchema } from './EnumEventStatusFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutEventsNestedInputObjectSchema as UserUpdateOneRequiredWithoutEventsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutEventsNestedInput.schema';
import { TicketUpdateManyWithoutEventNestedInputObjectSchema as TicketUpdateManyWithoutEventNestedInputObjectSchema } from './TicketUpdateManyWithoutEventNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string().max(191), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  location: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  capacity: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  price: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([EventStatusSchema, z.lazy(() => EnumEventStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  organizer: z.lazy(() => UserUpdateOneRequiredWithoutEventsNestedInputObjectSchema).optional(),
  tickets: z.lazy(() => TicketUpdateManyWithoutEventNestedInputObjectSchema).optional()
}).strict();
export const EventUpdateInputObjectSchema: z.ZodType<Prisma.EventUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUpdateInput>;
export const EventUpdateInputObjectZodSchema = makeSchema();
