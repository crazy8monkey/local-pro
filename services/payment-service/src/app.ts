import express, { type Express, type Request, type Response } from 'express';

const app:Express = express();

/**
 * Middleware
 */
app.use(express.json());

/**
 * Health Check
 */
app.get('/health', (_req:Request, res:Response) => {
    res.status(200).json({
        service: 'payment-service',
        status: 'ok'
    })
});

/**
 * Payment Service API
 */
app.get('/payment', (_req:Request, res:Response) => {
    res.status(200).json({
        name: "LocalPro API",
        version: "1.0.0",
        service: "payment-service"
    })
});

export default app;