import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutEventsInputObjectSchema as UserCreateWithoutEventsInputObjectSchema } from './UserCreateWithoutEventsInput.schema';
import { UserUncheckedCreateWithoutEventsInputObjectSchema as UserUncheckedCreateWithoutEventsInputObjectSchema } from './UserUncheckedCreateWithoutEventsInput.schema';
import { UserCreateOrConnectWithoutEventsInputObjectSchema as UserCreateOrConnectWithoutEventsInputObjectSchema } from './UserCreateOrConnectWithoutEventsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

const makeSchema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutEventsInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutEventsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutEventsInputObjectSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();
export const UserCreateNestedOneWithoutEventsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutEventsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutEventsInput>;
export const UserCreateNestedOneWithoutEventsInputObjectZodSchema = makeSchema();
