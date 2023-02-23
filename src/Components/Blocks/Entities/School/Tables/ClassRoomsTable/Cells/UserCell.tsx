/* eslint-disable camelcase */
import React from 'react'

import { Element, Flex } from 'Components/UI'

import { theme } from 'Theme'

import { Avatar, UserContainer } from '../styles'

const ClassCell: React.FC<{
  row: {
    original: {
      id: number
      class_name: string
      students_count: number
      class_logo: string
    }
  }
}> = ({ row: { original } }) => (
  <UserContainer flexWrap="wrap" width={1}>
    <Flex alignItems="center" flexShrink={0} mr={14}>
      <Avatar src={original.class_logo} />
    </Flex>

    <Flex
      flexDirection="column"
      flexGrow={1}
      flexWrap="wrap"
      justifyContent="center"
      maxWidth="75%"
    >
      <Element
        color={theme.colors.gray}
        fontSize={16}
        fontWeight={600}
        lineHeight="16px"
        width={1}
      >
        {original.class_name}
      </Element>

      <Element
        color={theme.colors.graySecondary}
        fontSize={14}
        lineHeight="14px"
        mt="14px"
        width={1}
      >
        Students: {original.students_count}
      </Element>
    </Flex>
  </UserContainer>
)

export default ClassCell
