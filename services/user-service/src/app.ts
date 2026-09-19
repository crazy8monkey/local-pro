import express, { type Expres, type Request, type Response } from 'express';

const app:Express = express();

/**
 * Middleware
 */
app.use(express.json());

/**
 * User service health check 
 */
app.get("/health", (_req:Request, res:Response) => {
    res.status(200).json({
        service: 'user-service',
        status: 'ok'
    })
});

/**
 * User service API
 */
app.get("/user", (_req:Request, res:Response) => {
    res.status(200).json({
        name: "LocalPro API",
        version: "1.0.0",
        service: "user-service"
    })
});

export default app;