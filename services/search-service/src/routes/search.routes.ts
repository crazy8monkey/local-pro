import { Router } from 'express';
import { getSearchService } from '../controllers/search.controllers.js'

const router:Router = Router();

router.get("/", getSearchService);

export default router;