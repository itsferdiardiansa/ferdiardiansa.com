import { Query, Resolver } from '@nestjs/graphql'
import { Answer } from './schema/answer.models'
import { AnswerService } from './answer.service'

@Resolver(() => Answer)
export class AnswerResolver {
  constructor(private readonly answerService: AnswerService) {}

  @Query(() => [Answer])
  answers() {
    return this.answerService.find()
  }
}
