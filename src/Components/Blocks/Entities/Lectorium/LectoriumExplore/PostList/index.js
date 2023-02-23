import React from 'react'
import PropTypes from 'prop-types'

import { format, parseISO } from 'date-fns'
import { useRouter } from 'next/router'

import get from 'lodash/get'
import map from 'lodash/map'

import { Flex, Loader } from 'Components/UI'

import {
  Container,
  LoadMore,
  Text,
} from 'Components/Blocks/Entities/Lectorium/LectoriumExplore/PostList/styles'
import LectoriumPost from 'Components/Blocks/Entities/Lectorium/LectoriumPost'

import { SHARE_EXPERIENCE_COUNT } from 'Constants/lectorium'
import { PUBLIC_PATHS } from 'Constants/paths'

import _ from 'Services/I18n'

const PostList = ({
  posts,
  page,
  lastPage,
  isLoadMoreLoading,
  onLoadMore,
  withProgress,
  color,
}) => {
  const router = useRouter()

  const renderPosts = () =>
    map(posts, (post, index) => {
      const likesCount = get(post, 'likes_count', 0)
      const title = get(post, 'title', '')
      const type = get(post, 'share_experience', '')
      const postsAmount = get(post, SHARE_EXPERIENCE_COUNT[type], 0)
      const createdAt = parseISO(get(post, 'created_at'))
      const preview = get(post, 'preview_url', '')
      const date = format(createdAt, 'dd MMM yyyy')
      const id = get(post, 'id', 0)
      const postProgressStatus = get(post, 'post_progress_status', 0)
      const privacy = get(post, 'privacy')
      const isSpecialProject = get(post, 'is_special_project', false)
      const author = isSpecialProject
        ? get(post, 'special_author_data.full_name', '')
        : get(post, 'author_data.full_name', '')

      const isLiked = false

      return (
        <Flex key={id} mr={(index + 1) % 3 === 0 ? 0 : 45}>
          <LectoriumPost
            author={author}
            color={color}
            date={date}
            id={id}
            isLiked={isLiked}
            likes={likesCount}
            postsAmount={postsAmount}
            preview={preview}
            privacy={privacy}
            status={withProgress ? postProgressStatus : null}
            title={title}
            type={type}
            onHandleClick={() => router.push(PUBLIC_PATHS.LECTORIUM_POST(id))}
          />
        </Flex>
      )
    })

  return (
    <Container>
      {posts.length === 0 ? (
        <Text>No posts found!</Text>
      ) : (
        <Flex alignContent="flex-start" flexWrap="wrap">
          {renderPosts()}
          <Flex mb={40} width={1}>
            {lastPage !== page && (
              <>
                <Flex
                  flexWrap="wrap"
                  height="80px"
                  margin="0 auto"
                  width="220px"
                >
                  <LoadMore color={color} onClick={onLoadMore}>
                    {_('buttons.loadMore')}
                  </LoadMore>
                  {isLoadMoreLoading && <Loader />}
                </Flex>
              </>
            )}
          </Flex>
        </Flex>
      )}
    </Container>
  )
}

PostList.defaultProps = {
  withProgress: true,
  color: '#49CEB1',
}

PostList.propTypes = {
  color: PropTypes.string,
  isLoadMoreLoading: PropTypes.bool.isRequired,
  lastPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  posts: PropTypes.array.isRequired,
  withProgress: PropTypes.bool,

  onLoadMore: PropTypes.func.isRequired,
}

export default PostList
