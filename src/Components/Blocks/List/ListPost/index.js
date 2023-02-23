/* eslint-disable camelcase,react/no-danger,jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react'
import PT from 'prop-types'

import InnerHTML from 'dangerously-set-html-content'
import { format, isToday, parseISO } from 'date-fns'

import get from 'lodash/get'
import indexOf from 'lodash/indexOf'
import reduce from 'lodash/reduce'
import truncate from 'lodash/truncate'

import { SHARE_EXPERIENCE_TYPES } from 'Constants/lectorium'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'

import { communityApi, lectoriumApi } from 'Services/Api/requests'
import _ from 'Services/I18n'

import {
  CommentIcon,
  CommentItem,
  ItemCommentsLikes,
  ItemImage,
  ItemUsersComments,
  LikeIcon,
  ListItem,
  ListItemMainContent,
  PlayIcon,
} from './styles'

// TODO: refactor this component to TS, move to parent onLike, onCommentLike

const ListPost = ({ item, showPopup, postType, isLogged }) => {
  const params = useRouterQueryParams()

  const [isLikeAdded, setIsLikeAdded] = useState(false)
  const [likedComments, setLikedComments] = useState([])

  const [likesCount, setLikesCount] = useState(get(item, 'likes_count', 0))

  const [commentsLikes, setCommentsLikes] = useState(
    reduce(
      get(item, 'comments', []),
      (acc, comment) => {
        // eslint-disable-next-line no-param-reassign
        acc = {
          ...acc,
          [comment.id]: {
            likes_count: get(comment, 'likes_count', 0),
            is_liked: false,
          },
        }

        return acc
      },
      {},
    ),
  )

  const id = get(item, 'id')
  const comments = get(item, 'comments', [])
  const commentsCount = get(item, 'comments_count', 0)
  const title = get(item, 'title', '')

  const author = get(item, 'author_data.full_name', '')

  const description =
    postType === SHARE_EXPERIENCE_TYPES.STUDENT_POSTS ||
    postType === SHARE_EXPERIENCE_TYPES.STUDENT_VIDEOS
      ? get(item, 'description', '')
      : get(item, 'content', '')

  const postCreated = get(item, 'created_at').replace(/ /g, 'T')
  const createdFormattedDate = new Date(Date.parse(postCreated))
  const isLiked = get(item, 'is_liked')

  const previewUrl =
    postType === SHARE_EXPERIENCE_TYPES.STUDENT_POSTS ||
    postType === SHARE_EXPERIENCE_TYPES.STUDENT_VIDEOS
      ? get(item, 'preview_url', '')
      : get(item, 'image', '')

  const handleAddLike = async () => {
    if (!isLogged) {
      return
    }

    if (!isLikeAdded) {
      if (postType === 'community') {
        await communityApi.likeCommunity(id)
      } else if (
        postType === SHARE_EXPERIENCE_TYPES.STUDENT_POSTS ||
        postType === SHARE_EXPERIENCE_TYPES.STUDENT_VIDEOS
      ) {
        await lectoriumApi.addExperienceLike(params?.id, id)
      }

      setLikesCount(likesCount + 1)

      setIsLikeAdded(true)
    }
  }

  const handleAddCommentLike = async commentId => {
    if (!isLogged || commentsLikes[commentId].is_liked) {
      return
    }

    if (indexOf(likedComments, commentId) === -1) {
      setLikedComments([...likedComments, commentId])

      try {
        if (postType === 'community') {
          await communityApi.likeCommunityComment(commentId)
        } else if (
          postType === SHARE_EXPERIENCE_TYPES.STUDENT_POSTS ||
          postType === SHARE_EXPERIENCE_TYPES.STUDENT_VIDEOS
        ) {
          await lectoriumApi.addExperienceCommentLike(commentId)
        }

        setCommentsLikes(prevCommentLikes => ({
          ...prevCommentLikes,
          [commentId]: {
            ...prevCommentLikes[commentId],
            likes_count: commentsLikes[commentId].likes_count + 1,
            is_liked: true,
          },
        }))
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    }
  }

  return (
    <ListItem className="list-item">
      <ItemImage role="button" onClick={() => showPopup(id, postType)}>
        {previewUrl && previewUrl.length > 0 && <img alt="" src={previewUrl} />}
        {postType === 'challenge' && <PlayIcon />}
      </ItemImage>
      <div className="main-item-wrap">
        <ListItemMainContent>
          <div className="post-date">
            {format(createdFormattedDate, 'dd MMM yyyy')}
          </div>
          <div className="post-title">{title}</div>
          <div className="author">{author}</div>
          <div className="post-content">
            <InnerHTML html={truncate(description, { length: 150 })} />

            {description.length > 150 && (
              <span className="more" onClick={() => showPopup(id, postType)}>
                {_('buttons.more')}
              </span>
            )}
          </div>
          <div className="item-likes-comments">
            <ItemCommentsLikes>
              <LikeIcon
                liked={isLikeAdded || isLiked}
                onClick={isLikeAdded || isLiked ? null : handleAddLike}
              />
              {likesCount}
            </ItemCommentsLikes>
            <div className="item-comments">
              <CommentIcon />
              {commentsCount}
            </div>
            <div
              className="add-comment-btn"
              role="button"
              tabIndex="0"
              onClick={() => showPopup(id, postType)}
              onKeyDown={() => showPopup(id, postType)}
            >
              {_('buttons.addComment')}
            </div>
          </div>
        </ListItemMainContent>
        {Object.keys(comments).length > 0 && (
          <ItemUsersComments>
            <div className="comments-title">{_('general.comments')}</div>
            {comments.map(comment => {
              const isCommentLiked =
                get(comment, 'is_liked', false) ||
                commentsLikes[comment.id]?.is_liked

              const commentAuthor = get(comment, 'author_data.full_name', '')

              let createdAt = parseISO(get(comment, 'created_at'))

              createdAt = isToday(createdAt)
                ? format(createdAt, 'HH:mm')
                : format(createdAt, 'dd MMM yyyy')

              const content = get(comment, 'comment')

              return (
                <CommentItem key={comment.id}>
                  <div className="comment-info">
                    <div className="comment-author">{commentAuthor}</div>
                    <div className="comment-date">{createdAt}</div>
                    <ItemCommentsLikes style={{ color: '#828282' }}>
                      <LikeIcon
                        liked={isCommentLiked}
                        onClick={() => handleAddCommentLike(comment.id)}
                      />
                      {commentsLikes[comment.id]?.likes_count}
                    </ItemCommentsLikes>
                  </div>
                  <div
                    className="comment-text"
                    dangerouslySetInnerHTML={{
                      __html: truncate(content, {
                        length: content.startsWith('<span') ? 150 : 90,
                      }),
                    }}
                  />
                </CommentItem>
              )
            })}
            <div
              className="view-all-comments"
              role="button"
              tabIndex="0"
              onClick={() => showPopup(id, postType)}
              onKeyDown={() => showPopup(id, postType)}
            >
              {_('buttons.viewAllOtherComments')}
            </div>
          </ItemUsersComments>
        )}
      </div>
    </ListItem>
  )
}

ListPost.defaultProps = {
  isLogged: true,
}
ListPost.propTypes = {
  isLogged: PT.bool,
  item: PT.object.isRequired,
  postType: PT.string.isRequired,
  showPopup: PT.func.isRequired,
}

export default ListPost
