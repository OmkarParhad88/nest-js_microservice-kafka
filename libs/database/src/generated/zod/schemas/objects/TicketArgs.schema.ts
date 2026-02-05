import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TicketSelectObjectSchema as TicketSelectObjectSchema } from './TicketSelect.schema';
import { TicketIncludeObjectSchema as TicketIncludeObjectSchema } from './TicketInclude.schema';

const makeSchema = () =>
  z
    .object({
      select: z.lazy(() => TicketSelectObjectSchema).optional(),
      include: z.lazy(() => TicketIncludeObjectSchema).optional(),
    })
    .strict();
export const TicketArgsObjectSchema = makeSchema();
export const TicketArgsObjectZodSchema = makeSchema();
