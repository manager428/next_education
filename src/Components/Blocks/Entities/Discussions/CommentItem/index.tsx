import React, { useCallback, useRef, useState } from 'react'

import Link from 'next/link'

import get from 'lodash/get'

import FriendStatus from 'Components/Blocks/Entities/Friends/FriendStatus'

import { PRIVATE_PATHS } from 'Constants/paths'

import useMe from 'Hooks/useMe'
import useOutsideClick from 'Hooks/useOutsideClick'

import _ from 'Services/I18n'

import { formatCommentDate } from 'Utils/date'

import {
  CommentAvatar,
  CommentsContentItem,
  CommentsContentItemContent,
  CommentsContentItemContentText,
  CommentsContentItemContentTime,
  CommentsContentItemLeft,
  ContentItem,
  ItemCommentsLikes,
  LikeIcon,
} from './styles'
import { CommentItemProps } from './types'

const CommentItem: React.FC<CommentItemProps> = ({
  comment,
  onAddCommentLike,
  onUsernameClick,
}) => {
  const me = useMe()

  const wrapperRef = useRef(null)

  const [showUserNameMenu, setShowUserNameMenu] = useState(false)

  const commentAuthor = get(comment, 'author_data.full_name', '')
  const commentUserId = get(comment, 'user_id', '0')
  const avatar = get(comment, 'author_data.avatar', false)
  const createdAt = formatCommentDate(get(comment, 'created_at'))
  const content = get(comment, 'comment')
  const likesCount = get(comment, 'likes_count', 0)
  const isLiked = get(comment, 'is_liked', false)

  const friend = {
    ...get(comment, ['author_data', 'friends_data']),
    userId: commentUserId,
  }

  useOutsideClick({
    ref: wrapperRef,
    onClick: () => setShowUserNameMenu(false),
  })

  const handleUserNameClick = (): void => {
    setShowUserNameMenu(false)
    onUsernameClick(commentAuthor)
  }

  const handleAddLike = useCallback(() => {
    if (isLiked) return

    onAddCommentLike(comment.id)
  }, [isLiked])

  return (
    <CommentsContentItem>
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
        <ContentItem>
          <span
            className="author-name"
            role="button"
            tabIndex={0}
            onClick={() => setShowUserNameMenu(!showUserNameMenu)}
            onKeyDown={() => setShowUserNameMenu(!showUserNameMenu)}
          >
            {commentAuthor}
          </span>

          {commentUserId !== 0 && commentUserId !== me?.id && showUserNameMenu && (
            <div className="username-menu">
              <span>
                <Link href={PRIVATE_PATHS.USER_PROFILE(commentUserId)}>
                  {_('buttons.goToUserProfile')}
                </Link>
              </span>
              {commentUserId !== 0 && commentUserId !== me?.id && (
                <span
                  role="button"
                  tabIndex={0}
                  onClick={handleUserNameClick}
                  onKeyDown={handleUserNameClick}
                >
                  {_('buttons.replyMessage')}
                </span>
              )}
            </div>
          )}
        </ContentItem>
        <CommentsContentItemContentTime>
          <span className="date">{createdAt}</span>
          <FriendStatus friend={friend} />
        </CommentsContentItemContentTime>
        <CommentsContentItemContentText
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </CommentsContentItemContent>

      <CommentsContentItemLeft>
        <ItemCommentsLikes noLineHeight onClick={handleAddLike}>
          <LikeIcon liked={isLiked} wrapperStyles={{ top: '2px' }} />
          {likesCount}
        </ItemCommentsLikes>
      </CommentsContentItemLeft>
    </CommentsContentItem>
  )
}

export default CommentItem
