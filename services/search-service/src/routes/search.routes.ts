import { Router } from 'express';
import { getBusinessById, getSearchService, searchBusinesses } from '../controllers/search.controllers'

const router:Router = Router();

router.get("/", searchBusinesses);
router.get("/:businessId", getBusinessById);

export default router;