import { env } from '../config/env'

export const getReviewService = async(): Promise<unknown> => {
    const response = await fetch(`${env.reviewServiceUrl}/review`);

    const data: unknown = await response.json();

    return data;
}