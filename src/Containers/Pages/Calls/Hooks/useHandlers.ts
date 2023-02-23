import { useCallback, useState } from 'react'

import { DateTime } from 'luxon'
import { useDebounce } from 'use-debounce'

import { CALL_ENUM, CALL_STATUS } from 'Constants/calls'
import { ENGLISH_LEVEL_ENUM } from 'Constants/ids'

import { useAppDispatch } from 'Hooks/useStore'

import { openCreateCallModal } from 'Store/modals/slice'

export function useHandlers({
  selectedTab,
  onSelectTab,
}: {
  selectedTab: string
  onSelectTab: any
}) {
  const [searchParams, setSearchParams] = useState<{
    englishLevels: ENGLISH_LEVEL_ENUM[]
    filter: string
    callType: CALL_ENUM
    callStatus: CALL_STATUS
    startDate: Date
    endDate: Date
    tags: string[]
  }>({
    startDate: DateTime.now().toJSDate(),
    endDate: DateTime.now().plus({ days: 14 }).toJSDate(),
    callType: CALL_ENUM.ALL,
    callStatus: CALL_STATUS.ALL,
    filter: 'all',
    tags: [],
    englishLevels: [],
  })

  const [debouncedSearchParams] = useDebounce(searchParams, 500, {
    leading: false,
  })

  const dispatch = useAppDispatch()

  const handleSelectTab = useCallback(tab => {
    onSelectTab(tab)

    if (tab === 'all') {
      setSearchParams(prevParams => ({
        ...prevParams,
        callType: CALL_ENUM.ALL,
        callStatus: CALL_STATUS.ALL,
        tags: [],
        englishLevels: [],
      }))

      return
    }

    if (tab === 'scheduled') {
      setSearchParams(prevParams => ({
        ...prevParams,
        callType: CALL_ENUM.ALL,
        filter: 'scheduled',
        callStatus: CALL_STATUS.SCHEDULED,
        tags: [],
        englishLevels: [],
      }))

      return
    }

    if (tab === 'field_trips') {
      setSearchParams(prevParams => ({
        ...prevParams,
        callType: CALL_ENUM.FIELD_TRIPS,
        callStatus: CALL_STATUS.ALL,
        filter: 'all',
        tags: [],
        englishLevels: [],
      }))

      return
    }

    setSearchParams(prevParams => ({
      ...prevParams,
      filter: 'all',
      callType: CALL_ENUM.GROUP_CALLS,
      callStatus: CALL_STATUS.ALL,
      tags: [],
      englishLevels: [],
    }))
  }, [])

  const handleFilterClick = useCallback(
    filter => {
      const { value } = filter

      if (selectedTab === 'scheduled') {
        if (filter.kind === 'callType') {
          setSearchParams(prevSearchParams => ({
            ...prevSearchParams,
            filter: value,
            callType: value,
          }))
          return
        }

        setSearchParams(prevSearchParams => ({
          ...prevSearchParams,
          filter: value,
          callStatus: value,
          callType: CALL_ENUM.ALL,
        }))

        return
      }

      setSearchParams(prevSearchParams => ({
        ...prevSearchParams,
        filter: value,
        callStatus: value,
        callType:
          selectedTab === 'field_trips'
            ? CALL_ENUM.FIELD_TRIPS
            : CALL_ENUM.GROUP_CALLS,
      }))
    },
    [selectedTab],
  )

  const handleSelectDate = useCallback((from: string, to: string) => {
    setSearchParams(prevParams => ({
      ...prevParams,
      startDate: DateTime.fromISO(from).toJSDate(),
      endDate: DateTime.fromISO(to).toJSDate(),
    }))
  }, [])

  const handleSelectEnglishLevel = useCallback(englishLevels => {
    setSearchParams(prevParams => ({
      ...prevParams,
      englishLevels,
    }))
  }, [])

  const handleSelectTags = useCallback(tags => {
    setSearchParams(prevParams => ({
      ...prevParams,
      tags,
    }))
  }, [])

  const handleSelectCall = useCallback((call: CALL_ENUM) => {
    dispatch(openCreateCallModal({ type: call }))
  }, [])

  return {
    searchParams,
    debouncedSearchParams,
    handleSelectCall,
    handleSelectTab,
    handleSelectDate,
    handleSelectTags,
    handleSelectEnglishLevel,
    handleFilterClick,
  }
}
