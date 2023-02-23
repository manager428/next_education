import React, { useCallback, useMemo, useState } from 'react'

import { Flex } from 'Components/UI'

import { friendsApi } from 'Services/Api/requests'
import { useScopedI18n } from 'Services/I18n'

import { Container, FriendContainer, FriendIcon, InfoBlock } from './styles'
import { Props } from './types'

const FriendStatus: React.FC<Props> = ({ friend }) => {
  const s = useScopedI18n('friends')
  const [isShowTooltip, setShowTooltip] = useState(false)
  const [isSentFriendRequest, setSentFriendRequest] = useState(false)

  const handleAddFriendClick = useCallback(async () => {
    setShowTooltip(true)

    if (friend.userCanCancelOwnFriendRequest || isSentFriendRequest) {
      setTimeout(() => {
        setShowTooltip(false)
      }, 2000)

      return
    }

    if (!friend.isFriend) {
      try {
        await friendsApi.sendFriendRequest(friend.userId)
        setSentFriendRequest(true)
      } catch (e) {
        setSentFriendRequest(false)
      }

      setSentFriendRequest(true)
    }

    setTimeout(() => {
      setShowTooltip(false)
    }, 2000)
  }, [friend, isSentFriendRequest])

  const renderTooltip = useCallback(() => {
    if (friend.isFriend) {
      return <InfoBlock>{s('alreadyFriend')}</InfoBlock>
    }
    // Show info that friend request already sent.
    if (friend.userCanCancelOwnFriendRequest || isSentFriendRequest) {
      return <InfoBlock>{s('requestSent')}</InfoBlock>
    }

    return null
  }, [friend, isSentFriendRequest])

  const isShowFriendsIcon = useMemo(
    () =>
      friend.isFriend ||
      friend.userCanCancelOwnFriendRequest ||
      friend.userCanSendFriendRequest,
    [friend],
  )

  return (
    <Container>
      {isShowFriendsIcon && (
        <FriendContainer>
          <Flex onClick={handleAddFriendClick} onKeyDown={handleAddFriendClick}>
            <FriendIcon
              isFriend={friend.isFriend}
              isFriendRequest={
                friend.userCanCancelOwnFriendRequest || isSentFriendRequest
              }
              wrapperStyles={{ ml: '15px' }}
            />
          </Flex>

          {isShowTooltip ? renderTooltip() : null}
        </FriendContainer>
      )}
    </Container>
  )
}

export default FriendStatus
