import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutTicketsInputObjectSchema as UserCreateWithoutTicketsInputObjectSchema } from './UserCreateWithoutTicketsInput.schema';
import { UserUncheckedCreateWithoutTicketsInputObjectSchema as UserUncheckedCreateWithoutTicketsInputObjectSchema } from './UserUncheckedCreateWithoutTicketsInput.schema';
import { UserCreateOrConnectWithoutTicketsInputObjectSchema as UserCreateOrConnectWithoutTicketsInputObjectSchema } from './UserCreateOrConnectWithoutTicketsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTicketsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTicketsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTicketsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutTicketsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTicketsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutTicketsInput>;
export const UserCreateNestedOneWithoutTicketsInputObjectZodSchema = makeSchema();
