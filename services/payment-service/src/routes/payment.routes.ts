import { Router } from 'express';
import { getPaymentService } from '../controllers/payment.controllers.js'

const router:Router = Router();

router.get("/", getPaymentService);

export default router;