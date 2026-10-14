import type { UserRole } from "./user-role.type";

export interface AuthenticatedUser {
    id: string;
    role: UserRole;
}