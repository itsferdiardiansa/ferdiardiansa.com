import { Test, TestingModule } from '@nestjs/testing'
import { BasicInfoService } from '../basic-info.service'
import { BasicInfo } from '../schema/basic-info.models'
import { Model, Types } from 'mongoose'
import { mockProvider } from '@/libs/test-helper'
import * as mockData from './mockData.json'
import { getModelToken } from '@nestjs/mongoose'

describe('models/BasicInfo', () => {
  let service: BasicInfoService
  let model: Model<BasicInfo>

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        BasicInfoService,
        mockProvider<typeof BasicInfo, typeof mockData>(BasicInfo, mockData),
      ],
    }).compile()

    service = module.get<BasicInfoService>(BasicInfoService)
    model = module.get<Model<BasicInfo>>(getModelToken(BasicInfo.name))
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should return basic info', () => {
    jest.spyOn(model, 'findOne').mockReturnValueOnce(mockData as any)

    const collections = service.find()

    expect(collections).toEqual(mockData)
  })

  it('should update data by given id', () => {
    const mock = {
      _id: new Types.ObjectId(),
      ...mockData,
    }

    const spy = jest
      .spyOn(model, 'findByIdAndUpdate')
      .mockReturnValueOnce(mock as any)

    service.update(mock)

    const [mockResult] = spy.mock.results

    expect(spy).toHaveBeenCalledTimes(1)
    expect(mockResult.value).toMatchObject(mock)

    spy.mockReset()
  })
})
