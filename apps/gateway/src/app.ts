import path from "path";
import cors from "cors";
import express from "express";
import { rateLimit } from "express-rate-limit";

import { appConfig } from "./app-config";
import { controller } from "./controller";
import { middleware } from "@pza/restify";

const server = express();

server.set("trust proxy", true);

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use(rateLimit({ windowMs: 60_000, limit: 300 }));

server.use(cors());

server.use(controller.router);

server.use(express.static(path.join(__dirname, "public")));

server.get("*", (req, res, next) => {
  if (req.accepts("html")) {
    return res.sendFile(path.join(__dirname, "public", "index.html"));
  }
  return next();
});

server.use(middleware.routeNotFound);
server.use(middleware.catchAll);

server.listen(appConfig.port, () =>
  console.log(`gateway started on port ${appConfig.port}`)
);
