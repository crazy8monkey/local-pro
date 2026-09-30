import { env } from '../config/env'
import { serviceRequest } from './service-client';

export const getSearchService = async(): Promise<unknown> => {
    return serviceRequest(
        `${env.searchServiceUrl}/search`
    );
}