import { createZodDto } from 'nestjs-zod';
import { TicketInputSchema } from '@app/database';

export const PurchaseTicketSchema = TicketInputSchema.pick({
  eventId: true,
  quantity: true,
});

export class PurchaseTicketDto extends createZodDto(PurchaseTicketSchema) {}
