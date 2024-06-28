import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Answer } from './schema/answer.models'
import { AnswerService } from './answer.service'
import { BaseAnswerInput } from './dto/base-answer.input'
import { updateAnswerInput } from './dto/update-answer.input'

@Resolver(() => Answer)
export class AnswerResolver {
  constructor(private readonly answerService: AnswerService) {}

  @Query(() => [Answer], { defaultValue: [] })
  answers() {
    return this.answerService.find()
  }

  @Mutation(() => Answer)
  createAnswer(@Args('inputData') inputData: BaseAnswerInput) {
    return this.answerService.create(inputData)
  }

  @Mutation(() => Answer)
  updateAnswer(@Args('inputData') inputData: updateAnswerInput) {
    return this.answerService.update(inputData)
  }

  @Mutation(() => Answer)
  deleteAnswer(@Args('id') id: string) {
    return this.answerService.delete(id)
  }
}
