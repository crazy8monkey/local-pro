import type { ErrorRequestHandler, Request, Response } from "express";
import { logger } from "@localpro/logger";
import { ApiError } from "../errors/api.error";


export const errorMiddleWare: ErrorRequestHandler = (
    error:unknown,
    req:Request,
    res: Response,
    _next:unknown
): void => {
    if(error instanceof ApiError) {
        res.status(error.statusCode).json({
            message: error.message,
            requestId: req.requestId
        });

        return
    }

    logger.error(`Unexpected API error: [${req.requestId}] ${error}`)

    res.status(500).json({
        message: "Internal Server Error",
        requestId: req.requestId
    })
}