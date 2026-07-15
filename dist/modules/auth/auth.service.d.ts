import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register(data: Prisma.UserCreateInput): Promise<{
        id: number;
        email: string;
        password: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(email: string, pass: string): Promise<{
        access_token: string;
        user: {
            id: number;
            email: string;
            name: string;
            role: import(".prisma/client").$Enums.Role;
        };
    }>;
}
