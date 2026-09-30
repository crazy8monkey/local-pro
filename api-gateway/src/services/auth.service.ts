import { env } from '../config/env'

export const getAuthService = async(): Promise<unknown> => {
    const response = await fetch(`${env.authServiceUrl}/auth`);

    const data: unknown = await response.json();

    return data;
}