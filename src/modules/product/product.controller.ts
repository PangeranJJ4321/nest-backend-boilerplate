import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../core/guards/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  @Get()
  @ApiOperation({ summary: 'Get public products' })
  getPublicProducts() {
    return { message: 'Produk ini bisa dilihat tanpa login' };
  }

  @Get('protected')
  @UseGuards(JwtAuthGuard) // HANYA bisa diakses jika membawa Token JWT
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get protected products (requires login)' })
  getProtectedProducts() {
    return { message: 'Anda berhasil melihat produk khusus member' };
  }
}
