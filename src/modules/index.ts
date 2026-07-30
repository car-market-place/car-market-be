import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CarBrandModule } from './brand/brand.module';
import { ListingModule } from './listing/listing.module';
import { LocationsModule } from './locations/location.module';
import { CarModelsModule } from './models/models.module';
import { UsersModule } from './users/users.module';
import { CarVersionsModule } from './versions/versions.module';

@Module({
  imports: [
    UsersModule,
    LocationsModule,
    AuthModule,
    ListingModule,
    CarModelsModule,
    CarVersionsModule,
    CarBrandModule,
  ],
})
export class ApiModule {}
