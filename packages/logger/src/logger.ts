import { Logger } from "./logger.type.js";

export const logger:Logger = {
    info(message:string): void {
        console.log(`[INFO] ${message}`)
    },
    warn(message:string): void {
        console.warn(`[WARN] ${message}`)
    },
    error(message:string): void {
        console.error(`[WARN] ${message}`)
    }
}