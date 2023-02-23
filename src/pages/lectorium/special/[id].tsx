import React, { useCallback, useEffect, useState } from 'react'

import { NextPage } from 'next'
import Link from 'next/link'

import get from 'lodash/get'
import includes from 'lodash/includes'
import map from 'lodash/map'
import pick from 'lodash/pick'
import reduce from 'lodash/reduce'
import set from 'lodash/set'

import SpecialAbout from 'Containers/Pages/Lectorium/Special/SpecialAbout'
import {
  AddNew,
  AddVideoIcon,
  Background,
  Container,
  Content,
  SpecialProjectBanner,
  SpecialProjectTab,
} from 'Containers/Pages/Lectorium/styles'

import { Flex, Loader } from 'Components/UI'

import {
  PostList,
  SearchBar,
  Slider,
  SortOptions,
} from 'Components/Blocks/Entities/Lectorium'
import FollowUs from 'Components/Blocks/FollowUs'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import { PRIVATE_PATHS } from 'Constants/paths'

import useMe from 'Hooks/useMe'
import useRole from 'Hooks/useRole'
import useRouterQueryParams from 'Hooks/useRouterQueryParams'
import useSwrRequest from 'Hooks/useSwrRequest'

import { lectoriumApi } from 'Services/Api/requests'
import LECTORIUM_API_PATHS from 'Services/Api/requests/lectorium/paths'

type Props = {
  initialData: Record<string, any>
}

enum SPECIAL_PROJECTS_TABS {
  ABOUT = 'About',
  VIDEOS = 'Videos',
}

