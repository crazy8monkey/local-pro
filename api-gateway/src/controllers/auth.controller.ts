import { type Request, type Response} from 'express';
import { getAuthService } from '../services/auth.service';


export const getAuth = async(
    _req:Request,
    res:Response
): Promise<void> => {
    const authService = await getAuthService();

    res.status(200).json(authService);
}