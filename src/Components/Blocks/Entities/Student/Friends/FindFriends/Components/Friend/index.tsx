import React from 'react'

import { Link } from 'Components/UI'

import UserAvatarWithStatus from 'Components/Blocks/UserAvatarWithStatus'

import { PRIVATE_PATHS } from 'Constants/paths'

import {
  ActionButton,
  ActionsContainer,
  Container,
  Info,
  Name,
  Relative,
  UserInfo,
} from './styles'
import { Props } from './types'

const Friend: React.FC<Props> = ({
  id,
  avatar,
  fullname,
  country,
  username,
  isOnline,
}) => (
  <Container alignItems="center">
    <Relative>
      <Link href={PRIVATE_PATHS.USER_PROFILE(id)} passHref>
        <a rel="noopener noreferrer" target="_blank">
          <UserAvatarWithStatus
            height={80}
            image={avatar}
            status={isOnline}
            width={80}
          />
        </a>
      </Link>
    </Relative>

    <UserInfo ml={20}>
      <Name>{fullname}</Name>
      {country && <Info mt="10px">{country}</Info>}
      {username && <Info mt="10px">{username}</Info>}
    </UserInfo>

    <ActionsContainer>
      <Link href={PRIVATE_PATHS.USER_PROFILE(id)} target="_blank">
        <ActionButton>Open Profile</ActionButton>
      </Link>
    </ActionsContainer>
  </Container>
)

export default Friend
