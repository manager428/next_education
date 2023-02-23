import { DateTime } from 'luxon'

import useSwrInfinityRequest from 'Hooks/useSwrInfinityRequest'

import CALL_API_PATHS from 'Services/Api/requests/calls/paths'

export const getFetchCallsParams = params => ({
  start_date: DateTime.fromJSDate(params.startDate).toFormat('yyyy-MM-dd'),
  end_date: DateTime.fromJSDate(params.endDate).toFormat('yyyy-MM-dd'),
  call_status: params.callStatus,
  call_type: params.callType,
  english_level: params?.englishLevels,
  tags: params.tags,
})

export function useCallsQuery(searchParams) {
  const {
    data,
    mutate,
    isLoading,
    setSize,
    size,
    isLoadingMore,
  } = useSwrInfinityRequest({
    url: CALL_API_PATHS.GET_CALLS,
    query: getFetchCallsParams(searchParams),
  })

  return {
    data,
    mutate,
    isLoading,
    size,
    setSize,
    isLoadingMore,
  }
}
