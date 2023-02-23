import React from 'react'

import { Element, Flex, Link } from 'Components/UI'

import {
  Avatar,
  UserContainer,
} from 'Components/Blocks/Entities/School/Tables/ClassroomStudentsTable/styles'

import { PRIVATE_PATHS } from 'Constants/paths'

import { theme } from 'Theme'

const UserCell: React.FC<{
  row: {
    original: {
      id: number
      avatar: string
      age: string
      country: string
      full_name: string
    }
  }
}> = ({ row: { original } }) => (
  <UserContainer flexWrap="wrap" width={1}>
    <Link flexWrap="wrap" href={PRIVATE_PATHS.USER_PROFILE(original.id)}>
      <Flex alignItems="center" flexShrink={0} mr={14}>
        <Avatar src={original.avatar} />
      </Flex>

      <Flex flexDirection="column" flexGrow={1} flexWrap="wrap" maxWidth="75%">
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
      </Flex>
    </Link>
  </UserContainer>
)

export default UserCell
