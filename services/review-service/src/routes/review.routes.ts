import { Router } from 'express';
import { getReviewService } from '../controllers/review.controller.js'

const router:Router = Router();

router.get("/", getReviewService);

export default router;