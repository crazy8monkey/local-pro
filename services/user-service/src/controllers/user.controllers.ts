import { type NextFunction, type Request, type Response } from 'express';
import { 
    getUsers as getUserListService,
    getUser as getUserService 
} from '../services/user.services';
import { logger } from '@localpro/logger';  
import { ApiError, type ApiErrorField } from '@localpro/error'; 
import { createUserSchema, updateUserSchema, type CreateUserInput } from '../schema/user.validator';


export const getUsers = async(
    req: Request, res:Response
): Promise<void> => {

    const users = await getUserListService();

    res.status(200).json(users)
};

export const getUser = async(
    req: Request, res:Response
): Promise<void> => {

    const user = await getUserService();

    res.status(200).json(user)
};

export const createUser = async(
    req: Request, 
    res:Response,
    next:NextFunction
): Promise<void> => {
    const result = createUserSchema.safeParse(req.body)

    if(!result.success) {
        const errors:ApiErrorField[] = result.error.issues.map(
            (issue) => ({
                message: issue.message,
                field: issue.path.join(".")
            })
        )

        next(new ApiError(
            400, 
            "Request Validation Failed",
            errors
        ));
    }
    
    const { firstName, lastName, email } = req.body;
    const response = { firstName, lastName, email };

    logger.info(`${response}`);

    res.status(201).json(response);
}

export const updateUser = async(
    req: Request, 
    res:Response,
    next:NextFunction
): Promise<void> => {   
    // grabbing user id -> req.params.id
    const result = updateUserSchema.safeParse(req.body);

    if(!result.success) {
        const errors:ApiErrorField[] = result.error.issues.map(
            (issue) => ({
                message: issue.message,
                field: issue.path.join(".")
            })
        )

        next(new ApiError(
            400, 
            "Request Validation Failed",
            errors
        ));
    }

    const { firstName, lastName, email } = req.body;
    const response = { 
        ...(firstName !== undefined && {firstName }), 
        ...(lastName !== undefined && {lastName }), 
        ...(email !== undefined && {email }), 
    };

    logger.info(`${response}`);

    res.status(200).json(response);
}

export const removeUser = async(
    req: Request, res:Response
): Promise<void> => {   
    // grabbing user id -> req.params.id

    res.status(204).json({
        success: true
    });
}