import type { User } from "../types/user.types.js";

export const findUsers = async(): Promise<User[]> => {
    return [
        {
            id: 1,
            firstName: "Adam",
            lastName: "Schmidt",
            email:"youremail@blah.com"
        },
        {
            id: 2,
            firstName: "Adam",
            lastName: "Schmidt",
            email:"youremail@blah.com"
        },
        {
            id: 3,
            firstName: "Adam",
            lastName: "Schmidt",
            email:"youremail@blah.com"
        }
    ]
}


export const findUser = async(): Promise<User> => {
    return {
        id: 1,
        firstName: "Adam",
        lastName: "Schmidt",
        email:"youremail@blah.com"
    }
}