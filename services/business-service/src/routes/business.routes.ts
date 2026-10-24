import { Router } from 'express';
import { authorizeRoles } from '@localpro/authorization';
import { createBusiness, getBusiness, getBusinessList, removeBusiness, updateBusiness } from '../controllers/business.controllers';

const router:Router = Router();

router.get(
    "/", 
    authorizeRoles("user", "business", "admin"),
    getBusinessList
);

router.post(
    "/", 
    authorizeRoles("business", "admin"),
    createBusiness
);

router.get(
    "/:id", 
    authorizeRoles("user", "business", "admin"),
    getBusiness
);

router.put(
    "/:id", 
    authorizeRoles("business", "admin"),
    updateBusiness
);

router.delete(
    "/:id", 
    authorizeRoles("business", "admin"),
    removeBusiness
);


export default router;