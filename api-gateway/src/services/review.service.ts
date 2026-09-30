import { env } from '../config/env'
import { serviceRequest } from './service-client';

export const getReviewService = async(): Promise<unknown> => {
    return serviceRequest(
        `${env.reviewServiceUrl}/review`
    );
}