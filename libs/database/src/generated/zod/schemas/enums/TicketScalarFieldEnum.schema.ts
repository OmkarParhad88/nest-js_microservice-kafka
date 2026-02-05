import * as z from 'zod';

export const TicketScalarFieldEnumSchema = z.enum(['id', 'eventId', 'userId', 'status', 'quantity', 'totalPrice', 'ticketCode', 'purchasedAt', 'checkedInAt', 'createdAt', 'updatedAt'])

export type TicketScalarFieldEnum = z.infer<typeof TicketScalarFieldEnumSchema>;