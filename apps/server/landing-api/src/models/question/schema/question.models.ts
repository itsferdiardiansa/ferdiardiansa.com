import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'
import { Answer } from '@/models/answer/schema/answer.models'

@Schema()
@ObjectType()
export class Question {
  @Field(() => ID)
  _id: Types.ObjectId

  @Field(() => String)
  @Prop({ required: true, unique: true })
  text: string

  @Field(() => Date, { nullable: true })
  @Prop({ default: new Date() })
  lastUpdated: Date

  @Field(() => [Answer], { defaultValue: [] })
  @Prop({ type: Types.ObjectId, ref: 'Answer', default: [] })
  answers: Answer[]
}

export type QuestionDocument = HydratedDocument<Question>
//          ^?

export const QuestionSchema = SchemaFactory.createForClass(Question)
