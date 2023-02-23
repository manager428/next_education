import React, { useCallback, useEffect, useState } from 'react'

import { NextPage } from 'next'

import get from 'lodash/get'

import LectoriumList from 'Containers/Pages/Lectorium/List/LectoriumList'
import UploadVideoBanner from 'Containers/Pages/Lectorium/List/UploadVideoBanner'
import {
  Background,
  Container,
  Content,
} from 'Containers/Pages/Lectorium/styles'

import { Flex } from 'Components/UI'
import Loader from 'Components/UI/Loader'

import {
  CategoriesHeader,
  PostList,
  SearchBar,
  Slider,
  SortOptions,
} from 'Components/Blocks/Entities/Lectorium'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import { USER_ROLES } from 'Constants/ids'

import useMe from 'Hooks/useMe'
import useRouterQueryParams from 'Hooks/useRouterQueryParams'
import useSwrRequest from 'Hooks/useSwrRequest'

import { lectoriumApi } from 'Services/Api/requests'
import LECTORIUM_API_PATHS from 'Services/Api/requests/lectorium/paths'

type Props = {
  initialData: Record<string, any>
}

export const Lectorium: NextPage<Props> = ({ initialData }) => {
  const pageParams = useRouterQueryParams()
  const selectedCategory = (pageParams?.category ?? '') as string

  const {
    data: { posts, slider },
  } = useSwrRequest({
    url: LECTORIUM_API_PATHS.LECTORIUMS,
    options: { fallbackData: initialData },
  })

  const me = useMe()

  const [isLoading, setLoading] = useState(false)
  const [isLoadMoreLoading, setLoadMoreLoading] = useState(false)

  const [searchParams, setSearchParams] = useState({
    englishLevel: 'all',
    searchQuery: '',
    sortValue: 'latest',
    sortType: 'order',
  })
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(0)

  const [postsBySearch, setPostsBySearch] = useState<any[]>([])

  const isShowDefaultPosts =
    searchParams.searchQuery === '' &&
    selectedCategory === '' &&
    searchParams.englishLevel === 'all'

  const isOwnVideo = selectedCategory === 'own_video'

  const isTeacher = me?.role === USER_ROLES.teacher

  const handleLoadMore = useCallback(async () => {
    const { searchQuery, sortValue, sortType, englishLevel } = searchParams

    setLoadMoreLoading(true)

    const nextPage = page + 1

    const requestParams = {
      search: searchQuery,
      category: selectedCategory,
      page: nextPage,
      english_level: englishLevel,
      [sortType]: sortValue,
    }

    const response = await lectoriumApi.search(requestParams)

    setLastPage(get(response, 'data.lastPage', 0))

    setPage(nextPage)

    setLoadMoreLoading(false)

    setPostsBySearch([...postsBySearch, ...get(response, 'data.posts', [])])
  }, [postsBySearch])

  const handleSearch = useCallback(async params => {
    const searchQuery = get(params, 'searchValue')
    const englishLevel = get(params, 'englishLevel.value')

    setSearchParams(prevState => ({
      ...prevState,
      searchQuery,
      category: selectedCategory,
      englishLevel,
    }))
  }, [])

  const handleFetchSearch = useCallback(async () => {
    try {
      setLoading(true)

      const { sortValue, sortType, searchQuery, englishLevel } = searchParams

      if (
        searchQuery === '' &&
        selectedCategory === '' &&
        searchParams.englishLevel === 'all'
      ) {
        setLoading(false)

        return
      }

      const requestParams = {
        search: searchQuery,
        english_level: englishLevel,
        category: selectedCategory,
        [sortType]: sortValue,
      }

      const response = await lectoriumApi.search(requestParams)

      setLastPage(get(response, 'data.lastPage', 0))

      setPostsBySearch([...get(response, 'data.posts', [])])
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [searchParams, selectedCategory])

  useEffect(() => {
    handleFetchSearch()
  }, [searchParams, selectedCategory])

  const handleSort = useCallback(option => {
    const value = get(option, 'value')
    const type = get(option, 'type')

    setSearchParams(prevState => ({
      ...prevState,
      sortValue: value,
      sortType: type,
    }))
  }, [])

  return (
    <Background>
      <Head description="Lectorium descrption " title="Lectorium" />
      <Container>
        {isTeacher && <UploadVideoBanner />}

        <CategoriesHeader selectedCategory={selectedCategory} />

        <Slider data={slider} />

        <Flex mt={40} width={1}>
          <SearchBar onChange={handleSearch} />
        </Flex>

        <Content minHeight={600}>
          {!isShowDefaultPosts && (
            <SortOptions
              isExtended={isOwnVideo}
              selectedValue={searchParams?.sortValue}
              onChange={handleSort}
            />
          )}

          {isLoading ? (
            <Loader />
          ) : (
            <>
              {isShowDefaultPosts ? (
                <LectoriumList posts={posts} />
              ) : (
                <PostList
                  isLoadMoreLoading={isLoadMoreLoading}
                  lastPage={lastPage}
                  page={page}
                  posts={postsBySearch}
                  onLoadMore={handleLoadMore}
                />
              )}
            </>
          )}
        </Content>
      </Container>
      <Footer />
    </Background>
  )
}

export async function getStaticProps() {
  const data = await lectoriumApi.lectorium()

  return {
    revalidate: 600,
    props: { initialData: { ...data } },
  }
}

export default Lectorium
