import { type Request, type Response} from 'express';
import { getBusinessService } from '../services/business.service';


export const getBusiness = async(
    _req:Request,
    res:Response
): Promise<void> => {
    const businessService = await getBusinessService();

    res.status(200).json(businessService);
}