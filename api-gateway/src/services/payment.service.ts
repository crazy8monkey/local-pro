import { env } from '../config/env'

export const getPaymentService = async(): Promise<unknown> => {
    const response = await fetch(`${env.paymentServiceUrl}/payment`);

    const data: unknown = await response.json();

    return data;
}