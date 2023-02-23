import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import SimpleBarReact from 'simplebar-react'

import get from 'lodash/get'
import map from 'lodash/map'

import { copyGlyph, deleteIconGlyph, editMessageIcon } from 'Assets/svg/common'

import { Icon } from 'Components/UI'
import SendMessage from 'Components/UI/Chat/SendMessage'

import ChatMessage from 'Components/Blocks/Entities/Chat/Content/ChatMessage'
import Profile from 'Components/Blocks/Entities/Chat/Content/Profile'
import GroupStatus from 'Components/Blocks/Entities/Chat/GroupStatus'
import PenpalStatus from 'Components/Blocks/Entities/Chat/PenpalStatus'

import { CHAT_USERS_TYPE } from 'Constants/chat'

import _ from 'Services/I18n'

import {
  convertMessageDate,
  getChatColor,
  getMaxBlockHeight,
  isNormalInteger,
} from 'Utils/chat'

import {
  ChatListContainer,
  ChatMessagesList,
  Container,
  ContextItem,
  ContextMenu,
  PenpalStatusContainer,
  StyledMenu,
} from './styles'

const Content = ({
  assignedColors,
  message,
  onInputChange,
  chatMessages,
  me,
  isInfoLoading,
  selectedUser,
  selectedUserProfile,
  onToggleProfile,
  isShowProfile,
  onSendClick,
  onShowUserInfo,
  onDeleteMessage,
  onEditMessage,
  usersMap,
}) => {
  const containerRef = useRef<HTMLDivElement>()
  const isClassChat = selectedUser?.type === CHAT_USERS_TYPE.CLASS
  const [selectedMessage, setSelectedMessage] = useState({})
  const [isEditMode, setIsEditMode] = useState(false)
  const [sendMessageHeight, setSendMessageHeight] = useState(44)

  useEffect(
    () => () => {
      const { current } = containerRef
      if (current) {
        // eslint-disable-next-line no-unused-expressions

        current.scrollTo({
          behavior: 'smooth',
          top: current.scrollHeight,
        })
      }
    },
    [chatMessages, sendMessageHeight],
  )

  const cancelEditMessageClick = () => {
    onInputChange('')
    setIsEditMode(false)
  }

  const extendSendMessageClick = id => {
    onEditMessage(id)
    cancelEditMessageClick()
  }

  const handleContextItemClick = type => {
    const messageText = get(selectedMessage, 'message')
    switch (type) {
      case 'copy':
        // eslint-disable-next-line no-case-declarations
        const el = document.createElement('textarea')
        el.value = messageText
        el.setAttribute('readonly', '')
        el.style.position = 'absolute'
        el.style.left = '-9999px'

        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
        break
      case 'delete':
        onDeleteMessage(get(selectedMessage, 'id'))
        break
      case 'edit':
        setIsEditMode(true)
        onInputChange(messageText)
        break
      default:
        break
    }
  }

  const handleInfoClick = () => {
    if (!isShowProfile) {
      onShowUserInfo()
    }

    onToggleProfile()
  }

  const getAuthorColor = userId => getChatColor(assignedColors.indexOf(userId))

  const handleSelectMessage = msg => {
    if (!isEditMode) {
      setSelectedMessage(msg)
    }
  }

  const handleSendMessageBlockHeightChange = (height: number) => {
    if (height >= 340) {
      setSendMessageHeight(340)
    } else {
      setSendMessageHeight(height)
    }
  }

  const renderMessages = () =>
    map(chatMessages, item => {
      const messageType = get(item, 'messageType', '')
      const storyImage = get(item, 'storyImage', '')
      const isMe = item.userid === me.id
      const userData = usersMap?.[item.userid]
      const avatar = get(userData, 'avatar')
      const name =
        item.userid === 0 ? get(item, 'username') : get(userData, 'full_name')

      const time = isNormalInteger(item.time)
        ? convertMessageDate(item.time, true)
        : item.time

      const authorColor = getAuthorColor(item.userid)

      return (
        <ChatMessage
          authorColor={authorColor}
          avatar={isMe ? null : avatar}
          edited={item.edited === 1}
          fromBot={item.userid === 0}
          id={item.id}
          incoming={!isMe}
          isShowName={isClassChat}
          isStoryMessage={messageType === 'story'}
          key={item.id}
          message={item.message}
          name={name}
          storyImage={storyImage}
          time={time}
          onSelectMessage={handleSelectMessage}
        />
      )
    })

  return (
    <Container>
      <ChatListContainer
        maxWidth="1000px"
        width={isShowProfile ? '430px' : 'auto'}
      >
        <PenpalStatusContainer>
          {isClassChat ? (
            <GroupStatus
              users={selectedUser?.students}
              onInfoClick={handleInfoClick}
            />
          ) : (
            <PenpalStatus
              avatar={get(selectedUser, 'avatar')}
              isActive={isShowProfile}
              isOnline={get(selectedUser, 'user_online_status')}
              title={get(selectedUser, 'full_name')}
              onInfoClick={handleInfoClick}
            />
          )}
        </PenpalStatusContainer>
        <ChatMessagesList>
          {!isEditMode && (
            <>
              <StyledMenu id="message_actions_own">
                <ContextMenu>
                  <ContextItem onClick={() => handleContextItemClick('edit')}>
                    <Icon
                      fill="#49CEB1"
                      icon={editMessageIcon}
                      size={18}
                      wrapperStyles={{ mr: '13px' }}
                    />
                    {_('buttons.editMessage')}
                  </ContextItem>
                  <ContextItem onClick={() => handleContextItemClick('copy')}>
                    <Icon
                      fill="#49CEB1"
                      icon={copyGlyph}
                      size={18}
                      wrapperStyles={{ mr: '13px' }}
                    />{' '}
                    {_('buttons.copy')}
                  </ContextItem>
                  <ContextItem onClick={() => handleContextItemClick('delete')}>
                    <Icon
                      fill="#FFA08C"
                      icon={deleteIconGlyph}
                      size={18}
                      wrapperStyles={{ mr: '13px' }}
                    />{' '}
                    {_('buttons.delete')}
                  </ContextItem>
                </ContextMenu>
              </StyledMenu>

              <StyledMenu id="message_actions">
                <ContextMenu>
                  <ContextItem onClick={() => handleContextItemClick('copy')}>
                    <Icon
                      icon={copyGlyph}
                      size={18}
                      wrapperStyles={{ mr: '13px' }}
                    />{' '}
                    {_('buttons.copy')}
                  </ContextItem>
                </ContextMenu>
              </StyledMenu>
            </>
          )}
          <SimpleBarReact
            scrollableNodeProps={{ ref: containerRef }}
            style={{
              maxHeight: isEditMode
                ? `calc(${getMaxBlockHeight()}px - 174px - ${sendMessageHeight}px)`
                : `calc(${getMaxBlockHeight()}px - 110px - ${sendMessageHeight}px)`,
            }}
          >
            {renderMessages()}
          </SimpleBarReact>
        </ChatMessagesList>
        <SendMessage
          isEditingMode={isEditMode}
          selectedMessage={selectedMessage}
          value={message}
          onCancelEditMessageClick={cancelEditMessageClick}
          onChange={onInputChange}
          onHeightChange={handleSendMessageBlockHeightChange}
          onSendClick={onSendClick}
          onSendEditClick={extendSendMessageClick}
        />
      </ChatListContainer>

      {isShowProfile && (
        <Profile
          isLoading={isInfoLoading}
          selectedUserProfile={selectedUserProfile}
          type={selectedUser.type}
          onCloseClick={handleInfoClick}
        />
      )}
    </Container>
  )
}

Content.propTypes = {
  assignedColors: PropTypes.array.isRequired,
  chatMessages: PropTypes.object.isRequired,
  isInfoLoading: PropTypes.bool.isRequired,
  isShowProfile: PropTypes.bool.isRequired,
  me: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  selectedUser: PropTypes.object.isRequired,
  selectedUserProfile: PropTypes.object.isRequired,
  onDeleteMessage: PropTypes.func.isRequired,
  onEditMessage: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSendClick: PropTypes.func.isRequired,
  onShowUserInfo: PropTypes.func.isRequired,
  onToggleProfile: PropTypes.func.isRequired,
}

export default Content
