import { createZodDto } from 'nestjs-zod';
import { UserCreateInputObjectZodSchema } from '@app/database';

export class CreateUserDto extends createZodDto(
  UserCreateInputObjectZodSchema,
) {}
