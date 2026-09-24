import type { User } from "../types/user.types.js";

export const findUsers = async(): Promise<User[]> => {
    return [
        {
            id: 1,
            firstName: "Adam",
            lastName: "Schmidt"
        },
        {
            id: 2,
            firstName: "Adam",
            lastName: "Schmidt"
        },
        {
            id: 3,
            firstName: "Adam",
            lastName: "Schmidt"
        }
    ]
}