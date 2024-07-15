import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Question, QuestionSchema } from './schema/question.models'
import { QuestionResolver } from './question.resolver'
import { QuestionService } from './question.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Question.name, schema: QuestionSchema },
    ]),
  ],
  providers: [QuestionResolver, QuestionService],
  exports: [QuestionService],
})
export class QuestionModule {}
