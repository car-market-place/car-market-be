import { Module } from '@nestjs/common';
import { CarBrandController } from './brand.controller';
import { CarBrandService } from './brand.service';

@Module({
  controllers: [CarBrandController],
  providers: [CarBrandService],
})
export class CarBrandModule {}
