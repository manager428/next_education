import React, { useCallback } from 'react'

import InnerHtml from 'dangerously-set-html-content'
import { useRouter } from 'next/router'

import get from 'lodash/get'

import { Flex } from 'Components/UI'

import {
  NOTIFICATION_SUBTYPE,
  NOTIFICATION_TYPE,
} from 'Components/Blocks/Entities/Notifications/types'

import {
  PRIVATE_PATHS,
  PUBLIC_PATHS,
  STUDENT_PATHS,
  TEACHER_PATHS,
} from 'Constants/paths'

import useMe from 'Hooks/useMe'
import useRole from 'Hooks/useRole'

import { useScopedI18n } from 'Services/I18n'

import {
  NotificationAnnouncement,
  NotificationAttentionIcon,
  NotificationBadgeIcon,
  NotificationBlogIcon,
  NotificationCallIcon,
  NotificationCardButton,
  NotificationCardContainer,
  NotificationCardDate,
  NotificationCardHeader,
  NotificationCardMessage,
  NotificationCardTitle,
  NotificationChallengeIcon,
  NotificationCommentedIcon,
  NotificationCommunityIcon,
  NotificationDebateIcon,
  NotificationDeleteButton,
  NotificationGeneralIcon,
  NotificationLectoroiumIcon,
  NotificationLikedIcon,
  NotificationTeacherCommunityIcon,
} from './styles'

type Props = {
  id: number
  title: string
  message: string
  date: string
  notificationType: NOTIFICATION_TYPE
  notificationSubtype: NOTIFICATION_SUBTYPE
  extraData: {
    id: number
    deleted: boolean
    entity?: string
    status?: 'active' | 'declined' | 'pending'
    url?: string
  }
  isChecked?: boolean
  onOpenCard: (id: number) => void
  onOpenCommunity: (id: number) => void
  onDeleteCard: (id: number) => void
}

