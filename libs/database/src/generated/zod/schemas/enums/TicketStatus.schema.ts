import * as z from 'zod';

export const TicketStatusSchema = z.enum(['PENDING', 'CONFIRMED', 'CHECKED_IN', 'CANCELLED']);

export type TicketStatus = z.infer<typeof TicketStatusSchema>;
