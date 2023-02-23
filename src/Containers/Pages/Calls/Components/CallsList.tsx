import React from 'react'

import get from 'lodash/get'
import map from 'lodash/map'

import { Loader } from 'Components/UI'

import { CallList } from 'Components/Blocks/Entities/Calls'

import { CalendarIcon, NoCalls, NoCallsText } from '../styles'

// TODO: Refactor with types

export function CallsList({
  data,
  isLoading,
}: {
  data: any[]
  isLoading: boolean
}) {
  if (isLoading) return <Loader top="20%" />

  if (data.length === 0) {
    return (
      <NoCalls>
        <CalendarIcon />
        <NoCallsText>
          <p>No calls for these dates</p>
          <span>
            If you do not find any available сalls for the selected dates, you
            can create your own call!
          </span>
        </NoCallsText>
      </NoCalls>
    )
  }

  return (
    <>
      {map(data, (list, index) => {
        const dayCalls = get(list, 'calls', [])
        const date = get(list, 'date', '')

        return <CallList calls={dayCalls} date={date} key={index} />
      })}
    </>
  )
}
