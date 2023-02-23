import React from 'react'

import Link from 'next/link'

import { classroomIconGlyph, studentIconGlyph } from 'Assets/svg/school'

import { Element, Flex, Icon } from 'Components/UI'

import {
  LinkWithBorder,
  RoundedBlock,
} from 'Components/Blocks/Entities/Teacher/Profile/Sidebar/styles'

import { SCHOOL_PATHS } from 'Constants/paths'

import { theme } from 'Theme'

const TeacherUsersAndClasses = ({
  classroomsCount,
  studentsCount,
  userId,
}: {
  classroomsCount: number
  studentsCount: number
  userId: number
}) => (
  <Flex justifyContent="space-between" width={1}>
    <RoundedBlock
      alignItems="center"
      flexWrap="wrap"
      maxWidth="150px"
      width={1}
    >
      <Flex justifyContent="center" mt="8px" width={1}>
        <Icon icon={classroomIconGlyph} />
      </Flex>
      <Flex flexWrap="wrap" width={1}>
        <Element
          fontSize="28px"
          fontWeight={400}
          lineHeight="28px"
          mt="6px"
          textAlign="center"
          width={1}
        >
          {studentsCount}
        </Element>

        <Element
          color={theme.colors.gray}
          fontSize="18px"
          fontWeight={600}
          mt="6px"
          textAlign="center"
          width={1}
        >
          Students
        </Element>

        <Flex mt="10px" textAlign="center" width={1}>
          <Link href={SCHOOL_PATHS.TEACHER_STUDENTS(userId)} passHref>
            <LinkWithBorder color={theme.colors.green}>View All</LinkWithBorder>
          </Link>
        </Flex>
      </Flex>
    </RoundedBlock>

    <RoundedBlock
      alignItems="center"
      flexWrap="wrap"
      maxWidth="150px"
      width={1}
    >
      <Flex justifyContent="center" mt="8px" width={1}>
        <Icon icon={studentIconGlyph} />
      </Flex>
      <Flex flexWrap="wrap" width={1}>
        <Element
          fontSize="28px"
          fontWeight={400}
          lineHeight="28px"
          mt="6px"
          textAlign="center"
          width={1}
        >
          {classroomsCount}
        </Element>
        <Element
          color={theme.colors.gray}
          fontSize="18px"
          fontWeight={600}
          mt="6px"
          textAlign="center"
          width={1}
        >
          Classrooms
        </Element>

        <Flex mt="10px" textAlign="center" width={1}>
          <Link href={SCHOOL_PATHS.TEACHER_CLASSROOMS(userId)} passHref>
            <LinkWithBorder color={theme.colors.orange}>
              View All
            </LinkWithBorder>
          </Link>
        </Flex>
      </Flex>
    </RoundedBlock>
  </Flex>
)

export default TeacherUsersAndClasses
