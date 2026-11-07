import { Router } from 'express';
import { createReview, deleteReview, getReviewByBusiness, getReviewbyId, getReviewByUser, getReviews, updateReview } from '../controllers/review.controller'
import { authorizeRoles } from '@localpro/authorization';

const router:Router = Router();

router.get("/", 
    getReviews
);

router.post("/",
    authorizeRoles("user", "admin"),
    createReview
);

router.get("/user/:userId",
    getReviewByUser
);

router.get("/business/:businessId",
    getReviewByBusiness
);

router.get("/:reviewId",
    getReviewbyId
);

router.put("/:reviewId",
    authorizeRoles("user", "admin"),
    updateReview
);

router.delete("/:reviewId",
    authorizeRoles("user", "admin"),
    deleteReview
);

export default router;