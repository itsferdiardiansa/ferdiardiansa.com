import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Answer, AnswerDocument } from './schema/answer.models'
import { Model } from 'mongoose'

@Injectable()
export class AnswerService {
  constructor(
    @InjectModel(Answer.name) private answerModel: Model<AnswerDocument>
  ) {}

  find() {
    return this.answerModel.find()
  }
}
