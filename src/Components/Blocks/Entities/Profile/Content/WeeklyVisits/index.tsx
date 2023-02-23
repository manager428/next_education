import React from 'react'
import PT from 'prop-types'

import shortId from 'shortid'

import map from 'lodash/map'

import { checkGlyph, closeWithoutBorderGlyph } from 'Assets/svg/common'

import { Icon } from 'Components/UI'

import {
  ProgressItem,
  ProgressWrap,
  Wrap,
} from 'Components/Blocks/Entities/Profile/Content/WeeklyVisits/styles'
import {
  BlockTitle,
  ContentTitleText,
  ContentTitleViewAllText,
} from 'Components/Blocks/Entities/Profile/styles'

import { useScopedI18n } from 'Services/I18n'

const WeeklyVisits = ({ progress }) => {
  const s = useScopedI18n('profile.content.weeklyVisits')
  const getIcon = visit => {
    if (visit) {
      return <Icon fill="white" icon={checkGlyph} size={37} />
    }
    return <Icon icon={closeWithoutBorderGlyph} size={30} />
  }

  const getProgressLabel = visit => {
    if (visit) return s('visited')
    return s('noActivity')
  }

  const getProgressColor = visit => {
    if (visit) {
      return '#FFA08C'
    }
    return '#D3DAE8'
  }

  return (
    <>
      {progress.length > 0 && (
        <Wrap>
          <BlockTitle>
            <ContentTitleText>{s('title')}</ContentTitleText>
            <ContentTitleViewAllText>{s('lastDays')}</ContentTitleViewAllText>
          </BlockTitle>
          <ProgressWrap>
            {map(progress, (item, index: number) => {
              const isToday = index === 6
              return (
                <ProgressItem
                  background={getProgressColor(item.isVisited)}
                  key={shortId.generate()}
                >
                  <div className="time">{getIcon(item.isVisited)}</div>
                  <div className="progress">
                    {isToday ? s('today') : getProgressLabel(item.isVisited)}
                  </div>
                </ProgressItem>
              )
            })}
          </ProgressWrap>
        </Wrap>
      )}
    </>
  )
}

WeeklyVisits.defaultProps = {
  progress: [],
}

WeeklyVisits.propTypes = {
  progress: PT.array,
}

export default WeeklyVisits
