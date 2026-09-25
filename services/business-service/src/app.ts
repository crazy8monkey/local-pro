import express, { type Express, type Request, type Response} from 'express';
import businessRoutes from './routes/business.routes';
import healthRoutes from './routes/health.routes';

const app:Express = express();

/**
 * Middleware
 */
app.use(express.json());

/**
 * Business Routes
 */
app.use("/business", businessRoutes);

/**
 * Notification service health check 
 */
app.use("/health", healthRoutes);

export default app;