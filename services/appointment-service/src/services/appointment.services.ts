import { findAll, findByBusinessId, findById, findByUserId } from "../repositories/appointment.repositories";
import type { Appointment } from "../types/appointment.type";
import type { AuthenticatedUser} from '@localpro/authorization'

export const getAppointmentList = async():Promise<Appointment[]> => {
    return await findAll();
}

export const getAppointmentbyId = async(
    appointmentId: number
):Promise<Appointment | undefined> => {
    return await findById(appointmentId);
}

export const getAppointmentbyUser = async(
    userId: number
):Promise<Appointment[]> => {
    return await findByUserId(userId);
}


export const getAppointmentbyBusiness = async(
    businessId: number
):Promise<Appointment[]> => {
    return await findByBusinessId(businessId);
}

export const validateAppointmentAccess = (
    appointment:Appointment,
    authenticatedUser:AuthenticatedUser
): boolean => {
    if(authenticatedUser.role === "admin") {
        return true;
    }

    if(authenticatedUser.role === "user") {
        return appointment.userId === authenticatedUser.userId
    }

    if(authenticatedUser.role === "business") {
        return (
            authenticatedUser.businessId !== undefined &&
            appointment.businessId === authenticatedUser.businessId
        );
    }

    return false;
}