import React, { useCallback } from 'react'

import { includes } from 'lodash'

import { groupAvatar } from 'Assets/images/chat'

import { Checkbox, Element, Flex } from 'Components/UI'

import { theme } from 'Theme'

import { useTableContext } from '../context'
import { Avatar, CheckboxWrapper, UserContainer } from '../styles'

const UserCell: React.FC<{
  row: {
    original: {
      id: number
      class_name: string
      students_count: number
    }
  }
}> = ({ row: { original } }) => {
  const { isSelectable, selectedIds, onSelect } = useTableContext()

  const handleSelect = useCallback(() => {
    onSelect(original.id)
  }, [original.id])

  return (
    <UserContainer flexWrap="wrap" width={1}>
      {isSelectable && (
        <CheckboxWrapper mr="32px">
          <Checkbox
            checked={includes(selectedIds, original.id)}
            id={`student-${original.id}`}
            value=""
            onChange={handleSelect}
          />
        </CheckboxWrapper>
      )}
      <Flex alignItems="center" flexShrink={0} mr={14}>
        <Avatar src={groupAvatar.src} />
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
}

export default UserCell
