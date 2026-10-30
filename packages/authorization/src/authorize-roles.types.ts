export type UserRole = "user" | "business" | "admin";

export interface AuthenticatedUser {
    userId: number;
    email:string;
    role: UserRole;
    businessId?: number;
}