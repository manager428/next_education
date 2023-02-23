import React, { useCallback } from 'react'

import filter from 'lodash/filter'
import forEach from 'lodash/forEach'
import get from 'lodash/get'
import includes from 'lodash/includes'
import lowerCase from 'lodash/lowerCase'
import map from 'lodash/map'

import { Element, Flex, Loader } from 'Components/UI'

import Friend from 'Components/Blocks/Entities/Teacher/PublicFriends/List/Components/Friend'
import {
  Avatar,
  Container,
  Content,
  FriendsContainer,
  RoundedBlock,
  Username,
} from 'Components/Blocks/Entities/Teacher/PublicFriends/List/styles'
import { Props } from 'Components/Blocks/Entities/Teacher/PublicFriends/List/types'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'
import useSwrRequest from 'Hooks/useSwrRequest'

import { friendsApi } from 'Services/Api/requests'
import FRIENDS_API_PATHS from 'Services/Api/requests/friends/paths'

const Colleagues: React.FC<Props> = ({ search }) => {
  const params = useRouterQueryParams()
  const userId = +get(params, 'id', 0)

  const { data, mutate, isValidating: isLoading } = useSwrRequest<any>({
    url: FRIENDS_API_PATHS.friends(userId),
  })

  const handleDeleteFriend = useCallback(async id => {
    try {
      await friendsApi.deleteFriend(id)

      mutate()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }, [])

  const handleAcceptFriend = useCallback(async id => {
    try {
      await friendsApi.approveFriendRequest(id)

      mutate()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }, [])

  const handleCancelFriend = useCallback(async id => {
    try {
      await friendsApi.cancelOwnFriendRequest(id)

      mutate()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }, [])

  const renderContent = useCallback(() => {
    const filteredFriend: any = filter(
      data?.friends,
      friend => friend.friendsstatus === 'accepted',
    )

    let searchedFriends = filteredFriend

    if (search.length > 0) {
      searchedFriends = filter(searchedFriends, friend =>
        includes(lowerCase(friend.fullname), lowerCase(search)),
      )
    }

    const left: any = []
    const right: any = []

    forEach(searchedFriends, (friend: any, index: number) => {
      if (index % 2 === 0) {
        left.push(friend)
      } else {
        right.push(friend)
      }
    })

    return (
      <FriendsContainer>
        {left.length > 0 && (
          <RoundedBlock>
            {map(left, friend => (
              <Friend
                avatar={friend.avatar}
                country={friend.country}
                friendStatus={friend.friendsstatus}
                friendType={friend.friendType}
                fullname={friend.fullname}
                id={friend.id}
                key={friend.id}
                userOnlineStatus={get(friend, ['user_online_status'], '')}
                onAccept={handleAcceptFriend}
                onCancel={handleCancelFriend}
                onDelete={handleDeleteFriend}
              />
            ))}
          </RoundedBlock>
        )}

        {right.length > 0 && (
          <RoundedBlock>
            {map(right, friend => (
              <Friend
                avatar={friend.avatar}
                country={friend.country}
                friendStatus={friend.friendsstatus}
                friendType={friend.friendType}
                fullname={friend.fullname}
                id={friend.id}
                key={friend.id}
                userOnlineStatus={get(friend, ['user_online_status'], '')}
                onAccept={handleAcceptFriend}
                onCancel={handleCancelFriend}
                onDelete={handleDeleteFriend}
              />
            ))}
          </RoundedBlock>
        )}
      </FriendsContainer>
    )
  }, [data, search])

  const renderUserHeader = useCallback(
    () => (
      <Flex alignItems="center" mb={20}>
        <Avatar src={data?.user_info?.avatar} />
        <Username>{data?.user_info?.full_name} </Username>
        <Element fontSize="18px" fontWeight={600}>
          FRIENDS
        </Element>
      </Flex>
    ),
    [data],
  )

  return (
    <Container mt={28}>
      {!isLoading && renderUserHeader()}

      <Content mt={28}>{isLoading ? <Loader /> : renderContent()}</Content>
    </Container>
  )
}

export default Colleagues
