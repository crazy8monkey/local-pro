import { Router } from 'express';
import { getBusinessService } from '../controllers/business.controllers'

const router:Router = Router();

router.get("/", getBusinessService);

export default router;