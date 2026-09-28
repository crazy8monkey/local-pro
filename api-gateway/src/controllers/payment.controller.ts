import { type Request, type Response} from 'express';
import { getPaymentService } from '../services/payment.service';


export const getPayment = async(
    _req:Request,
    res:Response
): Promise<void> => {
    const paymentService = await getPaymentService();

    res.status(200).json(paymentService);
}