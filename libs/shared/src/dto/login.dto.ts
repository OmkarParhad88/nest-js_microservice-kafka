import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const LoginSchema = z.strictObject({
  name: z
    .string({ error: 'Name must be a string' })
    .max(191, { error: 'Name must be at most 191 characters long' })
    .trim(),
  email: z
    .email({ error: 'Email must be a valid email' })
    .max(191, { error: 'Email must be at most 191 characters long' })
    .trim(),
  password: z
    .string({ error: 'Password must be a string' })
    .min(8, { error: 'Password must be at least 8 characters long' })
    .max(255, { error: 'Password must be at most 255 characters long' })
    .trim(),
});

export class LoginDto extends createZodDto(LoginSchema) {}
export type LoginType = z.infer<typeof LoginSchema>;
