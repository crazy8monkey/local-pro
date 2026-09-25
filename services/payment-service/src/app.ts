import express, { type Express } from 'express';
import paymentRoutes from './routes/payment.routes'
import healthRoutes from './routes/health.routes';

const app:Express = express();

/**
 * Middleware
 */
app.use(express.json());

/**
 * Payment Routes
 */
app.use("/payment", paymentRoutes);

/**
 * Payment service health check 
 */
app.use("/health", healthRoutes);

export default app;