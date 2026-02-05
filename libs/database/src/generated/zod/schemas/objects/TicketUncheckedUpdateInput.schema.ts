import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TicketStatusSchema } from '../enums/TicketStatus.schema';
import { EnumTicketStatusFieldUpdateOperationsInputObjectSchema as EnumTicketStatusFieldUpdateOperationsInputObjectSchema } from './EnumTicketStatusFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z
        .union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
        .optional(),
      eventId: z
        .union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
        .optional(),
      userId: z
        .union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
        .optional(),
      status: z
        .union([
          TicketStatusSchema,
          z.lazy(() => EnumTicketStatusFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      quantity: z
        .union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)])
        .optional(),
      totalPrice: z
        .union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)])
        .optional(),
      ticketCode: z
        .union([z.string().max(20), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
        .optional(),
      purchasedAt: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
        .optional(),
      checkedInAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
        .optional(),
      updatedAt: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
        .optional(),
    })
    .strict();
export const TicketUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.TicketUncheckedUpdateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.TicketUncheckedUpdateInput>;
export const TicketUncheckedUpdateInputObjectZodSchema = makeSchema();
