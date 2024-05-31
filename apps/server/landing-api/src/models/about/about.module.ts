import { Module } from '@nestjs/common'
import { AboutResolver } from './about.resolver'
import { AboutService } from './about.service'

@Module({
  providers: [AboutResolver, AboutService],
})
export class AboutModule {}
