import { DateTime } from 'luxon'

import { CHAT_COLORS } from 'Constants/chat'

import { isToday } from './date'

export const convertMessageDate = (timestamp, compareWithNow = false) => {
  let dateString

  if (timestamp.length > 0) {
    const date = DateTime.fromJSDate(new Date(parseInt(timestamp, 10)))

    if (compareWithNow && isToday(date)) {
      dateString = date.toRelative({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        unit: ['months', 'days', 'hours', 'minutes'],
      })
      if (dateString === '0 minutes ago') {
        dateString = 'less than 1 min'
      }
    } else {
      dateString = date.toFormat('dd.MM.yyyy')
    }
  }
  return dateString
}

export const isNormalInteger = str => {
  const n = Math.floor(Number(str))
  return n !== Infinity && String(n) === str && n >= 0
}

export const getMaxBlockHeight = () => {
  if (document.getElementsByClassName('header').length) {
    return (
      window.innerHeight -
      (document.getElementsByClassName('header')[0] as HTMLElement)
        .offsetHeight -
      20
    )
  }

  return window.innerHeight
}

export const getChatColor = index => {
  if (index < 0) {
    return CHAT_COLORS[CHAT_COLORS.length - 1]
  }
  return CHAT_COLORS[index]
}
