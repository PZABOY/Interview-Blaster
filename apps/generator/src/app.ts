import express from "express";
import { appConfig } from "./app-config";
import { controller } from "./controller";
import { middleware } from "@pza/restify";


class App {

    public start(): void {
        const server = express();
        server.use(express.json());
        server.use(controller.router)
        server.use(middleware.routeNotFound);
        server.use(middleware.catchAll);
        server.listen(appConfig.port, () => console.log("generator started on port:" + appConfig.port));

    }
}

const app = new App()
app.start()