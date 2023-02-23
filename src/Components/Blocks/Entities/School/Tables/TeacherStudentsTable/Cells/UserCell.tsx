import React, { useCallback } from 'react'

import { includes } from 'lodash'

import { Checkbox, Element, Flex } from 'Components/UI'

import { theme } from 'Theme'

import { useTableContext } from '../context'
import { Avatar, CheckboxWrapper, UserContainer } from '../styles'

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
    </UserContainer>
  )
}

export default UserCell
