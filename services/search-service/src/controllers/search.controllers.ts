import {type Express, type NextFunction, type Request, type Response} from 'express';
import { businessIdSchema, searchQuerySchema } from '../schema/search.validator';
import { ApiError, getValidationErrors, type ApiErrorField } from '@localpro/error';
import type { SearchBusiness } from '../types/search.types';
import {
    getSearchBusinesResults as getSearchBusinesResultsService,
    getBusinessById as getBusinessByIdService
} from '../services/search.services'

export const getSearchService = (
    _req:Request, res:Response
): void => {
    res.status(200).json({
        name: "LocalPro API",
        version: "1.0.0",
        service: "review-service"
    })
}


export const searchBusinesses = async(
    req:Request, 
    res:Response,
    next:NextFunction
):Promise<void> => {
    const result = searchQuerySchema.safeParse(req.query);
    if(!result.success) {
        const errors:ApiErrorField[] = getValidationErrors(result.error.issues);
        next(
            new ApiError(
                400,
                "Invalid Search Parameters",
                errors
            )
        )
        return;
    }

    const businesses:SearchBusiness[] = await getSearchBusinesResultsService(result.data);
    res.status(200).json(businesses);
}


export const getBusinessById = async(
    req:Request, 
    res:Response,
    next:NextFunction
):Promise<void> => {
    const result = businessIdSchema.safeParse(req.params);
    if(!result.success) {
        const errors:ApiErrorField[] = getValidationErrors(result.error.issues);
        next(
            new ApiError(
                400,
                "Invalid business id",
                errors
            )
        )
        return;
    }

    const business: SearchBusiness | undefined = await getBusinessByIdService(
        result.data.businessId
    )

    if(!business) {
        next(
            new ApiError(
                404,
                "Business not found",
                []
            )
        )
        return;
    }
    res.status(200).json(business);

}