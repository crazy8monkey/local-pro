import type { ErrorRequestHandler, Request, Response } from "express";
import { GatewayError } from "../errors/gateway.error";
import { logger } from "@localpro/logger";


export const errorMiddleWare: ErrorRequestHandler = (
    error:unknown,
    _req:Request,
    res: Response,
    _next:unknown
): void => {
    if(error instanceof GatewayError) {
        res.status(error.statusCode).json({
            error: {
                code: error.code,
                message: error.message
            }
        })

        return
    }

    logger.error(`Unexpected Gateway error: ${error}`)

    res.status(500).json({
        error: {
            code: "INTERNAL_SERVER_ERROR",
            message: "An unexpected error occured."
        }
    })
}