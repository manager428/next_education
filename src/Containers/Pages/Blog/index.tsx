import React, { useCallback, useMemo } from 'react'

import { DateTime } from 'luxon'

import get from 'lodash/get'
import map from 'lodash/map'
import reduce from 'lodash/reduce'

import { ogBlogImage } from 'Assets/images/og'

import { Flex, Loader } from 'Components/UI'

import {
  Categories,
  PostsSlider,
  TopPosts,
} from 'Components/Blocks/Entities/Blog'
import BlogPost, {
  BlogPostType,
} from 'Components/Blocks/Entities/Blog/BlogPost'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import { BLOG_CATEGORIES } from 'Constants/blog'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'

import _ from 'Services/I18n'

import useBlogQuery from './Hooks/useBlogQuery'
import {
  Background,
  Container,
  Content,
  LoadMore,
  RelativeCont,
} from './styles'

type Props = {
  initialData: any
}

const Blog: React.FC<Props> = ({ initialData }) => {
  const params = useRouterQueryParams()
  const catId = params?.id as string

  const { data, isLoading, isLoadingMore, size, setSize } = useBlogQuery(
    initialData,
    {
      category: catId,
    },
  )

  const transformToPostType = (posts: any): Array<BlogPostType> =>
    map(posts, post => {
      const postDate = DateTime.fromISO(post?.created_at).toFormat(
        'MMMM dd, yyyy',
      )

      return {
        id: get(post, 'id'),
        image: get(post, 'image'),
        category: get(post, 'category'),
        date: postDate,
        likes: get(post, 'likes_count'),
        isLiked: get(post, 'is_liked', false),
        title: get(post, 'title'),
        description: get(post, 'excerpt'),
        eventDate: get(post, 'event_date'),
      }
    })

  const handleLoadMore = useCallback(() => {
    if (setSize && size) {
      setSize(size + 1)
    }
  }, [data])

  const getSearchPosts = useCallback(
    () =>
      reduce(
        data,
        (
          acc: {
            posts: any[]
            topPosts: any[]
            lastPage: number
          },
          page: any,
        ) => {
          const lastPage = get(page, ['data', 'lastPage'], 1)
          acc.lastPage = lastPage

          if (acc.topPosts.length === 0) {
            acc.topPosts = get(page, ['data', 'top_posts'], [])
          }

          const pagePosts = get(page, ['data', 'posts'], [])
          acc.posts.push(...pagePosts)

          return acc
        },
        {
          topPosts: [],
          posts: [],
          lastPage: 1,
        },
      ),
    [data, initialData],
  )

  const renderCategoryPosts = useCallback(() => {
    const { posts } = getSearchPosts()

    const searchPosts = transformToPostType(posts)

    if (searchPosts.length === 0) return 'No posts found!'

    return map(searchPosts, (post, index) => (
      <Flex key={post?.id} mb={38} mr={index % 2 ? 0 : 40}>
        <BlogPost
          category={post?.category}
          date={post?.date}
          description={post?.description}
          eventDate={post?.eventDate}
          id={post?.id}
          image={post?.image}
          isLiked={post?.isLiked}
          likes={post?.likes}
          title={post?.title}
        />
      </Flex>
    ))
  }, [data, catId])

  const topPosts = useMemo(() => {
    if (catId) {
      const { topPosts: searchTopPosts } = getSearchPosts()

      return searchTopPosts
    }

    return get(data, 'top_posts', [])
  }, [data])

  const newPosts = useMemo(
    () => transformToPostType(get(data, ['posts', 'new'])),
    [data],
  )

  const idNewsPosts = useMemo(
    () => transformToPostType(get(data, ['posts', 'id-news'])),
    [data],
  )

  const worldNewsPosts = useMemo(
    () => transformToPostType(get(data, ['posts', 'world-news'])),
    [data],
  )

  const eventsPosts = useMemo(
    () => transformToPostType(get(data, ['posts', 'events'])),
    [data],
  )

  const studentsVoicePosts = useMemo(
    () => transformToPostType(get(data, ['posts', 'students-voice'])),
    [data],
  )

  const pressPosts = useMemo(
    () => transformToPostType(get(data, ['posts', 'press'])),
    [data],
  )

  const { lastPage } = getSearchPosts()

  return (
    <Background>
      <Head
        description="iDialogue's education blog for leaders in K12. Browse daily updated news, articles, and more featuring the best in K12 education. Our education blog is visited by millions of leaders in the K12 space."
        ogImage={ogBlogImage.src}
        title="Education Blog for K12 Educators | iDialogue"
      />
      <Container pb={60} pt={60}>
        {isLoading ? (
          <Loader />
        ) : (
          <Content>
            {topPosts && topPosts.length > 0 && <TopPosts posts={topPosts} />}

            <Categories />

            {!catId || catId === 'all' ? (
              <Flex flexWrap="wrap" width={1}>
                <PostsSlider
                  category="new"
                  posts={newPosts}
                  showExplore={false}
                  title="New Posts"
                />
                <PostsSlider
                  category={BLOG_CATEGORIES.ID_NEWS}
                  posts={idNewsPosts}
                  title="ID News"
                />
                <PostsSlider
                  category={BLOG_CATEGORIES.WORLD_NEWS}
                  posts={worldNewsPosts}
                  title="World news"
                />
                <PostsSlider
                  category={BLOG_CATEGORIES.STUDENTS_VOICE}
                  posts={studentsVoicePosts}
                  title="Students Voice"
                />
                <PostsSlider
                  category={BLOG_CATEGORIES.PRESS}
                  posts={pressPosts}
                  title="Press"
                />
                <PostsSlider
                  category={BLOG_CATEGORIES.EVENTS}
                  posts={eventsPosts}
                  title="Our events"
                />
              </Flex>
            ) : (
              <RelativeCont flexWrap="wrap" minHeight={600} width={1}>
                {isLoading ? <Loader /> : renderCategoryPosts()}

                {size && size < lastPage && (
                  <RelativeCont width={1}>
                    {isLoadingMore && <Loader mt={50} />}
                    <LoadMore onClick={handleLoadMore}>
                      {_('buttons.loadMore')}
                    </LoadMore>
                  </RelativeCont>
                )}
              </RelativeCont>
            )}
          </Content>
        )}
      </Container>
      <Footer />
    </Background>
  )
}

export default Blog
