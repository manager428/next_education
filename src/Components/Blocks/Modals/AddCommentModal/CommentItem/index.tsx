import React, { useCallback, useEffect, useRef, useState } from 'react'

import Link from 'next/link'

import get from 'lodash/get'
import includes from 'lodash/includes'

import FriendStatus from 'Components/Blocks/Entities/Friends/FriendStatus'
import { SignIn } from 'Components/Blocks/Popups'

import { ADD_COMMENT_MODAL_TYPES } from 'Constants/ids'
import { SHARE_EXPERIENCE_TYPES } from 'Constants/lectorium'
import { PRIVATE_PATHS } from 'Constants/paths'

import useMe from 'Hooks/useMe'
import useOutsideClick from 'Hooks/useOutsideClick'
import useRole from 'Hooks/useRole'

import CookieService, { CookiesKeys } from 'Services/Cookies'
import _ from 'Services/I18n'

import { COMPLAINT_SECTIONS, openComplaintPage } from 'Utils/complaints'
import { formatCommentDate } from 'Utils/date'

import {
  CommentAvatar,
  CommentsContentItem,
  CommentsContentItemContent,
  CommentsContentItemContentName,
  CommentsContentItemContentText,
  CommentsContentItemContentTime,
  CommentsContentItemLeft,
  ItemCommentsLikes,
  LikeIcon,
} from '../styles'

type Props = {
  comment: any
  postType: ADD_COMMENT_MODAL_TYPES
  directMessageRef?: any
  notificationMassageId: number
  authorId: number
  age: string
  section?: COMPLAINT_SECTIONS
  getPostTooltipContent: (userId: number) => void
  onAddCommentLike: (e: React.MouseEvent, commentId: number) => void
  onAddFriendClick: (userId: number) => void
  onUsernameClick: (commentUserId: number, name: string) => void
}

const CommentItem: React.FC<Props> = ({
  comment,
  postType,
  notificationMassageId,
  authorId,
  onAddCommentLike,
  onUsernameClick,
  directMessageRef = null,
  section,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const me = useMe()
  const { isLoggedIn } = useRole()

  const [showUserNameMenu, setShowUserNameMenu] = useState(false)
  const [guestLikeAdded, setGuestLikeAdded] = useState(false)
  const [isShowSignIn, setShowSignIn] = useState(false)

  useOutsideClick({
    ref: wrapperRef,
    onClick: () => setShowUserNameMenu(false),
  })

  useEffect(() => {
    if (postType === ADD_COMMENT_MODAL_TYPES.CHALLENGE) {
      setGuestLikeAdded(
        !!CookieService.getCookie(
          null,
          `${CookiesKeys.challengeCommentLike}-${comment.id}`,
        ),
      )
    }
  }, [comment, guestLikeAdded])

  const commentUserId: number = get(comment, 'user_id', 0) || 0
  const commentAuthor = get(comment, 'author_data.full_name', '')

  const handleUserNameClick = () => {
    setShowUserNameMenu(false)
    onUsernameClick(commentUserId, commentAuthor)
  }

  const handleReportClick = () => {
    openComplaintPage({
      userId: commentUserId,
      user: commentAuthor,
      section,
      commentId: comment.id,
      experienceType: includes(
        [
          SHARE_EXPERIENCE_TYPES.STUDENT_POSTS,
          SHARE_EXPERIENCE_TYPES.STUDENT_VIDEOS,
          SHARE_EXPERIENCE_TYPES.COMMENTS,
        ],
        postType,
      )
        ? postType
        : undefined,
    })
  }

  const handleLike = useCallback(
    e => {
      if (guestLikeAdded || comment.is_liked) {
        return
      }

      if (postType === ADD_COMMENT_MODAL_TYPES.CHALLENGE) {
        CookieService.setCookie(
          null,
          `${CookiesKeys.challengeCommentLike}-${comment.id}`,
          {
            liked: true,
          },
        )
      }

      onAddCommentLike(e, comment.id)
    },
    [comment, guestLikeAdded, onAddCommentLike],
  )

  const handleToggleShowMenu = useCallback(() => {
    if (!isLoggedIn) {
      setShowSignIn(true)
      return
    }
    setShowUserNameMenu(prevState => !prevState)
  }, [isLoggedIn])

  const handleCloseSignIn = useCallback(() => {
    setShowSignIn(false)
  }, [])

  const avatar = get(
    comment,
    'author_data.avatar',
    '/static/images/guest_avatar.svg',
  )
  const createdAt = formatCommentDate(get(comment, 'created_at'))
  const content = get(comment, 'comment')
  const likesCount = get(comment, 'likes_count', 0)
  const friend = {
    ...get(comment, ['author_data', 'friends_data']),
    userId: commentUserId,
  }

  return (
    <CommentsContentItem
      className={
        notificationMassageId === comment.id ? 'notification-message' : ''
      }
      ref={directMessageRef}
    >
      {isShowSignIn && (
        <SignIn
          isOpen
          left="390px"
          position="fixed"
          top="35%"
          onClose={handleCloseSignIn}
        />
      )}

      <CommentAvatar>
        {commentUserId === 0 ? (
          <img alt="avatar" src={avatar} />
        ) : (
          <a href={PRIVATE_PATHS.USER_PROFILE(commentUserId)}>
            <img alt="avatar" src={avatar} />
          </a>
        )}
      </CommentAvatar>
      <CommentsContentItemContent ref={wrapperRef}>
        <CommentsContentItemContentName>
          <button
            className="author-name"
            type="button"
            onClick={handleToggleShowMenu}
            onKeyDown={handleToggleShowMenu}
          >
            {commentAuthor}
          </button>

          {commentUserId !== 0 && showUserNameMenu && (
            <div className="username-menu">
              {authorId !== 0 && me?.id !== commentUserId && (
                <span>
                  <button
                    type="button"
                    onClick={handleUserNameClick}
                    onKeyDown={handleUserNameClick}
                  >
                    {_('buttons.replyMessage')}
                  </button>
                </span>
              )}

              <span>
                <Link href={PRIVATE_PATHS.USER_PROFILE(commentUserId)} passHref>
                  <a>{_('buttons.goToUserProfile')}</a>
                </Link>
              </span>

              {authorId !== 0 && commentUserId !== me?.id && (
                <span>
                  <button
                    type="button"
                    onClick={handleReportClick}
                    onKeyDown={handleReportClick}
                  >
                    {_('buttons.report')}
                  </button>
                </span>
              )}
            </div>
          )}
          {commentUserId === 0 && <span className="guest">guest</span>}
        </CommentsContentItemContentName>
        <CommentsContentItemContentTime>
          <span className="date">{createdAt}</span>
          <FriendStatus friend={friend} />
        </CommentsContentItemContentTime>
        <CommentsContentItemContentText
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </CommentsContentItemContent>

      <CommentsContentItemLeft>
        <ItemCommentsLikes noLineHeight onClick={handleLike}>
          <LikeIcon liked={comment?.is_liked || guestLikeAdded} top="1px" />
          {likesCount}
        </ItemCommentsLikes>
      </CommentsContentItemLeft>
    </CommentsContentItem>
  )
}

export default CommentItem
