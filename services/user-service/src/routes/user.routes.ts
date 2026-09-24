import { Router } from 'express';
import { getUsers } from '../controllers/user.controllers.js'

const router:Router = Router();

router.get("/", getUsers);

export default router;