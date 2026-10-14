import { ApiError } from "@localpro/error";
import type { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import type { AccessTokenPayload } from "../types/access-token.type";
import type { AuthenticatedUser } from "../types/authenticated-user.type";

export const authMiddleware = (
    req:Request,
    res: Response,
    next:NextFunction
): void => {
    try {
        const authorization = req.headers.authorization;
        if(!authorization?.startsWith("Bearer ")) {
            throw new ApiError(
                401,
                "Authentication token is required",
                []                
            )
        }
        

        const token = authorization?.slice("Bearer ".length).trim();

        if(!token) {
            throw new ApiError(
                401,
                "Authentication token is required",
                []                
            )
        }

        const decoded = jwt.decode(token);

        if(typeof decoded === "string" || decoded == null) {
            throw new ApiError(
                401,
                "Invalid authentication token",
                []                
            )
        }

        const payload = decoded as AccessTokenPayload;
        if(
            typeof payload.sub !== "string" ||
            !["user", "admin", "business"].includes(payload.role as string)
        ) {
            throw new ApiError(
                401,
                "Invalid authentication token",
                []                
            )
        }

        const authenticationUser:AuthenticatedUser = {
            id: payload.sub,
            role: payload.role
        }

        res.locals.auth = authenticationUser;

        req.headers["x-auth-user_id"] = authenticationUser.id;
        req.headers["x-auth-user-role"] = authenticationUser.role;

        next();
    } catch(error) {
        if(error instanceof ApiError) {
            next(error);
            return;
        }

        if(error instanceof jwt.JsonWebTokenError) {
            next(
                new ApiError(
                    401,
                    "Invalid or expired authentication token",
                    []
                )
            )
        }
    }
}