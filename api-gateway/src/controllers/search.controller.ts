import { type Request, type Response} from 'express';
import { getSearchService } from '../services/search.service';


export const getSearch = async(
    _req:Request,
    res:Response
): Promise<void> => {
    const searchService = await getSearchService();

    res.status(200).json(searchService);
}