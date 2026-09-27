import { env } from '../config/env'

export const getUsers = async(): Promise<unknown> => {
    const response = await fetch(`${env.userServiceUrl}/users`);

    const data: unknown = await response.json();

    return data;
}