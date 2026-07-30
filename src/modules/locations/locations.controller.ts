import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { QueryLocationDto } from './dto';
import { LocationsService } from './locations.service';

@ApiTags('Locations')
@Controller('locations')
export class LocationsController {
  constructor(private locationsService: LocationsService) {}

  @Post('provinces')
  async getProvinces(@Body() request: QueryLocationDto) {
    return this.locationsService.getProvinces(request);
  }

  @Get('provinces/:provinceId/districts')
  async getDistrictByProvinceId(@Param('provinceId', ParseUUIDPipe) provinceId: string) {
    return this.locationsService.getDistrictsByProvince(provinceId);
  }

  @Get('provinces/:provinceId')
  async getProvinceById(@Param('provinceId', ParseUUIDPipe) provinceId: string) {
    return this.locationsService.getProvinceById(provinceId);
  }
}
