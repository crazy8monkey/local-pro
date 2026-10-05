import express, { type Express } from 'express';
import { errorMiddleWare } from './middleware/error.middleware';
import { requestLogger } from './middleware/request.logger';
import { requestId } from './middleware/request-id';
import { requestTiming } from './middleware/request-timing';

const app:Express = express();


/* Middleware */
app.use(express.json());

app.use(errorMiddleWare);

/* Request Logger Middleware */
app.use(requestId);
app.use(requestLogger);
app.use(requestTiming);

export default app;
