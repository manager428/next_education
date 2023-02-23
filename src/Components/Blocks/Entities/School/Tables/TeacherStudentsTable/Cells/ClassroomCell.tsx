import React from 'react'

import Link from 'next/link'

import { Element, Flex } from 'Components/UI'

import { TableLink } from 'Components/Blocks/Entities/School/Tables/TeacherStudentsTable/styles'

import { SCHOOL_PATHS } from 'Constants/paths'

import { theme } from 'Theme'

const ClassroomCell: React.FC<{
  row: {
    original: {
      id: number
      class_details: {
        id: string
        class_name: string
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
      {original.class_details?.class_name}
    </Element>

    <Flex mt="10px">
      <Link href={SCHOOL_PATHS.TEACHER_CLASSROOMS(original.id)} passHref>
        <TableLink color={theme.colors.green} width={140}>
          Go to Clasroom
        </TableLink>
      </Link>
    </Flex>
  </Flex>
)

export default ClassroomCell
