import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Answer, AnswerSchema } from './schema/answer.models'
import { AnswerResolver } from './answer.resolver'
import { AnswerService } from './answer.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Answer.name, schema: AnswerSchema }]),
  ],
  providers: [AnswerResolver, AnswerService],
})
export class AnswerModule {}
