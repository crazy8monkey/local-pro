import express, { type Express } from 'express';
import { errorMiddleWare } from './middleware/error.middleware';
import { requestLogger } from './middleware/request.logger';
import { requestId } from './middleware/request-id';

const app:Express = express();


/* Middleware */
app.use(express.json());

app.use(errorMiddleWare);

/* Request Logger Middleware */
app.use(requestId);
app.use(requestLogger);

export default app;
