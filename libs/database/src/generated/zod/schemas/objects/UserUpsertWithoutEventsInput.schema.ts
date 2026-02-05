import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutEventsInputObjectSchema as UserUpdateWithoutEventsInputObjectSchema } from './UserUpdateWithoutEventsInput.schema';
import { UserUncheckedUpdateWithoutEventsInputObjectSchema as UserUncheckedUpdateWithoutEventsInputObjectSchema } from './UserUncheckedUpdateWithoutEventsInput.schema';
import { UserCreateWithoutEventsInputObjectSchema as UserCreateWithoutEventsInputObjectSchema } from './UserCreateWithoutEventsInput.schema';
import { UserUncheckedCreateWithoutEventsInputObjectSchema as UserUncheckedCreateWithoutEventsInputObjectSchema } from './UserUncheckedCreateWithoutEventsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutEventsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutEventsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutEventsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutEventsInputObjectSchema),
      ]),
      where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    })
    .strict();
export const UserUpsertWithoutEventsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutEventsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutEventsInput>;
export const UserUpsertWithoutEventsInputObjectZodSchema = makeSchema();
