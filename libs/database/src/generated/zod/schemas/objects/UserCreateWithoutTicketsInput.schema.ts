import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { EventCreateNestedManyWithoutOrganizerInputObjectSchema as EventCreateNestedManyWithoutOrganizerInputObjectSchema } from './EventCreateNestedManyWithoutOrganizerInput.schema'

const makeSchema = () => z.object({
  id: z.uuid().optional(),
  email: z.email().max(191),
  name: z.string().max(191),
  password: z.string().max(255),
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  events: z.lazy(() => EventCreateNestedManyWithoutOrganizerInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutTicketsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutTicketsInput>;
export const UserCreateWithoutTicketsInputObjectZodSchema = makeSchema();
