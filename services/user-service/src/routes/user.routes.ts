import { Router } from 'express';
import { createUser, getUsers } from '../controllers/user.controllers.js'

const router:Router = Router();

router.get("/", getUsers);
router.post("/", createUser);

export default router;