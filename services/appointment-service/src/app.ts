import express, { type Express, type Response, type Request} from 'express';

const app:Express = express();

/**
 * Middleware
 */
app.use(express.json());

/**
 * Health check
 */
app.get("/health", (_req:Request, res:Response) => {
    res.status(200).json({
        service: 'appointment-service',
        status: 'ok'
    })
});

/**
 * Notification API
 */
app.get("/appointment", (_req:Request, res:Response) => {
    res.status(200).json({
        name: "LocalPro API",
        version: "1.0.0",
        service: "appointment-service"
    })
});

export default app;