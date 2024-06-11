import { Field, InputType, ID } from '@nestjs/graphql'
import { CreateCareerInput } from './create-career.input'
import { Types } from 'mongoose'

@InputType()
export class UpdateCareerInput extends CreateCareerInput {
  @Field(() => ID)
  id: Types.ObjectId
}
