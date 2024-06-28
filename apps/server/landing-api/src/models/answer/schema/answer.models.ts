import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'
import { Question } from '@/models/question/schema/question.models'

@Schema()
@ObjectType()
export class Answer {
  @Field(() => ID)
  _id: Types.ObjectId

  @Field(() => Question, { nullable: true })
  @Prop({ type: Types.ObjectId, ref: 'Question', default: null })
  question: Types.ObjectId

  @Field(() => String)
  @Prop()
  text: string

  @Field(() => Date, { nullable: true })
  @Prop({ default: new Date() })
  lastUpdated: Date
}

export type AnswerDocument = HydratedDocument<Answer>
//          ^?

export const AnswerSchema = SchemaFactory.createForClass(Answer)
