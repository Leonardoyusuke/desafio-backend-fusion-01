export class ApiError extends Error {
    public readonly statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
}

export class BadRequest extends ApiError {
    constructor(message: string) {
        super(message, 400);
    }
}

export class Conflict extends ApiError {
    constructor(message: string){
        super(message, 409)
    }
}

export class UnauthorizedError extends ApiError {
    constructor(message:string){
        super(message, 401)
    }
}


export class NotFoundError extends ApiError {
    constructor(message:string){
        super(message, 404)
    }
}