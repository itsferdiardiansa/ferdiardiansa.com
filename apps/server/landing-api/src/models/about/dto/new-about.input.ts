import { Field, InputType } from '@nestjs/graphql'
import { MaxLength } from 'class-validator'

@InputType()
export class NewAboutInput {
  @Field()
  @MaxLength(30)
  title: string

  @Field(type => [String])
  items: []
}
