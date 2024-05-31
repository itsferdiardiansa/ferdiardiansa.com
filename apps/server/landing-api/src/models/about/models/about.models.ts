import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType({ description: 'about-me' })
export class About {
  @Field()
  title: string

  @Field(type => [String])
  items: string[]

  @Field(type => Date)
  lastUpdate: Date
}
