import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { EventUncheckedCreateNestedManyWithoutOrganizerInputObjectSchema as EventUncheckedCreateNestedManyWithoutOrganizerInputObjectSchema } from './EventUncheckedCreateNestedManyWithoutOrganizerInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  name: z.string(),
  password: z.string(),
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  events: z.lazy(() => EventUncheckedCreateNestedManyWithoutOrganizerInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutTicketsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutTicketsInput>;
export const UserUncheckedCreateWithoutTicketsInputObjectZodSchema = makeSchema();
