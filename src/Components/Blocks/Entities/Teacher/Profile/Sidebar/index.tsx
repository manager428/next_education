import React, { useCallback } from 'react'

import Link from 'next/link'

import useFriendHandlers from 'Containers/Pages/Teacher/Profile/Hooks/useFriendHandlers'
import { RoundedBlock } from 'Containers/Pages/Teacher/Profile/styles'

import { Flex } from 'Components/UI'

import { ViewCallModal } from 'Components/Blocks/Entities/Calls/Modals'
import UserFriends from 'Components/Blocks/Entities/Profile/UserFriends'
import UserFriendsMenu from 'Components/Blocks/Entities/Profile/UserFriendsMenu'
import UserInfo from 'Components/Blocks/Entities/Profile/UserInfo'
import {
  School,
  TeacherManageDropdown,
  TeacherUsersAndClasses,
} from 'Components/Blocks/Entities/Teacher/Profile/Sidebar/Components'
import {
  Container,
  ElementWithBorder,
} from 'Components/Blocks/Entities/Teacher/Profile/Sidebar/styles'
import Footer from 'Components/Blocks/Footer'

import { USER_ROLES } from 'Constants/ids'
import { PRIVATE_PATHS } from 'Constants/paths'

import useMe from 'Hooks/useMe'
import useRole from 'Hooks/useRole'
import { useAppDispatch, useAppSelector } from 'Hooks/useStore'

import { closeViewCallModal } from 'Store/modals/slice'

import { IProfileResponse } from 'Services/Api/requests/profile/interfaces'

export type Props = {
  data: IProfileResponse
  isPublic: boolean
  onMutate: () => void
}

const Sidebar: React.FC<Props> = ({ data, isPublic, onMutate }) => {
  const me = useMe()
  const { isSchoolAdmin } = useRole()
  const dispatch = useAppDispatch()

  const userId = data?.profile.id
  const schoolId = me?.school?.id

  const {
    isLoading,
    addToFriend,
    deleteFromFriends,
    approveFriendRequest,
    rejectFriendRequest,
    cancelFriendRequest,
  } = useFriendHandlers({ userId })

  const modalState = useAppSelector(state => state.modals)

  const isOwnProfile = me?.id === userId
  const friends = data?.friends

  const studentsCount = data?.profile?.students_count
  const classroomsCount = data?.profile?.school_classes_count

  const iscCurrentSchoolAdmin = isSchoolAdmin && schoolId === data?.school?.id

  const isShowSettings = isPublic ? false : isOwnProfile

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
    <Container maxWidth="320px" width={1}>
      <Flex flexWrap="wrap" maxWidth={320} width={1}>
        <RoundedBlock maxWidth={320} width={1}>
          <UserInfo
            avatar={data?.profile?.avatar}
            country={data?.profile?.country}
            fullname={data?.profile?.full_name}
            hasSettings={isShowSettings}
            userRole="Teacher"
          />
        </RoundedBlock>

        {isOwnProfile && !isPublic && (
          <Link
            href={`${PRIVATE_PATHS.USER_PROFILE(me?.id ?? 0)}?public`}
            passHref
          >
            <ElementWithBorder as="a" mt="14px">
              View how your profile looks to other teachers
            </ElementWithBorder>
          </Link>
        )}

        {iscCurrentSchoolAdmin && (
          <Flex mt="14px" width={1}>
            <TeacherManageDropdown
              selectedUser={{
                userId,
                fullName: data?.profile.full_name,
                avatar: data?.profile.avatar,
              }}
            />
          </Flex>
        )}

        <Flex mt="14px" width={1}>
          <UserFriendsMenu
            friendsData={data?.profile?.friends_data}
            isLoading={isLoading}
            onAction={handleUserFriendsAction}
          />
        </Flex>

        {data?.school && (
          <School
            logo={data.school.logo}
            schoolName={data.school.school_name}
          />
        )}

        {iscCurrentSchoolAdmin && (
          <TeacherUsersAndClasses
            classroomsCount={classroomsCount ?? 0}
            studentsCount={studentsCount ?? 0}
            userId={userId}
          />
        )}

        {friends.rows.length > 0 && (
          <RoundedBlock width={1}>
            <UserFriends
              friends={friends.rows ?? []}
              friendsCount={friends.rows_count ?? 0}
              role={USER_ROLES.teacher}
              userId={userId}
            />
          </RoundedBlock>
        )}
      </Flex>

      <Flex mt="14px">
        <Footer withRadius withoutDownload />
      </Flex>

      {modalState.viewCallModal.isOpen && modalState.viewCallModal.id && (
        <ViewCallModal
          id={modalState.viewCallModal.id}
          isOpen={modalState.viewCallModal.isOpen}
          onClose={() => dispatch(closeViewCallModal())}
        />
      )}
    </Container>
  )
}

export default Sidebar
