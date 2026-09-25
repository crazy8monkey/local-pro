import express, { type Express, type Request, type Response} from 'express';
import notificationRoutes from './routes/notifcation.routes'

const app:Express = express();

/**
 * Middleware
 */
app.use(express.json());

/**
 * Payment Routes
 */
app.use("/notification", notificationRoutes);

/**
 * Health Check
 */
app.get("/health", (_req:Request, res:Response) => {
    res.status(200).json({
        service: 'notificaiton-service',
        status: 'ok'
    })
});

export default app;