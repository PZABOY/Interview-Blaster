import axios from "axios";
import type { QnA, QueryInfo } from "../models/models";
import { appConfig } from "../Utils/AppConfig";

class FetcherService {

    public async getQnA(queryInfo: QueryInfo): Promise<QnA[]> {
        const response = await axios.post<QnA[]>(appConfig.generateUrl, queryInfo);
        const arr = response.data

        return arr;
    }
}

export const fetcherService = new FetcherService();
