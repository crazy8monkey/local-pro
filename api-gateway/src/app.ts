import express, { type Express, type Request, type Response} from 'express';
import apiGatewayRoutes from './routes/api.routes.js'

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

export default app;
