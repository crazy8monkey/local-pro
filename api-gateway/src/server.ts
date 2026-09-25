import app from "./app.js";
import { env } from "./config/env";

app.listen(env.port, (): void => {
    console.log(`API Gateway running on port ${env.port}`);
});