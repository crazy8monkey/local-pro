import { env } from '../config/env'

export const getSearchService = async(): Promise<unknown> => {
    const response = await fetch(`${env.searchServiceUrl}/search`);

    const data: unknown = await response.json();

    return data;
}