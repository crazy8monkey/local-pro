import app from './app';
import { env } from './config/env' 

app.listen(env.port, (): void => {
    console.log(`Notification service is on port ${env.port}`)
})