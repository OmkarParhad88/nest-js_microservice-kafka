import * as z from 'zod';

export const EventScalarFieldEnumSchema = z.enum(['id', 'title', 'description', 'date', 'location', 'capacity', 'price', 'status', 'organizerId', 'createdAt', 'updatedAt'])

export type EventScalarFieldEnum = z.infer<typeof EventScalarFieldEnumSchema>;