import { env } from '../config/env'

export const getBusinessService = async(): Promise<unknown> => {
    const response = await fetch(`${env.businessServiceUrl}/business`);

    const data: unknown = await response.json();

    return data;
}