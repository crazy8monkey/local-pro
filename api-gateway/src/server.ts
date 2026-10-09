import { registerServiceRoutes } from "./bootstrap/register-service-routes.js";
import { env } from "./config/env";
import app from './app'
import { logger } from '@localpro/logger';
import { errorMiddleWare } from "./middleware/error.middleware.js";

const startServer = async(): Promise<void> => {
    try {
        await registerServiceRoutes(
            app,
            "/api/appointment",
            "../services/appointment-service/src/routes"
        )
        await registerServiceRoutes(
            app,
            "/api/auth",
            "../services/auth-service/src/routes"
        )
        await registerServiceRoutes(
            app,
            "/api/business",
            "../services/business-service/src/routes"
        )
        await registerServiceRoutes(
            app,
            "/api/notification",
            "../services/notification-service/src/routes"
        )
        await registerServiceRoutes(
            app,
            "/api/payment",
            "../services/payment-service/src/routes"
        )
        await registerServiceRoutes(
            app,
            "/api/review",
            "../services/review-service/src/routes"
        )
        await registerServiceRoutes(
            app,
            "/api/search",
            "../services/search-service/src/routes"
        )
        await registerServiceRoutes(
            app,
            "/api/users",
            "../services/user-service/src/routes"
        );

        app.use(errorMiddleWare);
         
        app.listen(env.port, (): void => {
            logger.info(`API Gateway service is on port ${env.port}`);
        })

    } catch(error) {
        logger.error(`Failed to regsiter service routes ${error}`);
        process.exit(1)
    }
}

startServer();
