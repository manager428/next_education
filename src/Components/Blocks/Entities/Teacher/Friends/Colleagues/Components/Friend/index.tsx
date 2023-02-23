import React, { useCallback, useRef } from 'react'
import { useContextMenu } from 'react-contexify'

import Link from 'next/link'

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
} from 'Components/Blocks/Entities/Teacher/Friends/Colleagues/Components/Friend/styles'
import { Props } from 'Components/Blocks/Entities/Teacher/Friends/Colleagues/Components/Friend/types'
import UserAvatarWithStatus from 'Components/Blocks/UserAvatarWithStatus'

import { FRIEND_STATUS } from 'Constants/friend'
import { PRIVATE_PATHS } from 'Constants/paths'

const Friend: React.FC<Props> = ({
  id,
  avatar,
  fullname,
  country,
  friendStatus,
  userOnlineStatus,
  onAccept,
  onCancel,
  onDelete,
}) => {
  const ref = useRef(null)

  const { show, hideAll } = useContextMenu({
    id: `deleteModal-${id}`,
  })

  const handleShowMenu = useCallback(e => {
    if (friendStatus !== FRIEND_STATUS.ACCEPTED) {
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
    switch (friendStatus) {
      case FRIEND_STATUS.REQUEST:
        return (
          <ActionButton onClick={() => onAccept(id)}>
            Add to Friends
          </ActionButton>
        )
      case FRIEND_STATUS.PENDING:
        return (
          <ActionButton onClick={() => onCancel(id)}>
            Cancel Request
          </ActionButton>
        )

      default:
        return (
          <Link href={PRIVATE_PATHS.CHAT} passHref>
            <ActionLink>Go to Chat</ActionLink>
          </Link>
        )
    }
  }, [friendStatus])

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
              Remove from friends
            </ContextItem>
          </ContextMenu>
        </StyledMenu>
      </Relative>

      <UserInfo ml={20}>
        <Name>{fullname}</Name>
        <Country>{country}</Country>
      </UserInfo>

      <ActionsContainer>{renderActionButton()}</ActionsContainer>
    </Container>
  )
}

export default Friend
