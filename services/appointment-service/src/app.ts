import express, { type Express, type Response, type Request} from 'express';
import appointmentRoutes from './routes/appointment.routes'
import healthRoutes from './routes/health.routes';

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
 * Appointment service health check 
 */
app.use("/health", healthRoutes);

export default app;