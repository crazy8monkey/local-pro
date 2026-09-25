import app from './app';
import { env } from './config/env' 
import { logger } from '@localpro/logger';

app.listen(env.port, (): void => {
    logger.info(`Appointment service is on port ${env.port}`);
})