import React, { useRef, useState } from 'react'

import get from 'lodash/get'

import { Element, Link, Loader } from 'Components/UI'

import {
  LoaderWrap,
  Menu,
  MenuButton,
  MenuIcon,
  MenuItem,
  RequestButton,
  SendFriendsRequestWrap,
  Wrap,
} from 'Components/Blocks/Entities/Profile/UserFriendsMenu/styles'

import { PRIVATE_PATHS } from 'Constants/paths'

import useOutsideClick from 'Hooks/useOutsideClick'

import { useScopedI18n } from 'Services/I18n'

import { Props } from './types'

const UserFriendsMenu: React.FC<Props> = ({
  friendsData,
  isLoading,
  onAction,
}) => {
  const s = useScopedI18n('profile.sidebar')
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const ref = useRef()

  const userIsFriend = get(friendsData, 'isFriend', false)

  useOutsideClick({ ref, onClick: () => setIsMenuVisible(false) })

  const userCanSendFriendRequest = get(
    friendsData,
    'userCanSendFriendRequest',
    false,
  )

  const userCanDeleteFriendRequest = get(
    friendsData,
    'userCanDeleteFriendRequest',
    false,
  )

  const userCanAcceptFriendRequest = get(
    friendsData,
    'userCanAcceptFriendRequest',
    false,
  )

  const userCanCancelOwnFriendRequest = get(
    friendsData,
    'userCanCancelOwnFriendRequest',
    false,
  )

  const handleAction = async type => {
    setIsMenuVisible(false)
    onAction(type)
  }

  return (
    <Wrap ref={ref} width={1}>
      {userIsFriend && (
        <Link green href={PRIVATE_PATHS.CHAT} mb="14px" width={1}>
          <Element
            as="a"
            color="white"
            fontSize="16px"
            fontWeight={600}
            lineHeight="16px"
          >
            {s('writeMessage')}
          </Element>
        </Link>
      )}

      <SendFriendsRequestWrap>
        {userCanSendFriendRequest && !userCanAcceptFriendRequest && (
          <RequestButton withBg onClick={() => handleAction('addToFriend')}>
            {s('sendFriendRequest')}
          </RequestButton>
        )}

        {userCanDeleteFriendRequest && (
          <>
            <RequestButton>You are Friends</RequestButton>
            <MenuButton onClick={() => setIsMenuVisible(!isMenuVisible)}>
              <MenuIcon active={isMenuVisible} />
            </MenuButton>
            {isMenuVisible && (
              <Menu>
                <MenuItem onClick={() => handleAction('deleteFromFriend')}>
                  {s('deleteFromFriends')}
                </MenuItem>
              </Menu>
            )}
          </>
        )}

        {userCanAcceptFriendRequest && (
          <>
            <RequestButton withBg onClick={() => handleAction('approveFriend')}>
              {s('acceptFriendRequest')}
            </RequestButton>
            <MenuButton own onClick={() => setIsMenuVisible(!isMenuVisible)}>
              <MenuIcon active={isMenuVisible} own />
            </MenuButton>
            {isMenuVisible && (
              <Menu>
                <MenuItem
                  className="menu-item"
                  type="button"
                  onClick={() => handleAction('rejectFriend')}
                >
                  {s('rejectFriendRequest')}
                </MenuItem>
              </Menu>
            )}
          </>
        )}

        {userCanCancelOwnFriendRequest && (
          <>
            <RequestButton>You Sent a Friend Request</RequestButton>
            <MenuButton onClick={() => setIsMenuVisible(!isMenuVisible)}>
              <MenuIcon active={isMenuVisible} />
            </MenuButton>
            {isMenuVisible && (
              <Menu>
                <MenuItem onClick={() => handleAction('cancelFriend')}>
                  {s('cancelFriendRequest')}
                </MenuItem>
              </Menu>
            )}
          </>
        )}

        {isLoading && (
          <LoaderWrap>
            <Loader />
          </LoaderWrap>
        )}
      </SendFriendsRequestWrap>
    </Wrap>
  )
}

export default UserFriendsMenu
