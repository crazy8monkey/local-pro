import { env } from '../config/env'
import { serviceRequest } from './service-client';

export const getPaymentService = async(): Promise<unknown> => {
    return serviceRequest(
       `${env.paymentServiceUrl}/payment`
    );
}