import { Body, Controller, Post } from '@nestjs/common';
import { QueryCarVersionDto } from './dto';
import { CarVersionsService } from './versions.service';

@Controller('car-versions')
export class CarVersionsController {
  constructor(private carVersionService: CarVersionsService) {}

  @Post('all')
  async findAll(@Body() query: QueryCarVersionDto) {
    return this.carVersionService.findAll(query);
  }
}
