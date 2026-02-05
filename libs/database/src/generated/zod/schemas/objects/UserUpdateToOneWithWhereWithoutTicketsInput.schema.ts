import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutTicketsInputObjectSchema as UserUpdateWithoutTicketsInputObjectSchema } from './UserUpdateWithoutTicketsInput.schema';
import { UserUncheckedUpdateWithoutTicketsInputObjectSchema as UserUncheckedUpdateWithoutTicketsInputObjectSchema } from './UserUncheckedUpdateWithoutTicketsInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => UserWhereInputObjectSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutTicketsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutTicketsInputObjectSchema),
      ]),
    })
    .strict();
export const UserUpdateToOneWithWhereWithoutTicketsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTicketsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTicketsInput>;
export const UserUpdateToOneWithWhereWithoutTicketsInputObjectZodSchema = makeSchema();
