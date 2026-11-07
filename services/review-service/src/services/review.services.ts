import { findAll, findbyBusinessId, findbyId, findbyUserId } from "../repositories/review.repositories";
import type { Review } from "../type/review.types";
import type { AuthenticatedUser} from '@localpro/authorization';


export const validateReviewAccess = (
    review:Review,
    user: AuthenticatedUser
): boolean => {
    if(user.role === "admin") {
        return true;
    }

    if(user.role === "business") {
        return (
            user.businessId !== undefined &&
            review.businessId === user.businessId
        )
    }

    return user.role === "user";
}

export const getAllReviews = async():Promise<Review[]> => {
    return await findAll();
}

export const getReviewbyId = async(
    reviewId:number
): Promise<Review | undefined> => {
    return await findbyId(reviewId);
}

export const getReviewbyBusiness = async(
    businessId:number
): Promise<Review[]> => {
    return await findbyBusinessId(businessId);
}


export const getReviewbyUser = async(
    userId:number
): Promise<Review[]> => {
    return await findbyUserId(userId);
}