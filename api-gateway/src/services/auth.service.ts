import { env } from '../config/env'
import { serviceRequest } from './service-client';

export const getAuthService = async(): Promise<unknown> => {
    return serviceRequest(
        `${env.authServiceUrl}/auth`
    );
}