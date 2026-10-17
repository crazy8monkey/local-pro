import { z } from 'zod';

const emailSchema = z
    .email()
    .trim()
    .transform((email:string) => email.toLowerCase());

export const registerSchema = z.object({
    email: emailSchema,
    password: z
        .string()
        .min(12, "Password must contain at least 12 characters")
        .max(128, "Password cannot exceed 128 characters")
});

export const loginSchema = z.object({
    email: emailSchema,
    password: z
        .string()
        .min(1, "Password must be required")
        .max(128, "Password cannot exceed 128 characters")
});