import React from 'react'
import { useContextMenu } from 'react-contexify'
import PropTypes from 'prop-types'

import { robotGreen } from 'Assets/images/chat'

import {
  Avatar,
  Container,
  EditMessageIcon,
  Message,
  MessageWrap,
  MessageWrapper,
  Name,
  StoryImage,
  StoryInnerWrap,
  StoryTitle,
  StoryWrapper,
  Time,
} from 'Components/Blocks/Entities/Chat/Content/ChatMessage/styles'

const ChatMessage = ({
  authorColor,
  incoming,
  fromBot,
  isStoryMessage,
  storyImage,
  message,
  avatar,
  time,
  isShowName,
  name,
  onSelectMessage,
  edited,
  id,
}) => {
  const { show: showActionsOwn } = useContextMenu({
    id: 'message_actions_own',
  })

  const { show: showActions } = useContextMenu({
    id: 'message_actions',
  })

  const handleOwnContextClick = e => {
    e.preventDefault()

    showActionsOwn(e)
    onSelectMessage({
      message,
      id,
    })
  }

  const handleContextClick = e => {
    e.preventDefault()

    showActions(e)
    onSelectMessage({
      message,
      id,
    })
  }

  return (
    <>
      {isStoryMessage && (
        <StoryWrapper incoming={incoming}>
          <StoryInnerWrap incoming={incoming}>
            <StoryTitle>
              {incoming
                ? 'Replied to your story in App'
                : 'Replied to their story in App'}
            </StoryTitle>
            <StoryImage story={storyImage} />
          </StoryInnerWrap>
        </StoryWrapper>
      )}
      <Container incoming={incoming}>
        <MessageWrapper>
          {!fromBot && incoming && avatar && <Avatar src={avatar} />}
          {fromBot && <Avatar fromBot src={robotGreen.src} />}
          <MessageWrap incoming={incoming}>
            {!incoming ? (
              <>
                {edited && <EditMessageIcon incoming={incoming} />}
                <Message onContextMenu={handleOwnContextClick}>
                  {isShowName && <Name color={authorColor}>{name}</Name>}
                  {message}
                </Message>
              </>
            ) : (
              <>
                <Message incoming={incoming} onContextMenu={handleContextClick}>
                  {isShowName && <Name color={authorColor}>{name}</Name>}
                  {message}
                </Message>
                {edited && <EditMessageIcon incoming={incoming} />}
              </>
            )}
            <Time>{time} </Time>
          </MessageWrap>
        </MessageWrapper>
      </Container>
    </>
  )
}

ChatMessage.defaultProps = {
  authorColor: 'black',
  incoming: false,
  avatar: null,
  name: '',
  isShowName: false,
  fromBot: false,
  isStoryMessage: false,
  storyImage: '',
  edited: false,
}
ChatMessage.propTypes = {
  authorColor: PropTypes.string,
  avatar: PropTypes.string,
  edited: PropTypes.bool,
  fromBot: PropTypes.bool,
  id: PropTypes.number.isRequired,
  incoming: PropTypes.bool,
  isShowName: PropTypes.bool,
  isStoryMessage: PropTypes.bool,
  message: PropTypes.string.isRequired,
  name: PropTypes.string,
  storyImage: PropTypes.string,
  time: PropTypes.string.isRequired,
  onSelectMessage: PropTypes.func.isRequired,
}

export default ChatMessage
