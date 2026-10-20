import { AuthenticatedUser, UserRole } from "./authorize-roles.types.js";
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ApiError } from '@localpro/error';

export const authorizeRoles = (
    ...allowedRoles:UserRole[]
): RequestHandler => {
    return (
        req: Request,
        res: Response,
        next:NextFunction
    ) : void => {
        const authenticatedUser = res.locals.auth as AuthenticatedUser | null;

        if(!authenticatedUser) {
            next(
                new ApiError(
                    401, 
                    "Authentication is required",
                    []
                )
            )
            return;
        }

        if(!allowedRoles.includes(authenticatedUser.role)) {
            next(
                new ApiError(
                    403,
                    "You do not have permission to access this resource",
                    []
                )
            )
            return;
        }
        next();
    }
}