import { Router} from 'express';
import { getAppointment } from '../controllers/appointment.controller';

const router:Router = Router();

router.get("/", getAppointment);

export default router;