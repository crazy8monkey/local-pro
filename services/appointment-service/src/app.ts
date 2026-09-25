import express, { type Express, type Response, type Request} from 'express';
import appointmentRoutes from './routes/appointment.routes.js'

const app:Express = express();

/**
 * Middleware
 */
app.use(express.json());

/**
 * Auth Routes
 */
app.use("/appointment", appointmentRoutes);

/**
 * Health check
 */
app.get("/health", (_req:Request, res:Response) => {
    res.status(200).json({
        service: 'appointment-service',
        status: 'ok'
    })
});

export default app;