import { appointments } from "../mock/data";
import type { Appointment } from "../types/appointment.type";

export const findAll = async():Promise<Appointment[]> => {
    return appointments
}

export const findById = async(
    appointmentId: number
): Promise<Appointment | undefined> => {
    return appointments.find((appointment: Appointment) => appointment.id === appointmentId);
}

export const findByUserId = async(
    userId: number
): Promise<Appointment[]> => {
    return appointments.filter((appointment: Appointment) => appointment.userId === userId);
}

export const findByBusinessId = async(
    businessId: number
): Promise<Appointment[]> => {
    return appointments.filter((appointment: Appointment) => appointment.businessId === businessId);
}

//update
//create
//delete