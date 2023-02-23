import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

import { Flex } from 'Components/UI'

import {
  UserAvatar,
  UserName,
} from 'Components/Blocks/Entities/Moderator/Tables/ManageComplaintsTable/styles'

import { MODERATOR_PATHS } from 'Constants/paths'

const UserCell = ({ value }) => (
  <Flex flexWrap="wrap">
    <Flex flexWrap="wrap" justifyContent="center" width={1}>
      <UserAvatar src={value?.avatar} />
      <UserName justifyContent="center" mt="6px" width={1}>
        <Link href={MODERATOR_PATHS.USER_COMMENTS(value.id)}>
          {value.full_name || '-'}
        </Link>
      </UserName>
    </Flex>
  </Flex>
)
UserCell.propTypes = {
  value: PropTypes.object.isRequired,
}
export default UserCell
