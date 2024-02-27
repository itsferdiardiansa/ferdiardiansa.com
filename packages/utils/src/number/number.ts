/**
 * Number to currency formatter
 *
 * @param value number
 * @returns
 */
export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'IDR',
    maximumSignificantDigits: 3,
  })
    .format(value)
    .replace(/IDR/, '')
    .trim()
}

/**
 *
 * @param length number
 * @returns
 */
export const generateRandomAlphanumeric = (length: number = 5) => {
  const pattern = [
    '2_3_4_5_6_7_8_9',
    'A_B_C_D_E_F_G_H_J_K_L_M_N_P_Q_R_S_T_U_V_W_X_Y_Z',
  ]
  const result: string[] = []

  for (let i = 0; i < length; i++) {
    const key = Math.floor(Math.random() * 2)
    const selectedPattern = pattern[key].split('_')

    const code = Math.floor(Math.random() * selectedPattern.length - 1)

    result.push(selectedPattern[code])
  }

  return result.join('')
}

/**
 * Parse string to integer with omitting the string char(s)
 *
 * @param value
 * @returns
 */
export const convertToNumber = (value: string) => {
  const pattern = /[^0-9.]+/gi

  return +value.replace(pattern, '')
}
