import { Field, ID, InputType } from '@nestjs/graphql'
import { Types } from 'mongoose'

@InputType()
export class BaseAnswerInput {
  @Field(() => ID)
  question: Types.ObjectId

  @Field(() => String)
  text: string
}
