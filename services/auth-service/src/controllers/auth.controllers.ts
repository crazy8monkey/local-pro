import { type NextFunction, type Request, type Response} from 'express';
import { loginSchema, registerSchema } from '../schema/auth.validator';
import { ApiError, type ApiErrorField } from '@localpro/error'; 
import bcrypt from 'bcryptjs';
import { env } from '../config/env';
import jwt from 'jsonwebtoken';


export const register = async(
    req:Request, 
    res:Response,
    next:NextFunction
): Promise<void> => {
    //validate schema
    const result = registerSchema.safeParse(req.body);
    if(!result.success) {
        const errors:ApiErrorField[] = result.error.issues.map(
            (issue) => ({
                message: issue.message,
                filed: issue.path.join(".")
            })
        )
        next(new ApiError(
            400,
            "Register Validation Failed",
            errors
        ))
    }

    const passwordHash = await bcrypt.hash(
        req.body.password,
        env.bcryptSaltRounds
    )

    const payload = {
        email: req.body.email,
        role: "admin"
    }

    const token = jwt.sign(payload, env.jwtSecret as string, {
        algorithm: "HS256",
        subject: req.body.email,
        expiresIn: env.accessTokenExpiresIn,
        issuer: env.issuer,
        audience: env.audience
    })

    res.status(200).json({
        token
    })
}

export const login = async(
    req:Request, 
    res:Response,
    next:NextFunction
): Promise<void> => {
        //validate schema
    const result = loginSchema.safeParse(req.body);
    if(!result.success) {
        const errors:ApiErrorField[] = result.error.issues.map(
            (issue) => ({
                message: issue.message,
                filed: issue.path.join(".")
            })
        )
        next(new ApiError(
            400,
            "Register Validation Failed",
            errors
        ))
    }

    const passwordHash = await bcrypt.hash(
        req.body.password,
        env.bcryptSaltRounds
    )

    const payload = {
        email: req.body.email,
        role: "admin"
    }

    const token = jwt.sign(payload, env.jwtSecret as string, {
        algorithm: "HS256",
        subject: req.body.email,
        expiresIn: env.accessTokenExpiresIn,
        issuer: env.issuer,
        audience: env.audience
    })

    res.status(200).json({
        token
    })
}

export const currentSession = (
    req:Request, 
    res:Response,
    next:NextFunction
): void => {
    const payload = {
        email: req.body.email,
        role: "admin"
    }

    const token = jwt.sign(payload, env.jwtSecret as string, {
        algorithm: "HS256",
        subject: req.body.email,
        expiresIn: env.accessTokenExpiresIn,
        issuer: env.issuer,
        audience: env.audience
    })

    res.status(200).json({
        token
    })
}