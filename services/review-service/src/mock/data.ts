import type { Review } from "../type/review.types";

export const reviews: Review[] = [
  {
    id: 1,
    userId: 1,
    businessId: 1,
    rating: 5,
    comment: "Excellent service and friendly staff.",
    createdAt: "2026-10-20T12:00:00.000Z",
    updatedAt: "2026-10-20T12:00:00.000Z"
  },
  {
    id: 2,
    userId: 1,
    businessId: 1,
    rating: 4,
    comment: "Good experience and reasonable prices.",
    createdAt: "2026-10-21T14:00:00.000Z",
    updatedAt: "2026-10-21T14:00:00.000Z"
  },
  {
    id: 3,
    userId: 1,
    businessId: 1,
    rating: 3,
    comment: "The service was fine, but there is room to improve.",
    createdAt: "2026-10-22T09:00:00.000Z",
    updatedAt: "2026-10-22T09:00:00.000Z"
  }
];