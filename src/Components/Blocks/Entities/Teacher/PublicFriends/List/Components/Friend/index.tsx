import React, { useRef } from 'react'

import Link from 'next/link'

import {
  ActionLink,
  ActionsContainer,
  Container,
  Country,
  Name,
  Relative,
  UserInfo,
} from 'Components/Blocks/Entities/Teacher/PublicFriends/List/Components/Friend/styles'
import { Props } from 'Components/Blocks/Entities/Teacher/PublicFriends/List/Components/Friend/types'
import UserAvatarWithStatus from 'Components/Blocks/UserAvatarWithStatus'

import { PRIVATE_PATHS } from 'Constants/paths'

const Friend: React.FC<Props> = ({
  id,
  avatar,
  fullname,
  country,
  userOnlineStatus,
}) => {
  const ref = useRef(null)

  return (
    <Container>
      <Relative ref={ref}>
        <UserAvatarWithStatus
          height={80}
          image={avatar}
          status={userOnlineStatus === 'online'}
          width={80}
        />
      </Relative>

      <UserInfo ml={20}>
        <Link href={PRIVATE_PATHS.USER_PROFILE(id)} passHref>
          <Name>{fullname}</Name>
        </Link>

        <Country>{country}</Country>
      </UserInfo>

      <ActionsContainer>
        <Link href={PRIVATE_PATHS.USER_PROFILE(id)} passHref>
          <ActionLink>Go to Profile</ActionLink>
        </Link>
      </ActionsContainer>
    </Container>
  )
}

export default Friend
