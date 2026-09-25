import express, {type Express} from 'express';
import reviewRoutes from './routes/review.routes';
import healthRoutes from './routes/health.routes';

const app:Express = express();

/**
 * Middleware
 */
app.use(express.json());

/**
 * Search Routes
 */
app.use("/review", reviewRoutes);

/**
 * Review service health check 
 */
app.use("/health", healthRoutes);

export default app;