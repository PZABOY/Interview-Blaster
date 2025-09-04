import dotenv from "dotenv";
import  path  from "path";

dotenv.config({ path: path.resolve(__dirname, "../../../.env"), quiet: true });

class AppConfig {

    public readonly gptUrl = "https://api.openai.com/v1/chat/completions";
    public readonly apiKey = process.env.API_KEY!;
}

export const appConfig = new AppConfig();