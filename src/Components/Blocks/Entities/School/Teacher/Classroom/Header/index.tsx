import React from 'react'

import { useRouter } from 'next/router'

import { groupAvatar } from 'Assets/images/chat'

import { Element, Flex } from 'Components/UI'

import {
  Avatar,
  BackButton,
} from 'Components/Blocks/Entities/School/Teacher/Classroom/Header/styles'

import { theme } from 'Theme'

type Props = {
  fullname?: string
  avatar?: string
  classroomName?: string
  classLogo?: string
}

const Header = ({
  fullname = '',
  avatar,
  classroomName = '',
  classLogo = groupAvatar.src,
}: Props) => {
  const router = useRouter()

  function handleGoBack(e) {
    e.preventDefault()
    router.back()
  }

  return (
    <Flex flexWrap="wrap" justifyContent="space-between" width={1}>
      <Flex alignItems="center" flexWrap="wrap" width="50%">
        <Flex alignItems="center" width={1}>
          {avatar && <Avatar src={avatar} />}
          <Element fontSize="20px" fontWeight={600} ml="14px">
            Teacher:
          </Element>
          {fullname && (
            <Element
              color={theme.colors.green}
              fontSize="20px"
              fontWeight={600}
              ml="14px"
            >
              {fullname}
            </Element>
          )}
        </Flex>

        <Flex alignItems="center" mt="20px" width={1}>
          <Avatar src={classLogo} />
          <Flex ml="14px">
            <Element fontSize="20px" fontWeight={600}>
              Classroom:
            </Element>
            {classroomName && (
              <Element
                color={theme.colors.green}
                fontSize="20px"
                fontWeight={600}
                ml="14px"
              >
                {classroomName}
              </Element>
            )}
          </Flex>
        </Flex>
      </Flex>

      <Flex alignItems="center" alignSelf="flex-start">
        <BackButton
          color={theme.colors.graySecondary}
          width="100px"
          onClick={handleGoBack}
        >
          Go Back
        </BackButton>
      </Flex>
    </Flex>
  )
}

export default Header
