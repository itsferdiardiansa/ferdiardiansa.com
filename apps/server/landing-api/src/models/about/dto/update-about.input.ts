import { Field, InputType, ID } from '@nestjs/graphql'
import { Types } from 'mongoose'
import { MaxLength } from 'class-validator'

@InputType()
export class UpdateAboutInput {
  @Field(() => ID)
  _id: Types.ObjectId

  @Field(() => String)
  @MaxLength(30)
  title: string

  @Field(() => [String])
  items: string[]
}
