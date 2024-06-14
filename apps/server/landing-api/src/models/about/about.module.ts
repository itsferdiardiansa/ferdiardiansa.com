import { Module } from '@nestjs/common'
import { AboutResolver } from './about.resolver'
import { AboutService } from './about.service'
import { MongooseModule } from '@nestjs/mongoose'
import { About, AboutSchema } from './schema/about.models'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: About.name, schema: AboutSchema }]),
  ],
  providers: [AboutResolver, AboutService],
})
export class AboutModule {}
