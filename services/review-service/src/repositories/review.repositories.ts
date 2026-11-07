import { reviews } from "../mock/data";
import type { Review } from "../type/review.types";

export const findAll = async():Promise<Review[]> => {
    return reviews
}

export const findbyId = async(
    reviewId:Number
):Promise<Review | undefined> => {
    return reviews.find((review: Review) => review.id === reviewId);
}

export const findbyUserId = async(
    userId:Number
):Promise<Review[]> => {
    return reviews.filter((review: Review) => review.userId === userId);
}

export const findbyBusinessId = async(
    businessId:Number
):Promise<Review[]> => {
    return reviews.filter((review: Review) => review.businessId === businessId);
};

//create
//update
//delete