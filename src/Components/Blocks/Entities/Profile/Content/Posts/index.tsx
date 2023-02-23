import React, { useState } from 'react'
import Masonry from 'react-masonry-css'

import shortId from 'shortid'

import get from 'lodash/get'
import map from 'lodash/map'
import sortBy from 'lodash/sortBy'

import {
  BlockTitle,
  BlockTitleViewAllText,
  ContentTitleText,
} from 'Components/Blocks/Entities/Profile/styles'
import ListPost from 'Components/Blocks/List/ListPost'
import AddCommentModal from 'Components/Blocks/Modals/AddCommentModal'

import { ADD_COMMENT_MODAL_TYPES } from 'Constants/ids'

import _ from 'Services/I18n'

import { COMPLAINT_SECTIONS } from 'Utils/complaints'

import DummyPostItem from './DummyPostItem'
import NoPosts from './NoPosts'
import { PostsWrap, Wrap } from './styles'

type Props = {
  posts: Record<string, any>
}

const Posts: React.FC<Props> = ({ posts }) => {
  const [isShowAll, setIsShowAll] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(0)
  const [postType, setPostType] = useState(
    ADD_COMMENT_MODAL_TYPES.STUDENT_POSTS,
  )

  const userChallenges = get(posts, 'challenges.posts', [])
  const userCommunities = get(posts, 'communities.posts', [])
  const userPosts = userChallenges.length > 0 || userCommunities.length > 0
  const userPostsCount = userChallenges.length + userCommunities.length

  const showPostDetails = (id, type) => {
    setSelectedId(id)
    setPostType(type)
    setIsModalOpen(true)
  }

  const renderPosts = () => {
    const challengesPosts = map(userChallenges, challenge => (
      <ListPost
        item={challenge}
        key={shortId.generate()}
        postType="challenge"
        showPopup={showPostDetails}
      />
    ))

    const communitiesPosts = map(userCommunities, community => (
      <ListPost
        item={community}
        key={shortId.generate()}
        postType="community"
        showPopup={showPostDetails}
      />
    ))

    const allPosts = sortBy([...challengesPosts, ...communitiesPosts], item =>
      get(item, 'created_at'),
    ).reverse()

    if (userPostsCount === 1) {
      allPosts.push(<DummyPostItem />)
    }
    return allPosts
  }

  return (
    <Wrap>
      <BlockTitle>
        <ContentTitleText>
          {_('profile.content.postsAndChallenges.title')}
        </ContentTitleText>
        {userPostsCount > 2 && (
          <>
            {!isShowAll && (
              <BlockTitleViewAllText onClick={() => setIsShowAll(true)}>
                {_('buttons.viewAll')}
              </BlockTitleViewAllText>
            )}
            {isShowAll && (
              <BlockTitleViewAllText onClick={() => setIsShowAll(false)}>
                {_('buttons.viewPartially')}
              </BlockTitleViewAllText>
            )}
          </>
        )}
      </BlockTitle>
      {userPosts ? (
        <PostsWrap showAll={isShowAll} withWrap>
          <Masonry
            breakpointCols={2}
            className="my-gallery-class"
            columnClassName="my-masonry-grid_column"
          >
            {renderPosts()}
          </Masonry>
        </PostsWrap>
      ) : (
        <NoPosts />
      )}

      {isModalOpen && (
        <AddCommentModal
          postId={selectedId}
          postType={postType}
          section={COMPLAINT_SECTIONS.CHALLENGES}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </Wrap>
  )
}

export default Posts
