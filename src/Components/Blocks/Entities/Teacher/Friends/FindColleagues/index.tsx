import React, { useCallback, useMemo, useState } from 'react'

import filter from 'lodash/filter'
import get from 'lodash/get'
import map from 'lodash/map'
import reduce from 'lodash/reduce'

import { Flex, Loader, SearchInputWithButton } from 'Components/UI'

import FindTeachersInfo from 'Components/Blocks/Entities/Teacher/Friends/FindColleagues/Components/FindTeachersInfo'
import Friend from 'Components/Blocks/Entities/Teacher/Friends/FindColleagues/Components/Friend'
import NoResultsInfo from 'Components/Blocks/Entities/Teacher/Friends/FindColleagues/Components/NoResultsInfo'
import {
  Container,
  Content,
  FriendsContainer,
  RoundedBlock,
} from 'Components/Blocks/Entities/Teacher/Friends/FindColleagues/styles'
import Pagination from 'Components/Blocks/Pagination'

import useSwrRequest from 'Hooks/useSwrRequest'

import { friendsApi } from 'Services/Api/requests'
import {
  ITeacher,
  ITeachersSearchResponse,
} from 'Services/Api/requests/teacher/interfaces'
import TEACHER_API_PATHS from 'Services/Api/requests/teacher/paths'

const FindColleagues: React.FC = () => {
  const [isSearchFired, setSearchFired] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(1)
  const [loadingIds, setLoadingIds] = useState<number[]>([])

  const { data, isLoading, mutate } = useSwrRequest<
    ITeachersSearchResponse['data']
  >({
    url: isSearchFired ? TEACHER_API_PATHS.search : null,
    query: isSearchFired
      ? {
          search: searchValue,
          page,
        }
      : null,
  })

  const handleSearchSubmit = useCallback(
    value => {
      if (!value) {
        setSearchFired(false)
      }

      if (!isSearchFired && value) {
        setSearchFired(true)
      }

      setSearchValue(value)
    },
    [isSearchFired],
  )

  const handlePageChange = useCallback(nextPage => {
    setPage(nextPage)
  }, [])

  const handleAddFriend = useCallback(async (id: number) => {
    try {
      setLoadingIds(prevState => [...prevState, id])

      await friendsApi.sendFriendRequest(id)
      await mutate()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoadingIds(prevState => filter(prevState, userId => userId !== id))
    }
  }, [])

  const handleCancelRequest = useCallback(async (id: number) => {
    try {
      setLoadingIds(prevState => [...prevState, id])

      await friendsApi.cancelOwnFriendRequest(id)
      await mutate()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      setLoadingIds(prevState => filter(prevState, userId => userId !== id))
    }
  }, [])

  const { leftColumn, rightColumn } = useMemo(
    () =>
      reduce(
        data?.teachers,
        (
          acc: { rightColumn: ITeacher[]; leftColumn: ITeacher[] },
          user: ITeacher,
          index: number,
        ) => {
          if (index % 2) {
            acc.rightColumn.push(user)
          } else {
            acc.leftColumn.push(user)
          }

          return acc
        },
        { leftColumn: [], rightColumn: [] },
      ),
    [data?.teachers],
  )

  const renderContent = useCallback(() => {
    if (data?.teachers?.length === 0) {
      return (
        <Flex justifyContent="center" width={1}>
          <NoResultsInfo />
        </Flex>
      )
    }

    return (
      <FriendsContainer>
        {leftColumn.length > 0 && (
          <RoundedBlock>
            {map(leftColumn, friend => (
              <Friend
                avatar={friend.avatar}
                country={friend.country}
                fullname={friend.full_name}
                id={friend.id}
                isLoading={loadingIds.includes(friend.id)}
                isOnline={friend.user_online_status === 'online'}
                isRequestSent={
                  friend?.friends_data?.userCanCancelOwnFriendRequest
                }
                key={friend.id}
                username={friend.username}
                onAddFriend={handleAddFriend}
                onCancelFriend={handleCancelRequest}
              />
            ))}
          </RoundedBlock>
        )}

        {rightColumn.length > 0 && (
          <RoundedBlock>
            {map(rightColumn, friend => (
              <Friend
                avatar={friend.avatar}
                country={friend.country}
                fullname={friend.full_name}
                id={friend.id}
                isLoading={loadingIds.includes(friend.id)}
                isOnline={friend.user_online_status === 'online'}
                isRequestSent={
                  friend?.friends_data?.userCanCancelOwnFriendRequest
                }
                key={friend.id}
                username={friend.username}
                onAddFriend={handleAddFriend}
                onCancelFriend={handleCancelRequest}
              />
            ))}
          </RoundedBlock>
        )}
      </FriendsContainer>
    )
  }, [leftColumn, rightColumn, loadingIds])

  return (
    <Container mt={28}>
      <Flex maxWidth="360px" width={1}>
        <SearchInputWithButton
          placeholder="Search..."
          onSubmit={handleSearchSubmit}
        />
      </Flex>

      <Content mt={32}>
        {isLoading && isSearchFired && <Loader />}

        <Flex flexWrap="wrap" width={1}>
          {!isSearchFired && (
            <Flex justifyContent="center" width={1}>
              <FindTeachersInfo />{' '}
            </Flex>
          )}

          {renderContent()}

          {data?.teachers?.length > 0 && (
            <Pagination
              info={data?.pagination?.info ?? ''}
              lastPage={+get(data?.pagination, 'lastPage', 1)}
              page={page}
              onPageChange={handlePageChange}
            />
          )}
        </Flex>
      </Content>
    </Container>
  )
}

export default FindColleagues
