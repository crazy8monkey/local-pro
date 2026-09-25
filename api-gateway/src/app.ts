import express, { type Express } from 'express';
import apiGatewayRoutes from './routes/api.routes'
import healthRoutes from './routes/health.routes';

const app:Express = express();

/**
 * Middleware
 */
app.use(express.json())

/**
 * API Routes
 */
app.use("/api", apiGatewayRoutes);

/**
 * API health check 
 */
app.use("/health", healthRoutes);

export default app;
