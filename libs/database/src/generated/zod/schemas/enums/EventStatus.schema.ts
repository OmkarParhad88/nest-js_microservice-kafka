import * as z from 'zod';

export const EventStatusSchema = z.enum(['DRAFT', 'PUBLISHED', 'CANCELLED']);

export type EventStatus = z.infer<typeof EventStatusSchema>;
