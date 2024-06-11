import { Injectable } from '@nestjs/common'
import { BasicInfo, BasicInfoDocument } from './schema/basic-info.models'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { UpdateBasicInfoInput } from './dto/update-basic-info.input'

@Injectable()
export class BasicInfoService {
  constructor(
    @InjectModel(BasicInfo.name)
    private basicInfoModel: Model<BasicInfoDocument>
  ) {}

  find() {
    return this.basicInfoModel.findOne()
  }

  update({ _id, ...restData }: UpdateBasicInfoInput) {
    return this.basicInfoModel.findByIdAndUpdate(
      _id,
      {
        $set: {
          ...restData,
          lastUpdated: new Date(),
        },
      },
      { new: true }
    )
  }
}
