import React, { useCallback, useEffect, useRef, useState } from 'react'

import debounce from 'lodash/debounce'
import forEach from 'lodash/forEach'
import get from 'lodash/get'
import map from 'lodash/map'
import mapValues from 'lodash/mapValues'

import { Loader } from 'Components/UI'

import Head from 'Components/Blocks/Head'

import { CHAT_USERS_TYPE } from 'Constants/chat'

import useMe from 'Hooks/useMe'
import useRole from 'Hooks/useRole'
import useSocket from 'Hooks/useSocket'

import { chatApi } from 'Services/Api/requests'
import SocketService from 'Services/Socket'
import {
  CHAT_EMIT_EVENTS,
  CHAT_SUBSCRIBE_EVENTS,
} from 'Services/Socket/constants'

import { getMaxBlockHeight } from 'Utils/chat'

import { Background, ChatContainer, Wrapper } from './styles'

import Content from '../../../Components/Blocks/Entities/Chat/Content'
import Sidebar from '../../../Components/Blocks/Entities/Chat/Sidebar'

const Socket = SocketService.getInstance()

const Chat = () => {
  const { socket, isConnected } = useSocket()

  const { isTeacher } = useRole()

  const incomingSoundRef = useRef<any>(null)
  const unreadSoundRef = useRef<any>(null)

  const [selectedUser, setSelectedUser] = useState<any>(null)

  const [usersState, setUsersState] = useState<any>({
    users: {
      class: [],
      classes: [],
      friends: [],
      classmates: [],
      students: [],
    },
    usersMap: {},
  })

  const [assignedColors, setAssignedColors] = useState<string[]>([])
  const [messages, setMessages] = useState({})

  const [selectedUserProfile, setSelectedUserProfile] = useState<any>({})
  const [isInfoLoading, setInfoLoading] = useState(false)
  const [isShowProfile, setShowProfile] = useState(false)
  const [message, setMessage] = useState('')

  const me = useMe()

  const userData = {
    id: me?.id,
    fullname: me?.full_name,
    role: me?.role,
  }

  const getPenpal = async () => {
    const { id, type } = selectedUser

    if (type === CHAT_USERS_TYPE.CLASS) {
      setSelectedUserProfile(selectedUser)
      setInfoLoading(false)
    } else {
      const data = await chatApi.user(id)
      setSelectedUserProfile(data)
      setInfoLoading(false)
    }
  }

  const handleToggleProfile = () => {
    setShowProfile(prevState => !prevState)
  }

  const removeSubscriptions = () => {
    if (socket) {
      socket.off(CHAT_SUBSCRIBE_EVENTS.DELETE_MESSAGE_SUCCESS)
      socket.off(CHAT_SUBSCRIBE_EVENTS.DISCONNECT)
      socket.off(CHAT_SUBSCRIBE_EVENTS.NEW_MESSAGE)
      socket.off(CHAT_SUBSCRIBE_EVENTS.UNREAD_MESSAGE)
    }
  }

  const handleShowInfo = async () => {
    setInfoLoading(true)

    await getPenpal()
  }

  const registerInboxEvents = () => {
    Socket.subscribe(CHAT_SUBSCRIBE_EVENTS.NEW_MESSAGE, data => {
      const nextMessages = {}

      const updatedColors: any = []

      data.forEach(item => {
        nextMessages[item.id] = item

        if (assignedColors.indexOf(item.userid) === -1)
          updatedColors.push(item.userid)
      })

      if (data.length === 1) {
        incomingSoundRef.current?.play()
      }

      setMessages(prevState => ({
        ...prevState,
        ...nextMessages,
      }))

      setAssignedColors(updatedColors)
    })

    Socket.subscribe(CHAT_SUBSCRIBE_EVENTS.UNREAD_MESSAGE, data => {
      const fromUserId = +get(data, 'userid')
      const notificationType = get(data, 'notificationType', false)
      const newUserStatus = get(data, 'newUserStatus', false)

      if (notificationType && notificationType === 'userStatus') {
        setUsersState(prevState => ({
          ...prevState,
          users: mapValues(prevState.users, section => {
            if (Array.isArray(section)) {
              return map(section, user => {
                if (user.id === fromUserId) {
                  return {
                    ...user,
                    user_online_status: newUserStatus,
                  }
                }
                return user
              })
            }

            return section
          }),
        }))
      } else {
        setUsersState(prevState => ({
          ...prevState,
          users: mapValues(prevState.users, section => {
            if (Array.isArray(section)) {
              return map(section, user => {
                if (user.id === fromUserId) {
                  return {
                    ...user,
                    last_message: {
                      ...data,
                      unread: user?.last_message?.unread + 1,
                    },
                  }
                }
                return user
              })
            }

            return section
          }),
        }))

        unreadSoundRef?.current?.play()
      }
    })

    Socket.subscribe(CHAT_SUBSCRIBE_EVENTS.DELETE_MESSAGE_SUCCESS, data => {
      setMessages(prevState => {
        const updatedMessages = { ...prevState }
        delete updatedMessages[get(data, 'id')]

        return updatedMessages
      })
    })

    Socket.subscribe(
      CHAT_SUBSCRIBE_EVENTS.EDIT_MESSAGE_SUCCESS,
      messageData => {
        const editedMessageId = get(messageData, 'id')

        if (editedMessageId) {
          setMessages(prevState => {
            const updatedMessages = { ...prevState }
            updatedMessages[editedMessageId].message = get(
              messageData,
              'message',
              '',
            )
            updatedMessages[editedMessageId].edited = 1

            return updatedMessages
          })
        }
      },
    )
  }

  const leaveFromChat = roomName => {
    if (!socket) return
    socket.emit(CHAT_EMIT_EVENTS.LEAVE_FROM_ROOM, roomName)
  }

  const initUserChat = firstInit => {
    if (!isConnected) return

    registerInboxEvents()

    const roomName = selectedUser?.room

    socket.emit(CHAT_EMIT_EVENTS.SET_CHAT_ROOM, roomName)
    socket.emit(CHAT_EMIT_EVENTS.SET_USER_NAME, me?.full_name)
    socket.emit(CHAT_EMIT_EVENTS.SET_USER_ID, me?.id)
    socket.emit(CHAT_EMIT_EVENTS.SET_PLATFORM, 'desktop')
    socket.emit(CHAT_EMIT_EVENTS.LOAD_HISTORY)

    if (!firstInit) {
      setMessages({})
    }
  }

  const handleSelectUser = useCallback(
    user => {
      if (user) {
        setSelectedUser(null)
        setMessages({})

        removeSubscriptions()

        if (selectedUser) {
          if (user.id !== selectedUser.id) {
            const roomName = selectedUser?.room
            leaveFromChat(roomName)
          }
        }
      }

      setSelectedUser(user)
    },
    [selectedUser],
  )

  useEffect(() => {
    if (selectedUser) {
      initUserChat(true)

      setUsersState(prevState => ({
        ...prevState,

        users: mapValues(prevState.users, section => {
          if (Array.isArray(section)) {
            return map(section, user => {
              if (
                user.id === selectedUser.id &&
                user.type === selectedUser.type
              ) {
                return {
                  ...user,
                  last_message: {
                    ...user.last_message,
                    unread: 0,
                  },
                }
              }
              return user
            })
          }

          if (
            section.id === selectedUser.id &&
            section.type === selectedUser.type
          ) {
            return {
              ...section,
              last_message: {
                ...section.last_message,
                unread: 0,
              },
            }
          }
          return section
        }),
      }))

      // UpdateSidebar
      if (selectedUser.id !== selectedUserProfile.id && isShowProfile) {
        handleShowInfo()
      }
    }
  }, [selectedUser, setUsersState, isConnected])

  const handleChangeMessageInput = (value: string) => {
    setMessage(value)
  }

  const handleEditMessage = id => {
    const formattedMessage = message.replace(/(<([^>]+)>)/gi, '').trim()

    if (socket.connected && message.length) {
      setMessage('')

      socket.emit(CHAT_EMIT_EVENTS.EDIT_MESSAGE, id, formattedMessage)
    }
  }

  const handleDeleteMessage = id => {
    socket.emit(CHAT_EMIT_EVENTS.DELETE_MESSAGE, id)
  }

  const handleSendNewMessage = debounce(
    () => {
      const formattedMessage = message.replace(/(<([^>]+)>)/gi, '').trim()
      if (socket.connected && message.length) {
        setMessage('')
        socket.emit(CHAT_EMIT_EVENTS.NEW_MESSAGE, formattedMessage)
      }
    },
    400,
    { leading: true },
  )

  const fetchUsers = useCallback(async () => {
    const response = await chatApi.users()
    const data = get(response, 'data')
    const defaultClass = isTeacher ? data?.classes[0] : data?.class

    const usersMap = {}

    forEach(data, section => {
      if (Array.isArray(section)) {
        forEach(section, student => {
          usersMap[student.id] = { ...student }
        })
      } else if (section?.students?.length) {
        forEach(section.students, student => {
          usersMap[student.id] = { ...student }
        })
      }
    })

    setUsersState(prevState => ({
      ...prevState,
      users: { ...prevState.users, ...data },
      usersMap,
    }))

    setSelectedUser(defaultClass)
  }, [])

  const initChat = async () => {
    socket.emit(CHAT_EMIT_EVENTS.SET_CHAT_ROOM, '')
    socket.emit(CHAT_EMIT_EVENTS.SET_USER_NAME, me?.full_name)
    socket.emit(CHAT_EMIT_EVENTS.SET_USER_ID, me?.id)
    socket.emit(CHAT_EMIT_EVENTS.SET_AVATAR, me?.avatar)

    await fetchUsers()
  }

  useEffect(() => {
    if (isConnected) initChat()
  }, [isConnected])

  useEffect(
    () => () => {
      removeSubscriptions()

      leaveFromChat(selectedUser?.room)
    },
    [selectedUser?.id, socket],
  )

  return (
    <Background>
      <Head description="Chat with friends! " title="Chat" />

      {!isConnected ? (
        <Loader />
      ) : (
        <Wrapper>
          <ChatContainer height={getMaxBlockHeight()}>
            <audio ref={incomingSoundRef}>
              <source src="/static/audio/incoming.mp3" type="audio/mpeg" />
              <track default kind="captions" srcLang="en" />
            </audio>
            <audio ref={unreadSoundRef}>
              <source
                src="/static/audio/incoming_unread.mp3"
                type="audio/mpeg"
              />
              <track default kind="captions" srcLang="en" />
            </audio>

            <Sidebar
              me={userData}
              selectedUser={selectedUser}
              users={usersState.users}
              onSelect={handleSelectUser}
            />

            {selectedUser && (
              <Content
                assignedColors={assignedColors}
                chatMessages={messages}
                isInfoLoading={isInfoLoading}
                isShowProfile={isShowProfile}
                me={userData}
                message={message}
                selectedUser={selectedUser}
                selectedUserProfile={selectedUserProfile}
                usersMap={usersState.usersMap}
                onDeleteMessage={handleDeleteMessage}
                onEditMessage={handleEditMessage}
                onInputChange={handleChangeMessageInput}
                onSendClick={handleSendNewMessage}
                onShowUserInfo={handleShowInfo}
                onToggleProfile={handleToggleProfile}
              />
            )}
          </ChatContainer>
        </Wrapper>
      )}
    </Background>
  )
}

export default Chat
