import qs from 'qs'
import useSWR from 'swr'

import pickBy from 'lodash/pickBy'

import Api from 'Services/Api'

interface IParams {
  url: string | null
  query?: Record<string, any> | null
  options?: any
}

interface ISwrResponse<T> {
  data: T
  isLoading: boolean
  isValidating: boolean
  error: any
  mutate: any
}

function useSwrRequest<T = any>({
  url,
  options,
  query,
}: IParams): ISwrResponse<T> {
  const URL = query ? `${url}?${qs.stringify(pickBy(query))}` : url

  const { data, error, isValidating, mutate } = useSWR(URL, Api.query, {
    revalidateOnMount: true,
    ...options,
  })

  return {
    data: data?.data,
    error,
    isValidating,
    mutate,
    isLoading: !error && !data,
  }
}

export default useSwrRequest
