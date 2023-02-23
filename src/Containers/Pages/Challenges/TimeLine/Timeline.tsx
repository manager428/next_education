import React from 'react'

import { DateTime } from 'luxon'

import get from 'lodash/get'
import map from 'lodash/map'

import {
  checkActiveGlyph,
  checkGlyph,
  flagGreenGlyph,
  flagOrangeGlyph,
  launchGlyph,
  rewardsGlyph,
} from 'Assets/svg/challenges'

import Icon from 'Components/UI/Icon'

import {
  CHALLENGE_CHOICE_AWARD,
  CHALLENGE_OFFICIAL_START,
  CHALLENGE_SUBMISSION_DEADLINE,
  CHALLENGE_WINNERS_ANNOUNCE,
} from 'Constants/challenges'

import { useScopedI18n } from 'Services/I18n'

import { getLineProgressPercent } from 'Utils/Entities/Challenges'

import {
  BlockTimeline,
  BottomInfo,
  BottomInfoContainer,
  BottomInfoDescription,
  BottomInfoTitle,
  Description,
  ImageContainer,
  Line,
  LineGray,
  TimeItemContainer,
  TimeItemDate,
  TimeItemDescription,
  TimeItemIcon,
  TimeItemsContainer,
  TimeItemTitle,
  Title,
} from './styles'

const DAYS_LEFT = Math.round(
  get(
    CHALLENGE_SUBMISSION_DEADLINE.diff(DateTime.local(), ['days']).toObject(),
    ['days'],
    0,
  ),
)

const DAYS_PROGRESS = getLineProgressPercent(
  CHALLENGE_OFFICIAL_START,
  CHALLENGE_SUBMISSION_DEADLINE,
  CHALLENGE_WINNERS_ANNOUNCE,
  CHALLENGE_CHOICE_AWARD,
)

const Timeline: React.FC = () => {
  const s = useScopedI18n('challenges')

  const STEPS = {
    officialStart: {
      date: CHALLENGE_OFFICIAL_START.toFormat('dd MMM'),
      title: s('officialStart'),
      description: s('officialStartDescription'),
      icon: launchGlyph,
    },
    submissionDeadline: {
      date: CHALLENGE_SUBMISSION_DEADLINE.toFormat('dd MMM'),
      title: s('submissionDeadline'),
      description: s('submissionDeadlineDescription'),
      icon:
        CHALLENGE_SUBMISSION_DEADLINE <= DateTime.local()
          ? checkActiveGlyph
          : checkGlyph,
    },
    winnersAnnounced: {
      date: CHALLENGE_WINNERS_ANNOUNCE.toFormat('dd MMM'),
      title: s('winnerAnnounced'),
      description: s('winnerAnnouncedDescription'),
      icon:
        CHALLENGE_WINNERS_ANNOUNCE <= DateTime.local()
          ? checkActiveGlyph
          : checkGlyph,
    },
    choiceAward: {
      date: CHALLENGE_CHOICE_AWARD.toFormat('dd MMM'),
      title: s('peopleChoiceAward'),
      description: s('peopleChoiceAwardDescription'),
      icon: rewardsGlyph,
    },
  }

  return (
    <BlockTimeline>
      <Title>{s('challengeTimeline')}</Title>
      <Description>
        {DAYS_LEFT > 0 ? `${DAYS_LEFT} ${s('daysLeftBeforeDeadline')}` : ''}
      </Description>

      <TimeItemsContainer>
        {map(STEPS, item => (
          <TimeItemContainer key={item.title}>
            <TimeItemDate>{item.date}</TimeItemDate>
            <TimeItemIcon icon={item.icon} />
            <TimeItemTitle>{item.title}</TimeItemTitle>
            <TimeItemDescription>{item.description}</TimeItemDescription>
          </TimeItemContainer>
        ))}
        <LineGray id="progress-line" />
        <Line progress={DAYS_PROGRESS} />
      </TimeItemsContainer>

      <BottomInfoContainer>
        <BottomInfo>
          <ImageContainer>
            <Icon icon={flagGreenGlyph} />
          </ImageContainer>
          <BottomInfoTitle>{s('chatAndLearn')}</BottomInfoTitle>
          <BottomInfoDescription>
            {s('discussWithFriends')}
          </BottomInfoDescription>
        </BottomInfo>
        <BottomInfo>
          <ImageContainer>
            <Icon icon={flagOrangeGlyph} />
          </ImageContainer>
          <BottomInfoTitle>{s('winAndVote')}</BottomInfoTitle>
          <BottomInfoDescription>{s('watchVideos')}</BottomInfoDescription>
        </BottomInfo>
      </BottomInfoContainer>
    </BlockTimeline>
  )
}

export default Timeline
