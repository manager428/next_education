import React from 'react'

import Link from 'next/link'

import { Element, Flex } from 'Components/UI'

import { TableLink } from 'Components/Blocks/Entities/School/Tables/TeachersTable/styles'

import { SCHOOL_PATHS } from 'Constants/paths'

import { theme } from 'Theme'

const TeacherClassesCell: React.FC<{
  row: {
    original: {
      id: number
      school_classes_count: number
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
      Classrooms: {original.school_classes_count}
    </Element>

    <Flex mt="10px">
      <Link href={SCHOOL_PATHS.TEACHER_CLASSROOMS(original.id)} passHref>
        <TableLink color={theme.colors.green} width={140}>
          List of Classrooms
        </TableLink>
      </Link>
    </Flex>
  </Flex>
)

export default TeacherClassesCell
