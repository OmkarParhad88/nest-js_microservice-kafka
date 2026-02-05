import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTicketsInputObjectSchema as UserCreateWithoutTicketsInputObjectSchema } from './UserCreateWithoutTicketsInput.schema';
import { UserUncheckedCreateWithoutTicketsInputObjectSchema as UserUncheckedCreateWithoutTicketsInputObjectSchema } from './UserUncheckedCreateWithoutTicketsInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutTicketsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutTicketsInputObjectSchema),
      ]),
    })
    .strict();
export const UserCreateOrConnectWithoutTicketsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTicketsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutTicketsInput>;
export const UserCreateOrConnectWithoutTicketsInputObjectZodSchema = makeSchema();
