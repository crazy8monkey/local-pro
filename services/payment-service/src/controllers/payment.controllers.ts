import { type Request, type Response} from 'express';

export const getPaymentService = (
    _req:Request, res:Response
): void => {
    res.status(200).json({
        name: "LocalPro API",
        version: "1.0.0",
        service: "payment-service"
    })
}

