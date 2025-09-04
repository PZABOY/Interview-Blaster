import express, { Router } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { appConfig } from "./app-config";

class Controller {

    public readonly router: Router = express.Router();

    public constructor() {
        const proxyMiddleware = createProxyMiddleware({target: appConfig.generatorBaseUrl});

        this.router.post("/api/generate", proxyMiddleware);
    }

}

export const controller = new Controller();