import * as z from 'zod';
import { EventStatusSchema } from '../../enums/EventStatus.schema';
// prettier-ignore
export const EventModelSchema = z.object({
    id: z.uuid(),
    title: z.string(),
    description: z.string().nullable(),
    date: z.date(),
    location: z.string(),
    capacity: z.number().int(),
    price: z.number().int(),
    status: EventStatusSchema,
    organizerId: z.uuid(),
    organizer: z.unknown(),
    tickets: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type EventPureType = z.infer<typeof EventModelSchema>;
