import { CursorSearchDto } from '@/apps/api/common/dto/base/cursor-search';
import { Body, Controller, Post } from '@nestjs/common';
import { CarModelsService } from './models.service';

@Controller('car-models')
export class CarModelsController {
  constructor(private carModelsService: CarModelsService) {}

  @Post('all')
  async findAll(@Body() query: CursorSearchDto) {
    return this.carModelsService.findAll(query);
  }
}
