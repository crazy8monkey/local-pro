import { type Request, type Response} from 'express';

import { getUsers as getUsersService} from '../services/user.service';

export const getUsers = async(
    _req:Request,
    res:Response
): Promise<void> => {
    const users = await getUsersService();

    res.status(200).json(users);
}