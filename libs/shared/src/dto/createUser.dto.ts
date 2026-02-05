import { createZodDto } from 'nestjs-zod';
import { UserCreateInputObjectZodSchema } from '@app/database';

export const CreateUserSchema = UserCreateInputObjectZodSchema.omit({
  createdAt: true,
  id: true,
  events: true,
  role: true,
});

export class CreateUserDto extends createZodDto(CreateUserSchema) {}
