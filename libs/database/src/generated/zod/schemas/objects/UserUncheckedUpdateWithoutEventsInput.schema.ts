import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumRoleFieldUpdateOperationsInputObjectSchema as EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TicketUncheckedUpdateManyWithoutUserNestedInputObjectSchema as TicketUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './TicketUncheckedUpdateManyWithoutUserNestedInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
        .optional(),
      email: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
        .optional(),
      name: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
        .optional(),
      password: z
        .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
        .optional(),
      role: z
        .union([RoleSchema, z.lazy(() => EnumRoleFieldUpdateOperationsInputObjectSchema)])
        .optional(),
      createdAt: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
        .optional(),
      updatedAt: z
        .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
        .optional(),
      tickets: z.lazy(() => TicketUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    })
    .strict();
export const UserUncheckedUpdateWithoutEventsInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutEventsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateWithoutEventsInput>;
export const UserUncheckedUpdateWithoutEventsInputObjectZodSchema = makeSchema();
