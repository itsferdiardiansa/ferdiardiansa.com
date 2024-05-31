import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'

import AppConfigurations from './app/configuration'
import DatabaseConfigurations from './database/mongo/configuration'

import { AppConfigService } from './app/config.service'
import { MongoDBConfigService } from './database/mongo/config.service'
// import { AppConfigService } from "./config.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development', '.env.production'],
      load: [AppConfigurations, DatabaseConfigurations],
    }),
  ],
  providers: [ConfigService, AppConfigService, MongoDBConfigService],
  exports: [ConfigService, AppConfigService, MongoDBConfigService],
})
export class GlobalConfigModule {}
