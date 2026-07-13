import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './apps/config/configuration';
import { envValidation } from './apps/config/env.validation';
import { PrismaModule } from './apps/database/prisma.module';
import { ApiModule } from './modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      load: [configuration],
      validationSchema: envValidation,
    }),
    PrismaModule,
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
