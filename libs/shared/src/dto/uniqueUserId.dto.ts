import { createZodDto } from 'nestjs-zod';
import { EventWhereUniqueInputObjectZodSchema } from '@app/database';

export class UniqueEventIdDto extends createZodDto(EventWhereUniqueInputObjectZodSchema) {}
