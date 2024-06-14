import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ObjectType, Field, ID } from '@nestjs/graphql'
import { HydratedDocument, Types } from 'mongoose'

// ======= Base Reference Struct ========
export interface References {
  label: string
  link: string
  linkType: string
}

@ObjectType()
class ReferencesType implements References {
  @Field(() => String)
  label: string

  @Field(() => String)
  link: string

  @Field(() => String)
  linkType: string
}

@Schema({ collection: 'careers' })
@ObjectType()
export class Careers {
  @Field(() => ID)
  _id: Types.ObjectId

  @Field(() => String, { nullable: true })
  @Prop({ required: false, type: String })
  description: string | null

  @Field(() => String, { nullable: true })
  @Prop({ required: false, type: String })
  link: string | null

  @Field(() => String)
  @Prop()
  title: string

  @Field(() => String, { nullable: true })
  @Prop({ required: false, type: String })
  subTitle: string | null

  @Field(() => String)
  @Prop()
  time: string

  @Field(() => [String])
  @Prop()
  techStacks: string[]

  @Field(() => [ReferencesType])
  @Prop({ required: false, type: [ReferencesType] })
  references: (typeof ReferencesType)[]

  @Field(() => Date)
  @Prop({ required: false, default: new Date() })
  lastUpdated: Date
}

export type CareersDocument = HydratedDocument<Careers>

export const CareersSchema = SchemaFactory.createForClass(Careers)
