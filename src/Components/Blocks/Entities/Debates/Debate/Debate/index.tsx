import React, { useMemo, useState } from 'react'

import { DateTime } from 'luxon'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { debatesHumansGlyph } from 'Assets/svg/debates'

import { Icon } from 'Components/UI'

import { PUBLIC_PATHS } from 'Constants/paths'

import { useScopedI18n } from 'Services/I18n'

import {
  DebateContainer,
  DebateDate,
  DebateImage,
  DebateImageContainer,
  DebatesLikeIcon,
  DebateTitle,
  DebateTooltip,
  NavLink,
  ProgressContainer,
  ProgressInner,
  ProgressLine,
  VoteButton,
  VotesContainer,
} from './styles'

export type DebateType = {
  id: number
  title: string
  updated_at: string
  count_negative_votes: number
  count_positive_votes: number
  is_vote_positive: boolean
  user_has_vote: boolean
  image: string
}

const Debate: React.FC<DebateType> = ({
  id,
  title,
  updated_at,
  image,
  count_negative_votes,
  count_positive_votes,
}) => {
  const s = useScopedI18n('debates')
  const router = useRouter()
  const [isShowDefaultTooltip, setShowDefaultTooltip] = useState<boolean>(false)

  const parsedDate = DateTime.fromISO(updated_at)
  const formattedDate = parsedDate.toFormat('dd MMM, yyyy')

  const handleVoteClick = (voteType: 'positive' | 'negative'): void => {
    router.push(`${PUBLIC_PATHS.DEBATE(id)}?vote=${voteType}`)
  }

  const handleShowDefaultTooltip = (type: 'leave' | 'enter'): void => {
    if (type === 'leave') {
      setShowDefaultTooltip(false)
    } else {
      setShowDefaultTooltip(true)
    }
  }

  const getProgressLineData = useMemo(() => {
    if (count_negative_votes === 0 && count_positive_votes === 0) {
      return {
        positivePercent: 0,
        negativePercent: 0,
        isEmpty: true,
      }
    }
    const totalVotes = count_negative_votes + count_positive_votes
    const negativePercent = ((count_negative_votes / totalVotes) * 100).toFixed(
      0,
    )
    const positivePercent = ((count_positive_votes / totalVotes) * 100).toFixed(
      0,
    )

    return {
      positivePercent,
      negativePercent,
      isEmpty: false,
    }
  }, [id, count_negative_votes, count_positive_votes])

  const { positivePercent, negativePercent, isEmpty } = getProgressLineData

  return (
    <DebateContainer>
      <DebateImageContainer
        onMouseEnter={() => handleShowDefaultTooltip('enter')}
        onMouseLeave={() => handleShowDefaultTooltip('leave')}
      >
        <Link href={PUBLIC_PATHS.DEBATE(id)} passHref>
          <NavLink>
            <DebateImage alt={title} src={image} />
            {isShowDefaultTooltip && (
              <DebateTooltip>{s('clickOnTheImage')}</DebateTooltip>
            )}
          </NavLink>
        </Link>
      </DebateImageContainer>

      <DebateDate>{formattedDate}</DebateDate>
      <DebateTitle>{title}</DebateTitle>
      <ProgressContainer>
        {isEmpty ? (
          <ProgressLine variant="gray" width="100%">
            0%
          </ProgressLine>
        ) : (
          <>
            <ProgressLine variant="green" width={`${positivePercent}%`}>
              {positivePercent}%{' '}
              <ProgressInner alignItems="center" ml="5px" zIndex={100}>
                ({count_positive_votes}
                <Icon
                  height={10}
                  icon={debatesHumansGlyph}
                  width={14}
                  wrapperStyles={{
                    ml: '3px',
                    mr: '2px',
                  }}
                />
                )
              </ProgressInner>
            </ProgressLine>
            <ProgressLine variant="orange" width={`${negativePercent}%`}>
              <ProgressInner alignItems="center" mr="5px" zIndex={100}>
                ({count_negative_votes}
                <Icon
                  height={10}
                  icon={debatesHumansGlyph}
                  width={14}
                  wrapperStyles={{
                    ml: '3px',
                    mr: '2px',
                  }}
                />
                )
              </ProgressInner>
              {negativePercent}%
            </ProgressLine>
          </>
        )}
      </ProgressContainer>
      <VotesContainer width={1}>
        <VoteButton variant="green" onClick={() => handleVoteClick('positive')}>
          <DebatesLikeIcon wrapperStyles={{ mr: '8px' }} />
          <div>{s('yes')}</div>
        </VoteButton>
        <span>or</span>
        <VoteButton
          variant="orange"
          onClick={() => handleVoteClick('negative')}
        >
          <div>{s('no')}</div>
          <DebatesLikeIcon variant="rotated" wrapperStyles={{ ml: '8px' }} />
        </VoteButton>
      </VotesContainer>
    </DebateContainer>
  )
}

export default Debate
