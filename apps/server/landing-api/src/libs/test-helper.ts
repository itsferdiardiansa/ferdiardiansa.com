import { getModelToken } from '@nestjs/mongoose'

export function mockProvider<T extends { name: string }, S>(
  provider: T,
  mockData: S
) {
  return {
    provide: getModelToken(provider.name),
    useValue: {
      new: jest.fn().mockResolvedValue(mockData),
      constructor: jest.fn().mockResolvedValue(mockData),
      find: jest.fn(),
      findOne: jest.fn(),
      findByIdAndUpdate: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
      exec: jest.fn(),
    },
  }
}
