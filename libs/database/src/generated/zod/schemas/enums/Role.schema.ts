import * as z from 'zod';

export const RoleSchema = z.enum(['USER', 'ORGANIZER', 'ADMIN'])

export type Role = z.infer<typeof RoleSchema>;