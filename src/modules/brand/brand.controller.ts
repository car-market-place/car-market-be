import { CursorSearchDto } from '@/apps/api/common/dto/base/cursor-search';
import { Body, Controller, Post } from '@nestjs/common';
import { CarBrandService } from './brand.service';

@Controller('car-brands')
export class CarBrandController {
  constructor(private carBrandsService: CarBrandService) {}

  @Post('all')
  async findAll(@Body() query: CursorSearchDto) {
    return this.carBrandsService.findAll(query);
  }
}
