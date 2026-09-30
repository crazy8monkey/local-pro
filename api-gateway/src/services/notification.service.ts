import { env } from '../config/env'
import { serviceRequest } from './service-client';

export const getNotificationService = async(): Promise<unknown> => {
    return serviceRequest(
        `${env.notificationServiceUrl}/notification`
    );
}