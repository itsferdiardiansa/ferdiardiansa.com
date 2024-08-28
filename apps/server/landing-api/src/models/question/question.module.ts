import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Question, QuestionSchema } from './schema/question.models'
import { QuestionResolver } from './question.resolver'
import { QuestionService } from './question.service'
import { Answer, AnswerSchema } from '@/models/answer/schema/answer.models'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Question.name, schema: QuestionSchema },
      { name: Answer.name, schema: AnswerSchema },
    ]),
  ],
  providers: [QuestionResolver, QuestionService],
  exports: [QuestionService],
})
export class QuestionModule {}
