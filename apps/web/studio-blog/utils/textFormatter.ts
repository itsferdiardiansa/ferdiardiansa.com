export const firstUpperCaseLatter = (value: string) => {
  const firstLetter = value[0].toUpperCase()
  const restLetters = value.substring(1)

  return [firstLetter, restLetters].join('')
}
