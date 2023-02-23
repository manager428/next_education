import React, { useCallback, useState } from 'react'

import { useSWRConfig } from 'swr'

import get from 'lodash/get'

import useFriendQueries from 'Containers/Pages/Student/Profile/Hooks/useFriendQueries'

import { Flex } from 'Components/UI'

import OwnStudentMenu from 'Components/Blocks/Entities/Profile/OwnStudentMenu'
import ProFileEditPopup from 'Components/Blocks/Entities/Profile/ProfileEditPopup'
import UserBio from 'Components/Blocks/Entities/Profile/UserBio'
import UserFriends from 'Components/Blocks/Entities/Profile/UserFriends'
import UserFriendsMenu from 'Components/Blocks/Entities/Profile/UserFriendsMenu'
import UserInfo from 'Components/Blocks/Entities/Profile/UserInfo'
import UserInterests from 'Components/Blocks/Entities/Profile/UserInterests'
import Footer from 'Components/Blocks/Footer'

import { USER_ROLES } from 'Constants/ids'

import useMe from 'Hooks/useMe'
import useRole from 'Hooks/useRole'
import useRouterQueryParams from 'Hooks/useRouterQueryParams'
import { useAppDispatch } from 'Hooks/useStore'

import { openAddBadgeModal } from 'Store/modals/slice'

import { profileApi } from 'Services/Api/requests'
import PROFILE_API_PATHS from 'Services/Api/requests/profile/paths'
import { useScopedI18n } from 'Services/I18n'

import TeacherBlock from './Components/Teacher'
import {
  Button,
  Container,
  RoundedBlock,
  SectionDescription,
  SectionTitle,
} from './styles'
import { Props } from './types'

const Sidebar: React.FC<Props> = ({ data, onMutate }) => {
  const me = useMe()
  const s = useScopedI18n('profile.sidebar')
  const { mutate } = useSWRConfig()
  const { isTeacher, isStudent } = useRole()
  const params = useRouterQueryParams()
  const dispatch = useAppDispatch()

  const bio = data?.profile?.bio
  const interests = data?.profile?.interests || ''
  const isOwnProfile = me?.id === +get(params, 'id', 0)
  const friends = data?.friends
  const userId = data?.profile?.id ?? 0
  const isUserFromClass = data?.profile?.friends_data?.isUserFromClass

  const {
    isLoading: isFriendsRequestLoading,
    addToFriend,
    deleteFromFriends,
    approveFriendRequest,
    rejectFriendRequest,
    cancelFriendRequest,
  } = useFriendQueries({ userId })

  const [editPopupState, setEditPopupState] = useState({
    isOpen: false,
    type: '',
  })
  const [isLoading, setLoading] = useState(false)

  const handleUpdateProfile = async profileField => {
    setLoading(true)

    await profileApi.update(profileField)

    await mutate(PROFILE_API_PATHS.details(data?.profile?.id))

    setLoading(false)
    setEditPopupState({ isOpen: false, type: '' })
  }

  const handleOpenBadgeModal = useCallback(() => {
    dispatch(openAddBadgeModal({ userId }))
  }, [])

  const handleEditClick = useCallback(
    (type: string) => {
      setEditPopupState({
        isOpen: true,
        type,
      })
    },
    [data],
  )

  const handleUserFriendsAction = useCallback(
    actionType => {
      switch (actionType) {
        case 'addToFriend':
          addToFriend()
          break
        case 'deleteFromFriend':
          deleteFromFriends()
          break
        case 'approveFriend':
          approveFriendRequest()
          break
        case 'rejectFriend':
          rejectFriendRequest()
          break
        case 'cancelFriend':
          cancelFriendRequest()
          break
        default:
          break
      }

      onMutate()
    },
    [userId],
  )

  return (
    <Container maxWidth={320} width={1}>
      <RoundedBlock>
        <UserInfo
          avatar={data?.profile?.avatar}
          englishLevel={data?.profile?.english_level}
          fullname={data?.profile?.full_name}
          hasSettings={isOwnProfile}
        />
      </RoundedBlock>

      <UserFriendsMenu
        friendsData={data?.profile?.friends_data}
        isLoading={isFriendsRequestLoading}
        onAction={handleUserFriendsAction}
      />

      {isUserFromClass && isTeacher && (
        <>
          <Button mb="10px" onClick={handleOpenBadgeModal}>
            {s('rewardWithABadge')}
          </Button>

          <OwnStudentMenu selectedUser={data?.profile} />
        </>
      )}

      {data?.profile?.country && (
        <RoundedBlock>
          <SectionTitle>{s('country')}:</SectionTitle>
          <SectionDescription fontSize={18}>
            {data?.profile?.country}
          </SectionDescription>
        </RoundedBlock>
      )}

      {data?.teacher && (
        <Flex width={1}>
          <TeacherBlock
            avatar={data.teacher.avatar}
            link={!isStudent}
            name={data.teacher.full_name}
            userId={data.teacher.id}
          />
        </Flex>
      )}

      {bio?.length > 0 && (
        <RoundedBlock>
          <UserBio
            bio={bio}
            isOwnProfile={isOwnProfile}
            onEditClick={handleEditClick}
          />
        </RoundedBlock>
      )}

      {interests?.length > 0 && (
        <RoundedBlock>
          <UserInterests
            basicInterests={interests}
            isOwnProfile={isOwnProfile}
            onEditClick={handleEditClick}
          />
        </RoundedBlock>
      )}

      {friends?.rows.length > 0 && (
        <RoundedBlock>
          <UserFriends
            friends={friends.rows}
            friendsCount={friends.rows_count}
            role={USER_ROLES.student}
            userId={userId}
          />
        </RoundedBlock>
      )}

      <ProFileEditPopup
        bioText={bio}
        closePopup={() => setEditPopupState({ isOpen: false, type: '' })}
        isLoading={isLoading}
        popupType={editPopupState.type}
        showPopup={editPopupState.isOpen}
        userInterests={interests.split(', ')}
        onSaveClick={handleUpdateProfile}
      />

      <Footer withRadius withoutDownload />
    </Container>
  )
}

export default Sidebar
