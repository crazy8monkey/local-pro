import { Router } from 'express';
import { getApiGateway } from '../controllers/api.controller.js';

const router:Router = Router();

router.get("/", getApiGateway);

export default router;