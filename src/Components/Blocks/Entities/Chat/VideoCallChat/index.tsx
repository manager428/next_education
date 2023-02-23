import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import InnerHTML from 'dangerously-set-html-content'

import filter from 'lodash/filter'
import find from 'lodash/find'
import get from 'lodash/get'
import map from 'lodash/map'

import { Flex, Loader } from 'Components/UI'
import SendMessage from 'Components/UI/Chat/SendMessage'

import CallChatMessageMenu from 'Components/Blocks/Entities/Chat/CallChatMessageMenu/CallChatMessageMenu'

import useMe from 'Hooks/useMe'
import useSocket from 'Hooks/useSocket'

import SocketService from 'Services/Socket'
import {
  CHAT_EMIT_EVENTS,
  CHAT_SUBSCRIBE_EVENTS,
} from 'Services/Socket/constants'
import { IMessage } from 'Services/Socket/interfaces'

import {
  Avatar,
  Container,
  FullName,
  MessageContainer,
  Scroll,
  SendMessageWrapper,
  Text,
} from './styles'

type Props = {
  roomName: string
  fullName: string
  userId: number
}

const Socket = SocketService.getInstance()

const VideoCallChat: React.FC<Props> = ({ roomName, fullName, userId }) => {
  const ref = useRef<HTMLDivElement>(null)
  const me = useMe()
  const { isConnected, socket } = useSocket()

  const [messages, setMessages] = useState<Array<any> | Array<IMessage>>([])
  const [isEditMode, setEditMode] = useState<boolean>(false)
  const [answer, setAnswer] = useState<string>('')
  const [selectedMessage, setSelectedMessage] = useState<IMessage>(
    {} as IMessage,
  )

  const handleAddNewMessage = useCallback(newMessage => {
    setMessages(oldMessages => [...oldMessages, ...newMessage])
  }, [])

  const handleEditMessage = useCallback(editedMessage => {
    if (editedMessage.id) {
      setMessages(oldMessage =>
        map(oldMessage, msg => {
          if (msg.id === editedMessage.id) {
            return {
              ...msg,
              message: editedMessage.message,
            }
          }
          return msg
        }),
      )
      setSelectedMessage({} as IMessage)
      setAnswer('')
    }
  }, [])

  const handleDeleteMessage = useCallback(deletedMessage => {
    if (deletedMessage.id) {
      setMessages(oldMessages =>
        filter(oldMessages, msg => msg.id !== deletedMessage.id),
      )
    }
  }, [])

  function initChat() {
    socket.emit(CHAT_EMIT_EVENTS.SET_CHAT_ROOM, roomName)
    socket.emit(CHAT_EMIT_EVENTS.SET_USER_NAME, fullName)
    socket.emit(CHAT_EMIT_EVENTS.SET_USER_ID, userId)
    socket.emit(CHAT_EMIT_EVENTS.SET_AVATAR, me?.avatar)

    if (messages.length === 0) {
      socket.emit(CHAT_EMIT_EVENTS.LOAD_HISTORY)
    }

    Socket.subscribe(CHAT_SUBSCRIBE_EVENTS.NEW_MESSAGE, handleAddNewMessage)

    Socket.subscribe(
      CHAT_SUBSCRIBE_EVENTS.EDIT_MESSAGE_SUCCESS,
      handleEditMessage,
    )

    Socket.subscribe(
      CHAT_SUBSCRIBE_EVENTS.DELETE_MESSAGE_SUCCESS,
      handleDeleteMessage,
    )
  }

  function socketSubscriptionOff() {
    socket.off(CHAT_SUBSCRIBE_EVENTS.DELETE_MESSAGE_SUCCESS)
    socket.off(CHAT_SUBSCRIBE_EVENTS.EDIT_MESSAGE_SUCCESS)
    socket.off(CHAT_SUBSCRIBE_EVENTS.NEW_MESSAGE)
  }

  useEffect(() => {
    if (isConnected) {
      initChat()
    } else {
      socketSubscriptionOff()
    }
  }, [isConnected, socket?.id])

  useEffect(
    () => () => {
      socket.emit(CHAT_EMIT_EVENTS.LEAVE_FROM_ROOM, roomName)
      socketSubscriptionOff()
    },
    [],
  )

  useEffect(() => {
    const { current } = ref
    if (current) {
      current.scrollTo({
        behavior: 'smooth',
        top: current.scrollHeight,
      })
    }
  }, [messages])

  const handleChangeAnswer = (value): void => {
    setAnswer(value)
  }

  const handleSendMessage = (): void => {
    if (answer.length === 0) return

    socket.emit(CHAT_EMIT_EVENTS.NEW_MESSAGE, answer)
    setAnswer('')
  }

  const handleEditClick = (messagedId: number): void => {
    const messageForEdit = find(messages, msg => msg.id === messagedId)

    setEditMode(true)
    setAnswer(messageForEdit.message)
    setSelectedMessage(messageForEdit)
  }

  const handleSaveEdit = (): void => {
    socket.emit(CHAT_EMIT_EVENTS.EDIT_MESSAGE, selectedMessage.id, answer)

    setEditMode(false)
  }

  const handleDeleteClick = (messageId: number): void => {
    socket.emit(CHAT_EMIT_EVENTS.DELETE_MESSAGE, messageId)
  }

  const renderMessages = useMemo(
    () =>
      map(messages, (msg: IMessage) => {
        const username = get(msg, 'username', '')
        const id = get(msg, 'id')
        const avatar = get(msg, 'avatar')
        const text = get(msg, 'message', '')
        const isOwnMessage = get(msg, 'userid') === me?.id

        return (
          <MessageContainer key={id}>
            <Flex flexShrink={0}>
              <Avatar src={avatar} />
            </Flex>

            <Flex flex={1} flexWrap="wrap">
              <FullName>{username}</FullName>
              <Text>
                <InnerHTML html={text} />
              </Text>
            </Flex>
            {isOwnMessage && (
              <div className="message-menu">
                <CallChatMessageMenu
                  id={id}
                  onDelete={handleDeleteClick}
                  onEdit={handleEditClick}
                />
              </div>
            )}
          </MessageContainer>
        )
      }),
    [messages],
  )

  return (
    <Container>
      <Scroll limitheight={isEditMode ? 1 : 0} scrollableNodeProps={{ ref }}>
        <Flex flexWrap="wrap" width={1}>
          {isConnected ? renderMessages : <Loader />}
        </Flex>
      </Scroll>
      <SendMessageWrapper>
        <SendMessage
          isEditingMode={isEditMode}
          selectedMessage={selectedMessage}
          size="small"
          value={answer}
          onCancelEditMessageClick={() => {
            setEditMode(false)
            setAnswer('')
          }}
          onChange={handleChangeAnswer}
          onHeightChange={() => null}
          onSendClick={handleSendMessage}
          onSendEditClick={handleSaveEdit}
        />
      </SendMessageWrapper>
    </Container>
  )
}

export default VideoCallChat
