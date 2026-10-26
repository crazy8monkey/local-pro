import { z } from 'zod';

export const searchQuerySchema = z.object({
    q: z.string().trim().max(100).optional(),
    category: z.string().trim().min(1).max(50).optional(),
    limit: z.coerce.number().int().min(1).max(50).default(10)
});

export const businessIdSchema = z.object({
    businessId: z.string().trim().min(1)
});

export type SearchQuery = z.infer<typeof searchQuerySchema>;