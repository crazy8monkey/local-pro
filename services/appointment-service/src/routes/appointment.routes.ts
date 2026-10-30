import { Router } from 'express';
import { createAppointment, deleteAppointment, getAllAppointmentList, getAppointmentByUser, getAppointmentId, getAppointmentService, updateAppointmentStatus } from '../controllers/appointment.controllers'
import { authorizeRoles } from '@localpro/authorization';

const router:Router = Router();

router.get("/", 
    authorizeRoles("admin"),
    getAllAppointmentList
);

router.post("/", 
    authorizeRoles("admin", "user"),
    createAppointment
);

router.get("/:appointmentId", 
    getAppointmentId
);

router.put("/:appointmentId", 
    authorizeRoles("business", "admin"),
    updateAppointmentStatus
);

router.delete("/:appointmentId", 
    authorizeRoles("business", "admin"),
    deleteAppointment
);

router.get("/user/:userId",
    authorizeRoles("user", "admin"), 
    getAppointmentByUser
);

router.get("/business/:businessId",
    authorizeRoles("business", "admin"), 
    getAppointmentByUser
);

export default router;