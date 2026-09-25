import express, {type Express, type Request, type Response} from 'express';
import reviewRoutes from './routes/review.routes'

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
 * Health Check
 */
app.get('/health', (_req:Request, res:Response) => {
    res.status(200).json({
        service: 'review-service',
        status: 'ok'
    })
});


export default app;