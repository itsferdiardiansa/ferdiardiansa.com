import { Field, ID, InputType } from '@nestjs/graphql'
import { MaxLength } from 'class-validator'
import { Types } from 'mongoose'

@InputType()
export class UpdateQuestionInput {
  @Field(() => ID)
  id: Types.ObjectId

  @Field(() => String)
  @MaxLength(200)
  text: string
}
