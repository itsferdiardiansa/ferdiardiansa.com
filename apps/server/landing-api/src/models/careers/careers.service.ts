import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Careers, CareersDocument } from './schema/careers.models'
import { CreateCareerInput } from './dto/create-career.input'
import { DeleteCareerInput } from './dto/delete-career.input'
import { UpdateCareerInput } from './dto/update-career.input'

@Injectable()
export class CareersService {
  constructor(
    @InjectModel(Careers.name)
    private careersModel: Model<CareersDocument>
  ) {}

  find() {
    return this.careersModel.find()
  }

  create(data: CreateCareerInput) {
    return this.careersModel.insertMany(data)
  }

  update({ id, ...restData }: UpdateCareerInput) {
    return this.careersModel.findByIdAndUpdate(
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

  delete({ id }: DeleteCareerInput) {
    return this.careersModel.findByIdAndDelete(id)
  }
}
