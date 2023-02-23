import React, { useCallback } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { ButtonWithConfirmation, Flex, Loader } from 'Components/UI'

import { MODERATOR_PATHS } from 'Constants/paths'

import {
  ActionButton,
  Avatar,
  BanIcon,
  BlockIcon,
  Container,
  MenuLink,
  OnlineStatus,
  UnblockUserIcon,
  UserAvatarContainer,
  UserEmail,
  UserInfo,
  UserName,
  UserStatus,
  WarningIcon,
} from './styles'

export type UserType = {
  id: number
  full_name: string
  avatar: string
  email: string
  status: string
  is_banned: boolean
  is_blocked: boolean
}

type ModalParams = {
  entity: null | any
  type: string
}

type Props = {
  user: UserType
  onModalOpen: (value: ModalParams) => void
  onRemoveFromBan: (id: number) => void
}

const Header: React.FC<Props> = ({ user, onModalOpen, onRemoveFromBan }) => {
  const router = useRouter()

  const userStatus = useCallback(() => {
    if (user?.is_banned) return <Flex color="#FFA08C">Banned</Flex>
    if (user?.is_blocked) return <Flex color="#EB5757">Blocked</Flex>

    return 'Active'
  }, [user])

  return (
    <Container justifyContent="center">
      <UserInfo>
        {!user ? (
          <Loader />
        ) : (
          <>
            <Flex flexGrow={1} flexWrap="wrap" justifyContent="center" ml="26">
              <UserAvatarContainer>
                <Avatar height={64} src={user.avatar} width={64} />
                <OnlineStatus />
              </UserAvatarContainer>
              <Flex justifyContent="center" mt="10px" width={1}>
                <UserName>{user.full_name}</UserName>
              </Flex>
              <Flex justifyContent="center" mt="10px" width={1}>
                <UserEmail>{user.email}</UserEmail>
              </Flex>
              <Flex justifyContent="center" mt="10px" width={1}>
                <UserStatus>
                  User Status: <span>{userStatus()}</span>
                </UserStatus>
              </Flex>
            </Flex>
            <Flex alignContent="flex-start" flexWrap="wrap" width={26}>
              <ActionButton
                onClick={() =>
                  onModalOpen({
                    entity: { ...user, user_id: user.id },
                    type: 'banModal',
                  })
                }
              >
                <BanIcon active={user?.is_banned} />
              </ActionButton>

              <ActionButton
                mt="8px"
                onClick={() =>
                  onModalOpen({
                    entity: { ...user, user_id: user.id },
                    type: 'blockModal',
                  })
                }
              >
                <BlockIcon active={user?.is_blocked} />
              </ActionButton>

              <ActionButton
                mt="8px"
                onClick={() =>
                  onModalOpen({
                    entity: { ...user, user_id: user.id },
                    type: 'warningModal',
                  })
                }
              >
                <WarningIcon />
              </ActionButton>

              <Flex mt="8px">
                <ButtonWithConfirmation
                  confirmationButtonText="Remove"
                  confirmationText="Are you sure you want to remove from block or ban?"
                  icon={<UnblockUserIcon />}
                  title="CANCEL"
                  type="icon"
                  onSubmit={() => onRemoveFromBan(user.id)}
                />
              </Flex>
            </Flex>
          </>
        )}
      </UserInfo>
      <Flex justifyContent="center" mt={24} width={1}>
        <Link href={MODERATOR_PATHS.USER_COMMENTS(user.id)} passHref>
          <MenuLink
            active={router.asPath === MODERATOR_PATHS.USER_COMMENTS(user.id)}
          >
            COMMENTS
          </MenuLink>
        </Link>

        <Link href={MODERATOR_PATHS.USER_COMPLAINTS(user.id)} passHref>
          <MenuLink
            active={router.asPath === MODERATOR_PATHS.USER_COMPLAINTS(user.id)}
          >
            COMPLAINTS
          </MenuLink>
        </Link>

        <Link href={MODERATOR_PATHS.USER_BAN_HISTORY(user.id)} passHref>
          <MenuLink
            active={router.asPath === MODERATOR_PATHS.USER_BAN_HISTORY(user.id)}
          >
            BAN HISTORY
          </MenuLink>
        </Link>
      </Flex>
    </Container>
  )
}

export default Header
