import { env } from '../config/env'
import { serviceRequest } from './service-client';

export const getAppointmentService = async(): Promise<unknown> => {
    return serviceRequest(
        `${env.appointmentServiceUrl}/appointment`
    );
}