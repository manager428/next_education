import React, { useRef } from 'react'

import Link from 'next/link'

import { Loader } from 'Components/UI'

import {
  ActionButton,
  ActionsContainer,
  Container,
  Info,
  Name,
  Relative,
  UserInfo,
} from 'Components/Blocks/Entities/Teacher/Friends/FindColleagues/Components/Friend/styles'
import { Props } from 'Components/Blocks/Entities/Teacher/Friends/FindColleagues/Components/Friend/types'
import UserAvatarWithStatus from 'Components/Blocks/UserAvatarWithStatus'

import { PRIVATE_PATHS } from 'Constants/paths'

const Friend: React.FC<Props> = ({
  id,
  avatar,
  fullname,
  country,
  username,
  isRequestSent,
  isOnline,
  isLoading,
  onAddFriend,
  onCancelFriend,
}) => {
  const ref = useRef(null)

  return (
    <Container alignItems="center">
      <Relative ref={ref}>
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
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {isRequestSent ? (
              <ActionButton negative onClick={() => onCancelFriend(id)}>
                Cancel Request
              </ActionButton>
            ) : (
              <ActionButton onClick={() => onAddFriend(id)}>
                Add to Friends
              </ActionButton>
            )}
          </>
        )}
      </ActionsContainer>
    </Container>
  )
}

export default Friend
