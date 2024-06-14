import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { About, AboutDocument } from './schema/about.models'
import { UpdateAboutInput } from './dto/update-about.input'

@Injectable()
export class AboutService {
  constructor(
    @InjectModel(About.name) private aboutModel: Model<AboutDocument>
  ) {}

  find() {
    return this.aboutModel.findOne()
  }

  update({ _id, ...restData }: UpdateAboutInput) {
    return this.aboutModel.findByIdAndUpdate(
      _id,
      {
        $set: { ...restData, lastUpdated: new Date() },
      },
      { new: true }
    )
  }
}
