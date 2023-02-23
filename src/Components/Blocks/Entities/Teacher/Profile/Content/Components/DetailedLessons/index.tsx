import React, { useCallback, useEffect, useState } from 'react'

import { DateTime } from 'luxon'
import { useRouter } from 'next/router'

import get from 'lodash/get'
import map from 'lodash/map'
import reduce from 'lodash/reduce'

import { Flex, Loader } from 'Components/UI'

import LectoriumPost from 'Components/Blocks/Entities/Lectorium/LectoriumPost'
import {
  BackButton,
  Container,
  LoadMore,
  RelativeContainer,
  Tab,
  Title,
} from 'Components/Blocks/Entities/Teacher/Profile/Content/Components/DetailedLessons/styles'

import { SHARE_EXPERIENCE_COUNT } from 'Constants/lectorium'
import { PUBLIC_PATHS } from 'Constants/paths'

import useSwrInfinityRequest from 'Hooks/useSwrInfinityRequest'

import PROFILE_API_PATHS from 'Services/Api/requests/profile/paths'
import _ from 'Services/I18n'

type Props = {
  isPublicView: boolean
  userId: number
  onBack: () => void
}
const DetailedLessons: React.FC<Props> = ({ onBack, userId, isPublicView }) => {
  const router = useRouter()

  const [queryParams, setQueryParams] = useState<{
    privacy: string
  }>({
    privacy: 'all',
  })

  useEffect(() => {
    setQueryParams({
      privacy: isPublicView ? 'public' : 'all',
    })
  }, [isPublicView, setQueryParams])

  const renderTabs = () => {
    let TABS = [
      {
        value: 'public',
        label: 'PUBLIC',
      },
    ]

    if (!isPublicView) {
      TABS = [
        {
          value: 'all',
          label: 'ALL',
        },
        {
          value: 'private',
          label: 'PRIVATE',
        },
        {
          value: 'public',
          label: 'PUBLIC',
        },
      ]
    }
    return map(TABS, tab => (
      <Tab
        active={queryParams.privacy === tab.value}
        key={tab.label}
        onClick={() => setQueryParams({ privacy: tab.value })}
      >
        {tab.label}
      </Tab>
    ))
  }

  const {
    data,
    isLoading,
    setSize,
    size,
    isLoadingMore,
  } = useSwrInfinityRequest({
    url: PROFILE_API_PATHS.lectoriums(userId),
    query: queryParams,
  })

  const handleLoadMore = () => {
    setSize(size + 1)
  }

  const getPosts = useCallback(
    () =>
      reduce(
        data,
        (
          acc: {
            posts: any[]
            lastPage: number
          },
          page: any,
        ) => {
          if (!acc.lastPage) {
            const lastPage = get(page, ['data', 'lastPage'], 0)
            acc.lastPage = lastPage
          }

          const pagePosts = get(page, ['data', 'posts'], [])
          acc.posts.push(...pagePosts)

          return acc
        },
        {
          posts: [],
          lastPage: 0,
        },
      ),
    [data],
  )

  const { posts, lastPage } = getPosts()

  const renderPosts = useCallback(() => {
    const isShowLoadMore = lastPage !== 1 && lastPage !== size && !isLoading

    return (
      <RelativeContainer
        alignItems="flex-start"
        flexWrap="wrap"
        minHeight={300}
        mt={20}
        width={1}
      >
        {isLoading && <Loader />}
        <Flex
          alignItems="flex-start"
          flexWrap="wrap"
          justifyContent="space-between"
          width={1}
        >
          {posts.length === 0 && !isLoading ? (
            <span>No lessons found!</span>
          ) : (
            map(posts, (post, index) => {
              const author = get(post, 'author_data.full_name', '')
              const likesCount = get(post, 'likes_count', 0)
              const title = get(post, 'title', '')
              const type = get(post, 'share_experience', '')
              const postsAmount = get(post, SHARE_EXPERIENCE_COUNT[type], 0)
              const preview = get(post, 'preview_url', '')
              const date = DateTime.fromISO(get(post, 'created_at')).toFormat(
                'dd MMM yyyy',
              )
              const id = get(post, 'id', 0)
              const status = get(post, 'status', 0)
              const isLiked = !get(post, 'isLiked', false)
              const privacy = get(post, 'privacy')

              return (
                <Flex key={id} mb={20}>
                  <LectoriumPost
                    author={author}
                    date={date}
                    isLiked={isLiked}
                    key={index}
                    likes={likesCount}
                    postsAmount={postsAmount}
                    preview={preview}
                    privacy={privacy}
                    status={status}
                    title={title}
                    type={type}
                    onHandleClick={() =>
                      router.push(PUBLIC_PATHS.LECTORIUM_POST(id))
                    }
                  />
                </Flex>
              )
            })
          )}
        </Flex>

        {isShowLoadMore && (
          <RelativeContainer
            flexWrap="wrap"
            height="80px"
            margin="0 auto"
            width="220px"
          >
            <LoadMore onClick={handleLoadMore}>
              {_('buttons.loadMore')}
            </LoadMore>
            {isLoadingMore && <Loader mt={50} />}
          </RelativeContainer>
        )}
      </RelativeContainer>
    )
  }, [data, isLoading, isLoadingMore, size, getPosts])

  return (
    <Container>
      <Flex alignItems="center" justifyContent="space-between" width={1}>
        <Title>Video Lessons</Title>
        <BackButton onClick={() => onBack()}>Go Back</BackButton>
      </Flex>

      <Flex justifyContent="space-between" mt={20} width={1}>
        <Flex>{renderTabs()}</Flex>
      </Flex>
      <Flex flexWrap="wrap" justifyContent="space-between" mt={20} width="100%">
        {renderPosts()}
      </Flex>
    </Container>
  )
}

export default DetailedLessons
