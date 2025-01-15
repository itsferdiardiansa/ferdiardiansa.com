export type DateFormat =
  | 'MM DD, YYYY'
  | 'MMM DD, YY'
  | 'YYYY-MM-DD'
  | 'DD/MM/YYYY'
  | 'DD MMM YYYY'

const MONTHS_SHORT = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]
const MONTHS_LONG = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const getWeeksInMonth = (date: Date): number => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const totalDays = lastDayOfMonth.getDate()
  return Math.ceil(totalDays / 7)
}

function formatDate(date: Date | string, format: DateFormat): string {
  const d = typeof date === 'string' ? new Date(date) : date

  if (isNaN(d.getTime())) {
    throw new Error('Invalid date')
  }

  const now = new Date()
  const diffInMs = now.getTime() - d.getTime()
  const diffInSeconds = Math.floor(diffInMs / 1000)
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  const diffInHours = Math.floor(diffInMinutes / 60)
  const diffInDays = Math.floor(diffInHours / 24)
  const weeksInMonth = getWeeksInMonth(d)
  const diffInWeeks = Math.floor(diffInDays / 7)

  const ranges = [
    { condition: diffInSeconds < 60, result: 'just now' },
    { condition: diffInMinutes < 60, result: `${diffInMinutes}mnt ago` },
    { condition: diffInHours < 24, result: `${diffInHours}hrs ago` },
    { condition: diffInDays <= 7, result: `${diffInDays}d ago` },
    { condition: diffInWeeks <= weeksInMonth, result: `${diffInWeeks}w ago` },
  ]

  const relativeTime = ranges.find(range => range.condition)?.result
  if (relativeTime) return relativeTime

  const day = d.getDate().toString().padStart(2, '0')
  const monthIndex = d.getMonth()
  const year = d.getFullYear().toString()
  const shortYear = year.slice(-2)

  const replacements: Record<string, string> = {
    MM: MONTHS_SHORT[monthIndex],
    MMM: MONTHS_LONG[monthIndex],
    DD: day,
    YYYY: year,
    YY: shortYear,
  }

  return format.replace(/MM|MMM|DD|YYYY|YY/g, token => replacements[token])
}

export { formatDate }
