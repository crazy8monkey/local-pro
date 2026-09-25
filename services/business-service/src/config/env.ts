const port:number = Number(process.env.PORT) || 3003;
const nodeEnv= process.env.NODE_ENV || "developement"

export const env = {
    port,
    nodeEnv
}