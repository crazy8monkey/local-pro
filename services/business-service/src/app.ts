import express, { type Express, type Request, type Response} from 'express';
import businessRoutes from './routes/business.routes'

const app:Express = express();

/**
 * Middleware
 */
app.use(express.json());

/**
 * Business Routes
 */
app.use("/business", businessRoutes);

/**
 * Health Check
 */
app.get("/health", (_req:Request, res:Response) => {
    res.status(200).json({
        service: 'business-service',
        status: 'ok'
    })
})

export default app;