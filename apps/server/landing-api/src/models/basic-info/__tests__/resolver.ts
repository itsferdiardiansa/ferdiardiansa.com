import { Test, TestingModule } from '@nestjs/testing'
import { Types } from 'mongoose'
import { BasicInfoResolver } from '../basic-info.resolver'
import { BasicInfoService } from '../basic-info.service'
import { BasicInfo } from '../schema/basic-info.models'
import * as mockData from './mockData.json'
import { UpdateBasicInfoInput } from '../dto/update-basic-info.input'

const DATA = {
  _id: new Types.ObjectId(),
  ...mockData,
  lastUpdated: new Date(),
}

const basicInfoServiceMock = {
  find: jest.fn((): BasicInfo => DATA),
  update: jest.fn(
    (inputData: UpdateBasicInfoInput): BasicInfo => ({
      ...inputData,
      lastUpdated: new Date(),
    })
  ),
}

describe('models/BasicInfoResolver', () => {
  let resolver: BasicInfoResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BasicInfoResolver,
        { provide: BasicInfoService, useValue: basicInfoServiceMock },
      ],
    }).compile()

    resolver = module.get<BasicInfoResolver>(BasicInfoResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  it('should query for about', () => {
    const collection = resolver.basicInfo()

    expect(collection).toMatchObject(DATA)
  })

  it('should update the data and return about data', () => {
    const inputData = {
      _id: new Types.ObjectId(),
      name: 'Ferdi Ardiansa',
      description: 'Lorem ipsum... (updated 2)',
      pronouns: 'he/him',
      role: 'Test Engineer',
    }

    const collection = resolver.updateBasicInfo(inputData)

    expect(collection).toMatchObject(inputData)
  })
})
