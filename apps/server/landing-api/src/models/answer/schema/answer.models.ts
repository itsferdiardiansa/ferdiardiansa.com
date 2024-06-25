import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'

@Schema()
@ObjectType()
export class Answer {
  @Field(() => ID)
  _id: Types.ObjectId

  @Field(() => ID)
  @Prop()
  question_id: Types.ObjectId

  @Field(() => String)
  @Prop()
  text: string
}

export type AnswerDocument = HydratedDocument<Answer>
//          ^?

export const AnswerSchema = SchemaFactory.createForClass(Answer)
