export enum StatusCode {
    OK = 200,
    Created = 201,
    NoContent = 204,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    InternalServerError = 500
}

abstract class ClientError {
    public status: StatusCode;
    public message: string;
    public constructor(status: StatusCode, message: string) {
        this.status = status;
        this.message = message;
    }
}
 
export class RouteNotFound extends ClientError {
    public constructor(method: string, route: string) {
        super(StatusCode.NotFound, `Route ${route} on method ${method} not found.`);
    }
}
 
export class ResourceNotFound extends ClientError {
    public constructor(id: number) {
        super(StatusCode.NotFound, `id ${id} not found.`);
    }
}
 
export class ValidationError extends ClientError {
    public constructor(message: string) {
        super(StatusCode.BadRequest, message);
    }
}
 
export class AuthorizationError extends ClientError {
    public constructor(message: string) {
        super(StatusCode.Unauthorized, message);
    }
}
 
export class ForbiddenError extends ClientError {
    public constructor(message: string) {
        super(StatusCode.Forbidden, message);
    }
}