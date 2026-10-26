import type { SearchQuery } from "../schema/search.validator.js"
import type { SearchBusiness } from "../types/search.types"
import { findAll, findById } from '../repositories/search.repositories'

export const getSearchBusinesResults = async(
    filters: SearchQuery
):Promise<SearchBusiness[]> => {
    return await findAll(filters)
}

export const getBusinessById = async(
    businessId: string
):Promise<SearchBusiness | undefined> => {
    return await findById(businessId)
}