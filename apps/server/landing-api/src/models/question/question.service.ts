import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Question, QuestionDocument } from './schema/question.models'
import { Model } from 'mongoose'

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>
  ) {}

  find() {
    return this.questionModel.aggregate([
      {
        $lookup: {
          from: 'answers',
          localField: '_id',
          foreignField: 'question_id',
          as: 'answers',
        },
      },
    ])
  }
}
