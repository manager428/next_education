import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import { format, parseISO } from 'date-fns'

import get from 'lodash/get'
import map from 'lodash/map'
import sortBy from 'lodash/sortBy'
import toUpper from 'lodash/toUpper'

import _ from 'Services/I18n'

import Comment from './Comment'
import {
  CommentsAmount,
  CommentsHeader,
  Container,
  List,
  MultipleCommentsIcon,
  Tab,
  Tabs,
  WithoutScrollList,
} from './styles'

const CommentsList = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
  color,
  data,
  experienceType,
  withCommentsCounter,
  listType,
  section,
  onAddLike,
  onReplyClick,
}) => {
  const [activeTab, setActiveTab] = useState('latest')

  const renderPosts = useCallback(() => {
    let posts = data

    if (activeTab === 'most popular') {
      posts = sortBy(posts, post => post.likes_count).reverse()
    }

    return map(posts, post => {
      const author = get(post, 'author_data.full_name', '')
      const userId = get(post, 'author_data.id', 0)
      const avatar = get(post, 'author_data.avatar', '')
      const date = format(parseISO(get(post, 'created_at', '')), 'dd MMM yyyy')
      const commentText = get(post, 'comment', '')
      const isLiked = get(post, 'is_liked', false)
      const likesCount = get(post, 'likes_count', 0)
      const friendsData = get(post, 'author_data.friends_data')

      return (
        <Comment
          author={author}
          avatar={avatar}
          color="#6E46FF"
          date={date}
          experienceType={experienceType}
          friendsData={friendsData}
          id={post.id}
          isLiked={isLiked}
          key={post.id}
          likeType={listType}
          likesAmount={likesCount}
          section={section}
          text={commentText}
          userId={userId}
          onAddLike={onAddLike}
          onReplyClick={onReplyClick}
        />
      )
    })
  }, [data, activeTab])

  return (
    <Container>
      <CommentsHeader>
        {withCommentsCounter && (
          <>
            <MultipleCommentsIcon fill="#828282" />
            <CommentsAmount>
              {_('general.comments')} {data.length}
            </CommentsAmount>
          </>
        )}

        <Tabs flex={1}>
          <Tab
            active={activeTab === 'latest'}
            color="#C869F5"
            mr="15px"
            onClick={() => setActiveTab('latest')}
          >
            {toUpper(_('buttons.latest'))}
          </Tab>
          <Tab
            active={activeTab === 'most popular'}
            color="#C869F5"
            onClick={() => setActiveTab('most popular')}
          >
            {toUpper(_('buttons.popular'))}
          </Tab>
        </Tabs>
      </CommentsHeader>
      {listType === 'comments' ? (
        <List>{renderPosts()}</List>
      ) : (
        <WithoutScrollList>{renderPosts()}</WithoutScrollList>
      )}
    </Container>
  )
}

CommentsList.defaultProps = {
  color: '#C869F5',
  data: [],
  withCommentsCounter: true,
  listType: 'comments',
  experienceType: undefined,
}

CommentsList.propTypes = {
  color: PropTypes.string,
  data: PropTypes.array,
  experienceType: PropTypes.string,
  listType: PropTypes.oneOf(['comments', 'votes']),
  section: PropTypes.string.isRequired,
  withCommentsCounter: PropTypes.bool,
  onAddLike: PropTypes.func.isRequired,
  onReplyClick: PropTypes.func.isRequired,
}

export default CommentsList
