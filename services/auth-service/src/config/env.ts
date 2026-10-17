import './load-env'

const port:number = Number(process.env.PORT) || 3002;
const nodeEnv= process.env.NODE_ENV || "developement"
const jwtSecret = process.env.JWT_SECRET;

export const env = {
    port,
    nodeEnv,
    jwtSecret,
    accessTokenExpiresIn:60* 60,
    bcryptSaltRounds: 12,
    issuer: "local-pro",
    audience: "local-pro"
}