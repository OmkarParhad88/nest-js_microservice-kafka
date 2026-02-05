import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumRoleFieldUpdateOperationsInputObjectSchema as EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { EventUpdateManyWithoutOrganizerNestedInputObjectSchema as EventUpdateManyWithoutOrganizerNestedInputObjectSchema } from './EventUpdateManyWithoutOrganizerNestedInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z
        .union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
        .optional(),
      email: z
        .union([z.email().max(191), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
        .optional(),
      name: z
        .union([z.string().max(191), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
        .optional(),
      password: z
        .union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
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
      events: z.lazy(() => EventUpdateManyWithoutOrganizerNestedInputObjectSchema).optional(),
    })
    .strict();
export const UserUpdateWithoutTicketsInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutTicketsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutTicketsInput>;
export const UserUpdateWithoutTicketsInputObjectZodSchema = makeSchema();
