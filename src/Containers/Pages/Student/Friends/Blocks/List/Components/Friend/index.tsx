import React, { useCallback, useRef } from 'react'
import { useContextMenu } from 'react-contexify'

import Link from 'next/link'

import UserAvatarWithStatus from 'Components/Blocks/UserAvatarWithStatus'

import { FRIEND_STATUS } from 'Constants/friend'
import { PRIVATE_PATHS } from 'Constants/paths'

import { useScopedI18n } from 'Services/I18n'

import {
  ActionButton,
  ActionLink,
  ActionsContainer,
  Container,
  ContextItem,
  ContextMenu,
  Country,
  Name,
  Relative,
  StyledMenu,
  UserInfo,
} from './styles'
import { Props } from './types'

const Friend: React.FC<Props> = ({
  id,
  avatar,
  fullname,
  country,
  friendStatus,
  friendType,
  userOnlineStatus,
  onAccept,
  onCancel,
  onDelete,
}) => {
  const s = useScopedI18n('friendsPage.buttons')
  const ref = useRef(null)

  const { show, hideAll } = useContextMenu({
    id: `deleteModal-${id}`,
  })

  const handleShowMenu = useCallback(e => {
    if (
      friendStatus !== FRIEND_STATUS.ACCEPTED ||
      friendType === 'teacher' ||
      friendType === 'penpal'
    ) {
      return
    }
    e.preventDefault()

    show(e, {})
  }, [])

  const handleDelete = useCallback(() => {
    hideAll()
    onDelete(id)
  }, [])

  const renderActionButton = useCallback(() => {
    if (friendType === 'teacher') return null

    switch (friendStatus) {
      case FRIEND_STATUS.REQUEST:
        return (
          <ActionButton onClick={() => onAccept(id)}>
            {s('addToFriends')}
          </ActionButton>
        )
      case FRIEND_STATUS.PENDING:
        return (
          <ActionButton onClick={() => onCancel(id)}>
            {s('cancelRequest')}
          </ActionButton>
        )

      default:
        return (
          <Link href={PRIVATE_PATHS.USER_PROFILE(id)} passHref>
            <ActionLink>{s('goToProfile')}</ActionLink>
          </Link>
        )
    }
  }, [friendStatus, friendType])

  return (
    <Container>
      <Relative ref={ref} onContextMenu={handleShowMenu}>
        <UserAvatarWithStatus
          height={80}
          image={avatar}
          status={userOnlineStatus === 'online'}
          width={80}
        />
        <StyledMenu id={`deleteModal-${id}`}>
          <ContextMenu>
            <ContextItem onClick={handleDelete}>
              {s('removeFromFriends')}
            </ContextItem>
          </ContextMenu>
        </StyledMenu>
      </Relative>

      <UserInfo ml={20}>
        <Link href={PRIVATE_PATHS.USER_PROFILE(id)} passHref>
          <Name>{fullname}</Name>
        </Link>

        <Country>{country}</Country>
      </UserInfo>

      <ActionsContainer>{renderActionButton()}</ActionsContainer>
    </Container>
  )
}

export default Friend
