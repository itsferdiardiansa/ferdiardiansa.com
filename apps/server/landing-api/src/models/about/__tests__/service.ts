import { Test, TestingModule } from '@nestjs/testing'
import { AboutService } from '../about.service'
import { About } from '../schema/about.models'
import { Model, Types } from 'mongoose'
import { getModelToken } from '@nestjs/mongoose'
import { mockProvider } from '@/libs/test-helper'
import * as mockData from './mockData.json'

describe('models/AboutService', () => {
  let service: AboutService
  let model: Model<About>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AboutService,
        mockProvider<typeof About, typeof mockData>(About, mockData),
      ],
    }).compile()

    service = module.get<AboutService>(AboutService)
    model = module.get<Model<About>>(getModelToken(About.name))
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should return about', () => {
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
