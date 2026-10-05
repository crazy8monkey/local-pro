import type { Request, Response, NextFunction } from "express";
import { randomUUID } from "node:crypto";

export const requestId = (
    req:Request,
    res:Response,
    next: NextFunction
): void => {
    const requestedIdHeader = "X-Requested-ID";

    const existingRequestedId = req.header(requestedIdHeader)

    const id = existingRequestedId ?? randomUUID();

    req.requestId = id;

    res.setHeader(
        requestedIdHeader,
        id
    );

    next();
}