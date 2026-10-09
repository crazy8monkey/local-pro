import type { Request, Response, NextFunction } from 'express';
import { logger } from '@localpro/logger';

export const requestTiming = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const startDate = Date.now();

    res.on("finish", () => {
        const duration = Date.now() - startDate;
        logger.info(`[${req.requestId}] ${req.method} ${req.originalUrl} - ${duration}ms`);
    });

    next();
}