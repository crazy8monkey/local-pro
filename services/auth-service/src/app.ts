import express, { type Express, type Request, type Response } from 'express';

const app:Express = express();

/**
 * Middleware
 */
app.use(express.json())

/**
 * Auth Service Health Check
 */
app.get("/health", (_req:Request, res:Response) => {
    res.status(200).json({
        service: 'auth-service',
        status: 'ok'
    })
})

/**
 * Auth Service API
 */
app.get("/auth", (_req:Request, res:Response) => {
    res.status(200).json({
        name: "LocalPro API",
        version: "1.0.0",
        service: "auth-service"
    })
});

export default app;
