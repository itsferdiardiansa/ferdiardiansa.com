import { Field, ID, InputType } from '@nestjs/graphql'
import { BaseAnswerInput } from './base-answer.input'
import { Types } from 'mongoose'

@InputType()
export class updateAnswerInput extends BaseAnswerInput {
  @Field(() => ID)
  id: Types.ObjectId
}
