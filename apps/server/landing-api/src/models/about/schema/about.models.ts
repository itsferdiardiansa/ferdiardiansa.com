import { Field, ObjectType, ID } from '@nestjs/graphql'

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose'

@Schema({ collection: 'about' })
@ObjectType({ description: 'about-me' })
export class About {
  @Field(() => ID)
  _id: MongooseSchema.Types.ObjectId

  @Field(() => String)
  @Prop({ required: true })
  title: string

  @Field(() => [String])
  @Prop()
  items: string[]

  @Field(() => Date)
  @Prop({ required: false })
  lastUpdated: Date
}

export type AboutDocument = HydratedDocument<About>
//          ^?

export const AboutSchema = SchemaFactory.createForClass(About)
