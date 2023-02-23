import React, { useCallback, useState } from 'react'

import get from 'lodash/get'
import reduce from 'lodash/reduce'

import { Flex } from 'Components/UI'

import CreatePost from 'Components/Blocks/Entities/Community/Forms/CreatePost'
import Posts from 'Components/Blocks/Entities/Community/Posts'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import useRole from 'Hooks/useRole'
import useSwrInfinityRequest from 'Hooks/useSwrInfinityRequest'

import { CommunityFetch } from 'Services/Api/requests/community'
import COMMUNITY_API_PATHS from 'Services/Api/requests/community/paths'
import { useScopedI18n } from 'Services/I18n'

import {
  Background,
  Container,
  Description,
  Illustration,
  SectionTitle,
} from './styles'

const Community: React.FC = () => {
  const { isStudent } = useRole()
  const s = useScopedI18n('community')

  const [queryParams, setQueryParams] = useState<{
    search: null | string
    category: string
  }>({
    search: null,
    category: '',
  })

  const {
    data,
    isLoading,
    setSize,
    size,
    isLoadingMore,
    mutate,
  } = useSwrInfinityRequest({
    url: COMMUNITY_API_PATHS.communityList,
    query: queryParams,
  })

  const handleSetParams = (values: CommunityFetch) => {
    if (values.type === 'loadMore') {
      setSize(size + 1)
    } else {
      setQueryParams(params => ({
        ...params,
        ...values,
      }))
    }
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

  return (
    <Background>
      <Head description="Community" title="Community" />

      <Container>
        {isStudent ? (
          <CreatePost onSuccess={mutate} />
        ) : (
          <Flex
            alignItems="flex-start"
            justifyContent="space-between"
            width={1}
          >
            <Flex flexWrap="wrap" maxWidth="560px" width={1}>
              <SectionTitle>{s('teacherTitle')}</SectionTitle>
              <Description>{s('teacherDescription')}</Description>
            </Flex>
            <Flex flexShrink={9} height={220} maxWidth={330} width={1}>
              <Illustration />
            </Flex>
          </Flex>
        )}
        <Posts
          isLastPage={lastPage === 0 || lastPage === size}
          isLoadMoreLoading={isLoadingMore}
          isLoading={isLoading}
          posts={posts}
          onFetch={handleSetParams}
        />
      </Container>
      <Footer />
    </Background>
  )
}

export default Community
