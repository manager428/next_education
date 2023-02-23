/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'

import get from 'lodash/get'

import { Flex } from 'Components/UI'

import {
  UserAvatar,
  UserBookmarkIcon,
  UserContainer,
  UserEmail,
  UserName,
} from 'Components/Blocks/Entities/Moderator/Tables/ManageUserTable/styles'

import { useTableContext } from '../context'

const UsernameCell = ({ row }) => {
  const { onBookmark } = useTableContext()

  const original = get(row, ['original'])
  return (
    <UserContainer>
      <Flex>
        <UserAvatar src={original.avatar} />
      </Flex>
      <Flex flexGrow={1} flexWrap="wrap" ml={14}>
        <UserName>{original.full_name}</UserName>
        <UserEmail mt="12px">{original.email ? original.email : ''}</UserEmail>
      </Flex>
      <Flex alignSelf="flex-start">
        <UserBookmarkIcon
          fill={original?.is_saved ? '#49CEB1' : '#D3DAE8'}
          onClick={() => onBookmark(original.id)}
        />
      </Flex>
    </UserContainer>
  )
}
UsernameCell.propTypes = {
  row: PropTypes.object.isRequired,
}
export default UsernameCell
