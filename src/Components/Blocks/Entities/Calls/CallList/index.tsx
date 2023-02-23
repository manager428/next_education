import React from 'react'

import map from 'lodash/map'

import { Flex } from 'Components/UI'

import CallCard, {
  CardType,
} from 'Components/Blocks/Entities/Calls/CallCard/CallCard'

import useRole from 'Hooks/useRole'

import { CallListContainer, CallListDate } from './styles'

type Props = {
  date: string
  calls: Array<CardType>
}

const CallList: React.FC<Props> = ({ date, calls }): React.ReactElement => {
  const { isParent } = useRole()

  return (
    <CallListContainer>
      <CallListDate>{date}</CallListDate>
      <Flex flexWrap="wrap" width={1}>
        {map(calls, (call: CardType) => (
          <CallCard
            date={call.date}
            id={call.id}
            images={call?.images}
            isCreator={call.isCreator}
            isFinished={call.isFinished}
            isJoined={call.isJoined}
            key={call.id}
            participants={call.participants}
            startTime={call.startTime}
            studentsLevel={call.studentsLevel}
            title={call.title}
            type={call.type}
            withEnterCall={!isParent}
          />
        ))}
      </Flex>
    </CallListContainer>
  )
}

export default CallList
