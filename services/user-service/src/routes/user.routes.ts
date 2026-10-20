import { Router } from 'express';
import { createUser, getUsers, getUser, updateUser, removeUser } from '../controllers/user.controllers.js'
import { authorizeRoles } from '@localpro/authorization'; 


const router:Router = Router();

router.get("/", authorizeRoles("admin"), getUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", removeUser);

export default router;