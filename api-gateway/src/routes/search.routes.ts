import { Router} from 'express';
import { getSearch } from '../controllers/search.controller';

const router:Router = Router();

router.get("/", getSearch);

export default router;