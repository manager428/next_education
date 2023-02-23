import { DateTime } from 'luxon'

import get from 'lodash/get'
import map from 'lodash/map'

import { CardType } from 'Components/Blocks/Entities/Calls/CallCard/CallCard'

type Participant = {
  id: number
  avatar: string
}

export const transferToCallCard = (values: {
  participants: Participant[]
}): CardType => ({
  id: get(values, 'id'),
  images: get(values, 'images', []),
  date: `${DateTime.fromISO(get(values, 'start_time', '')).toFormat(
    'MMMM dd, hh:mm a',
  )} - ${DateTime.fromISO(get(values, 'end_time', '')).toFormat(
    'MMMM dd, hh:mm a',
  )}`,
  startTime: get(values, 'start_time', ''),
  isJoined: get(values, 'is_joined', false),
  isCreator: get(values, 'is_creator', false),
  isFinished: get(values, 'is_finished', false),
  participants: map(get(values, 'all_participants', [])),
  studentsLevel: get(values, 'students_level', ''),
  title: get(values, 'title', ''),
  type: get(values, 'call_type'),
})
