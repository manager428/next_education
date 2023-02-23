import React from 'react'

import Link from 'next/link'

import { copyGlyph } from 'Assets/svg/common'
import {
  classroomIconGlyph,
  studentIconGlyph,
  teacherIconGlyph,
} from 'Assets/svg/school'

import {
  Block,
  BlockLink,
  CopyButton,
} from 'Containers/Pages/School/Manage/Overview/styles'

import { Element, Flex, Icon, Loader } from 'Components/UI'

import { SCHOOL_PATHS } from 'Constants/paths'

import { theme } from 'Theme'

import { copyToClipboard } from 'Utils/common'

type Props = {
  isLoading: boolean
  code: string
  teachersCount: number
  studentsCount: number
  classroomsCount: number
}
const useRender = ({
  code = '',
  teachersCount = 0,
  studentsCount = 0,
  classroomsCount = 0,
  isLoading,
}: Props) => {
  function handleClick() {
    copyToClipboard(code)
  }

  function renderContent() {
    if (isLoading)
      return (
        <Flex minHeight="400px" mt={36} width={1}>
          <Loader />
        </Flex>
      )

    return (
      <Flex mt={36}>
        <Block
          flexWrap="wrap"
          justifyContent="center"
          maxWidth={360}
          padding={20}
          width={1}
        >
          <Element
            fontSize="18px"
            fontWeight={600}
            lineHeight="24px"
            textAlign="center"
          >
            Enroll your Teachers
          </Element>
          <Element
            fontSize="14px"
            lineHeight="20px"
            mt={14}
            textAlign="center"
            width={1}
          >
            Your teachers can join the program at www.idialogue.com using your
            School Code (press button to copy):
          </Element>

          <CopyButton mt={14} onClick={handleClick}>
            <Icon
              fill="white"
              icon={copyGlyph}
              size={18}
              wrapperStyles={{ mr: 10 }}
            />
            {code}
          </CopyButton>
        </Block>

        <Flex>
          <Block
            alignContent="center"
            flexWrap="wrap"
            justifyContent="center"
            ml={32}
            width={170}
          >
            <Icon icon={teacherIconGlyph} />
            <Element
              fontSize="28px"
              fontWeight={800}
              lineHeight="28px"
              mt="8px"
              textAlign="center"
              width={1}
            >
              {teachersCount}
            </Element>
            <Element
              fontSize="18px"
              fontWeight={600}
              lineHeight="18px"
              mt="6px"
              textAlign="center"
              width={1}
            >
              Teachers
            </Element>

            <Flex mt="10px">
              <Link href={SCHOOL_PATHS.TEACHERS} passHref>
                <BlockLink color={theme.colors.green} width={110}>
                  View All
                </BlockLink>
              </Link>
            </Flex>
          </Block>

          <Block
            alignContent="center"
            flexWrap="wrap"
            justifyContent="center"
            ml={32}
            width={170}
          >
            <Icon icon={classroomIconGlyph} />
            <Element
              fontSize="28px"
              fontWeight={800}
              lineHeight="28px"
              mt="8px"
              textAlign="center"
              width={1}
            >
              {classroomsCount}
            </Element>
            <Element
              fontSize="18px"
              fontWeight={600}
              lineHeight="18px"
              mt="6px"
              textAlign="center"
              width={1}
            >
              Classrooms
            </Element>

            <Flex mt="10px">
              <Link href={SCHOOL_PATHS.CLASSROOMS} passHref>
                <BlockLink color={theme.colors.orange} width={110}>
                  View All
                </BlockLink>
              </Link>
            </Flex>
          </Block>

          <Block
            alignContent="center"
            flexWrap="wrap"
            justifyContent="center"
            ml={32}
            width={170}
          >
            <Icon icon={studentIconGlyph} />
            <Element
              fontSize="28px"
              fontWeight={800}
              lineHeight="28px"
              mt="8px"
              textAlign="center"
              width={1}
            >
              {studentsCount}
            </Element>
            <Element
              fontSize="18px"
              fontWeight={600}
              lineHeight="18px"
              mt="6px"
              textAlign="center"
              width={1}
            >
              Students
            </Element>

            <Flex mt="10px">
              <Link href={SCHOOL_PATHS.STUDENTS} passHref>
                <BlockLink color={theme.colors.orange} width={110}>
                  View All
                </BlockLink>
              </Link>
            </Flex>
          </Block>
        </Flex>
      </Flex>
    )
  }

  return { renderContent }
}

export default useRender
