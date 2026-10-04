import type { Request, Response, NextFunction } from 'express';
import { logger } from '@localpro/logger';

export const requestLogger = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    logger.info(`${req.method} ${req.originalUrl}`);

    next();
}