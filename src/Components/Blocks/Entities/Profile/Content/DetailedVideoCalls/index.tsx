import React, { useCallback, useMemo, useState } from 'react'

import { DateTime } from 'luxon'
import { useDebounce } from 'use-debounce'

import forEach from 'lodash/forEach'
import get from 'lodash/get'
import map from 'lodash/map'
import reduce from 'lodash/reduce'

import { Flex, Loader } from 'Components/UI'

import CallList from 'Components/Blocks/Entities/Calls/CallList'

import { CALL_ENUM, CALL_STATUS } from 'Constants/calls'

import useSwrInfinityRequest from 'Hooks/useSwrInfinityRequest'

import CALL_API_PATHS from 'Services/Api/requests/calls/paths'
import _, { useScopedI18n } from 'Services/I18n'

import { transferToCallCard } from 'Utils/Entities/Calls'

import {
  BackButton,
  Container,
  Content,
  LoadMore,
  NoCallsText,
  RelativeContainer,
  Tab,
  Title,
} from './styles'

type Props = {
  title?: string
  userId?: number
  onBack: () => void
}

const DetailedVideoCalls: React.FC<Props> = ({
  title = 'Video calls with teacher',
  userId,
  onBack,
}) => {
  const s = useScopedI18n('profile.content.videoCalls')

  const TABS = [
    { label: _('general.viewAll').toUpperCase(), value: 'VIEW ALL' },
    { label: _('general.fieldTrips').toUpperCase(), value: 'FIELD TRIPS' },
    {
      label: _('general.individualCalls').toUpperCase(),
      value: 'INDIVIDUAL CALLS',
    },
    { label: _('general.groupCalls').toUpperCase(), value: 'GROUP CALLS' },
    { label: _('general.classCalls').toUpperCase(), value: 'CLASS CALLS' },
    { label: _('general.finished').toUpperCase(), value: 'FINISHED' },
  ] as const

  const [selectedTab, setSelectedTab] = useState<string>(TABS[0].value)

  const [searchParams, setSearchParams] = useState<{
    callType: CALL_ENUM
    callStatus: CALL_STATUS
    startDate: Date
    endDate: Date
  }>({
    startDate: DateTime.now().minus({ years: 1 }).toJSDate(),
    endDate: DateTime.now().plus({ years: 1 }).toJSDate(),
    callType: CALL_ENUM.ALL,
    callStatus: CALL_STATUS.SCHEDULED,
  })

  const [debouncedSearchParams] = useDebounce(searchParams, 100, {
    leading: false,
  })

  const getCallsParams = useCallback(() => {
    const params = {
      user_id: userId,
      start_date: DateTime.fromJSDate(debouncedSearchParams.startDate).toFormat(
        'yyyy-MM-dd',
      ),
      end_date: DateTime.fromJSDate(debouncedSearchParams.endDate).toFormat(
        'yyyy-MM-dd',
      ),
      call_status: debouncedSearchParams.callStatus,
      call_type: debouncedSearchParams.callType,
    }

    return params
  }, [debouncedSearchParams])

  const {
    data,
    isValidating,
    isLoadingMore,
    size,
    setSize,
    isLoading,
  } = useSwrInfinityRequest({
    url: CALL_API_PATHS.GET_CALLS,
    query: getCallsParams(),
  })

  const handleSwitchTab = (tab: typeof TABS[number]): void => {
    setSelectedTab(tab.value)

    switch (tab.value) {
      case 'VIEW ALL':
        setSearchParams(prevParams => ({
          ...prevParams,
          callType: CALL_ENUM.ALL,
          callStatus: CALL_STATUS.SCHEDULED,
        }))
        break
      case 'FIELD TRIPS':
        setSearchParams(prevParams => ({
          ...prevParams,
          callType: CALL_ENUM.FIELD_TRIPS,
          callStatus: CALL_STATUS.SCHEDULED,
        }))
        break

      case 'GROUP CALLS':
        setSearchParams(prevParams => ({
          ...prevParams,
          callType: CALL_ENUM.GROUP_CALLS,
          callStatus: CALL_STATUS.SCHEDULED,
        }))
        break

      case 'INDIVIDUAL CALLS':
        setSearchParams(prevParams => ({
          ...prevParams,
          callType: CALL_ENUM.INDIVIDUAL_CALLS,
          filter: 'all',
          callStatus: CALL_STATUS.SCHEDULED,
        }))
        break
      case 'CLASS CALLS':
        setSearchParams(prevParams => ({
          ...prevParams,
          callType: CALL_ENUM.CLASS_CALLS,
          callStatus: CALL_STATUS.SCHEDULED,
        }))
        break
      case 'FINISHED':
        setSearchParams(prevParams => ({
          ...prevParams,
          callType: CALL_ENUM.ALL,
          callStatus: CALL_STATUS.FINISHED,
        }))
        break
      default:
        break
    }
  }

  const handleLoadMore = useCallback(() => {
    setSize(size + 1)
  }, [size])

  const getPaginatedPosts = useCallback(
    () =>
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
            acc.posts[key] = acc.posts[key]
              ? [...acc.posts[key], ...value]
              : value
          })

          return acc
        },
        {
          posts: {},
          lastPage: 1,
        },
      ),
    [data],
  )

  const getCalls = useCallback(() => {
    const { posts } = getPaginatedPosts()
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

    if (searchParams.callStatus === CALL_STATUS.FINISHED) {
      sortedPosts = convertedPosts.sort(
        (a, b) =>
          DateTime.fromISO(b.ISODate).toMillis() -
          DateTime.fromISO(a.ISODate).toMillis(),
      )
    }

    return sortedPosts
  }, [data])

  const renderTabs = (): React.ReactNode[] =>
    map(TABS, it => (
      <Tab
        active={selectedTab === it.value}
        key={it.value}
        onClick={() => handleSwitchTab(it)}
      >
        {it.label}
      </Tab>
    ))

  const renderCallLists = useMemo(() => {
    if (isValidating) {
      return <Loader top="20%" />
    }

    const calls = getCalls()

    if (calls.length === 0) {
      return (
        <NoCallsText mt={20}>
          <p>{s('noCalls')}</p>
          <span>{s('youWillSee')}</span>
        </NoCallsText>
      )
    }

    return map(calls, (list, index) => {
      const dayCalls = get(list, 'calls', [])
      const date = get(list, 'date', '')

      return <CallList calls={dayCalls} date={date} key={index} />
    })
  }, [data, isValidating])

  const isLastPage = getPaginatedPosts().lastPage === size

  return (
    <Container>
      <Flex alignItems="center" justifyContent="space-between" width={1}>
        <Title>{title}</Title>
        <BackButton onClick={() => onBack()}>{_('buttons.goBack')}</BackButton>
      </Flex>

      <Flex justifyContent="space-between" mt={20} width={1}>
        <Flex flexWrap="wrap">{renderTabs()}</Flex>
      </Flex>
      <Content>
        {renderCallLists}

        {!isLastPage && (
          <RelativeContainer
            flexWrap="wrap"
            height="80px"
            margin="0 auto"
            mt={20}
            width="220px"
          >
            {!isLoading && (
              <LoadMore onClick={handleLoadMore}>
                {_('buttons.loadMore')}
              </LoadMore>
            )}
            {isLoadingMore && <Loader mt={50} />}
          </RelativeContainer>
        )}
      </Content>
    </Container>
  )
}

export default DetailedVideoCalls
