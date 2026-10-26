import { searchBusinesses } from "../mock/data.js";
import type { SearchQuery } from "../schema/search.validator.js"
import type { SearchBusiness } from "../types/search.types.js"
import { logger } from '@localpro/logger'

export const findAll = async(
    filters: SearchQuery
): Promise<SearchBusiness[]> => {
    const query = filters.q?.toLowerCase();
    const category = filters.category?.toLowerCase();

    logger.info(`query ${query}`)
    logger.info(`category ${category}`);

    return searchBusinesses
        .filter((business:SearchBusiness) => business.isActive)
        .filter((business:SearchBusiness) => {
            if(!query) {
                return true
            }

            return (
                business.name.toLowerCase().includes(query) ||
                business.description.toLowerCase().includes(query) ||
                business.category.toLowerCase().includes(query)
            );
        })
        .filter((business:SearchBusiness) => {
            if(!category) {
                return true;
            }

            return business.category.toLowerCase() === category;
        })
        .slice(0, filters.limit);
}

export const findById = async(
    businessId: string
):Promise<SearchBusiness | undefined> => {

    logger.info(`businessId ${businessId}`)

    return searchBusinesses.find(
        (business:SearchBusiness) => 
            business.id === businessId &&
            business.isActive
    )
}