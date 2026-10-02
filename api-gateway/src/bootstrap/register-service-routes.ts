import type {Express} from 'express'
import { discoverServiceRoutes } from '../services/route-discovery.service'
import { logger } from '@localpro/logger';

export const registerServiceRoutes = async(
    app:Express,
    gatewayPrefix: string,
    servicePath:string
): Promise<void> => {
    const routes = await discoverServiceRoutes(servicePath);

    for(const route of routes) {
        app.use(
            gatewayPrefix,
            route.router
        );

        logger.info(`Registered ${route.name} at ${gatewayPrefix}`);
    }
}