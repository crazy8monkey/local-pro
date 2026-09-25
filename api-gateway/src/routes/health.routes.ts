import { Router } from 'express';
import { getHealthCheck } from '../controllers/health.conroller';

const router:Router = Router();

router.get("/", getHealthCheck);

export default router;