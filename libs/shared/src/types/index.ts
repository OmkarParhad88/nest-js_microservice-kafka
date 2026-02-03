import { LoginSchema } from '@app/shared';
import { CreateEventSchema, CreateUserSchema } from '@app/shared/dto';
import z from 'zod';

export type CreateEventType = z.infer<typeof CreateEventSchema>;
export type CreateUserType = z.infer<typeof CreateUserSchema>;
export type LoginType = z.infer<typeof LoginSchema>;
