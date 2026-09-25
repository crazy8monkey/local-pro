import { Router } from 'express';
import { getAppointmentService } from '../controllers/appointment.controllers.js'

const router:Router = Router();

router.get("/", getAppointmentService);

export default router;