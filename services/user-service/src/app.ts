import express, { type Express, type Request, type Response } from 'express';
import userRoutes from './routes/user.routes.js'

const app:Express = express();

/**
 * Middleware
 */
app.use(express.json());

/**
 * User Routes
 */
app.use("/users", userRoutes);

/**
 * User service health check 
 */
app.get("/health", (_req:Request, res:Response) => {
    res.status(200).json({
        service: 'user-service',
        status: 'ok'
    })
});

export default app;