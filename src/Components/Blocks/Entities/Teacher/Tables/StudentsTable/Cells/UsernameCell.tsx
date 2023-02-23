import React from 'react'

import Link from 'next/link'

import { Element, Flex } from 'Components/UI'

import { TableLink } from 'Components/Blocks/Entities/Teacher/Tables/StudentsTable/styles'

import { PRIVATE_PATHS } from 'Constants/paths'

import { theme } from 'Theme'

const UsernameCell: React.FC<{
  row: {
    original: {
      username: string
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
      {original.username ?? '-'}
    </Element>

    <Flex mt="10px">
      <Link href={PRIVATE_PATHS.CHAT} passHref>
        <TableLink color={theme.colors.green} width={140}>
          Go to Chat
        </TableLink>
      </Link>
    </Flex>
  </Flex>
)

export default UsernameCell
