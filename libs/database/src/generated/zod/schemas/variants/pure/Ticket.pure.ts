import * as z from 'zod';
import { TicketStatusSchema } from '../../enums/TicketStatus.schema';
// prettier-ignore
export const TicketModelSchema = z.object({
    id: z.uuid(),
    eventId: z.uuid(),
    event: z.unknown(),
    userId: z.uuid(),
    user: z.unknown(),
    status: TicketStatusSchema,
    quantity: z.number().int(),
    totalPrice: z.number().int(),
    ticketCode: z.string(),
    purchasedAt: z.date(),
    checkedInAt: z.date().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type TicketPureType = z.infer<typeof TicketModelSchema>;
