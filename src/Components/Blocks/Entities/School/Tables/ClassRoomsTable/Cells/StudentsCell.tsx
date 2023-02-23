/* eslint-disable camelcase */
import React from 'react'

import Link from 'next/link'

import { Element, Flex } from 'Components/UI'

import { TableLink } from 'Components/Blocks/Entities/School/Tables/ClassRoomsTable/styles'

import { SCHOOL_PATHS } from 'Constants/paths'

import { theme } from 'Theme'

const StudentsCell: React.FC<{
  row: {
    original: {
      id: number
      students_count: number
      teacher: {
        id: number
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
      Students: {original.students_count}
    </Element>
    <Flex mt="10px">
      <Link
        href={SCHOOL_PATHS.TEACHER_CLASSROOM(
          original?.teacher?.id,
          original?.id,
        )}
        passHref
      >
        <TableLink color={theme.colors.green} width={140}>
          List of Students
        </TableLink>
      </Link>
    </Flex>
  </Flex>
)

export default StudentsCell
