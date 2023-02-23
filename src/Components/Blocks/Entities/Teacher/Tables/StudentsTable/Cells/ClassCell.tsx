/* eslint-disable camelcase */
import React from 'react'

import Link from 'next/link'

import { Element, Flex } from 'Components/UI'

import { TableLink } from 'Components/Blocks/Entities/Teacher/Tables/StudentsTable/styles'

import { TEACHER_PATHS } from 'Constants/paths'

import { theme } from 'Theme'

const ClassCell: React.FC<{
  row: {
    original: {
      class_details: {
        id: number
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
      {original.class_details.class_name}
    </Element>

    <Flex mt="10px">
      <Link href={TEACHER_PATHS.CLASSES(original.class_details.id)} passHref>
        <TableLink color={theme.colors.orange} width={140}>
          Go to Classroom
        </TableLink>
      </Link>
    </Flex>
  </Flex>
)

export default ClassCell
