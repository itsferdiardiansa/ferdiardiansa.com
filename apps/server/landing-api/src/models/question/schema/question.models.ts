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
  @Prop()
  text: string

  @Field(() => [Answer])
  answers: Answer[]
}

export type QuestionDocument = HydratedDocument<Question>
//          ^?

export const QuestionSchema = SchemaFactory.createForClass(Question)
