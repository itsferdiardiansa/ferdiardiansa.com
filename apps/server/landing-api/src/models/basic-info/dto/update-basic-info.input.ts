import { Field, ID, InputType } from '@nestjs/graphql'
import { Types } from 'mongoose'

@InputType()
export class UpdateBasicInfoInput {
  @Field(() => ID)
  _id: Types.ObjectId

  @Field(() => String, { nullable: true })
  description: string

  @Field(() => String)
  name: string

  @Field(() => String)
  pronouns: string

  @Field(() => String)
  role: string
}
