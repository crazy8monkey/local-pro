import express, {type Express, type Request, type Response} from 'express';
import searchRoutes from './routes/search.routes.js'
import healthRoutes from './routes/health.routes.js'

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