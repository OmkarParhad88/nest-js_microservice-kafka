import { createZodDto } from 'nestjs-zod';
import { UserCreateInputObjectZodSchema } from '@app/database';

export const LoginSchema = UserCreateInputObjectZodSchema.omit({
  id: true,
  createdAt: true,
  events: true,
  role: true,
});

export class LoginDto extends createZodDto(LoginSchema) {}