const NotificationCard: React.FC<Props> = ({
  notificationType,
  notificationSubtype,
  id,
  title,
  date,
  message,
  isChecked,
  extraData,
  onOpenCard,
  onOpenCommunity,
  onDeleteCard,
}) => {
  const router = useRouter()
  const { isTeacher } = useRole()
  const me = useMe()
  const s = useScopedI18n('notifications.buttons')

  const entityId = get(extraData, 'id') as number
  const isCallDeleted = get(extraData, 'deleted', false)
  const isSubType = notificationSubtype !== NOTIFICATION_SUBTYPE.GENERAL
  const isEntity = !!get(extraData, 'entity')

  const userId = me?.id ?? 0

  const renderEntityButton = useCallback(() => {
    const entity = get(extraData, 'entity')

    switch (entity) {
      case 'discussion':
        return (
          <Flex alignItems="flex-end" justifyContent="space-between" width={1}>
            <NotificationCardButton
              mt={20}
              onClick={() => router.push(`${PRIVATE_PATHS.TEACHER_FORUM}`)}
            >
              {s('goToTeacherForum')}
            </NotificationCardButton>

            <Flex onClick={() => onDeleteCard(id)}>
              <NotificationDeleteButton />
            </Flex>
          </Flex>
        )

      case 'chat':
        return (
          <Flex alignItems="flex-end" justifyContent="space-between" width={1}>
            <NotificationCardButton
              mt={20}
              onClick={() => router.push(`${PRIVATE_PATHS.CHAT}`)}
            >
              {s('goToChat')}
            </NotificationCardButton>

            <Flex onClick={() => onDeleteCard(id)}>
              <NotificationDeleteButton />
            </Flex>
          </Flex>
        )

      case 'friends':
        return (
          <Flex alignItems="flex-end" justifyContent="space-between" width={1}>
            <NotificationCardButton
              mt={20}
              onClick={() =>
                router.push(
                  isTeacher
                    ? TEACHER_PATHS.FRIENDS
                    : STUDENT_PATHS.FRIENDS(userId),
                )
              }
            >
              {s('goToFriends')}
            </NotificationCardButton>

            <Flex onClick={() => onDeleteCard(id)}>
              <NotificationDeleteButton />
            </Flex>
          </Flex>
        )

      case 'user':
        return (
          <Flex alignItems="flex-end" justifyContent="space-between" width={1}>
            <Flex
              onClick={() => router.push(PRIVATE_PATHS.USER_PROFILE(entityId))}
            >
              <NotificationCardButton mt={20}>
                {s('goToProfile')}
              </NotificationCardButton>
            </Flex>

            <Flex onClick={() => onDeleteCard(id)}>
              <NotificationDeleteButton />
            </Flex>
          </Flex>
        )

      case 'challenges':
        return (
          <Flex alignItems="flex-end" justifyContent="space-between" width={1}>
            <Flex>
              <NotificationCardButton
                mt={20}
                onClick={() =>
                  router.push(`${PUBLIC_PATHS.CHALLENGES}?id=${entityId}`)
                }
              >
                {s('goToChallenge')}
              </NotificationCardButton>
            </Flex>

            <Flex onClick={() => onDeleteCard(id)}>
              <NotificationDeleteButton />
            </Flex>
          </Flex>
        )

      default:
        break
    }
    return null
  }, [id, extraData])

  const renderNotificationIcon = (): React.ReactNode => {
    if (!isSubType) {
      switch (notificationType) {
        case 'call':
          return <NotificationCallIcon isNew={!isChecked} />

        case 'debates':
          return <NotificationDebateIcon isNew={!isChecked} />

        case 'badges':
          return <NotificationBadgeIcon isNew={!isChecked} />

        case 'general':
          return <NotificationGeneralIcon isNew={!isChecked} />

        case 'challenges':
          return <NotificationChallengeIcon isNew={!isChecked} />

        case 'teachers_community':
        case 'discussion':
        case 'students':
        case 'friends':
          return <NotificationTeacherCommunityIcon isNew={!isChecked} />

        case 'community':
          return <NotificationCommunityIcon isNew={!isChecked} />

        case 'lectorium':
          return <NotificationLectoroiumIcon isNew={!isChecked} />

        case 'blog':
          return <NotificationBlogIcon isNew={!isChecked} />
        default:
          return null
      }
    }

    switch (notificationSubtype) {
      case NOTIFICATION_SUBTYPE.LIKED:
        return <NotificationLikedIcon isNew={!isChecked} />

      case NOTIFICATION_SUBTYPE.COMMENTED:
        return <NotificationCommentedIcon isNew={!isChecked} />

      case NOTIFICATION_SUBTYPE.ATTENTION:
        return <NotificationAttentionIcon isNew={!isChecked} />

      case NOTIFICATION_SUBTYPE.ANNOUNCEMENT:
        return <NotificationAnnouncement isNew={!isChecked} />

      case NOTIFICATION_SUBTYPE.BADGES:
        return <NotificationBadgeIcon isNew={!isChecked} />

      case NOTIFICATION_SUBTYPE.CHALLENGES:
        return <NotificationChallengeIcon isNew={!isChecked} />

      case NOTIFICATION_SUBTYPE.COMMUNITY:
        return <NotificationCommunityIcon isNew={!isChecked} />

      default:
        return null
    }
  }

  const renderNotificationAction = useCallback(() => {
    switch (notificationType) {
      case 'call':
        return (
          <Flex
            alignItems="flex-end"
            justifyContent={isCallDeleted ? 'flex-end' : 'space-between'}
            width={1}
          >
            {!isCallDeleted && (
              <NotificationCardButton
                mt={20}
                onClick={() => onOpenCard(entityId)}
              >
                {s('goToCallCard')}
              </NotificationCardButton>
            )}

            <Flex onClick={() => onDeleteCard(id)}>
              <NotificationDeleteButton />
            </Flex>
          </Flex>
        )

      case 'debates': {
        return (
          <Flex
            alignItems="flex-end"
            justifyContent={!entityId ? 'flex-end' : 'space-between'}
            width={1}
          >
            {entityId && (
              <Flex
                onClick={() => router.push(`${PUBLIC_PATHS.DEBATE(entityId)}`)}
              >
                <NotificationCardButton mt={20}>
                  {s('openDebate')}
                </NotificationCardButton>
              </Flex>
            )}

            <Flex onClick={() => onDeleteCard(id)}>
              <NotificationDeleteButton />
            </Flex>
          </Flex>
        )
      }

      case 'badges': {
        return (
          <Flex alignItems="flex-end" justifyContent="space-between" width={1}>
            <NotificationCardButton
              mt={20}
              onClick={() =>
                router.push(`${PRIVATE_PATHS.USER_PROFILE(entityId)}`)
              }
            >
              {s('viewAllBadges')}
            </NotificationCardButton>

            <Flex onClick={() => onDeleteCard(id)}>
              <NotificationDeleteButton />
            </Flex>
          </Flex>
        )
      }

      case 'teachers_community': {
        if (!isEntity) {
          return (
            <Flex
              alignItems="flex-end"
              justifyContent="space-between"
              width={1}
            >
              <NotificationCardButton
                mt={20}
                onClick={() => router.push(`${PRIVATE_PATHS.TEACHER_FORUM}`)}
              >
                {s('goToTeacherForum')}
              </NotificationCardButton>

              <Flex onClick={() => onDeleteCard(id)}>
                <NotificationDeleteButton />
              </Flex>
            </Flex>
          )
        }

        return renderEntityButton()
      }

      case 'friends': {
        if (!isEntity) {
          return (
            <Flex
              alignItems="flex-end"
              justifyContent="space-between"
              width={1}
            >
              <NotificationCardButton
                mt={20}
                onClick={() =>
                  router.push(
                    isTeacher
                      ? TEACHER_PATHS.FRIENDS
                      : STUDENT_PATHS.FRIENDS(me?.id ?? 0),
                  )
                }
              >
                {s('checkItNow')}
              </NotificationCardButton>

              <Flex onClick={() => onDeleteCard(id)}>
                <NotificationDeleteButton />
              </Flex>
            </Flex>
          )
        }

        return renderEntityButton()
      }

      case 'students': {
        if (!isEntity) {
          return (
            <Flex alignItems="flex-end" justifyContent="flex-end" width={1}>
              <Flex onClick={() => onDeleteCard(id)}>
                <NotificationDeleteButton />
              </Flex>
            </Flex>
          )
        }

        return renderEntityButton()
      }

      case 'lectorium': {
        return (
          <Flex alignItems="flex-end" justifyContent="space-between" width={1}>
            <NotificationCardButton
              mt={20}
              onClick={() =>
                router.push(`${PUBLIC_PATHS.LECTORIUM_POST(entityId)}`)
              }
            >
              {s('goToLesson')}
            </NotificationCardButton>

            <Flex onClick={() => onDeleteCard(id)}>
              <NotificationDeleteButton />
            </Flex>
          </Flex>
        )
      }

      case 'challenges': {
        return (
          <Flex alignItems="flex-end" justifyContent="space-between" width={1}>
            {entityId ? (
              <NotificationCardButton
                mt={20}
                onClick={() =>
                  router.push(`${PUBLIC_PATHS.CHALLENGES}?id=${entityId}`)
                }
              >
                {s('goToChallenge')}
              </NotificationCardButton>
            ) : (
              <NotificationCardButton
                mt={20}
                onClick={() => router.push(`${PUBLIC_PATHS.CHALLENGES}`)}
              >
                {s('checkItNow')}
              </NotificationCardButton>
            )}

            <Flex onClick={() => onDeleteCard(id)}>
              <NotificationDeleteButton />
            </Flex>
          </Flex>
        )
      }

      case 'community':
        return (
          <Flex alignItems="flex-end" justifyContent="space-between" width={1}>
            <NotificationCardButton
              mt={20}
              onClick={() => onOpenCommunity(entityId)}
            >
              {s('goToPost')}
            </NotificationCardButton>

            <Flex onClick={() => onDeleteCard(id)}>
              <NotificationDeleteButton />
            </Flex>
          </Flex>
        )

      case 'blog': {
        if (!isEntity) {
          return (
            <Flex
              alignItems="flex-end"
              justifyContent="space-between"
              width={1}
            >
              <NotificationCardButton
                mt={20}
                onClick={() =>
                  router.push(`${PUBLIC_PATHS.BLOG_POST(entityId)}`)
                }
              >
                {s('goToPost')}
              </NotificationCardButton>

              <Flex onClick={() => onDeleteCard(id)}>
                <NotificationDeleteButton />
              </Flex>
            </Flex>
          )
        }

        return renderEntityButton()
      }

      case 'general': {
        const url = extraData?.url
        return (
          <Flex
            alignItems="flex-end"
            justifyContent={!url ? 'flex-end' : 'space-between'}
            width={1}
          >
            {url && (
              <NotificationCardButton mt={20}>
                <a
                  href={extraData?.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {s('checkItNow')}
                </a>
              </NotificationCardButton>
            )}

            <Flex onClick={() => onDeleteCard(id)}>
              <NotificationDeleteButton />
            </Flex>
          </Flex>
        )
      }

      case 'profile': {
        const url = extraData?.url

        if (isEntity) return renderEntityButton()

        return (
          <Flex
            alignItems="flex-end"
            justifyContent={!url ? 'flex-end' : 'space-between'}
            width={1}
          >
            {url && (
              <NotificationCardButton mt={20}>
                <a
                  href={extraData?.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {s('checkItNow')}
                </a>
              </NotificationCardButton>
            )}

            <Flex onClick={() => onDeleteCard(id)}>
              <NotificationDeleteButton />
            </Flex>
          </Flex>
        )
      }

      default:
        return null
    }
  }, [id, isEntity])

  return (
    <NotificationCardContainer key={id}>
      {renderNotificationIcon()}
      <NotificationCardHeader>
        <NotificationCardTitle>{title}</NotificationCardTitle>
        <NotificationCardDate>{date}</NotificationCardDate>
      </NotificationCardHeader>
      <NotificationCardMessage mt={14}>
        <InnerHtml html={message} />
      </NotificationCardMessage>
      {renderNotificationAction()}
    </NotificationCardContainer>
  )
}

export default NotificationCard
