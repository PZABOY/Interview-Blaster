import { Request, Response, NextFunction } from "express";
import { RouteNotFound, StatusCode } from "./types";

class Middleware {

    public routeNotFound(request: Request, response: Response, next: NextFunction): void {
        const err = new RouteNotFound(request.method, request.originalUrl);
        next(err);
    }

    public catchAll(err: any, request: Request, response: Response, next: NextFunction): void {
        const name = err.name;
        const status = err.status || StatusCode.InternalServerError;
        const message = err.message;
        console.log(`name: ${name}, status: ${status}, message: ${message}`);
        response.status(status).json({ message });
    }

}

export const middleware = new Middleware();
