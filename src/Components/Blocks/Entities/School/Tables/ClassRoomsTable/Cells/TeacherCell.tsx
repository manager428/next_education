import React from 'react'

import Link from 'next/link'

import { Element, Flex } from 'Components/UI'

import { TableLink } from 'Components/Blocks/Entities/School/Tables/ClassRoomsTable/styles'

import { PRIVATE_PATHS } from 'Constants/paths'

import { theme } from 'Theme'

const TeacherCell: React.FC<{
  row: {
    original: {
      teacher: {
        id: number
        full_name: string
      }
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
      {original.teacher?.full_name}
    </Element>

    <Flex mt="10px">
      {original.teacher?.id && (
        <Link href={PRIVATE_PATHS.USER_PROFILE(original.teacher.id)} passHref>
          <TableLink color={theme.colors.orange} width={140}>
            Teacher Profile
          </TableLink>
        </Link>
      )}
    </Flex>
  </Flex>
)

export default TeacherCell
