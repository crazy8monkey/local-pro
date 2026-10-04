import { type Request, type Response } from 'express';
import { 
    getUsers as getUserListService,
    getUser as getUserService 
} from '../services/user.services';
import { logger } from '@localpro/logger';  


export const getUsers = async(
    req: Request, res:Response
): Promise<void> => {

    const users = await getUserListService();

    res.status(200).json(users)
};

export const getUser = async(
    req: Request, res:Response
): Promise<void> => {

    const user = await getUserService();

    res.status(200).json(user)
};

export const createUser = async(
    req: Request, res:Response
): Promise<void> => {
    const { firstName, lastName, email } = req.body;
    const response = { firstName, lastName, email };

    //validate properties exist
    if(!firstName || !lastName || !email) {
        res.status(400).json({
            message: "firstName, lastName, email are required"
        })
    }
    //validate if its string value
    if(typeof firstName !== "string" || 
       typeof lastName !== "string" || 
       typeof email !== "string"
    ) {
        res.status(400).json({
            message: "firstName, lastName, email must be string values"
        })
    }

    //validate email format
    if(!email.includes("@")) {
        res.status(400).json({
            message: "Invalid email address"
        })
    }

    logger.info(`${response}`);

    res.status(201).json(response);
}

export const updateUser = async(
    req: Request, res:Response
): Promise<void> => {   
    // grabbing user id -> req.params.id

    const { firstName, lastName, email } = req.body;
    const response = { firstName, lastName, email };

    //validate properties exist
    if(!firstName || !lastName || !email) {
        res.status(400).json({
            message: "firstName, lastName, email are required"
        })
    }
    //validate if its string value
    if(typeof firstName !== "string" || 
       typeof lastName !== "string" || 
       typeof email !== "string"
    ) {
        res.status(400).json({
            message: "firstName, lastName, email must be string values"
        })
    }

    //validate email format
    if(!email.includes("@")) {
        res.status(400).json({
            message: "Invalid email address"
        })
    }

    logger.info(`${response}`);

    res.status(200).json(response);
}

export const removeUser = async(
    req: Request, res:Response
): Promise<void> => {   
    // grabbing user id -> req.params.id

    res.status(204).json({
        success: true
    });
}