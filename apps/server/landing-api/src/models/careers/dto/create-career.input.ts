import { Field, InputType } from '@nestjs/graphql'
import { MaxLength } from 'class-validator'
import { References } from '../schema/careers.models'

@InputType()
export class ReferencesInput implements References {
  @Field(() => String)
  label: string

  @Field(() => String)
  link: string

  @Field(() => String)
  linkType: string
}

@InputType()
export class CreateCareerInput {
  @Field(() => String, { nullable: true })
  description: string | null

  @Field(() => String, { nullable: true })
  link: string | null

  @Field(() => String)
  @MaxLength(30)
  title: string

  @Field(() => String, { nullable: true })
  @MaxLength(30)
  subTitle: string | null

  @Field(() => String)
  time: string

  @Field(() => [String])
  techStacks: string[]

  @Field(() => [ReferencesInput], { nullable: true })
  references: (typeof ReferencesInput)[]
}
