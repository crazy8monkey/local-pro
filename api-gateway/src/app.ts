import express, { type Express, type Request, type Response} from 'express';

const app:Express = express();

/**
 * Middleware
 */
app.use(express.json())

/**
 * API Gateway health check
 *
 * Used to confirm that the API Gateway
 * application is running.
 */
app.get("/health", (__req:Request, res:Response) => {
    res.status(200).json({
        service: 'api-gateway',
        status: 'ok'
    })
});

/**
 * LocalPro API information
 */
app.get(
    "/api",
    (_req: Request, res: Response): void => {
        res.status(200).json({
            name: "LocalPro API",
            version: "1.0.0",
            service: "api-gateway"
        });
    }
);

export default app;
