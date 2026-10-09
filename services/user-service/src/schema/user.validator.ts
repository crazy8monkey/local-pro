import { z } from 'zod';

//shared field definition
const userFields = {
    firstName: z
        .string()
        .trim()
        .min(1, "firstName is requried"),
    lastName: z
        .string()
        .trim()
        .min(1, "lastName is requried"),
    email: z
        .email("Invalid email address")
        .transform((email: string) => email.trim().toLowerCase())
}

//schema for creating a user
export const createUserSchema = z.object({
    ...userFields
});

//schema for updating a user
export const updateUserSchema = z.object({
    ...userFields
})
.partial()
.refine(
    (data) => Object.keys(data).length > 0,
    {
        message: "At least one field must be provided"
    }
);

//types for this
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>