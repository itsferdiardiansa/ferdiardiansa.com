import { Test, TestingModule } from '@nestjs/testing'
import { Types } from 'mongoose'
import { AboutResolver } from '../about.resolver'
import { AboutService } from '../about.service'
import { About } from '../schema/about.models'
import * as mockData from './mockData.json'
import { UpdateAboutInput } from '../dto/update-about.input'

const DATA = {
  _id: new Types.ObjectId(),
  ...mockData,
  lastUpdated: new Date(),
}

const aboutServiceMock = {
  find: jest.fn((): About => DATA),
  update: jest.fn(
    (inputData: UpdateAboutInput): About => ({
      ...inputData,
      lastUpdated: new Date(),
    })
  ),
}

describe('models/AboutResolver', () => {
  let resolver: AboutResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AboutResolver,
        { provide: AboutService, useValue: aboutServiceMock },
      ],
    }).compile()

    resolver = module.get<AboutResolver>(AboutResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  it('should query for about', () => {
    const collection = resolver.about()

    expect(collection).toMatchObject(DATA)
  })

  it('should update the data and return about data', () => {
    const inputData = {
      _id: new Types.ObjectId(),
      title: 'About updated(2)',
      items: [],
    }

    const collection = resolver.updateAbout(inputData)

    expect(collection).toMatchObject(inputData)
  })
})
