import { PrismaService } from '../../core/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(data: Prisma.UserCreateInput): Promise<{
        id: number;
        email: string;
        password: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByEmail(email: string): Promise<{
        id: number;
        email: string;
        password: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findById(id: number): Promise<{
        id: number;
        email: string;
        password: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
}
