import type { Router } from "express";
import path from "path";
import fs from 'fs/promises';
import { pathToFileURL } from "url";
import { logger } from "@localpro/logger";

export interface DiscoveredRoute {
    name: string;
    router: Router;
    filePath: string;
}

export const discoverServiceRoutes = async(
    servicePath:string
): Promise<DiscoveredRoute[]> => {
    const routesDirectory = path.resolve(
        process.cwd(),
        servicePath
    );

    const files = await fs.readdir(
        routesDirectory,
        {
            withFileTypes: true
        }
    );

    const routeFiles = files.filter((file) => 
        file.isFile() && file.name.endsWith('.routes.ts')
    );


    const discoveredRoutes: DiscoveredRoute[] = [];
    for (const file of routeFiles) {
        const filePath = path.join(
            routesDirectory,
            file.name
        );

        const module = await import(
            pathToFileURL(filePath).href
        );
        if(!module.default) {
            logger.warn(`Skipping ${filePath}: no default router`);
            continue
        }

        discoveredRoutes.push({
            name: file.name,
            router: module.default,
            filePath
        })

    }


    return discoveredRoutes;
}