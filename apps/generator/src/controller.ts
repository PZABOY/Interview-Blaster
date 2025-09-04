import { gpt } from "@pza/gpt";
import { prompter } from "@pza/prompter";
import express, { Router, Request, Response } from "express";
import { sanitizer } from "./sanitizer";

class Controller {

    public readonly router: Router = express.Router();

    public constructor() {
        this.router.post("/api/generate", this.generate);
    }

   private async generate(request: Request, response: Response) {
        const prompt = prompter.getQuestionPrompt(request.body);
        const completion = await gpt.getCompletion(prompt);
        const arr = sanitizer.sanitizerJsonArray(completion)
        response.json(arr);
    }

}

export const controller = new Controller();