import React, { useCallback } from 'react'

import get from 'lodash/get'
import map from 'lodash/map'
import reduce from 'lodash/reduce'

import { Flex, Loader } from 'Components/UI'

import Debate, {
  DebateType,
} from 'Components/Blocks/Entities/Debates/Debate/Debate'

import useSwrInfinityRequest from 'Hooks/useSwrInfinityRequest'

import PROFILE_API_PATHS from 'Services/Api/requests/profile/paths'
import _, { useScopedI18n } from 'Services/I18n'

import {
  BackButton,
  Container,
  LoadMore,
  RelativeContainer,
  Title,
} from './styles'

type Props = {
  userId: number
  onBack: () => void
}

const DetailedDebates: React.FC<Props> = ({ userId, onBack }) => {
  const s = useScopedI18n('profile.content.debates')
  const {
    data,
    isLoading,
    setSize,
    size,
    isLoadingMore,
  } = useSwrInfinityRequest({
    url: PROFILE_API_PATHS.debates(userId),
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

  const renderDebates = useCallback(() => {
    const isShowLoadMore = lastPage !== 1 && lastPage !== size

    return (
      <RelativeContainer
        alignItems="flex-start"
        flexWrap="wrap"
        minHeight={300}
        mt={20}
        width={1}
      >
        {isLoading && <Loader />}
        <Flex alignItems="flex-start" flexWrap="wrap" width={1}>
          {posts.length === 0 && !isLoading ? (
            <span>{s('noDebatesFound')}</span>
          ) : (
            map(posts, (post: DebateType, index: number) => {
              const isSecond = (index + 1) % 2 === 0
              return (
                <Flex mb={60} mr={isSecond ? 0 : 30}>
                  <Debate {...post} key={post.id} />{' '}
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
        <Title>{s('title')}</Title>
        <BackButton onClick={() => onBack()}>{_('buttons.goBack')}</BackButton>
      </Flex>

      <Flex flexWrap="wrap" justifyContent="space-between" mt={20} width="100%">
        {renderDebates()}
      </Flex>
    </Container>
  )
}

export default DetailedDebates
