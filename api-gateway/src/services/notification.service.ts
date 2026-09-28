import { env } from '../config/env'

export const getNotificationService = async(): Promise<unknown> => {
    const response = await fetch(`${env.notificationServiceUrl}/notification`);

    const data: unknown = await response.json();

    return data;
}