import express, { type Express } from 'express';
import { errorMiddleWare } from './middleware/error.middleware';

const app:Express = express();


/* Middleware */
app.use(express.json());

app.use(errorMiddleWare);

export default app;
