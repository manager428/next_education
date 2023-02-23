import React from 'react'

import { DateTime } from 'luxon'

import get from 'lodash/get'
import map from 'lodash/map'

import NotificationCard from './NotificationCard'
import { ListContainer, ListDate, NotificationsContainer } from './styles'

import { NotificationType } from '../types'

type Props = {
  notifications: NotificationType[]
  date: string
  onAction: (id: number) => void
  onOpenCommunity: (id: number) => void
  onDeleteCard: (id: number) => void
}

const NotificationList: React.FC<Props> = ({
  date,
  notifications,
  onAction,
  onOpenCommunity,
  onDeleteCard,
}) => {
  const renderNotifications = (): React.ReactNode =>
    map(notifications, item => {
      const parsedDate = DateTime.fromISO(item.created_at)
      const formattedDate = parsedDate.toFormat('dd MMM yyyy')
      const notificationType = get(item, 'notification_type')
      const notificationSubtype = get(item, 'notification_subtype')

      return (
        <NotificationCard
          date={formattedDate}
          extraData={item.extra_data}
          id={item.id}
          isChecked={item.is_checked}
          key={item.id}
          message={item.notification_text}
          notificationSubtype={notificationSubtype}
          notificationType={notificationType}
          title={item.notification_title}
          onDeleteCard={onDeleteCard}
          onOpenCard={onAction}
          onOpenCommunity={onOpenCommunity}
        />
      )
    })

  if (notifications.length === 0) return null

  return (
    <ListContainer>
      <ListDate>{date}</ListDate>
      <NotificationsContainer>{renderNotifications()}</NotificationsContainer>
    </ListContainer>
  )
}

export default NotificationList
