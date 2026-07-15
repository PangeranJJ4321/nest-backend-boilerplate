import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { PrismaModule } from './core/prisma/prisma.module';

@Module({
  imports: [PrismaModule, ProductModule, UserModule, AuthModule, AdminModule],
})
export class AppModule {}
