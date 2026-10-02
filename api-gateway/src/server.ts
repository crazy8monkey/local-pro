import app from "./app.js";
import { registerServiceRoutes } from "./bootstrap/register-service-routes.js";
import { env } from "./config/env";
import { logger } from '@localpro/logger';

const startServer = async(): Promise<void> => {
    try {
        await registerServiceRoutes(
            app,
            "/api/users",
            "../services/user-service/src/routes"
        )
        app.listen(env.port, (): void => {
            logger.info(`API Gateway service is on port ${env.port}`);
        })

    } catch(error) {
        logger.error(`Failed to regsiter service routes ${error}`);
        process.exit(1)
    }
}

startServer();
