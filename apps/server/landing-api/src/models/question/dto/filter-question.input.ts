import { Field, ID, InputType } from '@nestjs/graphql'
import { Types } from 'mongoose'

@InputType()
export class FilterQuestionInput {
  @Field(() => ID, { nullable: true })
  _id: Types.ObjectId

  @Field(() => String, { nullable: true })
  text: string
}
