import type { Business } from "../types/business.types";

export const findBusinessList = async(): Promise<Business[]> => {
    return [
        {
            id:1,
            ownerId: 2,
            name: "Test Name",
            description: "Test Description",
            category: "Test category",
            address: "test Address",
            isActive: true,
            createdAt: "Test Created at",
            updatedAt: "Test Updated At"
        },
        {
            id:2,
            ownerId: 2,
            name: "Test Name",
            description: "Test Description",
            category: "Test category",
            address: "test Address",
            isActive: true,
            createdAt: "Test Created at",
            updatedAt: "Test Updated At"
        },
        {
            id:2,
            ownerId: 2,
            name: "Test Name",
            description: "Test Description",
            category: "Test category",
            address: "test Address",
            isActive: true,
            createdAt: "Test Created at",
            updatedAt: "Test Updated At"
        }
    ]
}


export const findBusiness = async(): Promise<Business> => {
    return {
            id:1,
            ownerId: 2,
            name: "Test Name",
            description: "Test Description",
            category: "Test category",
            address: "test Address",
            isActive: true,
            createdAt: "Test Created at",
            updatedAt: "Test Updated At"
        }
}

//add
//update
//delete