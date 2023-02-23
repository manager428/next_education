import React from 'react'

import Link from 'next/link'

import filter from 'lodash/filter'
import get from 'lodash/get'
import map from 'lodash/map'

import {
  BlockTitle,
  BlockTitleText,
  BlockTitleViewAllText,
} from 'Components/Blocks/Entities/Profile/styles'
import UserAvatarWithStatus from 'Components/Blocks/UserAvatarWithStatus'

import { USER_ROLES } from 'Constants/ids'
import { PRIVATE_PATHS, STUDENT_PATHS, TEACHER_PATHS } from 'Constants/paths'

import useMe from 'Hooks/useMe'

import _, { useScopedI18n } from 'Services/I18n'

import {
  Dot,
  FriendItem,
  FriendName,
  FriendsWrap,
  ViewAllLink,
  Wrap,
} from './styles'

type Props = {
  friends: any[]
  userId: number
  friendsCount: number
  role: USER_ROLES
}

const UserFriends: React.FC<Props> = ({
  friends,
  userId,
  friendsCount,
  role,
}) => {
  const me = useMe()
  const s = useScopedI18n('profile.sidebar')

  const isOwnProfile = userId === me?.id

  const filteredFriends = filter(
    friends,
    friend => friend.friendsstatus === 'accepted',
  )

  return (
    <Wrap>
      <BlockTitle>
        <BlockTitleText>
          {_('general.friends')} <Dot /> {friendsCount}
        </BlockTitleText>

        {role === USER_ROLES.student && (
          <Link href={STUDENT_PATHS.FRIENDS(userId)} passHref>
            <ViewAllLink>
              <BlockTitleViewAllText>{s('viewAll')}</BlockTitleViewAllText>
            </ViewAllLink>
          </Link>
        )}

        {isOwnProfile && role === USER_ROLES.teacher && isOwnProfile && (
          <Link href={TEACHER_PATHS.FRIENDS} passHref>
            <ViewAllLink>
              <BlockTitleViewAllText>{s('viewAll')}</BlockTitleViewAllText>
            </ViewAllLink>
          </Link>
        )}

        {!isOwnProfile && role === USER_ROLES.teacher && (
          <Link href={TEACHER_PATHS.FRIENDS_PUBLIC(userId)} passHref>
            <ViewAllLink>
              <BlockTitleViewAllText>{s('viewAll')}</BlockTitleViewAllText>
            </ViewAllLink>
          </Link>
        )}
      </BlockTitle>

      <FriendsWrap>
        {map(filteredFriends, user => (
          <Link
            href={PRIVATE_PATHS.USER_PROFILE(user.id)}
            key={user.id}
            passHref
          >
            <FriendItem>
              <UserAvatarWithStatus
                image={user.avatar}
                status={get(user, 'user_online_status', '') === 'online'}
              />
              <FriendName title={user.fullname}>{user.fullname}</FriendName>
            </FriendItem>
          </Link>
        ))}
      </FriendsWrap>
    </Wrap>
  )
}

export default UserFriends
