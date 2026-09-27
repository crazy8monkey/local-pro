import express, { type Express } from 'express';
import healthRoutes from './routes/health.routes';
import userRoutes from './routes/user.routes'

const app:Express = express();

/**
 * Middleware
 */
app.use(express.json())

/**
 * User API Routes
 */
app.use("/api/users", userRoutes);

/**
 * API health check 
 */
app.use("/health", healthRoutes);

export default app;
