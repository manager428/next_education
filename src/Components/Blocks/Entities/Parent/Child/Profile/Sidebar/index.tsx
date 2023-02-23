import React, { useCallback, useState } from 'react'

import { useModalsContext } from 'pages/parent/manage/context'
import { useSWRConfig } from 'swr'

import get from 'lodash/get'

import {
  Container,
  RoundedBlock,
  SectionDescription,
  SectionTitle,
} from 'Components/Blocks/Entities/Parent/Child/Profile/Sidebar/styles'
import { Props } from 'Components/Blocks/Entities/Parent/Child/Profile/Sidebar/types'
import OwnChildMenu from 'Components/Blocks/Entities/Profile/OwnChildMenu'
import ProFileEditPopup from 'Components/Blocks/Entities/Profile/ProfileEditPopup'
import UserBio from 'Components/Blocks/Entities/Profile/UserBio'
import UserFriends from 'Components/Blocks/Entities/Profile/UserFriends'
import UserFriendsMenu from 'Components/Blocks/Entities/Profile/UserFriendsMenu'
import UserInfo from 'Components/Blocks/Entities/Profile/UserInfo'
import UserInterests from 'Components/Blocks/Entities/Profile/UserInterests'
import Footer from 'Components/Blocks/Footer'

import { USER_ROLES } from 'Constants/ids'

import useMe from 'Hooks/useMe'
import useRouterQueryParams from 'Hooks/useRouterQueryParams'

import { profileApi } from 'Services/Api/requests'
import PROFILE_API_PATHS from 'Services/Api/requests/profile/paths'
import { useScopedI18n } from 'Services/I18n'

const Sidebar: React.FC<Props> = ({ data }) => {
  const me = useMe()
  const { mutate } = useSWRConfig()
  const s = useScopedI18n('profile.sidebar')

  const params = useRouterQueryParams()

  const { onResetPassword, onDeleteChild } = useModalsContext()

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

  const bio = data?.profile?.bio
  const interests = data?.profile?.interests || ''
  const isOwnProfile = me?.id === +get(params, 'id', 0)
  const friends = data?.friends || []
  const userId = data?.profile?.id

  const handleEditClick = useCallback(
    (type: string) => {
      setEditPopupState({
        isOpen: true,
        type,
      })
    },
    [data],
  )

  return (
    <Container maxWidth={320} width={1}>
      <RoundedBlock>
        <UserInfo
          avatar={data?.profile?.avatar}
          englishLevel={data?.profile?.english_level}
          fullname={data?.profile?.full_name}
          hasSettings={false}
        />
      </RoundedBlock>

      <OwnChildMenu
        onDeleteChild={onDeleteChild}
        onResetPassword={onResetPassword}
      />

      <UserFriendsMenu
        friendsData={data?.profile?.friends_data}
        isLoading={false}
        onAction={() => null}
      />

      {data?.profile?.country && (
        <RoundedBlock>
          <SectionTitle>{s('place')}:</SectionTitle>
          <SectionDescription fontSize={18}>
            {data?.profile?.country}
          </SectionDescription>
        </RoundedBlock>
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

      {friends.rows.length > 0 && (
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
