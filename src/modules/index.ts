import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ListingModule } from './listing/listing.module';
import { LocationsModule } from './locations/location.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, LocationsModule, AuthModule, ListingModule],
})
export class ApiModule {}
