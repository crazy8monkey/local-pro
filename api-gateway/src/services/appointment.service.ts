import { env } from '../config/env'

export const getAppointmentService = async(): Promise<unknown> => {
    const response = await fetch(`${env.appointmentServiceUrl}/appointment`);

    const data: unknown = await response.json();

    return data;
}