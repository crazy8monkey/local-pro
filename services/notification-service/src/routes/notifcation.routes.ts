import { Router } from 'express';
import { getNotificationService } from '../controllers/notification.controller.js'

const router:Router = Router();

router.get("/", getNotificationService);

export default router;