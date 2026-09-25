import { type Request, type Response } from 'express';

export const getHealthCheck = (
    req: Request, res:Response
): void => {
    res.status(200).json({
        service: 'api-gateway',
        status: 'ok'
    })
}