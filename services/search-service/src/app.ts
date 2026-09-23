import express, {type Express, type Request, type Response} from 'express';

const app:Express = express();

/**
 * Middleware
 */
app.use(express.json());

/**
 * Health Check
 */
app.get("/health", (_req:Request, res:Response) => {
    res.status(200).json({
        service: 'search-service',
        status: 'ok'
    })
});

/**
 * Search API
 */
app.get('/search', (_req:Request, res:Response) => {
    res.status(200).json({
        name: "LocalPro API",
        version: "1.0.0",
        service: "review-service"
    })
});

export default app;