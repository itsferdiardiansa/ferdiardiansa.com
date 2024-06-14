import { Test } from '@nestjs/testing'
import { getModelToken } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import { CareersService } from '../careers.service'
import { Careers } from '../schema/careers.models'
import { mockProvider } from '@/libs/test-helper'
import * as mockData from './mockData.json'

describe('models/BasicInfo', () => {
  let service: CareersService
  let model: Model<Careers>

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CareersService,
        mockProvider<typeof Careers, typeof mockData>(Careers, mockData),
      ],
    }).compile()

    service = module.get<CareersService>(CareersService)
    model = module.get<Model<Careers>>(getModelToken(Careers.name))
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should return careers', () => {
    jest.spyOn(model, 'find').mockReturnValueOnce(mockData as any)

    const collections = service.find()

    expect(collections).toEqual(mockData)
  })

  it('should update data by given id', () => {
    const mock = {
      ...(mockData as unknown as Careers),
      id: new Types.ObjectId(),
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
