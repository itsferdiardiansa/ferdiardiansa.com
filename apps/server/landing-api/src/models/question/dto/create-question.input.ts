import { Field, InputType } from '@nestjs/graphql'
import { MaxLength } from 'class-validator'

@InputType()
export class CreateQuestionInput {
  @Field(() => String)
  @MaxLength(200)
  text: string
}
