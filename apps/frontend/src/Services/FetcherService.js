import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
class FetcherService {
    async getQnA(queryInfo) {
        const response = await axios.post(appConfig.generateUrl, queryInfo);
        const arr = response.data;
        return arr;
    }
}
export const fetcherService = new FetcherService();
