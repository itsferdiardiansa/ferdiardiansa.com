import { Field, InputType, ID } from '@nestjs/graphql'
import { ReferencesInput } from './create-career.input'
import { Types } from 'mongoose'
import { MaxLength } from 'class-validator'

@InputType()
export class UpdateCareerInput {
  @Field(() => ID)
  id: Types.ObjectId

  @Field(() => String, { nullable: true })
  @MaxLength(30)
  title: string | null

  @Field(() => String, { nullable: true })
  @MaxLength(30)
  subTitle: string | null

  @Field(() => String, { nullable: true })
  time: string | null

  @Field(() => [String], { nullable: true })
  techStacks: string[]

  @Field(() => String, { nullable: true })
  description: string | null

  @Field(() => String, { nullable: true })
  link: string | null

  @Field(() => [ReferencesInput], { nullable: true })
  references: (typeof ReferencesInput)[]
}
