/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

import { Flex } from 'Components/UI'

import {
  UserAvatar,
  UserName,
} from 'Components/Blocks/Entities/Moderator/Tables/ManageCommentsTable/styles'

import { MODERATOR_PATHS } from 'Constants/paths'

const UserCell = ({ row }) => (
  <Flex flexWrap="wrap">
    <Flex flexWrap="wrap" justifyContent="center" width={1}>
      <UserAvatar src={row?.original?.avatar} />
      <UserName justifyContent="center" mt="6px" width={1}>
        <UserName justifyContent="center" mt="6px" width={1}>
          <Link href={MODERATOR_PATHS.USER_COMMENTS(row.original.user_id)}>
            {row?.original?.full_name || '-'}
          </Link>
        </UserName>
      </UserName>
    </Flex>
  </Flex>
)
UserCell.propTypes = {
  row: PropTypes.object.isRequired,
}
export default UserCell
