import express, {type Express, type Request, type Response} from 'express';
import searchRoutes from './routes/search.routes.js'

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
 * Health Check
 */
app.get("/health", (_req:Request, res:Response) => {
    res.status(200).json({
        service: 'search-service',
        status: 'ok'
    })
});

export default app;