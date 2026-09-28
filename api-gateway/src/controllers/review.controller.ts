import { type Request, type Response} from 'express';
import { getReviewService } from '../services/review.service';


export const getReview = async(
    _req:Request,
    res:Response
): Promise<void> => {
    const reviewService = await getReviewService();

    res.status(200).json(reviewService);
}