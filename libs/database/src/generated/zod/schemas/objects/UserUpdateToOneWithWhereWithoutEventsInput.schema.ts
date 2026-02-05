import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutEventsInputObjectSchema as UserUpdateWithoutEventsInputObjectSchema } from './UserUpdateWithoutEventsInput.schema';
import { UserUncheckedUpdateWithoutEventsInputObjectSchema as UserUncheckedUpdateWithoutEventsInputObjectSchema } from './UserUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutEventsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutEventsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutEventsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutEventsInput>;
export const UserUpdateToOneWithWhereWithoutEventsInputObjectZodSchema = makeSchema();
