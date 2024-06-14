import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'

@Schema({ collection: 'basicInfo' })
@ObjectType()
export class BasicInfo {
  @Field(() => ID)
  _id: Types.ObjectId

  @Field(() => String)
  @Prop()
  description: string

  @Field(() => String)
  @Prop({ required: true })
  name: string

  @Field(() => String)
  @Prop({ required: true })
  pronouns: string

  @Field(() => String)
  @Prop({ required: true })
  role: string

  @Field(() => Date)
  @Prop()
  lastUpdated: Date
}

export type BasicInfoDocument = HydratedDocument<BasicInfo>
//          ?^

export const BasicInfoSchema = SchemaFactory.createForClass(BasicInfo)
