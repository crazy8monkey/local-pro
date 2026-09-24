import { type Request, type Response } from 'express';
import { getUsers as getUserService } from '../services/user.services.js' 


export const getUsers = async(
    req: Request, res:Response
): Promise<void> => {

    const users = await getUserService();

    res.status(200).json(users)
};