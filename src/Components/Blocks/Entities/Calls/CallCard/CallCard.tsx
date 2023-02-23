import React from 'react'

import { DateTime } from 'luxon'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import first from 'lodash/first'
import get from 'lodash/get'
import map from 'lodash/map'
import take from 'lodash/take'
import truncate from 'lodash/truncate'

import { Flex } from 'Components/UI'

import CallStatus from 'Components/Blocks/Entities/Calls/CallCard/CallStatus'

import { CALL_ENUM, CALL_USER_STATUS_ENUM } from 'Constants/calls'
import { PRIVATE_PATHS, PUBLIC_PATHS } from 'Constants/paths'

import { useAppDispatch } from 'Hooks/useStore'

import { openViewCallModal } from 'Store/modals/slice'

import _ from 'Services/I18n'

import {
  ActionButton,
  Avatar,
  CallImage,
  CallImageContainer,
  CardDate,
  Container,
  Header,
  LearnMore,
  Level,
  ParticipantLink,
  ParticipantsBlock,
  Title,
} from './styles'

export type CardType = {
  id: number
  date: string
  title: string
  studentsLevel: string
  startTime: string
  participants: Array<{
    avatar: string
    id: number
  }>
  images?: string[]
  isFinished: boolean
  isJoined: boolean
  isCreator: boolean
  type: CALL_ENUM
  withParticipantStatus?: boolean
}

type Props = CardType & { withEnterCall?: boolean }

const CallCard: React.FC<Props> = ({
  id,
  title,
  date,
  studentsLevel,
  isCreator,
  isJoined,
  isFinished,
  participants,
  type,
  images,
  startTime,
  withEnterCall = true,
}): React.ReactElement => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const isGroupWithImage =
    type === CALL_ENUM.GROUP_CALLS && images && images.length > 0

  const callDate = isGroupWithImage
    ? DateTime.fromISO(startTime).toFormat('MMM dd | hh:mm a')
    : date

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault()
    dispatch(openViewCallModal({ id }))
  }

  const getBorderColor = (): string => {
    switch (type) {
      case CALL_ENUM.INDIVIDUAL_CALLS:
        return '#5F9EE1'
      case CALL_ENUM.CLASS_CALLS:
        return '#FFA08C'
      default:
        return '#49CEB1'
    }
  }

  const renderActionButton = (): React.ReactNode => {
    switch (type) {
      case CALL_ENUM.GROUP_CALLS: {
        if (!isFinished && (isCreator || isJoined)) {
          if (!withEnterCall) return null

          return (
            <ActionButton
              color="orange"
              onClick={e => {
                e.stopPropagation()
                router.push(`${PUBLIC_PATHS.CALL(id)}`)
              }}
            >
              {_('buttons.enterTheRoom')}
            </ActionButton>
          )
        }

        if (isFinished) {
          return (
            <ActionButton color="gray">{_('calls.finishedCall')}</ActionButton>
          )
        }
        if (isCreator) {
          return (
            <ActionButton color="orange">{_('calls.yourCall')}</ActionButton>
          )
        }
        if (isJoined) {
          return (
            <ActionButton color="orange">
              {_('calls.scheduledCall')}
            </ActionButton>
          )
        }

        // return <ActionButton color="green">Join Group Call</ActionButton>
        return null
      }
      case CALL_ENUM.INDIVIDUAL_CALLS: {
        if (!isFinished && (isCreator || isJoined)) {
          return (
            <ActionButton
              color="orange"
              onClick={() => router.push(`${PUBLIC_PATHS.CALL(id)}`)}
            >
              {_('buttons.enterTheRoom')}
            </ActionButton>
          )
        }

        if (isFinished) {
          return (
            <ActionButton color="gray">{_('calls.finishedCall')}</ActionButton>
          )
        }

        if (isCreator) {
          const participantStatus = get(
            participants,
            [1, 'call_user_status'],
            CALL_USER_STATUS_ENUM.pending,
          )

          return (
            <Flex alignItems="center">
              <CallStatus status={participantStatus} />
              <ActionButton color="blue">
                {_('calls.individualCall')}
              </ActionButton>
            </Flex>
          )
        }

        if (isJoined) {
          return (
            <ActionButton color="blue">{_('calls.scheduledCall')}</ActionButton>
          )
        }
        return null
      }
      case CALL_ENUM.CLASS_CALLS: {
        if (!isFinished && (isCreator || isJoined)) {
          return (
            <ActionButton
              color="orange"
              onClick={() => router.push(`${PUBLIC_PATHS.CALL(id)}`)}
            >
              {_('buttons.enterTheRoom')}
            </ActionButton>
          )
        }
        if (isFinished) {
          return (
            <ActionButton color="gray">{_('calls.finishedCall')}</ActionButton>
          )
        }
        if (isCreator) {
          return (
            <ActionButton color="orange">
              {_('calls.scheduledCall')}
            </ActionButton>
          )
        }
        if (isJoined) {
          return (
            <ActionButton color="orange">
              {_('calls.scheduledCall')}
            </ActionButton>
          )
        }
        return null
      }
      default:
        return null
    }
  }

  const participantAmount = isGroupWithImage ? 2 : 6

  return (
    <Container
      borderColor={getBorderColor()}
      key={id}
      mt={14}
      onClick={handleClick}
    >
      {isGroupWithImage && (
        <Flex>
          <CallImageContainer onClick={handleClick}>
            <CallImage grayscaled={isFinished}>
              <Image
                height="175px"
                layout="fixed"
                objectFit="cover"
                priority
                src={get(first(images), 'file_url')}
                unoptimized
                width="174px"
              />
            </CallImage>
          </CallImageContainer>
        </Flex>
      )}

      <Flex
        flex={1}
        flexGrow={1}
        flexWrap="wrap"
        maxWidth={isGroupWithImage ? '298px' : '480px'}
        p="14px 14px 6px 15px"
      >
        <Header>
          <CardDate>{callDate}</CardDate>
          {renderActionButton()}
        </Header>

        <Title>
          {truncate(title, { length: isGroupWithImage ? 93 : 157 })}
        </Title>
        {studentsLevel && (
          <Level>
            {_('general.studentsLevel')}: {studentsLevel}
          </Level>
        )}

        <ParticipantsBlock width={1}>
          <Flex alignContent="center" alignItems="center">
            <span>{_('general.participants')}:</span>

            {map(take(participants, participantAmount), user => {
              const profileData = get(user, 'author_data')
              const role = get(profileData, 'role')

              if (role === 'teacher') {
                return (
                  <Avatar
                    alt="avatar"
                    key={profileData.id}
                    src={profileData.avatar}
                  />
                )
              }

              return (
                <Link
                  href={`${PRIVATE_PATHS.USER_PROFILE(profileData.id)}`}
                  key={profileData.id}
                  passHref
                >
                  <ParticipantLink
                    target="_blank"
                    title={profileData.full_name}
                  >
                    <Avatar alt="avatar" src={profileData.avatar} />
                  </ParticipantLink>
                </Link>
              )
            })}
            {participants.length > participantAmount &&
              `+${participants.length - participantAmount}`}
          </Flex>

          <Flex alignContent="center" alignItems="center">
            <LearnMore>{_('buttons.learnMore')}</LearnMore>
          </Flex>
        </ParticipantsBlock>
      </Flex>
    </Container>
  )
}

export default CallCard
