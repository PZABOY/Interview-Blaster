import axios from "axios";
import { appConfig } from "./app-config";
import { Prompt } from "@pza/types";



class Gpt {

    public async getCompletion(prompt: Prompt): Promise<string> {

        const body = {
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: prompt.systemContent },
                { role: "user", content: prompt.userContent }
            ]
        };

        const options = {
            headers: {
                authorization: "Bearer " + appConfig.apiKey
            }
        };

        const response = await axios.post(appConfig.gptUrl, body, options);

        const completion = response.data.choices[0].message.content;

        return completion;
    }

}

export const gpt = new Gpt();
