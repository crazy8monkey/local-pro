import { findUsers, findUser } from "../repositories/user.repositories.js";
import type { User } from "../types/user.types.js";

export const getUsers = async (): Promise<User[]> => {
    return findUsers();
}

export const getUser = async(): Promise<User> => {
    return findUser();
}