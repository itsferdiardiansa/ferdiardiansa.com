import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Answer, AnswerSchema } from './schema/answer.models'
import { AnswerResolver } from './answer.resolver'
import { AnswerService } from './answer.service'

import {
  Question,
  QuestionSchema,
} from '@/models/question/schema/question.models'
import { QuestionService } from '@/models/question/question.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Answer.name, schema: AnswerSchema },
      { name: Question.name, schema: QuestionSchema },
    ]),
  ],
  providers: [AnswerResolver, AnswerService, QuestionService],
})
export class AnswerModule {}
