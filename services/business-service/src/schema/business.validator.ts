import { z } from 'zod';

export const createBusinessSchema = z.object({
    name: z.string()
        .trim()
        .min(2, "Business name must be at least 2 characters")
        .max(100, "Business name cannot exceed 100 characters"),
    description: z.string()
        .trim()
        .min(10, "Descriptin must be at least 10 characters")
        .max(2000, "Description cannot exceed 2000 characters"),
    category: z.string()
        .trim()
        .min(2, "Category must be at least 2 characters")
        .max(50, "Category cannot exceed 50 characters"),
    address: z.string()
        .trim()
        .min(5, "Address must be at lest 5 characters")
        .max(250, "Address cannot exceed 250 characters")
});


export const updateBusinessSchema = z
.object({
    name: z.string()
        .trim()
        .min(2, "Business name must be at least 2 characters")
        .max(100, "Business name cannot exceed 100 characters"),
    description: z.string()
        .trim()
        .min(10, "Descriptin must be at least 10 characters")
        .max(2000, "Description cannot exceed 2000 characters"),
    category: z.string()
        .trim()
        .min(2, "Category must be at least 2 characters")
        .max(50, "Category cannot exceed 50 characters"),
    address: z.string()
        .trim()
        .min(5, "Address must be at lest 5 characters")
        .max(250, "Address cannot exceed 250 characters")
})