import React, { useCallback, useMemo, useState } from 'react'

import get from 'lodash/get'
import map from 'lodash/map'
import reduce from 'lodash/reduce'

import { Flex, Loader, SearchInputWithButton } from 'Components/UI'

import Pagination from 'Components/Blocks/Pagination'

import useSwrRequest from 'Hooks/useSwrRequest'

import {
  IStudent,
  IStudentSearchResponse,
} from 'Services/Api/requests/student/interfaces'
import STUDENT_API_PATHS from 'Services/Api/requests/student/paths'
import _ from 'Services/I18n'

import FindFriendsInfo from './Components/FindFriendsInfo'
import Friend from './Components/Friend'
import NoResultsInfo from './Components/NoResultsInfo'
import { Container, Content, FriendsContainer, RoundedBlock } from './styles'

const FindFriends: React.FC = () => {
  const [isSearchFired, setSearchFired] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [page, setPage] = useState(1)

  const { data, isLoading } = useSwrRequest<IStudentSearchResponse['data']>({
    url: isSearchFired ? STUDENT_API_PATHS.search : null,
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

  const { leftColumn, rightColumn } = useMemo(
    () =>
      reduce(
        data?.students,
        (
          acc: { rightColumn: IStudent[]; leftColumn: IStudent[] },
          user: IStudent,
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
    [data?.students],
  )

  const renderContent = useCallback(() => {
    if (data?.students?.length === 0) {
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
                isOnline={friend.user_online_status === 'online'}
                key={friend.id}
                username={friend.username}
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
                isOnline={friend.user_online_status === 'online'}
                key={friend.id}
                username={friend.username}
              />
            ))}
          </RoundedBlock>
        )}
      </FriendsContainer>
    )
  }, [leftColumn, rightColumn])

  return (
    <Container mt={28}>
      <Flex maxWidth="360px" width={1}>
        <SearchInputWithButton
          placeholder={_('general.searchHere')}
          onSubmit={handleSearchSubmit}
        />
      </Flex>

      <Content mt={32}>
        {isLoading && isSearchFired && <Loader />}

        <Flex flexWrap="wrap" width={1}>
          {!isSearchFired && (
            <Flex justifyContent="center" width={1}>
              <FindFriendsInfo />{' '}
            </Flex>
          )}

          {renderContent()}

          {data?.students?.length > 0 && (
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

export default FindFriends
