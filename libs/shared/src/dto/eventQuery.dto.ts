import { createZodDto } from 'nestjs-zod';
import { UserWhereUniqueInputObjectZodSchema } from '@app/database';

export class EventQueryDto extends createZodDto(UserWhereUniqueInputObjectZodSchema) { }
