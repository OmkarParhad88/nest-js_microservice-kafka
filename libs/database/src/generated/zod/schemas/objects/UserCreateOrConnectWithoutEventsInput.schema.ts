import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutEventsInputObjectSchema as UserCreateWithoutEventsInputObjectSchema } from './UserCreateWithoutEventsInput.schema';
import { UserUncheckedCreateWithoutEventsInputObjectSchema as UserUncheckedCreateWithoutEventsInputObjectSchema } from './UserUncheckedCreateWithoutEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutEventsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutEventsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutEventsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutEventsInput>;
export const UserCreateOrConnectWithoutEventsInputObjectZodSchema = makeSchema();
