import { DateTime, Interval } from 'luxon'

import get from 'lodash/get'

export const getLineProgressPercent = (
  date1: DateTime,
  date2: DateTime,
  date3: DateTime,
  date4: DateTime,
): number => {
  const divWidth = 784
  const NOW = DateTime.local()

  let percentage

  if (date1 > NOW) return 0

  // If today is between date1 and date2.
  if (
    Interval.fromDateTimes(date1, date2).overlaps(
      Interval.fromDateTimes(NOW, NOW),
    )
  ) {
    // How many days "finished" after official start.
    const daysFromStart = Math.abs(
      get(date1.diff(NOW, ['days']).toObject(), ['days'], 0),
    )
    // Get count days between date1 and date2.
    const daysCountD1D2 = Math.abs(
      get(date2.diff(date1, ['days']).toObject(), ['days'], 0),
    )

    percentage = (daysFromStart / daysCountD1D2) * 33.33
  }
  // If today is between date2 and date3.
  else if (
    Interval.fromDateTimes(date2, date3).overlaps(
      Interval.fromDateTimes(NOW, NOW),
    )
  ) {
    // How many days "finished" after date2.
    const daysFromStart = Math.abs(
      get(date2.diff(NOW, ['days']).toObject(), ['days'], 0),
    )
    // Get count days between date2 and date3.
    const daysCountD2D3 = Math.abs(
      get(date3.diff(date2, ['days']).toObject(), ['days'], 0),
    )
    // Here we are need to add 33.33%;
    percentage = (daysFromStart / daysCountD2D3) * 33.33 + 33.33
  }
  // If today is between date3 and date4.
  else if (
    Interval.fromDateTimes(date3, date4).overlaps(
      Interval.fromDateTimes(NOW, NOW),
    )
  ) {
    // How many days "finished" after date3.
    const daysFromStart = Math.abs(
      get(date3.diff(NOW, ['days']).toObject(), ['days'], 0),
    )
    // Get count days between date3 and date4.
    const daysCountD3D4 = Math.abs(
      get(date4.diff(date3, ['days']).toObject(), ['days'], 0),
    )
    // Here we are need to add 66.66%;
    percentage = (daysFromStart / daysCountD3D4) * 33.33 + 66.66
  } else {
    percentage = 100
  }

  return (percentage * divWidth) / 100
}
