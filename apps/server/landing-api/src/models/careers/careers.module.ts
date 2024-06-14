import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Careers, CareersSchema } from './schema/careers.models'
import { CareersResolver } from './careers.resolver'
import { CareersService } from './careers.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Careers.name, schema: CareersSchema }]),
  ],
  providers: [CareersResolver, CareersService],
})
export class CareersModule {}
