import express, { type Express } from 'express';
import { errorMiddleWare } from './middleware/error.middleware';
import { requestLogger } from './middleware/request.logger';

const app:Express = express();


/* Middleware */
app.use(express.json());

app.use(errorMiddleWare);

/* Request Logger Middleware */
app.use(requestLogger);

export default app;
