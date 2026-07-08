import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './apps/config/configuration';
import { envValidation } from './apps/config/env.validation';
import { PrismaModule } from './apps/database/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

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
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
