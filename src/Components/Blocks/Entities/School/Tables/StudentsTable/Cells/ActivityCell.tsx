/* eslint-disable camelcase */
import React from 'react'

import { DateTime } from 'luxon'
import Link from 'next/link'

import { Element, Flex } from 'Components/UI'

import { TableLink } from 'Components/Blocks/Entities/School/Tables/StudentsTable/styles'

import { PRIVATE_PATHS } from 'Constants/paths'

import { theme } from 'Theme'

const ActivityCell: React.FC<{
  row: {
    original: {
      id: number
      active_time: string
    }
  }
}> = ({ row: { original } }) => (
  <Flex flexWrap="wrap" justifyContent="center" width={1}>
    <Element
      color={theme.colors.graySecondary}
      fontSize={12}
      lineHeight="12px"
      textAlign="center"
      width={1}
    >
      {original.active_time
        ? DateTime.fromISO(original.active_time).toLocaleString(
            DateTime.DATETIME_SHORT,
          )
        : '-'}
    </Element>

    <Flex mt="10px">
      <Link href={PRIVATE_PATHS.USER_PROFILE(original.id)} passHref>
        <TableLink color={theme.colors.blueLight} width={140}>
          User Profile
        </TableLink>
      </Link>
    </Flex>
  </Flex>
)

export default ActivityCell
