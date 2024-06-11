import { Module } from '@nestjs/common'

// Providers
import { MongoDBProviderModule } from '@/providers/mongo/provider.module'
import { GraphQLProviderModule } from '@/providers/graphql/provider.module'

// Configurations
import { GlobalConfigModule } from '@/config/config.module'

// Models
import { AboutModule } from '@/models/about/about.module'
import { BasicInfoModule } from './models/basic-info/basic-info.module'
import { CareersModule } from './models/careers/careers.module'

@Module({
  imports: [
    GlobalConfigModule,

    // Providers
    MongoDBProviderModule,
    GraphQLProviderModule,

    // Models
    AboutModule,
    BasicInfoModule,
    CareersModule,
  ],
  providers: [],
})
export class AppModule {}
