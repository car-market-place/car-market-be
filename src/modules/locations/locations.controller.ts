import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LocationsService } from './locations.service';

@ApiTags('Locations')
@Controller('locations')
export class LocationsController {
  constructor(private locationsService: LocationsService) {}

  @Get('provinces')
  async getProvinces() {
    return this.locationsService.getProvinces();
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
