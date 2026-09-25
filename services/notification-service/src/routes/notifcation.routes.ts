import { Router } from 'express';
import { getNotificationService } from '../controllers/notification.controller'

const router:Router = Router();

router.get("/", getNotificationService);

export default router;