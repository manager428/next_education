import React, { useCallback, useState } from 'react'

import filter from 'lodash/filter'
import forEach from 'lodash/forEach'
import get from 'lodash/get'
import includes from 'lodash/includes'
import lowerCase from 'lodash/lowerCase'
import map from 'lodash/map'

import { Flex, Loader } from 'Components/UI'

import { FRIEND_STATUS } from 'Constants/friend'
import { USER_ROLES } from 'Constants/ids'

import useMe from 'Hooks/useMe'
import useRouterQueryParams from 'Hooks/useRouterQueryParams'
import useSwrRequest from 'Hooks/useSwrRequest'

import { friendsApi } from 'Services/Api/requests'
import FRIENDS_API_PATHS from 'Services/Api/requests/friends/paths'
import { useScopedI18n } from 'Services/I18n'

import Friend from './Components/Friend'
import {
  Avatar,
  Container,
  Content,
  FriendsContainer,
  RoundedBlock,
  Tab,
  TabsContainer,
  Username,
} from './styles'
import { Props, TABS } from './types'

const OWN_TAB_OPTIONS = scoped => [
  { label: scoped('friends'), value: 'friend' },
  { label: scoped('classmates'), value: 'penpal' },
  { label: scoped('teacher'), value: USER_ROLES.teacher },
  { label: scoped('receivedRequests'), value: FRIEND_STATUS.REQUEST },
  { label: scoped('sentRequests'), value: FRIEND_STATUS.PENDING },
]

const USER_TAB_OPTIONS = scoped => [
  { label: scoped('friends'), value: 'friend' },
  { label: scoped('classmates'), value: 'penpal' },
]

const Colleagues: React.FC<Props> = ({ search }) => {
  const s = useScopedI18n('friendsPage')
  const params = useRouterQueryParams()
  const userId = +get(params, 'id', 0)
  const me = useMe()

  const isOwnProfile = userId === me?.id

  const TAB_OPTIONS = isOwnProfile ? OWN_TAB_OPTIONS(s) : USER_TAB_OPTIONS(s)

  const [activeTab, setActiveTab] = useState(TAB_OPTIONS[0])

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

  const renderTabs = useCallback(
    () =>
      map(TAB_OPTIONS, (tab, index) => {
        const pendingCounter = filter(
          data?.friends,
          friend => friend.friendsstatus === FRIEND_STATUS.PENDING,
        ).length

        const requestCounter = filter(
          data?.friends,
          friend => friend.friendsstatus === FRIEND_STATUS.REQUEST,
        ).length

        return (
          <Tab
            active={tab.label === activeTab.label}
            key={tab.label}
            mr={index === TAB_OPTIONS.length - 1 ? 0 : 24}
            onClick={() => setActiveTab(tab)}
          >
            {tab.label.toUpperCase()}
            {tab.label === TABS.RECEIVED_REQUESTS &&
              requestCounter > 0 &&
              ` - ${requestCounter}`}
            {tab.label === TABS.SENT_REQUESTS &&
              pendingCounter > 0 &&
              ` - ${pendingCounter}`}
          </Tab>
        )
      }),
    [activeTab, data],
  )

  const renderContent = useCallback(() => {
    let filteredFriend: any = []

    switch (activeTab.value) {
      case 'penpal': {
        filteredFriend = filter(
          data?.friends,
          friend => friend.friendType === activeTab.value,
        )
        break
      }

      case 'teacher': {
        filteredFriend = filter(
          data?.friends,
          friend => friend.friendType === activeTab.value,
        )
        break
      }

      case 'friend': {
        filteredFriend = filter(
          data?.friends,
          friend => friend.friendType === activeTab.value,
        )
        break
      }

      default: {
        filteredFriend = filter(
          data?.friends,
          friend => friend.friendsstatus === activeTab.value,
        )
        break
      }
    }

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
  }, [data, activeTab, search])

  const renderUserHeader = useCallback(
    () => (
      <Flex alignItems="center" mb={20}>
        <Avatar src={data?.user_info?.avatar} />
        <Username>{data?.user_info?.full_name}</Username>
      </Flex>
    ),
    [data],
  )

  return (
    <Container mt={28}>
      {!isOwnProfile && !isLoading && renderUserHeader()}

      <TabsContainer>{renderTabs()}</TabsContainer>

      <Content mt={28}>{isLoading ? <Loader /> : renderContent()}</Content>
    </Container>
  )
}

export default Colleagues
