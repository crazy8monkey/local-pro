const port:number = Number(process.env.PORT) || 3000;
const nodeEnv= process.env.NODE_ENV || "developement";
const userServiceUrl = process.env.USER_SERVICE_URL || "http://localhost:3008"


export const env = {
    port,
    nodeEnv,
    userServiceUrl
}