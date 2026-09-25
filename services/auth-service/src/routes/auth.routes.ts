import { Router } from 'express';
import { getAuthService } from '../controllers/auth.controllers.js'

const router:Router = Router();

router.get("/", getAuthService);

export default router;