import { Test, TestingModule } from '@nestjs/testing'
import { Types } from 'mongoose'
import { CareersResolver } from '../careers.resolver'
import { CareersService } from '../careers.service'
import { Careers } from '../schema/careers.models'
import * as mockData from './mockData.json'
import { UpdateCareerInput } from '../dto/update-career.input'

const DATA: Careers[] = [
  {
    ...(mockData as unknown as Careers),
    _id: new Types.ObjectId(),
    lastUpdated: new Date(),
  },
]

const careersServiceMock = {
  find: jest.fn((): Careers[] => DATA),
  update: jest.fn(
    (inputData: UpdateCareerInput): Careers => ({
      ...(inputData as unknown as Careers),
      _id: new Types.ObjectId(),
      lastUpdated: new Date(),
    })
  ),
}

describe('models/CareersResolver', () => {
  let resolver: CareersResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CareersResolver,
        { provide: CareersService, useValue: careersServiceMock },
      ],
    }).compile()

    resolver = module.get<CareersResolver>(CareersResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  it('should query for about', () => {
    const collection = resolver.careers()

    expect(collection).toMatchObject(DATA)
  })

  it('should update the data and return careers data', () => {
    const inputData = {
      id: new Types.ObjectId(),
      description: 'Lorem ipsum ...',
      link: null,
      title: 'Career Break (3)',
      subTitle: 'Professional Development',
      time: 'Jan - Dec 2023',
      techStacks: [],
      references: [],
    }

    const collection = resolver.updateCareer(inputData)

    expect(collection).toMatchObject(inputData)
  })
})
