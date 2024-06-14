import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { BasicInfo } from './schema/basic-info.models'
import { BasicInfoService } from './basic-info.service'
import { UpdateBasicInfoInput } from './dto/update-basic-info.input'

@Resolver(() => BasicInfo)
export class BasicInfoResolver {
  constructor(private readonly basicInfoService: BasicInfoService) {}

  @Query(() => BasicInfo)
  basicInfo() {
    return this.basicInfoService.find()
  }

  @Mutation(() => BasicInfo)
  updateBasicInfo(@Args('basicInfoData') basicInfoData: UpdateBasicInfoInput) {
    return this.basicInfoService.update(basicInfoData)
  }
}
