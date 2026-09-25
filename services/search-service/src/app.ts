import express, {type Express} from 'express';
import searchRoutes from './routes/search.routes'
import healthRoutes from './routes/health.routes'

const app:Express = express();

/**
 * Middleware
 */
app.use(express.json());

/**
 * Search Routes
 */
app.use("/search", searchRoutes);

/**
 * Search service health check 
 */
app.use("/health", healthRoutes);

export default app;