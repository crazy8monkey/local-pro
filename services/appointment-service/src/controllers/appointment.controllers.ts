import { type NextFunction, type Request, type Response} from 'express';
import type { Appointment } from '../types/appointment.type';
import {
    getAppointmentList as getApointmentListService,
    getAppointmentbyId as getAppointmentbyIdService,
    getAppointmentbyUser as getAppointmentbyUserService,
    getAppointmentbyBusiness as getAppointmentbyBusinessService,
    validateAppointmentAccess
} from '../services/appointment.services'
import { appointIdSchema, createApointmentSchema, updateApointmentStatusSchema } from '../schema/appointment.validator';
import { ApiError, getValidationErrors, type ApiErrorField } from '@localpro/error';
import { logger } from '@localpro/logger';
import type { AuthenticatedUser } from '@localpro/authorization';

export const getAppointmentService = (
    _req:Request, res:Response
): void => {
    res.status(200).json({
        name: "LocalPro API",
        version: "1.0.0",
        service: "appointment-service"
    })
}


export const getAllAppointmentList = async(
    req:Request, 
    res:Response,
    next:NextFunction
): Promise<void> => {
    try {
        const appointments:Appointment[] = await getApointmentListService();
        res.status(200).json(appointments)
    } catch(error) {
        next(error);
    }
}

export const createAppointment = async(
    req:Request, 
    res:Response,
    next:NextFunction
):Promise<void> => {
    try {
        const result = createApointmentSchema.safeParse(req.body);
        if(!result.success) {
            const errors:ApiErrorField[] = getValidationErrors(result.error.issues);
            next(new ApiError(400, "Validation Failed", errors));
            return;
        }

        res.status(201).json(req.body);
    } catch(error) {
        next(error)
    }
}

export const getAppointmentByUser = async(
    req:Request, 
    res:Response,
    next:NextFunction
):Promise<void> => {
    try {
        const { userId } = req.params;
        logger.info(`User Id ${userId}`);

        const appointment:Appointment[] = await getAppointmentbyUserService(Number(userId));
        if(!appointment) {
            next(new ApiError(404, "Appointment not found", []));
            return;
        }
        res.status(200).json(appointment)
    } catch(error) {
        next(error)
    }
}

export const getAppointmentByBusiness = async(
    req:Request, 
    res:Response,
    next:NextFunction
):Promise<void> => {
    try {
        const { businessId } = req.params;
        logger.info(`Business Id ${businessId}`);

        const appointment:Appointment[] = await getAppointmentbyBusinessService(Number(businessId));
        if(!appointment) {
            next(new ApiError(404, "Appointment not found", []));
            return;
        }
        res.status(200).json(appointment)
    } catch(error) {
        next(error)
    }
}

export const getAppointmentId = async(
    req:Request, 
    res:Response,
    next:NextFunction
):Promise<void> => {
    try {
        const authenticatedUser = res.locals.auth as AuthenticatedUser;

        const result = appointIdSchema.safeParse(req.params);
         if(!result.success) {
            const errors:ApiErrorField[] = getValidationErrors(result.error.issues);
            next(new ApiError(400, "Validation Failed", errors));
            return;
        }
        
        const appointment:Appointment | undefined = await getAppointmentbyIdService(
            result.data.appointmentId
        );

        if(!appointment) {
            next(new ApiError(404, "Appointment not found", []));
            return;
        }

        if(!validateAppointmentAccess(appointment, authenticatedUser)) {
            next(new ApiError(403, "You are not authorized to access this appointment", []));
            return;
        }

        res.status(200).json(appointment)
    } catch(error) {
        next(error)
    }
}

export const updateAppointmentStatus = async(
    req:Request, 
    res:Response,
    next:NextFunction
):Promise<void> => {
    try {
        const authenticatedUser = res.locals.auth as AuthenticatedUser;

        const result = appointIdSchema.safeParse(req.params);
         if(!result.success) {
            const errors:ApiErrorField[] = getValidationErrors(result.error.issues);
            next(new ApiError(400, "Validation Failed", errors));
            return;
        }

        const statusValidation = updateApointmentStatusSchema.safeParse(req.body);

        if(!statusValidation.success) {
            const errors:ApiErrorField[] = getValidationErrors(statusValidation.error.issues);
            next(new ApiError(400, "Validation Failed", errors));
            return;
        }
        
        const appointment:Appointment | undefined = await getAppointmentbyIdService(
            result.data.appointmentId
        );

        if(!appointment) {
            next(new ApiError(404, "Appointment not found", []));
            return;
        }

        if(!validateAppointmentAccess(appointment, authenticatedUser)) {
            next(new ApiError(403, "You are not authorized to access this appointment", []));
            return;
        }

        res.status(200).json(appointment)
    } catch(error) {
        next(error)
    }
}


export const deleteAppointment = async(
    req:Request, 
    res:Response,
    next:NextFunction
):Promise<void> => {
    try {
        const authenticatedUser = res.locals.auth as AuthenticatedUser;

        const result = appointIdSchema.safeParse(req.params);
         if(!result.success) {
            const errors:ApiErrorField[] = getValidationErrors(result.error.issues);
            next(new ApiError(400, "Validation Failed", errors));
            return;
        }
        
        const appointment:Appointment | undefined = await getAppointmentbyIdService(
            result.data.appointmentId
        );

        if(!appointment) {
            next(new ApiError(404, "Appointment not found", []));
            return;
        }

        if(!validateAppointmentAccess(appointment, authenticatedUser)) {
            next(new ApiError(403, "You are not authorized to access this appointment", []));
            return;
        }

        res.status(204).send()
    } catch(error) {
        next(error)
    }
}
