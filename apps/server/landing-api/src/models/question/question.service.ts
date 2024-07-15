import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Question, QuestionDocument } from './schema/question.models'
import { Model } from 'mongoose'
import { CreateQuestionInput } from './dto/create-question.input'
import { UpdateQuestionInput } from './dto/update-question.input'
import { FilterQuestionInput } from './dto/filter-question.input'

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
          foreignField: 'question',
          as: 'answers',
        },
      },
    ])
  }

  findById(id: string) {
    return this.questionModel.findById(id)
  }

  filter(params: FilterQuestionInput) {
    return this.questionModel.find({
      $or: [
        { _id: params._id },
        { text: { $regex: '.*' + params.text + '.*', $options: 'i' } },
      ],
    })
  }

  create(data: CreateQuestionInput) {
    return this.questionModel.create(data)
  }

  update({ id, ...restData }: UpdateQuestionInput) {
    return this.questionModel.findByIdAndUpdate(
      id,
      {
        $set: {
          ...restData,
          lastUpdated: new Date(),
        },
      },
      { new: true }
    )
  }

  delete(id: string) {
    return this.questionModel.findByIdAndDelete(id)
  }
}
