import { Field, InputType, ID } from '@nestjs/graphql'
import { Schema as MongooseSchema } from 'mongoose'
import { MaxLength } from 'class-validator'

@InputType()
export class UpdateAboutInput {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId

  @Field()
  @MaxLength(30)
  title: string

  @Field(() => [String])
  items: []
}
