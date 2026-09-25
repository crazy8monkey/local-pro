import express, { type Express, type Request, type Response } from 'express';
import authRoutes from './routes/auth.routes.js'

const app:Express = express();

/**
 * Middleware
 */
app.use(express.json())

/**
 * Auth Routes
 */
app.use("/auth", authRoutes);

/**
 * Auth Service Health Check
 */
app.get("/health", (_req:Request, res:Response) => {
    res.status(200).json({
        service: 'auth-service',
        status: 'ok'
    })
})

export default app;
