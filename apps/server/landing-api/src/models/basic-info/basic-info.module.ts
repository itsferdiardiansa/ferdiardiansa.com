import { Module } from '@nestjs/common'
import { BasicInfoResolver } from './basic-info.resolver'
import { BasicInfoService } from './basic-info.service'
import { MongooseModule } from '@nestjs/mongoose'
import { BasicInfo, BasicInfoSchema } from './schema/basic-info.models'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BasicInfo.name, schema: BasicInfoSchema },
    ]),
  ],
  providers: [BasicInfoResolver, BasicInfoService],
})
export class BasicInfoModule {}
