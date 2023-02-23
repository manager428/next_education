import React, { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import InnerHTML from 'dangerously-set-html-content'

import { Flex } from 'Components/UI'

import FriendStatus from 'Components/Blocks/Entities/Friends/FriendStatus'
import { SignIn } from 'Components/Blocks/Popups'

import { PRIVATE_PATHS } from 'Constants/paths'

import useMe from 'Hooks/useMe'
import useOutsideClick from 'Hooks/useOutsideClick'
import useRole from 'Hooks/useRole'

import _ from 'Services/I18n'

import { openComplaintPage } from 'Utils/complaints'

import {
  Author,
  Avatar,
  Content,
  Date,
  DebatesLikeIcon,
  ItemCommentsLikes,
  LikeIcon,
  UserContainer,
  UserNameMenu,
} from './styles'

const Comment = ({
  experienceType,
  id,
  userId,
  avatar,
  color,
  date,
  author,
  text,
  section,
  likeType,
  likesAmount,
  friendsData,
  isLiked,
  onAddLike,
  onReplyClick,
}) => {
  const me = useMe()
  const { isLoggedIn } = useRole()

  const wrapperRef = useRef(null)

  const [showUserNameMenu, setShowUserNameMenu] = useState(false)

  const [signInModal, setSignInModal] = useState({
    isOpen: false,
    top: '0px',
    left: '0px',
  })

  const handleMenuItemClick = () => {
    onReplyClick(userId, author)
    setShowUserNameMenu(false)
  }

  const handleToggleUsernameMenu = useCallback(
    e => {
      if (!isLoggedIn) {
        setSignInModal({
          isOpen: true,
          top: `${e.pageY}px`,
          left: `${e.pageX}px`,
        })

        return
      }
      setShowUserNameMenu(prevState => !prevState)
    },
    [isLoggedIn],
  )

  const handleAddLike = useCallback(
    e => {
      if (!isLoggedIn) {
        setSignInModal({
          isOpen: true,
          top: `${e.pageY}px`,
          left: `${e.pageX}px`,
        })

        return
      }
      onAddLike(id)
    },
    [id, isLoggedIn],
  )

  const handleReportClick = () => {
    openComplaintPage({
      userId,
      user: author,
      section,
      commentId: id,
      experienceType,
    })
  }

  useOutsideClick({
    ref: wrapperRef,
    onClick: () => setShowUserNameMenu(false),
  })

  const friend = {
    ...friendsData,
    userId,
  }

  return (
    <Flex mb={20} width={1}>
      <Flex flexShrink={0} mr={14} width={40}>
        <Avatar src={avatar} />
      </Flex>
      <UserContainer flexGrow={1} flexWrap="wrap" ref={wrapperRef}>
        {signInModal.isOpen && (
          <SignIn
            isOpen
            left={signInModal.left}
            portal
            top={signInModal.top}
            onClose={() =>
              setSignInModal({ isOpen: false, left: '0px', top: '0px' })
            }
          />
        )}

        {showUserNameMenu && (
          <UserNameMenu>
            {userId !== '0' && userId !== me?.id && likeType !== 'votes' && (
              <span
                role="button"
                tabIndex="0"
                onClick={handleMenuItemClick}
                onKeyDown={handleMenuItemClick}
              >
                {_('buttons.replyMessage')}
              </span>
            )}

            <span>
              <a href={PRIVATE_PATHS.USER_PROFILE(userId)}>
                {_('buttons.goToUserProfile')}
              </a>
            </span>

            {userId !== '0' && me?.id && (
              <span
                role="button"
                tabIndex="0"
                onClick={handleReportClick}
                onKeyDown={handleReportClick}
              >
                {_('buttons.report')}
              </span>
            )}
          </UserNameMenu>
        )}
        <Author color={color} onClick={handleToggleUsernameMenu}>
          <InnerHTML html={author} />
        </Author>

        <FriendStatus friend={friend} />

        <Content>
          <InnerHTML html={text} />
        </Content>
      </UserContainer>
      <Flex
        alignContent="flex-start"
        flexShrink={0}
        flexWrap="wrap"
        justifyContent="flex-end"
        width={100}
      >
        <Date mb="5px">{date}</Date>
        <ItemCommentsLikes noLineHeight onClick={handleAddLike}>
          {likeType === 'comments' ? (
            <LikeIcon liked={isLiked} />
          ) : (
            <DebatesLikeIcon color={color} />
          )}

          {likesAmount}
        </ItemCommentsLikes>
      </Flex>
    </Flex>
  )
}
Comment.defaultProps = {
  experienceType: undefined,
  color: '#49ceb1',
  likeType: 'comments',
}
Comment.propTypes = {
  author: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  color: PropTypes.string,
  date: PropTypes.string.isRequired,
  experienceType: PropTypes.string,
  id: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likeType: PropTypes.oneOf(['comments', 'votes']),
  likesAmount: PropTypes.number.isRequired,
  section: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  friendsData: PropTypes.object.isRequired,
  onAddLike: PropTypes.func.isRequired,
  onReplyClick: PropTypes.func.isRequired,
}
export default Comment
