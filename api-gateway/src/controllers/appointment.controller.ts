import { type Request, type Response} from 'express';
import { getAppointmentService } from '../services/appointment.service';


export const getAppointment = async(
    _req:Request,
    res:Response
): Promise<void> => {
    const appointmentService = await getAppointmentService();

    res.status(200).json(appointmentService);
}