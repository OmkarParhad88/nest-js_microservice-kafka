import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { TicketCreateNestedManyWithoutUserInputObjectSchema as TicketCreateNestedManyWithoutUserInputObjectSchema } from './TicketCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.uuid().optional(),
  email: z.email().max(191),
  name: z.string().max(191),
  password: z.string().max(255),
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tickets: z.lazy(() => TicketCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutEventsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutEventsInput>;
export const UserCreateWithoutEventsInputObjectZodSchema = makeSchema();
