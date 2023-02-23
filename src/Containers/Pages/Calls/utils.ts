import { DateTime } from 'luxon'

import forEach from 'lodash/forEach'
import get from 'lodash/get'
import map from 'lodash/map'
import reduce from 'lodash/reduce'

import { transferToCallCard } from 'Utils/Entities/Calls'

export const getPaginatedCalls = data =>
  reduce(
    data,
    (
      acc: {
        posts: Record<string, any>
        lastPage: number
      },
      page: any,
    ) => {
      const lastPage = get(page, ['data', 'pagination', 'lastPage'], 1)
      acc.lastPage = lastPage

      const pagePosts = get(page, ['data', 'posts'], [])

      forEach(pagePosts, (value, key) => {
        acc.posts[key] = acc.posts[key] ? [...acc.posts[key], ...value] : value
      })

      return acc
    },
    {
      posts: {},
      lastPage: 1,
    },
  )

export const getCalls = (data, searchParams) => {
  const { posts } = getPaginatedCalls(data)

  const convertedPosts = map(posts, (it: any, index: string) => {
    const parsedDate = DateTime.fromISO(index)

    return {
      ISODate: index,
      date:
        parsedDate.year === DateTime.now().year
          ? parsedDate.toFormat('MMMM dd')
          : parsedDate.toFormat('yyyy MMMM dd'),
      calls: map(it, post => transferToCallCard(post)),
    }
  })

  let sortedPosts = convertedPosts.sort(
    (a, b) =>
      DateTime.fromISO(a.ISODate).toMillis() -
      DateTime.fromISO(b.ISODate).toMillis(),
  )

  if (searchParams.filter === 'finished') {
    sortedPosts = convertedPosts.sort(
      (a, b) =>
        DateTime.fromISO(b.ISODate).toMillis() -
        DateTime.fromISO(a.ISODate).toMillis(),
    )
  }

  return sortedPosts
}
