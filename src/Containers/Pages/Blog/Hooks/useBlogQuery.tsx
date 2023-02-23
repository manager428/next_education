import useSwrInfinityRequest from 'Hooks/useSwrInfinityRequest'
import useSwrRequest from 'Hooks/useSwrRequest'

import BLOG_API_PATHS from 'Services/Api/requests/blog/paths'

export default function useBlogQuery(
  initialData: any,
  params: {
    category: string
  },
) {
  if (!params.category) {
    const { data, isLoading } = useSwrRequest({
      url: BLOG_API_PATHS.list,
      options: { fallbackData: initialData },
    })

    return {
      data,
      isLoading,
      isLoadingMore: false,
    }
  }

  const {
    data,
    isLoading,
    isLoadingMore,
    size,
    setSize,
  } = useSwrInfinityRequest({
    url: BLOG_API_PATHS.search,
    query: {
      category: params.category,
    },
    options: {
      initialData,
    },
  })

  return {
    data,
    isLoading,
    isLoadingMore,
    size,
    setSize,
  }
}
