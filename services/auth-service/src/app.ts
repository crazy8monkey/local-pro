import express, { type Express, type Request, type Response } from 'express';
import authRoutes from './routes/auth.routes';
import healthRoutes from './routes/health.routes';

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
 * Auth service health check 
 */
app.use("/health", healthRoutes);

export default app;
