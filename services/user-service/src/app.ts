import express, { type Express } from 'express';
import userRoutes from './routes/user.routes.js';
import healthRoutes from './routes/health.routes.js'

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
app.use("/health", healthRoutes);

export default app;