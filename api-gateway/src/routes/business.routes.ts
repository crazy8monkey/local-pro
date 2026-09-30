import { Router } from 'express';
import { getBusiness } from '../controllers/business.conroller';

const router:Router = Router();

router.get("/", getBusiness);

export default router;