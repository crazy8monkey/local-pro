import { Router} from 'express';
import { getReview } from '../controllers/review.controller';

const router:Router = Router();

router.get("/", getReview);

export default router;