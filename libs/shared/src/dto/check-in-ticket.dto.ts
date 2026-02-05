import { createZodDto } from 'nestjs-zod';
import { TicketCreateInputObjectZodSchema } from '@app/database';

export const CheckInTicketSchema = TicketCreateInputObjectZodSchema.pick({
  ticketCode: true,
});

export class CheckInTicketDto extends createZodDto(CheckInTicketSchema) {}
