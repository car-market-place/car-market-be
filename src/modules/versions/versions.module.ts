import { Module } from '@nestjs/common';
import { CarVersionsController } from './versions.controller';
import { CarVersionsService } from './versions.service';

@Module({
  controllers: [CarVersionsController],
  providers: [CarVersionsService],
})
export class CarVersionsModule {}
