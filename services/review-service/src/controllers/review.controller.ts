import { type NextFunction, type Request, type Response} from 'express';
import type { Review } from '../type/review.types';
import { 
    getAllReviews as getAllReviewsService,
    getReviewbyId as getReviewbyIdService,
    getReviewbyBusiness as getReviewbyBusinessService,
    getReviewbyUser as getReviewbyUserService,
    validateReviewAccess
} from '../services/review.services';
import { businessIdSchmea, createReviewSchema, reviewIdSchema, updateReviewSchema, userIdSchema } from '../schema/review.validator';
import { ApiError, getValidationErrors } from '@localpro/error';
import type { AuthenticatedUser} from '@localpro/authorization';


export const getReviews = async(
    req:Request, 
    res:Response,
    next:NextFunction
):Promise<void> => {
    try {
        const reviews: Review[] = await getAllReviewsService();
        res.status(200).json(reviews);
    } catch(error) {
        next(error)
    }
}

export const createReview = async(
    req:Request, 
    res:Response,
    next:NextFunction
): Promise<void> => {
    try {
        const result = createReviewSchema.safeParse(req.body);
        if(!result.success) {
            next(new ApiError(400, "Validation Failed", getValidationErrors(result.error.issues)));
            return
        }

        res.status(201).json(req.body);
    } catch(error) {
        next(error)
    }
}

export const getReviewbyId = async(
    req:Request, 
    res:Response,
    next:NextFunction
): Promise<void> => {
    try {
        const currentUser = res.locals.auth as AuthenticatedUser;

        const idResult = reviewIdSchema.safeParse(req.params);

        if(!idResult.success) {
            next(new ApiError(400, "Invalid review id", getValidationErrors(idResult.error.issues)));
            return
        }

        const review : Review | undefined = await getReviewbyIdService(idResult.data.reviewId);

        if(!review) {
             next(new ApiError(404, "Review Not found", []));
             return
        }

        res.status(200).json(review);
    } catch(error) {
        next(error)
    }
}



export const getReviewByBusiness = async(
     req:Request, 
    res:Response,
    next:NextFunction
):Promise<void> => {
    try {
        
        const idResult = businessIdSchmea.safeParse(req.params);

        if(!idResult.success) {
            next(new ApiError(400, "Invalid Business id", getValidationErrors(idResult.error.issues)));
            return
        }

        const reviews : Review[] = await getReviewbyBusinessService(idResult.data.businessId);

        res.status(200).json(reviews);
    } catch(error) {
        next(error)
    }

}


export const getReviewByUser = async(
    req:Request, 
    res:Response,
    next:NextFunction
):Promise<void> => {
    try {
        
        const idResult = userIdSchema.safeParse(req.params);

        if(!idResult.success) {
            next(new ApiError(400, "Invalid User id", getValidationErrors(idResult.error.issues)));
            return
        }

        const reviews : Review[] = await getReviewbyUserService(idResult.data.userId);

        res.status(200).json(reviews);
    } catch(error) {
        next(error)
    }
}

export const updateReview = async(
    req:Request, 
    res:Response,
    next:NextFunction
):Promise<void> => {
    try {
        const currentUserSession = res.locals.auth as AuthenticatedUser;
        
        const idResult = reviewIdSchema.safeParse(req.params);

        if(!idResult.success) {
            next(new ApiError(400, "Invalid Review id", []));
            return
        }

        const bodyresult = updateReviewSchema.safeParse(req.body);

        if(!bodyresult.success) {
            next(new ApiError(400, "Validation Failed", getValidationErrors(bodyresult.error.issues)));
            return
        }

        const review : Review | undefined = await getReviewbyIdService(idResult.data.reviewId);
        if(!review) {
            next(new ApiError(400, "Review not found", []));
            return
        }

        if(!validateReviewAccess(review, currentUserSession)) {
            next(new ApiError(403, "You can only update your on reviews", []));
            return
        }

        res.status(200).json(req.body);
    } catch(error) {
        next(error)
    }
}


export const deleteReview = async(
    req:Request, 
    res:Response,
    next:NextFunction
):Promise<void> => {
    try {
        const currentUserSession = res.locals.auth as AuthenticatedUser;
        
        const idResult = reviewIdSchema.safeParse(req.params);

        if(!idResult.success) {
            next(new ApiError(400, "Invalid Review id", []));
            return
        }

        const bodyresult = updateReviewSchema.safeParse(req.body);

        if(!bodyresult.success) {
            next(new ApiError(400, "Validation Failed", getValidationErrors(bodyresult.error.issues)));
            return
        }

        const review : Review | undefined = await getReviewbyIdService(idResult.data.reviewId);
        if(!review) {
            next(new ApiError(400, "Review not found", []));
            return
        }

        if(!validateReviewAccess(review, currentUserSession)) {
            next(new ApiError(403, "You can only delete your on reviews", []));
            return
        }

        res.status(204).send();
    } catch(error) {
        next(error)
    }
}