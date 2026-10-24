import { type NextFunction, type Request, type Response} from 'express';
import type { Business } from '../types/business.types';
import { 
    getBusinessList as getBusinessListService,
    getBusiness as getBusinessService
} from '../services/business.services';
import { logger } from '@localpro/logger';
import { ApiError, getValidationErrors, type ApiErrorField } from '@localpro/error'
import { createBusinessSchema, updateBusinessSchema } from '../schema/business.validator';

export const getBusinessList = async(
    req: Request, 
    res:Response,
    next:NextFunction
) => {
    try {
        const businesses:Business[] = await getBusinessListService();
        res.status(200).json(businesses);
    } catch(error) {
        next(error)
    }
}

export const getBusiness = async(
    req: Request, 
    res:Response,
    next:NextFunction
) => {
    try {
        //will use alter
        const { id } = req.params;
        logger.info(`Business Id ${id}`);

        const business:Business = await getBusinessService();
        if(!business) {
            next(new ApiError(
                404,
                "Business not found",
                []
            ))
        }
        res.status(200).json(business)
    } catch(error) {
        next(error)
    }
}

export const createBusiness = async(
    req: Request, 
    res:Response,
    next:NextFunction
) => {
    try {
        const result = createBusinessSchema.safeParse(req.body);
        if(!result.success) {
            const errors:ApiErrorField[] = getValidationErrors(result.error.issues);
            next(
                new ApiError(
                    400,
                    "Validation Failed",
                    errors
                )
            )
        }

        logger.info(`${req.body}`);
        res.status(201).json(req.body);
    } catch(error) {
        next(error);
    }
}


export const updateBusiness = async(
    req: Request, 
    res:Response,
    next:NextFunction
) => {
    try {
        //will use alter
        const { id } = req.params;
        logger.info(`Business Id ${id}`);

        const result = updateBusinessSchema.safeParse(req.body);
        if(!result.success) {
            const errors:ApiErrorField[] = getValidationErrors(result.error.issues);
            next(
                new ApiError(
                    400,
                    "Validation Failed",
                    errors
                )
            )
        }

        //make db call here
        logger.info(`${req.body}`);
        res.status(200).json(req.body);
    } catch(error) {
        next(error)
    }
    
}


export const removeBusiness = async(
    req: Request, 
    res:Response,
    next:NextFunction
) => {
    try {
        //will use alter
        const { id } = req.params;
        logger.info(`Business Id ${id}`);

        res.status(204).send();
    } catch(error) {
        next(error)
    }
}
