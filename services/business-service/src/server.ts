import app from './app';
import { env } from './config/env' 

app.listen(env.port, (): void => {
    console.log(`Business service is on port ${env.port}`)
})