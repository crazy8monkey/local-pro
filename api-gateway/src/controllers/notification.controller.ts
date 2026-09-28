import { type Request, type Response} from 'express';
import { getNotificationService } from '../services/notification.service';


export const getNotification = async(
    _req:Request,
    res:Response
): Promise<void> => {
    const notificationService = await getNotificationService();

    res.status(200).json(notificationService);
}