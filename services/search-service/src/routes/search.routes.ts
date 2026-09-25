import { Router } from 'express';
import { getSearchService } from '../controllers/search.controllers'

const router:Router = Router();

router.get("/", getSearchService);

export default router;