import React, { useCallback, useEffect, useState } from 'react'

import get from 'lodash/get'
import reduce from 'lodash/reduce'

import { ogDebatesImage } from 'Assets/images/og'

import { Flex } from 'Components/UI'

import DebatesList from 'Components/Blocks/Entities/Debates/DebatesList'
import JoinDebates from 'Components/Blocks/Entities/Debates/JoinDebates'
import {
  CreateDebateModal,
  DebateSuccessModal,
} from 'Components/Blocks/Entities/Debates/Modals'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import useSwrInfinityRequest from 'Hooks/useSwrInfinityRequest'

import DEBATES_API_PATHS from 'Services/Api/requests/debates/paths'

import { Background, Container } from './styles'

type Props = {
  initialData: {
    posts: []
    lastPage: number
  }
}

const Debates: React.FC<Props> = ({ initialData }) => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false)
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false)
  const [isClientSide, setClientSide] = useState(false)

  const [searchParams, setSearchParams] = useState<{
    order: string | null
    category: string | null
    search: string
  }>({
    order: '',
    category: '',
    search: '',
  })

  const {
    data,
    size,
    setSize,
    isValidating,
    isLoadingMore,
  } = useSwrInfinityRequest({
    url: DEBATES_API_PATHS.debatesList,
    query: searchParams,
    options: {
      // need this to avoid glitching on clientside with old data
      initialData: !isClientSide ? initialData : null,
      revalidateAll: true,
      persistSize: true,
    },
  })

  useEffect(() => {
    setClientSide(true)
  }, [])

  const handleSelectTag = useCallback((tag: string) => {
    if (tag === 'popular' || tag === 'latest') {
      setSearchParams(oldParams => ({
        ...oldParams,
        order: tag,
        category: null,
      }))
    } else {
      setSearchParams(oldParams => ({
        ...oldParams,
        order: 'latest',
        category: tag,
      }))
    }
  }, [])

  const handleSearch = useCallback(
    value => {
      setSearchParams(prevParams => ({
        ...prevParams,
        search: value,
      }))
    },
    [searchParams],
  )

  const handleLoadMore = useCallback(() => {
    setSize(size + 1)
  }, [size])

  const handleClose = useCallback((withSuccessModal = false) => {
    setCreateModalOpen(false)

    if (withSuccessModal) {
      setSuccessModalOpen(true)
    }
  }, [])

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
          const lastPage = get(page, ['data', 'lastPage'], 1)
          acc.lastPage = lastPage

          const pagePosts = get(page, ['data', 'posts'], [])
          acc.posts.push(...pagePosts)

          return acc
        },
        {
          posts: [],
          lastPage: 1,
        },
      ),
    [data, initialData],
  )

  const { posts, lastPage } = getPosts()

  return (
    <Background>
      <Head
        description="We empower K12 students to express their opinions and improve critical thinking through debates on the most relevant and controversial topics."
        ogImage={ogDebatesImage.src}
        title="Debates - Tool for Critical Thinking Development | iDialogue"
      />

      <CreateDebateModal isOpen={isCreateModalOpen} onClose={handleClose} />

      <DebateSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setSuccessModalOpen(false)}
      />

      <Container pb={60} pt={60}>
        <JoinDebates onCreate={() => setCreateModalOpen(true)} />

        <Flex width={1}>
          <DebatesList
            isLastPage={lastPage === 1 || lastPage === size}
            isLoading={isValidating}
            isShowMoreLoading={isLoadingMore}
            posts={posts}
            onLoadMore={handleLoadMore}
            onSearch={handleSearch}
            onTagSelect={handleSelectTag}
          />
        </Flex>
      </Container>
      <Footer />
    </Background>
  )
}

export default Debates
