import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutEventsInputObjectSchema as UserCreateWithoutEventsInputObjectSchema } from './UserCreateWithoutEventsInput.schema';
import { UserUncheckedCreateWithoutEventsInputObjectSchema as UserUncheckedCreateWithoutEventsInputObjectSchema } from './UserUncheckedCreateWithoutEventsInput.schema';
import { UserCreateOrConnectWithoutEventsInputObjectSchema as UserCreateOrConnectWithoutEventsInputObjectSchema } from './UserCreateOrConnectWithoutEventsInput.schema';
import { UserUpsertWithoutEventsInputObjectSchema as UserUpsertWithoutEventsInputObjectSchema } from './UserUpsertWithoutEventsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutEventsInputObjectSchema as UserUpdateToOneWithWhereWithoutEventsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutEventsInput.schema';
import { UserUpdateWithoutEventsInputObjectSchema as UserUpdateWithoutEventsInputObjectSchema } from './UserUpdateWithoutEventsInput.schema';
import { UserUncheckedUpdateWithoutEventsInputObjectSchema as UserUncheckedUpdateWithoutEventsInputObjectSchema } from './UserUncheckedUpdateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutEventsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutEventsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutEventsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutEventsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutEventsInputObjectSchema), z.lazy(() => UserUpdateWithoutEventsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutEventsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutEventsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutEventsNestedInput>;
export const UserUpdateOneRequiredWithoutEventsNestedInputObjectZodSchema = makeSchema();
