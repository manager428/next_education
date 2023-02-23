import React from 'react'

import shortId from 'shortid'

import map from 'lodash/map'

import {
  BlockTitle,
  ContentTitleText,
  ContentTitleViewAllText,
} from 'Components/Blocks/Entities/Profile/styles'

import { useScopedI18n } from 'Services/I18n'

import NoProgress from './NoProgress'
import { ProgressItem, ProgressWrap, Wrap } from './styles'

type Props = {
  progress: any[]
}

const WeeklyProgress: React.FC<Props> = ({ progress = [] }) => {
  const s = useScopedI18n('profile.content.progress')

  const getProgressLabel = time => {
    if (time === 0) {
      return s('noActivity')
    }
    if (time >= 20) {
      return s('wellDone')
    }
    return s('good')
  }

  const getProgressColor = time => {
    if (time === 0) {
      return '#D3DAE8'
    }
    if (time >= 20) {
      return '#49CEB1'
    }
    return '#8DE1D1'
  }

  return (
    <>
      {progress.length > 0 ? (
        <Wrap>
          <BlockTitle>
            <ContentTitleText>{s('progressInApp')}</ContentTitleText>
            <ContentTitleViewAllText>{s('lastDays')}</ContentTitleViewAllText>
          </BlockTitle>
          <ProgressWrap>
            {map(progress, (item, index) => {
              const isToday = index === 6
              return (
                <ProgressItem
                  background={getProgressColor(item)}
                  key={shortId.generate()}
                >
                  <div className="time">
                    <span>{item}</span>min
                  </div>
                  {isToday ? (
                    <div className="progress">{s('today')}</div>
                  ) : (
                    <div className="progress">{getProgressLabel(item)}</div>
                  )}
                </ProgressItem>
              )
            })}
          </ProgressWrap>
        </Wrap>
      ) : (
        <NoProgress />
      )}
    </>
  )
}

export default WeeklyProgress
