/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'

import { DateTime } from 'luxon'
import Link from 'next/link'

import get from 'lodash/get'

import { Flex } from 'Components/UI'

import {
  TableLink,
  Text,
} from 'Components/Blocks/Entities/Moderator/Tables/ManageUserTable/styles'

import { PRIVATE_PATHS } from 'Constants/paths'

import { isToday } from 'Utils/date'

const UserInfoCell = ({ row }) => {
  const original = get(row, ['original'])
  const lastSeenDate = DateTime.fromISO(original?.user_last_seen?.created_at)

  return (
    <Flex flexWrap="wrap" pb={20} pt={20}>
      <Flex flexWrap="wrap" justifyContent="center" width={1}>
        <Text textAlign="center">
          Last seen:{' '}
          {isToday(lastSeenDate)
            ? 'Today'
            : lastSeenDate.toFormat('dd.MM.yyyy')}
        </Text>
      </Flex>
      <Flex justifyContent="center" mt={12} width={1}>
        <Link href={PRIVATE_PATHS.USER_PROFILE(original.id)} passHref>
          <TableLink width={120}>User Profile</TableLink>
        </Link>
      </Flex>
    </Flex>
  )
}
UserInfoCell.propTypes = {
  row: PropTypes.object.isRequired,
}
export default UserInfoCell
