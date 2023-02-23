/* eslint-disable camelcase */
import React from 'react'

import { Element, Flex } from 'Components/UI'

import {
  Avatar,
  UserContainer,
} from 'Components/Blocks/Entities/Teacher/Tables/StudentsTable/styles'

import { theme } from 'Theme'

const UserCell: React.FC<{
  row: {
    original: {
      avatar: string
      age: string
      country: string
      full_name: string
      parent_email: string | null
    }
  }
}> = ({ row: { original } }) => (
  <UserContainer flexWrap="wrap" width={1}>
    <Flex alignItems="center" flexShrink={0} mr={14}>
      <Avatar src={original.avatar} />
    </Flex>

    <Flex flexDirection="column" flexGrow={1} flexWrap="wrap">
      <Element
        color={theme.colors.gray}
        fontSize={16}
        lineHeight="16px"
        width={1}
      >
        {original.full_name}
      </Element>

      <Element
        color={theme.colors.graySecondary}
        fontSize={14}
        lineHeight="14px"
        mt="6px"
        width={1}
      >
        {original.country}
      </Element>
      <Element
        color={theme.colors.graySecondary}
        fontSize={14}
        lineHeight="14px"
        mt="6px"
        width={1}
      >
        {original.age ? `${original.age} y.o` : null}
      </Element>

      {original?.parent_email && (
        <Element
          color={theme.colors.graySecondary}
          fontSize={14}
          lineHeight="14px"
          mt="6px"
          width={1}
        >
          <b>Email:</b> {original.parent_email}
        </Element>
      )}
    </Flex>
  </UserContainer>
)

export default UserCell
