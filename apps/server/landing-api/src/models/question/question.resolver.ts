import { Query, Resolver } from '@nestjs/graphql'
import { Question } from './schema/question.models'
import { QuestionService } from './question.service'

@Resolver(() => Question)
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}

  @Query(() => [Question])
  questions() {
    return this.questionService.find()
  }
}
