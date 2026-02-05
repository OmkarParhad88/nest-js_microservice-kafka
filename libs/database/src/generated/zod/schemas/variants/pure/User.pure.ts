import * as z from 'zod';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserModelSchema = z.object({
    id: z.uuid(),
    email: z.email(),
    name: z.string(),
    password: z.string(),
    role: RoleSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    events: z.array(z.unknown()),
    tickets: z.array(z.unknown())
}).strict();

export type UserPureType = z.infer<typeof UserModelSchema>;
