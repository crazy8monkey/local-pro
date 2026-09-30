import { Router} from 'express';
import { getAuth } from '../controllers/auth.controller';

const router:Router = Router();

router.get("/", getAuth);

export default router;