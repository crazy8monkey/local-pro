import { Router } from 'express';
import { getAppointmentService } from '../controllers/appointment.controllers'

const router:Router = Router();

router.get("/", getAppointmentService);

export default router;