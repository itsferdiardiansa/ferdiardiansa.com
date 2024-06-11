import { Field, ID, InputType } from '@nestjs/graphql'
import { Types } from 'mongoose'

@InputType()
export class DeleteCareerInput {
  @Field(() => ID)
  id: Types.ObjectId
}
