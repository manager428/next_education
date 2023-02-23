import React, { useCallback, useState } from 'react'

import Link from 'next/link'

import filter from 'lodash/filter'
import forEach from 'lodash/forEach'
import get from 'lodash/get'
import includes from 'lodash/includes'
import lowerCase from 'lodash/lowerCase'
import map from 'lodash/map'

import { dialogueIconGlyph } from 'Assets/svg/calls'

import { Flex, Icon, Loader, SearchInput } from 'Components/UI'

import Friend from 'Components/Blocks/Entities/Teacher/Friends/Colleagues/Components/Friend'

import { FRIEND_STATUS } from 'Constants/friend'
import { PRIVATE_PATHS } from 'Constants/paths'

import useMe from 'Hooks/useMe'
import useSwrRequest from 'Hooks/useSwrRequest'

import { friendsApi } from 'Services/Api/requests'
import FRIENDS_API_PATHS from 'Services/Api/requests/friends/paths'

import {
  AddTeacherImage,
  Container,
  Content,
  FriendsContainer,
  LinkButton,
  RoundedBlock,
  Tab,
  TabsContainer,
} from './styles'
import { TABS } from './types'

const TAB_OPTIONS = [
  { label: TABS.YOUR_COLLEAGUES, value: FRIEND_STATUS.ACCEPTED },
  { label: TABS.RECEIVED_REQUESTS, value: FRIEND_STATUS.REQUEST },
  { label: TABS.SENT_REQUESTS, value: FRIEND_STATUS.PENDING },
]

const Colleagues: React.FC = () => {
  const me = useMe()

  const [searchValue, setSearchValue] = useState('')

  const [activeTab, setActiveTab] = useState({
    label: TABS.YOUR_COLLEAGUES,
    value: FRIEND_STATUS.ACCEPTED,
  })

  const { data, mutate, isValidating: isLoading } = useSwrRequest({
    url: FRIENDS_API_PATHS.friends(me?.id ?? 0),
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
    if (
      filter(
        data.friends,
        friend => friend.friendsstatus === FRIEND_STATUS.ACCEPTED,
      ).length === 0 &&
      activeTab.value === FRIEND_STATUS.ACCEPTED
    ) {
      return (
        <Flex justifyContent="center" mt={39} width={1}>
          <AddTeacherImage />
          <Flex
            alignContent="center"
            alignItems="center"
            flexWrap="wrap"
            maxWidth={280}
            ml={32}
          >
            <Flex width="220px">
              <Link href={PRIVATE_PATHS.TEACHER_FORUM} passHref>
                <LinkButton>
                  <Icon
                    height={16}
                    icon={dialogueIconGlyph}
                    width={18}
                    wrapperStyles={{ mr: '12px' }}
                  />
                  Meet other Teachers
                </LinkButton>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      )
    }

    const filteredFriend = filter(
      data.friends,
      friend => friend.friendsstatus === activeTab.value,
    )

    let searchedFriends = filteredFriend

    if (searchValue.length > 0) {
      searchedFriends = filter(searchedFriends, friend =>
        includes(lowerCase(friend.fullname), lowerCase(searchValue)),
      )
    }

    const left: any = []
    const right: any = []

    forEach(searchedFriends, (friend: any, index) => {
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
  }, [data, activeTab, searchValue])

  return (
    <Container mt={28}>
      <TabsContainer>{renderTabs()}</TabsContainer>

      <Flex maxWidth="360px" mt={25} width={1}>
        <SearchInput
          placeholder="Search..."
          onChange={value => setSearchValue(value)}
        />
      </Flex>

      <Content mt={28}>{isLoading ? <Loader /> : renderContent()}</Content>
    </Container>
  )
}

export default Colleagues
