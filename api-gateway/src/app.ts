import express, { type Express } from 'express';
import { requestLogger } from './middleware/request.logger';
import { requestId } from './middleware/request-id';
import { requestTiming } from './middleware/request-timing';
import { authMiddleware } from './middleware/auth.middleware';

const app:Express = express();


/* Middleware */
app.use(express.json());

/* Request Logger Middleware */
app.use(requestId);
app.use(requestLogger);
app.use(requestTiming);
app.use(authMiddleware);

export default app;
