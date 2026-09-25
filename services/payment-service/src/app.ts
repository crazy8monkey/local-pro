import express, { type Express, type Request, type Response } from 'express';
import paymentRoutes from './routes/payment.routes.js'

const app:Express = express();

/**
 * Middleware
 */
app.use(express.json());

/**
 * Payment Routes
 */
app.use("/payment", paymentRoutes);

/**
 * Health Check
 */
app.get('/health', (_req:Request, res:Response) => {
    res.status(200).json({
        service: 'payment-service',
        status: 'ok'
    })
});

export default app;