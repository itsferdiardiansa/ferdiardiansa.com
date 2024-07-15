import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Answer, AnswerDocument } from './schema/answer.models'
import { Model } from 'mongoose'
import { GraphQLError } from 'graphql'
import {
  Question,
  QuestionDocument,
} from '@/models/question/schema/question.models'
import { BaseAnswerInput } from './dto/base-answer.input'
import { updateAnswerInput } from './dto/update-answer.input'

@Injectable()
export class AnswerService {
  constructor(
    @InjectModel(Answer.name) private answerModel: Model<AnswerDocument>,
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>
  ) {}

  find() {
    return this.answerModel.find().populate('question')
  }

  async create({ question, text }: BaseAnswerInput) {
    try {
      const selectedQuestion = await this.questionModel.findById(question)

      if (!selectedQuestion)
        throw new Error(`Question with id: ${question} is not found!`)

      return this.answerModel.create({ question, text })
    } catch (e) {
      throw new GraphQLError(e.message, {
        extensions: {
          code: 'INTERNAL_SERVER_ERROR',
        },
      })
    }
  }

  async update({ id, ...restData }: updateAnswerInput) {
    try {
      const selectedQuestion = await this.questionModel.findById(
        restData.question
      )

      if (!selectedQuestion)
        throw new Error(`Question with id: ${restData.question} is not found!`)

      return this.answerModel.findByIdAndUpdate(
        id,
        {
          $set: {
            ...restData,
            lastUpdated: new Date(),
          },
        },
        { new: true }
      )
    } catch (e) {
      throw new GraphQLError(e.message, {
        extensions: {
          code: 'INTERNAL_SERVER_ERROR',
        },
      })
    }
  }

  async delete(id: string): Promise<{ deletedCount: number }> {
    try {
      const selectedAnswer = await this.answerModel.findById(id)

      if (!selectedAnswer)
        throw new Error(`Answer with id: ${id} is not found!`)

      return await this.answerModel.deleteOne({ _id: id })
    } catch (e) {
      throw new GraphQLError(e.message, {
        extensions: {
          code: 'INTERNAL_SERVER_ERROR',
        },
      })
    }
  }
}
