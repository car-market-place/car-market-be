import { Module } from '@nestjs/common';
import { CarModelsController } from './models.controller';
import { CarModelsService } from './models.service';

@Module({
  controllers: [CarModelsController],
  providers: [CarModelsService],
})
export class CarModelsModule {}
