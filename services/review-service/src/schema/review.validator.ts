import { z } from 'zod';

export const createReviewSchema = z.object({
    businessId:z.number().min(1),
    rating: z.number().int().min(1).max(5),
    comment: z.string().trim().min(1).max(2000)
});

export const updateReviewSchema = z.object({
    rating: z.number().int().min(1).max(5).optional(),
    comment: z.string().trim().min(1).max(2000).optional()
}).refine(
    (data) => data.rating !== undefined || data.comment !== undefined,
    {
        message: "At least one field must er provided",
        path: ["rating"]
    }
);

export const reviewIdSchema = z.object({
    reviewId: z.coerce.number().min(1)
});

export const businessIdSchmea = z.object({
    businessId: z.coerce.number().min(1)
});

export const userIdSchema = z.object({
    userId: z.coerce.number().min(1)
});

export type CreateReviewInput = z.infer<
    typeof createReviewSchema
>;

export type UpdateReviewInput = z.infer<
    typeof updateReviewSchema
>;