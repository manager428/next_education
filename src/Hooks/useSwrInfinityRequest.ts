import qs from 'qs'
import useSWRInfinite from 'swr/infinite'

import pickBy from 'lodash/pickBy'

import Api from 'Services/Api'

type Params = {
  url: string | null
  query?: Record<string, string | number | null | any> | null
  options?: any
}

const useSwrInfinityRequest = ({ url, options, query }: Params) => {
  const getKey = (pageIndex: number) => {
    const queryWithPage = {
      ...query,
      page: pageIndex + 1,
    }

    return `${url}?${qs.stringify(pickBy(queryWithPage))}`
  }

  const { data, error, isValidating, mutate, size, setSize } = useSWRInfinite(
    getKey,
    Api.query,
    {
      revalidateOnMount: true,
      ...options,
    },
  )

  return {
    data,
    error,
    isValidating,
    mutate,
    isLoading: !error && !data,
    isLoadingMore:
      (size > 0 && data && typeof data[size - 1] === 'undefined') || false,
    size,
    setSize,
  }
}

export default useSwrInfinityRequest
