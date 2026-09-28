import { Router} from 'express';
import { getNotification } from '../controllers/notification.controller';

const router:Router = Router();

router.get("/", getNotification);

export default router;