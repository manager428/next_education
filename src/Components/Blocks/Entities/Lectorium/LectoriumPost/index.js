import React from 'react'
import PropTypes from 'prop-types'

import Image from 'next/image'

import truncate from 'lodash/truncate'

import {
  lectoriumCompletedImagesGlyph,
  lectoriumInProgressGlyph,
  lectoriumLockedGlyph,
} from 'Assets/svg/lectorium'

import { Flex } from 'Components/UI'
import Icon from 'Components/UI/Icon'

import {
  CommentsIcon,
  Date,
  LikeIcon,
  PlayIcon,
  PostAuthor,
  PostContainer,
  PostContent,
  PostInfo,
  PostPreview,
  PostsIcon,
  PostTitle,
  PostWrapper,
  PrivacyLabel,
  Status,
  VideoIcon,
} from 'Components/Blocks/Entities/Lectorium/LectoriumPost/styles'

import { POST_STATUS_TYPES, SHARE_EXPERIENCE_TYPES } from 'Constants/lectorium'

const LectoriumPost = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
  color,
  type,
  preview,
  title,
  date,
  author,
  likes,
  postsAmount,
  status,
  marginBottom,
  onHandleClick,
  privacy,
  isLiked,
}) => {
  // TODO: refactor with TS
  const renderPostStatus = () => {
    switch (status) {
      case POST_STATUS_TYPES.COMPLETED:
        return (
          <Status>
            <Icon height={44} icon={lectoriumCompletedImagesGlyph} width={44} />
          </Status>
        )
      case POST_STATUS_TYPES.ACTIVE:
        return (
          <Status>
            <Icon height={44} icon={lectoriumInProgressGlyph} width={44} />
          </Status>
        )
      case POST_STATUS_TYPES.LOCKED:
        return (
          <Status>
            <Icon height={44} icon={lectoriumLockedGlyph} width={44} />
          </Status>
        )
      case POST_STATUS_TYPES.NEW:
        return null
      default:
        return null
    }
  }

  const renderType = () => {
    switch (type) {
      case SHARE_EXPERIENCE_TYPES.COMMENTS:
        return <CommentsIcon />
      case SHARE_EXPERIENCE_TYPES.STUDENT_POSTS:
        return <PostsIcon />
      case SHARE_EXPERIENCE_TYPES.STUDENT_VIDEOS:
        return <VideoIcon />
      default:
        return null
    }
  }

  return (
    <PostContainer mb={marginBottom} onClick={onHandleClick}>
      <PostPreview>
        <Image alt="post preview" layout="fill" src={preview} />
        <PlayIcon fill="#6E46FF" />
        {renderPostStatus()}

        {!privacy.includes('all_students') && (
          <PrivacyLabel>PRIVATE</PrivacyLabel>
        )}
      </PostPreview>
      <PostWrapper color="#6E46FF">
        <PostContent>
          <PostTitle>
            {truncate(title, { length: 54, omission: '...' })}
          </PostTitle>
          <PostAuthor>by {author}</PostAuthor>
          <Flex alignItems="center" mt="10px" width={1}>
            <PostInfo mr={18}>
              <LikeIcon liked={isLiked} />
              {likes}
            </PostInfo>
            <PostInfo>
              {renderType()}

              {postsAmount}
            </PostInfo>
            <Date>{date}</Date>
          </Flex>
        </PostContent>
      </PostWrapper>
    </PostContainer>
  )
}

LectoriumPost.defaultProps = {
  marginBottom: 0,
  color: '#6E46FF',
}

LectoriumPost.propTypes = {
  author: PropTypes.string.isRequired,
  color: PropTypes.string,
  date: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  marginBottom: PropTypes.number,
  postsAmount: PropTypes.number.isRequired,
  preview: PropTypes.string.isRequired,
  privacy: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onHandleClick: PropTypes.func.isRequired,
}

export default LectoriumPost
