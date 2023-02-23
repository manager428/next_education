/* eslint-disable @typescript-eslint/no-shadow,react/no-danger */
import React, { useEffect, useState } from 'react'

import InnerHTML from 'dangerously-set-html-content'
import { format, isToday } from 'date-fns'

import get from 'lodash/get'
import truncate from 'lodash/truncate'

import { Element } from 'Components/UI'

import { challengesApi } from 'Services/Api/requests'
import CookieService, { CookiesKeys } from 'Services/Cookies'
import _ from 'Services/I18n'

import {
  CommentItem,
  CommentsIcon,
  ItemCommentsLikes,
  ItemImage,
  ItemUsersComments,
  LikeIcon,
  ListItem,
  ListItemMainContent,
  PlayButton,
} from './styles'

type Props = {
  comments: []
  commentsCount: number
  likesCount: number
  created: string
  description: string
  id: number
  previewUrl: string
  video: string
  title: string
  username: string
  isLiked: boolean
  isLoggedIn: boolean
  onOpen: (id: number) => void
  onLike: () => void
}

const Item: React.FC<Props> = ({
  comments,
  commentsCount,
  likesCount,
  created,
  description,
  id,
  previewUrl,
  video,
  title,
  username,
  isLiked,
  isLoggedIn,
  onLike,
  onOpen,
}) => {
  const [isLikeAdded, setLikeAdded] = useState(false)
  const [isCommentLikeAdded, setCommentLikeAdded] = useState(false)
  const [isGuestLikeAdded, setGuestLikeAdded] = useState(false)
  const [isGuestCommentLikeAdded, setGuestCommentLikeAdded] = useState(false)
  const [isClientSide, setClientSide] = useState(false)

  useEffect(() => {
    setClientSide(true)
  }, [])

  useEffect(() => {
    const latestCommentId = get(comments, [0, 'id'], null)
    setGuestLikeAdded(
      !!CookieService.getCookie(null, `${CookiesKeys.challengeLike}-${id}`),
    )
    setGuestCommentLikeAdded(
      !!CookieService.getCookie(
        null,
        `${CookiesKeys.challengeCommentLike}-${latestCommentId}`,
      ),
    )
  }, [])

  const handleClick = () => {
    onOpen(id)
  }

  const handleAddLike = async () => {
    if (!isLikeAdded && !isLiked && !isGuestLikeAdded) {
      if (!isLoggedIn) {
        CookieService.setCookie(null, `${CookiesKeys.challengeLike}-${id}`, {
          liked: true,
        })
      }

      setLikeAdded(true)

      await challengesApi.likeChallenge(id)

      onLike()
    }
  }

  const handleAddCommentLike = async (comment: any) => {
    const commentId = get(comment, 'id', 0)
    const isLiked = get(comment, 'isLiked', false)

    const isGuestCommentLikeAdded = !!CookieService.getCookie(
      null,
      `${CookiesKeys.challengeCommentLike}-${commentId}`,
    )

    if (!isLiked && !isGuestCommentLikeAdded) {
      try {
        await challengesApi.likeChallengeComment(commentId)

        setCommentLikeAdded(true)

        CookieService.setCookie(
          null,
          `${CookiesKeys.challengeCommentLike}-${commentId}`,
          {
            liked: true,
          },
        )
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
    }
  }

  const created2 = created.replace(/ /g, 'T')
  const createdFormattedDate = new Date(Date.parse(created2))

  return (
    <ListItem>
      <ItemImage onClick={handleClick}>
        <img alt="preview" src={previewUrl} />
        {video.length > 0 && <PlayButton />}
      </ItemImage>
      <div className="main-item-wrap">
        <ListItemMainContent>
          <div className="post-date">
            {isToday(createdFormattedDate)
              ? format(createdFormattedDate, 'HH:mm')
              : format(createdFormattedDate, 'dd MMM yyyy')}
          </div>
          <div className="post-title">{title}</div>
          <div className="author">{username}</div>
          <div className="post-content">
            <InnerHTML html={truncate(description, { length: 150 })} />
            {description?.length > 150 && (
              <Element className="more" onClick={handleClick}>
                {_('buttons.more')}
              </Element>
            )}
          </div>
          <div className="item-likes-comments">
            <ItemCommentsLikes onClick={() => handleAddLike()}>
              <LikeIcon liked={isGuestLikeAdded || isLikeAdded || isLiked} />
              {isLikeAdded ? likesCount + 1 : likesCount}
            </ItemCommentsLikes>
            <div className="item-comments">
              <CommentsIcon />
              {commentsCount}
            </div>
            <button
              className="add-comment-btn"
              type="button"
              onClick={handleClick}
            >
              {_('buttons.addComment')}
            </button>
          </div>
        </ListItemMainContent>
        {Object.keys(comments).length > 0 && (
          <ItemUsersComments>
            <div className="comments-title">{_('general.comments')}</div>
            {comments.map((item: any) => {
              const commentAuthor = get(item, 'author_name')
              const created2 = get(item, 'created_at', '').replace(/ /g, 'T')
              const createdAt = new Date(Date.parse(created2))
              const content = get(item, 'comment')

              return (
                <CommentItem key={item.id}>
                  <div className="comment-info">
                    <div className="comment-author">{commentAuthor}</div>
                    <div className="comment-date">
                      {isToday(createdAt)
                        ? format(createdAt, 'HH:mm')
                        : format(createdAt, 'dd MMM yyyy')}
                    </div>
                    <ItemCommentsLikes
                      style={{ color: '#828282' }}
                      onClick={() => handleAddCommentLike(item)}
                    >
                      {isClientSide ? (
                        <LikeIcon
                          liked={
                            item.isLiked ||
                            isGuestCommentLikeAdded ||
                            isCommentLikeAdded
                          }
                        />
                      ) : null}

                      {isCommentLikeAdded
                        ? item.likes_count + 1
                        : item.likes_count}
                    </ItemCommentsLikes>
                  </div>
                  <div
                    className="comment-text"
                    dangerouslySetInnerHTML={{
                      __html: truncate(content, { length: 90 }),
                    }}
                  />
                  <button
                    className="view-all-comments"
                    type="button"
                    onClick={handleClick}
                  >
                    {_('buttons.viewAllOtherComments')}
                  </button>
                </CommentItem>
              )
            })}
          </ItemUsersComments>
        )}
      </div>
    </ListItem>
  )
}

export default Item
