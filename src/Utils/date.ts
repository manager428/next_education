import { DateTime } from 'luxon'

import get from 'lodash/get'

export const isToday = (date: DateTime) => date.hasSame(DateTime.local(), 'day')

export const isAfter = (date: DateTime, dateToCompare: DateTime) =>
  date > dateToCompare

export const isBefore = (date: DateTime, dateToCompare: DateTime) =>
  date < dateToCompare

export const differenceInMinutes = (
  date: DateTime,
  dateToCompare: DateTime,
) => {
  const difference = date.diff(dateToCompare, ['minutes']).toObject()

  return get(difference, 'minutes', 0)
}

export const formatCommentDate = (date: string) => {
  const createdAt = DateTime.fromISO(date)

  return isToday(createdAt)
    ? createdAt.toFormat('HH:mm')
    : createdAt.toFormat('dd MMM yyyy')
}
