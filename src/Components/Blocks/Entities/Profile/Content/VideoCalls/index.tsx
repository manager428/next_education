import React, { useCallback } from 'react'

import map from 'lodash/map'

import { Flex } from 'Components/UI'

import CallCard, {
  CardType,
} from 'Components/Blocks/Entities/Calls/CallCard/CallCard'
import {
  BlockTitle,
  BlockTitleViewAllText,
  ContentTitleText,
} from 'Components/Blocks/Entities/Profile/styles'

import useRole from 'Hooks/useRole'

import { useScopedI18n } from 'Services/I18n'

import { transferToCallCard } from 'Utils/Entities/Calls'

import { Container } from './styles'

type Props = {
  onViewAll: () => void
  title?: string
  calls: Array<CardType>
}

const VideoCalls: React.FC<Props> = ({
  onViewAll,
  calls,
  title = 'Video calls with teacher',
}) => {
  const { isParent } = useRole()
  const s = useScopedI18n('profile.content.videoCalls')

  const renderCalls = useCallback(() => {
    if (calls.length === 0) {
      return s('noScheduledCalls')
    }

    const convertedPosts = map(calls, it => transferToCallCard(it))

    return map(convertedPosts, (call: CardType) => (
      <Flex key={call.id} mb={20} width={1}>
        <CallCard
          date={call.date}
          id={call.id}
          images={call?.images}
          isCreator={call.isCreator}
          isFinished={call.isFinished}
          isJoined={call.isJoined}
          participants={call.participants}
          startTime={call.startTime}
          studentsLevel={call.studentsLevel}
          title={call.title}
          type={call.type}
          withEnterCall={!isParent}
        />
      </Flex>
    ))
  }, [calls])

  return (
    <Container>
      <BlockTitle>
        <ContentTitleText>{title}</ContentTitleText>
        <BlockTitleViewAllText onClick={onViewAll}>
          {s('viewAll')}
        </BlockTitleViewAllText>
      </BlockTitle>

      {renderCalls()}
    </Container>
  )
}

export default VideoCalls
