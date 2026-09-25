import app from "./app.js";
import { env } from "./config/env";
import { logger } from '@localpro/logger';

app.listen(env.port, (): void => {
    logger.info(`API Gateway service is on port ${env.port}`);
})