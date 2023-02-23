import React from 'react'

import { Flex } from 'Components/UI'

import {
  AvatarWrapper,
  ChatItemContainer,
  ChatItemContent,
  ChatItemLogo,
  Counter,
  Header,
  LastMessage,
  OnlineIndicator,
  Time,
} from 'Components/Blocks/Entities/Chat/Sidebar/ChatList/styles'

const ChatListItem: React.FC<any> = ({
  image,
  title,
  time,
  counter,
  message,
  active,
  isExpanded,
  online,
  withOnlineStatus,
}) => (
  <ChatItemContainer active={active}>
    <AvatarWrapper>
      {withOnlineStatus && <OnlineIndicator online={online} />}
      <ChatItemLogo src={image} />
      {!isExpanded && (counter > 0 || counter.length > 0) && (
        <Counter floating>{counter}</Counter>
      )}
    </AvatarWrapper>

    {isExpanded && (
      <ChatItemContent>
        <Flex alignItems="center" flexGrow={1} flexWrap="wrap">
          <Header>{title}</Header>
          <LastMessage>{message}</LastMessage>
        </Flex>

        <Flex
          alignItems="flex-end"
          flexDirection="column"
          flexWrap="wrap"
          justifyContent="space-around"
          minWidth="82px"
        >
          <Time>{time}</Time>
          {(counter > 0 || counter.length > 0) && <Counter>{counter}</Counter>}
        </Flex>
      </ChatItemContent>
    )}
  </ChatItemContainer>
)

export default ChatListItem
