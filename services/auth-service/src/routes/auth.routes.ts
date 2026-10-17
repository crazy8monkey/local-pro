import { Router } from 'express';
import { currentSession, login, register } from '../controllers/auth.controllers'

const router:Router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", currentSession);

export default router;