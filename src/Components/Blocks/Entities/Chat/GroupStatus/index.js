import React from 'react'
import PropTypes from 'prop-types'

import map from 'lodash/map'
import take from 'lodash/take'

import { groupAvatar } from 'Assets/images/chat'

import { Flex } from 'Components/UI'

import {
  Avatar,
  Container,
  GroupContainer,
  GroupItemItem,
  Status,
  Title,
} from 'Components/Blocks/Entities/Chat/GroupStatus/styles'

const GroupStatus = ({ users, onInfoClick }) => {
  const notShowedUsersCounter = users.length - 5

  return (
    <Container>
      <Avatar src={groupAvatar.src} />
      <Flex flexWrap="wrap" ml="14px;" width={1}>
        <Title>Classroom Chat</Title>
        <Status>{Object.values(users).length} members</Status>
      </Flex>
      <Flex alignItems="center" justifyContent="flex-end">
        <GroupContainer onClick={onInfoClick}>
          {notShowedUsersCounter > 0 && (
            <GroupItemItem zIndex={101}>+{notShowedUsersCounter}</GroupItemItem>
          )}
          {map(take(users, 5), (item, index) => (
            <GroupItemItem
              key={item.id}
              right={`${8 * (index + 1)}px`}
              zIndex={100 - index}
            >
              <Avatar src={item.avatar} />
            </GroupItemItem>
          ))}
        </GroupContainer>
      </Flex>
    </Container>
  )
}

GroupStatus.propTypes = {
  users: PropTypes.array.isRequired,
  onInfoClick: PropTypes.func.isRequired,
}

export default GroupStatus
