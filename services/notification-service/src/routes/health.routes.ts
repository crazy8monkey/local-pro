import { Router } from 'express';
import { getHealthCheck } from '../controllers/health.controller';

const router:Router = Router();

router.get("/", getHealthCheck);

export default router;