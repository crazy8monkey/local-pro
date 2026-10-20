export type UserRole = "user" | "business" | "admin";

export interface AuthenticatedUser {
    email:string;
    role: UserRole;
}