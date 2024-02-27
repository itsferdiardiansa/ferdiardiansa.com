import { describe, it, expect } from '@jest/globals'
import {
  formatCurrency,
  generateRandomAlphanumeric,
  convertToNumber,
} from '../number'

describe('sum module', () => {
  it('should convert the number to currency format', () => {
    expect(formatCurrency(100)).toEqual('100')
    expect(formatCurrency(3000)).toEqual('3,000')
    expect(formatCurrency(23000)).toEqual('23,000')
    expect(formatCurrency(113000)).toEqual('113,000')
    expect(formatCurrency(1343000)).toEqual('1,340,000')
  })

  it('should generate the random alphanumeric up to 5 digits', () => {
    const pattern = [expect.stringMatching(/^[1I0O]/)]

    expect(generateRandomAlphanumeric().split('')).toEqual(
      expect.not.arrayContaining(pattern)
    )

    expect(generateRandomAlphanumeric().split('')).toEqual(
      expect.not.arrayContaining(pattern)
    )

    expect(generateRandomAlphanumeric().split('')).toEqual(
      expect.not.arrayContaining(pattern)
    )
  })

  it('should convert given string to number', () => {
    expect(convertToNumber('.56')).toEqual(0.56)
    expect(convertToNumber('1.5')).toEqual(1.5)
    expect(convertToNumber('2.6 degree Celsius')).toEqual(2.6)
    expect(convertToNumber('2.6 * 111')).toEqual(2.6111)
  })
})
