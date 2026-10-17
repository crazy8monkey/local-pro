import dotenv from 'dotenv';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDirectory = dirname(fileURLToPath(import.meta.url));

//works from src/config
const envPath = resolve(currentDirectory, "../../.env");

const result = dotenv.config({
    path: envPath
});

if(result.error) {
    throw new Error(
        `Unable to load auth-service enviroment file: ${envPath}`
    )
}