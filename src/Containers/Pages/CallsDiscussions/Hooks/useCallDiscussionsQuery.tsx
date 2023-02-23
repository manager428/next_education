import { useCallback } from 'react'

import filter from 'lodash/filter'
import find from 'lodash/find'
import get from 'lodash/get'
import map from 'lodash/map'
import reduce from 'lodash/reduce'

import useSwrInfinityRequest from 'Hooks/useSwrInfinityRequest'

import DISCUSSIONS_API_PATHS from 'Services/Api/requests/discussions/paths'

export default function useCallDiscussionsQuery(queryParams: any) {
  const {
    data,
    isLoading,
    error,
    mutate,
    isLoadingMore,
    setSize,
    size,
  } = useSwrInfinityRequest({
    url: DISCUSSIONS_API_PATHS.GET_ALL,
    query: queryParams,
  })

  const getData = useCallback(
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
            const lastPage = get(page, ['data', 'pagination', 'lastPage'], 0)
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

  const updateComments = useCallback(
    async (discussionId: number, nextComments: any[]) => {
      await mutate(currentData => {
        const updatedData = map(currentData, page => {
          if (
            !find(page.data.posts, discussion => discussion.id === discussionId)
          ) {
            return page
          }

          return {
            ...page,
            data: {
              ...page.data,
              posts: map(page.data.posts, discussion => {
                if (discussion.id === discussionId) {
                  return {
                    ...discussion,
                    comments: [...discussion?.comments, ...nextComments],
                  }
                }

                return { ...discussion }
              }),
            },
          }
        })

        return updatedData
      }, false)
    },
    [],
  )

  const addComment = useCallback(async (discussionId: number, comment: any) => {
    await mutate(currentData => {
      const updatedData = map(currentData, page => {
        if (
          !find(page.data.posts, discussion => discussion.id === discussionId)
        ) {
          return page
        }

        return {
          ...page,
          data: {
            ...page.data,
            posts: map(page.data.posts, discussion => {
              if (discussion.id === discussionId) {
                return {
                  ...discussion,
                  comments: [...discussion?.comments, comment],
                  comments_count: discussion?.comments_count + 1,
                }
              }

              return { ...discussion }
            }),
          },
        }
      })

      return updatedData
    }, false)
  }, [])

  const deleteDiscussion = useCallback(async (discussionId: number) => {
    await mutate(currentData => {
      const updatedData = map(currentData, page => {
        if (
          !find(page.data.posts, discussion => discussion.id === discussionId)
        ) {
          return page
        }

        return {
          ...page,
          data: {
            ...page.data,
            posts: filter(
              page.data.posts,
              discussion => discussion.id !== discussionId,
            ),
          },
        }
      })

      return updatedData
    }, false)
  }, [])

  const addDiscussionLike = useCallback(async (discussionId: number) => {
    await mutate(currentData => {
      const updatedData = map(currentData, page => {
        if (
          !find(page.data.posts, discussion => discussion.id === discussionId)
        ) {
          return page
        }

        return {
          ...page,
          data: {
            ...page.data,
            posts: map(page.data.posts, discussion => {
              if (discussion.id === discussionId) {
                return {
                  ...discussion,
                  is_liked: true,
                  likes_count: discussion?.likes_count + 1,
                }
              }

              return { ...discussion }
            }),
          },
        }
      })

      return updatedData
    }, false)
  }, [])

  const addDiscussionCommentLike = useCallback(
    async (discussionId: number, commentId: number) => {
      await mutate(currentData => {
        const updatedData = map(currentData, page => {
          if (
            !find(page.data.posts, discussion => discussion.id === discussionId)
          ) {
            return page
          }

          return {
            ...page,
            data: {
              ...page.data,
              posts: map(page.data.posts, discussion => {
                if (discussion.id === discussionId) {
                  return {
                    ...discussion,
                    comments: map(discussion.comments, comment => {
                      if (comment.id === commentId) {
                        return {
                          ...comment,
                          is_liked: true,
                          likes_count: comment.likes_count + 1,
                        }
                      }
                      return comment
                    }),
                  }
                }

                return { ...discussion }
              }),
            },
          }
        })

        return updatedData
      }, false)
    },
    [],
  )

  const { posts, lastPage } = getData()

  return {
    posts,
    lastPage,
    isLoading,
    error,
    mutate,
    isLoadingMore,
    setSize,
    size,
    addComment,
    updateComments,
    deleteDiscussion,
    addDiscussionLike,
    addDiscussionCommentLike,
  }
}
