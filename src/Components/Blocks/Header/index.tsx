import React, { useCallback, useEffect, useState } from 'react'
import { useIntercom } from 'react-use-intercom'

import Loader from 'Components/UI/Loader'

import useRender from 'Components/Blocks/Header/Hooks/useRender'

import { USER_ROLES } from 'Constants/ids'

import useMe from 'Hooks/useMe'
import useSocket from 'Hooks/useSocket'
import { useAppDispatch, useAppSelector } from 'Hooks/useStore'

import { setNotifications } from 'Store/me/slice'

import SocketService from 'Services/Socket'
import {
  NOTIFICATION_EMIT_EVENTS,
  NOTIFICATION_SUBSRIBE_EVENTS,
} from 'Services/Socket/constants'

import { Container, Inner } from './styles'

const Socket = SocketService.getInstance()

const Header: React.FC = () => {
  const { isConnected, socket } = useSocket()

  const me = useMe()
  const { update } = useIntercom()

  const dispatch = useAppDispatch()
  const auth = useAppSelector(state => state.auth)

  const [isLoaded, setLoaded] = useState(false)

  const { setIconNotifications, renderHeader } = useRender()

  function socketSubscriptionsOff() {
    if (!socket) return

    socket.off(NOTIFICATION_SUBSRIBE_EVENTS.UNREAD_MESSAGE_NOTIFICATION)
    socket.off(NOTIFICATION_SUBSRIBE_EVENTS.FRIENDS_NOTIFICATION)
    socket.off(NOTIFICATION_SUBSRIBE_EVENTS.UNDREAD_NOTIFICATION)
    socket.off(NOTIFICATION_SUBSRIBE_EVENTS.NO_UNDREAD_MESSAGE)
    socket.off(NOTIFICATION_SUBSRIBE_EVENTS.NO_FRIENDS_NOTIFICATION)
    socket.off(NOTIFICATION_SUBSRIBE_EVENTS.NO_UNREAD_NOTIFICATION)
  }

  useEffect(
    () => () => {
      socketSubscriptionsOff()
    },
    [],
  )

  const subscribeNotifications = () => {
    if (me?.id) {
      if (socket) {
        socket.emit(NOTIFICATION_EMIT_EVENTS.SET_NOTIFICATION_USER_ID, me.id)

        Socket.subscribe(
          NOTIFICATION_SUBSRIBE_EVENTS.UNREAD_MESSAGE_NOTIFICATION,
          () => {
            dispatch(
              setNotifications({
                chat: true,
              }),
            )
          },
        )

        Socket.subscribe(
          NOTIFICATION_SUBSRIBE_EVENTS.FRIENDS_NOTIFICATION,
          () => {
            dispatch(
              setNotifications({
                friends: true,
              }),
            )
          },
        )

        Socket.subscribe(
          NOTIFICATION_SUBSRIBE_EVENTS.UNDREAD_NOTIFICATION,
          () => {
            dispatch(
              setNotifications({
                notifications: true,
              }),
            )
          },
        )

        Socket.subscribe(
          NOTIFICATION_SUBSRIBE_EVENTS.NO_UNDREAD_MESSAGE,
          () => {
            setIconNotifications(currentState => ({
              ...currentState,
              chat: false,
            }))
          },
        )

        Socket.subscribe(
          NOTIFICATION_SUBSRIBE_EVENTS.NO_FRIENDS_NOTIFICATION,
          () => {
            setIconNotifications(currentState => ({
              ...currentState,
              friends: false,
            }))
          },
        )

        Socket.subscribe(
          NOTIFICATION_SUBSRIBE_EVENTS.NO_UNREAD_NOTIFICATION,
          () => {
            setIconNotifications(currentState => ({
              ...currentState,
              notifications: false,
            }))
          },
        )
      }
    }
  }

  useEffect(() => {
    if (isConnected) {
      subscribeNotifications()
    } else {
      socketSubscriptionsOff()
    }
  }, [auth.accessToken, me?.id, isConnected, socket?.id])

  const bootIntercomWithSettings = useCallback(() => {
    if (me?.id) {
      const intercomProps: any = {
        name: me.full_name,
        email: me.email,
        createdAt: me.created_at,
        customAttributes: {
          role: me.role,
        },
      }

      switch (me?.role) {
        case USER_ROLES.teacher:
          intercomProps.customAttributes.teachers = 'teachers'
          break
        case USER_ROLES.student:
          intercomProps.customAttributes.students = 'students'
          break
        default:
          break
      }

      update(intercomProps)
    }
  }, [me])

  useEffect(() => {
    bootIntercomWithSettings()
    setLoaded(true)
  }, [me?.id])

  return (
    <Container className="header">
      {isLoaded ? (
        renderHeader()
      ) : (
        <Inner height={30} width={30}>
          <Loader height={60} width={60} />
        </Inner>
      )}
    </Container>
  )
}

export default React.memo(Header)
