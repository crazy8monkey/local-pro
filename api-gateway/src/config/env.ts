const port:number = Number(process.env.PORT) || 3000;
const nodeEnv= process.env.NODE_ENV || "developement"

export const env = {
    port,
    nodeEnv
}