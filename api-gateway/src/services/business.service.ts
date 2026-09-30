import { env } from '../config/env'
import { serviceRequest } from './service-client';

export const getBusinessService = async(): Promise<unknown> => {
    return serviceRequest(
        `${env.businessServiceUrl}/business`
    );
}