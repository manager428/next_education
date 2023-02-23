import React, { useCallback, useEffect, useRef, useState } from 'react'

import InnerHTML from 'dangerously-set-html-content'
import { DateTime } from 'luxon'
import Link from 'next/link'
import shortId from 'shortid'

import get from 'lodash/get'
import map from 'lodash/map'

import { Dropdown, Flex, Loader } from 'Components/UI'
import MessageInput from 'Components/UI/Forms/MessageInput'

import CommentItem from 'Components/Blocks/Entities/Discussions/CommentItem'
import FriendStatus from 'Components/Blocks/Entities/Friends/FriendStatus'

import { PRIVATE_PATHS } from 'Constants/paths'

import useMe from 'Hooks/useMe'
import useOutsideClick from 'Hooks/useOutsideClick'

import _ from 'Services/I18n'

import {
  Absolute,
  CommentIcon,
  Container,
  Content,
  Date,
  Description,
  DropdownIcon,
  Header,
  Image,
  LikeIcon,
  LoadMoreButton,
  Relative,
  StatButton,
  Stats,
  Tag,
  UserAvatar,
  UserName,
  UserNameMenu,
} from './styles'
import { DiscussionType } from './types'

const Discussion: React.FC<DiscussionType> = ({
  id,
  date,
  tags,
  author,
  comments,
  content,
  image,
  likesCount,
  isLiked,
  commentsCount,
  showLoadMoreComments,
  onLoadMoreComments,
  onAddComment,
  onAddCommentLike,
  onAddLike,
  onDelete,
  onEdit,
}) => {
  const me = useMe()

  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef(null)

  const [isLoading, setLoading] = useState(false)
  const [replyTo, setReplyTo] = useState<string | null>(null)
  const [isShowDropdown, setShowDropdown] = useState(false)
  const [isShowUserNameMenu, setShowUserNameMenu] = useState(false)

  useOutsideClick({
    ref: wrapperRef,
    onClick: () => setShowUserNameMenu(false),
  })

  useEffect(() => {
    setLoading(false)
  }, [comments])

  const handleLoadMore = useCallback(() => {
    setLoading(true)
    onLoadMoreComments()
  }, [onLoadMoreComments])

  const handleSendComment = useCallback(message => {
    onAddComment(id, message)
  }, [])

  const handleAddCommentLike = useCallback(commentId => {
    onAddCommentLike(id, commentId)
  }, [])

  const handleAddDiscussionLike = useCallback(() => {
    if (isLiked) return

    onAddLike(id)
  }, [isLiked])

  const handleReply = (commentAuthor: string): void => {
    setReplyTo(
      `<span id={${shortId()}} contenteditable="false" style="color: rgb(246,139,106);">${commentAuthor}</span>,&nbsp`,
    )

    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    }

    setShowUserNameMenu(false)
  }

  const renderComments = useCallback(
    () =>
      map(comments, comment => (
        <CommentItem
          comment={comment}
          key={comment.id}
          onAddCommentLike={handleAddCommentLike}
          onUsernameClick={handleReply}
        />
      )),
    [comments],
  )

  const renderTags = useCallback(
    () => map(tags, (tag, index) => <Tag key={`${tag}-${index}`}>#{tag}</Tag>),
    [tags],
  )

  const formattedDate = DateTime.fromISO(date).toFormat(
    "dd MMM yyyy 'at' hh:mm",
  )

  const isCreator = me?.id === author.id

  const friend = {
    ...get(author, 'friends_data'),
    userId: author.id,
  }

  return (
    <Container mb={20} ref={containerRef}>
      {isCreator && (
        <Absolute justifyContent="flex-end" right={14} top={14} width={80}>
          <Flex onClick={() => setShowDropdown(true)}>
            <DropdownIcon />
          </Flex>

          <Dropdown
            isVisible={isShowDropdown}
            options={[
              {
                label: 'Edit',
                onSelectItem: () => onEdit(id),
              },
              {
                label: 'Delete',
                onSelectItem: () => onDelete(id),
              },
            ]}
            onClose={() => setShowDropdown(false)}
          />
        </Absolute>
      )}

      <Header>
        <Flex mr="10px">
          <UserAvatar as="img" src={author.avatar} />
        </Flex>
        <Relative flexWrap="wrap">
          {author.id !== 0 && author.id !== me?.id && isShowUserNameMenu && (
            <UserNameMenu ref={wrapperRef}>
              <span>
                <Link href={PRIVATE_PATHS.USER_PROFILE(author.id)}>
                  {_('buttons.goToUserProfile')}
                </Link>
              </span>
              <span
                role="button"
                tabIndex={0}
                onClick={() => handleReply(author.full_name)}
                onKeyDown={() => handleReply(author.full_name)}
              >
                {_('buttons.replyMessage')}
              </span>
            </UserNameMenu>
          )}
          <UserName
            onClick={() => setShowUserNameMenu(prevState => !prevState)}
            onKeyDown={() => setShowUserNameMenu(prevState => !prevState)}
          >
            {author.full_name}
          </UserName>
          <Date>
            {formattedDate}
            <FriendStatus friend={friend} />
          </Date>
        </Relative>
      </Header>

      <Content mt={14}>
        {content?.length > 0 && (
          <Description>
            <InnerHTML html={content} />
          </Description>
        )}

        {image?.length > 0 && <Image src={image} />}
      </Content>

      {tags?.length > 0 && (
        <Flex flexWrap="wrap" mt={14}>
          {renderTags()}
        </Flex>
      )}

      <Stats mt={15}>
        <Flex>
          <StatButton onClick={handleAddDiscussionLike}>
            <LikeIcon isLiked={isLiked} wrapperStyles={{ mr: '7px' }} />{' '}
            {likesCount} Likes
          </StatButton>
        </Flex>
        <Flex>
          <StatButton>
            <CommentIcon wrapperStyles={{ mr: '7px' }} /> {commentsCount}{' '}
            Comments
          </StatButton>
        </Flex>
      </Stats>

      <Flex flexWrap="wrap" mt={14} width={1}>
        {renderComments()}
      </Flex>

      {showLoadMoreComments && (
        <LoadMoreButton onClick={handleLoadMore}>
          {_('buttons.loadMore')}
        </LoadMoreButton>
      )}

      <Flex mt={14} width={1}>
        <MessageInput
          avatar={me?.avatar ?? ''}
          replyTo={replyTo}
          onSendClick={value => {
            handleSendComment(value)
          }}
        />
      </Flex>

      {isLoading && (
        <Loader bottom={0} height="20px" top="unset" width="20px" />
      )}
    </Container>
  )
}

export default Discussion
