import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Question } from './schema/question.models'
import { QuestionService } from './question.service'
import { CreateQuestionInput } from './dto/create-question.input'
import { UpdateQuestionInput } from './dto/update-question.input'
import { FilterQuestionInput } from './dto/filter-question.input'

@Resolver(() => Question)
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}

  @Query(() => [Question])
  questions() {
    return this.questionService.find()
  }

  @Query(() => Question, { nullable: true })
  getQuestionById(@Args({ name: 'id', type: () => String }) id: string) {
    return this.questionService.findById(id)
  }

  @Query(() => [Question], { defaultValue: [] })
  filterQuestions(@Args('inputData') inputData: FilterQuestionInput) {
    return this.questionService.filter(inputData)
  }

  @Mutation(() => Question, { nullable: true })
  addQuestion(@Args('inputData') inputData: CreateQuestionInput) {
    return this.questionService.create(inputData)
  }

  @Mutation(() => Question)
  updateQuestion(@Args('inputData') inputData: UpdateQuestionInput) {
    return this.questionService.update(inputData)
  }

  @Mutation(() => Question)
  deleteQuestion(@Args({ name: 'id', type: () => String }) id: string) {
    return this.questionService.delete(id)
  }
}
