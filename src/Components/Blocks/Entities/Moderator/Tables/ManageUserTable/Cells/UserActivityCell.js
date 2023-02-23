import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

import { Flex } from 'Components/UI'

import { TableLink } from 'Components/Blocks/Entities/Moderator/Tables/ManageUserTable/styles'

import { MODERATOR_PATHS } from 'Constants/paths'

const UserActivityCell = ({ row }) => (
  <Flex flexWrap="wrap">
    <Flex justifyContent="center" mt={12} width={1}>
      <Link href={MODERATOR_PATHS.USER_COMMENTS(row.original.id)} passHref>
        <TableLink width={120}>User Activity</TableLink>
      </Link>
    </Flex>
  </Flex>
)
UserActivityCell.propTypes = {
  row: PropTypes.object.isRequired,
}
export default UserActivityCell
