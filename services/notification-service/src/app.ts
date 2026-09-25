import express, { type Express } from 'express';
import notificationRoutes from './routes/notifcation.routes';
import healthRoutes from './routes/health.routes';

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
 * Notification service health check 
 */
app.use("/health", healthRoutes);

export default app;