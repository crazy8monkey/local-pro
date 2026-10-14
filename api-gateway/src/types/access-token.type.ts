import jwt from "jsonwebtoken";
import type { UserRole } from "./user-role.type";

export interface AccessTokenPayload extends jwt.JwtPayload {
    role: UserRole;
}