import { findBusiness, findBusinessList } from "../repositories/business.repositories";
import type { Business } from "../types/business.types";

export const getBusinessList = async(): Promise<Business[]> => {
    return await findBusinessList();
}

export const getBusiness = async(): Promise<Business> => {
    return await findBusiness();
}