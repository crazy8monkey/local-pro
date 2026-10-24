import type { ApiErrorField } from "./api-error-field.js";

export const getValidationErrors = (
    issues: {
        message: string;
        path: PropertyKey[]
    }[]
): ApiErrorField[] => {
    return issues.map((issue) => ({
        message: issue.message,
        field: issue.path.join(".")
    }))
}