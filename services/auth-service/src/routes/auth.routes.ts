import { Router } from 'express';
import { getAuthService } from '../controllers/auth.controllers'

const router:Router = Router();

router.get("/", getAuthService);

export default router;