import cors from "cors";
import express from "express";
import { rateLimit } from "express-rate-limit";
import { appConfig } from "./app-config";
import { controller } from "./controller";
import { middleware } from "@pza/restify";

class App {

    public start(): void {
        const server = express();
        server.use(rateLimit({ windowMs: 1000, max: 10 }));
        server.use(cors());
        server.use(controller.router);
        server.use(middleware.routeNotFound);
        server.use(middleware.catchAll);
        server.listen(appConfig.port, () => console.log("gateway started on port " + appConfig.port));
    }

}

const app = new App();
app.start();
