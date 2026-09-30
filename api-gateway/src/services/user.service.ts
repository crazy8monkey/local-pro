import { env } from '../config/env'
import { serviceRequest } from './service-client';

export const getUsers = async(): Promise<unknown> => {
    return serviceRequest(
        `${env.userServiceUrl}/users`
    );
}