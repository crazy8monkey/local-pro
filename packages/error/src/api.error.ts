import { ApiErrorField } from "./api-error-field.js";


export class ApiError extends Error {
    public readonly statusCode: number;
    public readonly errors: ApiErrorField[]

    constructor(
        statusCode:number,
        message: string,
        errors: ApiErrorField[]
    ) {
        super(message);
        this.name = "ApiError";
        this.statusCode = statusCode;
        this.errors = errors
    }
}