export const LectoriumSpecial: NextPage<Props> = ({ initialData }) => {
  const pageParams = useRouterQueryParams()
  const me = useMe()
  const { isTeacher } = useRole()

  const [activeTab, setActiveTab] = useState<SPECIAL_PROJECTS_TABS>(
    SPECIAL_PROJECTS_TABS.ABOUT,
  )

  const [isLoading, setLoading] = useState(true)
  const [isLoadMoreLoading, setLoadMoreLoading] = useState(false)

  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(0)

  const [postsBySearch, setPostsBySearch] = useState<any[]>([])

  const [searchParams, setSearchParams] = useState({
    englishLevel: 'all',
    searchQuery: '',
    sortValue: 'latest',
    sortType: 'order',
  })

  const {
    data,
    data: { project, slider, related },
    mutate,
  } = useSwrRequest({
    url: LECTORIUM_API_PATHS.SPECIAL(pageParams.id as string),
    options: { fallbackData: initialData },
  })

  const handleSearch = useCallback(async params => {
    const searchQuery = get(params, 'searchValue')
    const englishLevel = get(params, 'englishLevel.value')

    setSearchParams(prevState => ({
      ...prevState,
      searchQuery,
      englishLevel,
    }))
  }, [])

  const handleFetchSearch = useCallback(async () => {
    try {
      setLoading(true)

      const { sortValue, sortType, searchQuery, englishLevel } = searchParams

      const requestParams = {
        search: searchQuery,
        english_level: englishLevel,
        category: 'special',
        special_slug: pageParams.id,
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
  }, [searchParams])

  useEffect(() => {
    handleFetchSearch()
  }, [searchParams])

  const handleSort = useCallback(option => {
    const value = get(option, 'value')
    const type = get(option, 'type')

    setSearchParams(prevState => ({
      ...prevState,
      sortValue: value,
      sortType: type,
    }))
  }, [])

  const handleLoadMore = useCallback(async () => {
    const { searchQuery, sortValue, sortType, englishLevel } = searchParams

    setLoadMoreLoading(true)

    const nextPage = page + 1

    const requestParams = {
      search: searchQuery,
      page: nextPage,
      english_level: englishLevel,
      category: 'special',
      special_slug: pageParams.id,
      [sortType]: sortValue,
    }

    const response = await lectoriumApi.search(requestParams)

    setLastPage(get(response, 'data.lastPage', 0))

    setPage(nextPage)

    setLoadMoreLoading(false)

    setPostsBySearch([...postsBySearch, ...get(response, 'data.posts', [])])
  }, [postsBySearch])

  const handleLikeComment = useCallback(
    async (commentId: number) => {
      try {
        await lectoriumApi.addSpecialProjectCommentLike(commentId)

        const updatedProject = set(
          project,
          ['comments'],
          map(project?.comments, comment => {
            if (comment.id === commentId) {
              return {
                ...comment,
                is_liked: true,
                likes_count: comment.likes_count + 1,
              }
            }

            return comment
          }),
        )

        await mutate(
          {
            data: {
              ...data,
              project: { ...updatedProject },
            },
          },
          false,
        )
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    },
    [data],
  )

  const handleAddComment = useCallback(async values => {
    try {
      await lectoriumApi.addSpecialComment(pageParams?.id as string, values)
      mutate()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }, [])

  const renderSpecialProjectHeader = useCallback(() => {
    const isShowAddNew =
      includes(map(get(project, 'teachers', 'user_id')), me?.id) && isTeacher

    return (
      <Flex flexWrap="wrap" mt={20} width={1}>
        <SpecialProjectBanner src={get(project, 'logo')} />
        <Flex justifyContent="space-between" width={1}>
          <Flex>
            {map(SPECIAL_PROJECTS_TABS, tab => (
              <SpecialProjectTab
                active={activeTab === tab}
                color={get(project, 'main_color')}
                key={tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </SpecialProjectTab>
            ))}
          </Flex>

          {isShowAddNew && (
            <Flex>
              <AddNew>
                <Link href={PRIVATE_PATHS.LECTORIUM_CREATE} passHref>
                  <AddVideoIcon />
                  Add New Lesson
                </Link>
              </AddNew>
            </Flex>
          )}
        </Flex>

        {activeTab === SPECIAL_PROJECTS_TABS.VIDEOS && (
          <Slider color={get(project, 'main_color')} data={slider} />
        )}
      </Flex>
    )
  }, [project?.id, activeTab])

  const projectSocialLinks = pick(
    reduce(
      get(project, 'socials'),
      (acc: any, value) => {
        const socialType: string = get(value, 'social_type')
        acc[socialType] = get(value, 'link')

        return acc
      },
      {},
    ),
    ['website', 'instagram', 'twitter', 'facebook'],
  )

  return (
    <Background image={get(project, 'background_image', null)}>
      <Head title={project?.name} />

      <FollowUs
        color={get(project, 'main_color')}
        facebookLink={get(projectSocialLinks, 'facebook')}
        instagramLink={get(projectSocialLinks, 'instagram')}
        twitterLink={get(projectSocialLinks, 'twitter')}
      />

      <Container>
        {renderSpecialProjectHeader()}

        {activeTab === SPECIAL_PROJECTS_TABS.VIDEOS && (
          <Flex mt={40} width={1}>
            <SearchBar onChange={handleSearch} />
          </Flex>
        )}

        <Content>
          {activeTab === SPECIAL_PROJECTS_TABS.VIDEOS && (
            <SortOptions
              isExtended={false}
              selectedValue={searchParams?.sortValue}
              onChange={handleSort}
            />
          )}

          {isLoading ? (
            <Loader />
          ) : (
            <>
              {activeTab === SPECIAL_PROJECTS_TABS.VIDEOS && (
                <PostList
                  isLoadMoreLoading={isLoadMoreLoading}
                  lastPage={lastPage}
                  page={page}
                  posts={postsBySearch}
                  onLoadMore={handleLoadMore}
                />
              )}

              {activeTab === SPECIAL_PROJECTS_TABS.ABOUT && (
                <SpecialAbout
                  color={get(project, 'main_color')}
                  comments={get(project, 'comments', [])}
                  firstSection={{
                    title: get(project, 'about_title'),
                    description: get(project, 'about_text'),
                    image: get(project, 'about_image'),
                  }}
                  learnMore={{
                    title: get(project, 'learn_more_title'),
                    description: get(project, 'learn_more_description'),
                    link: get(project, 'learn_more_link'),
                  }}
                  relatedVideos={related}
                  secondSection={{
                    title: get(project, 'about_title2'),
                    description: get(project, 'about_text2'),
                  }}
                  socials={get(project, 'socials', [])}
                  onAddComment={handleAddComment}
                  onAddLike={handleLikeComment}
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

export async function getServerSideProps(context: any) {
  const {
    query: { id },
  } = context

  const data = await lectoriumApi.special(id)

  return {
    props: { initialData: { ...data } },
  }
}

export default LectoriumSpecial
