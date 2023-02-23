import React from 'react'

import Link from 'next/link'

import { Element, Flex } from 'Components/UI'

import { PRIVATE_PATHS } from 'Constants/paths'

import _ from 'Services/I18n'

import { theme } from 'Theme'

import { Logo } from './styles'

import { RoundedBlock } from '../../styles'

const Teacher = ({
  avatar,
  name,
  userId,
  link = true,
}: {
  avatar: string
  name: string
  userId: number
  link: boolean
}) => {
  const renderWithLink = () => (
    <RoundedBlock alignItems="center" maxWidth={320} width={1}>
      <Link href={PRIVATE_PATHS.USER_PROFILE(userId)} passHref>
        <Flex as="a">
          <Flex alignItems="center">
            <Logo src={avatar} />
          </Flex>
          <Flex flexWrap="wrap" ml="14px">
            <Element
              color={theme.colors.graySecondary}
              fontSize="16px"
              fontWeight={400}
              width={1}
            >
              Teacher:
            </Element>
            <Element
              color={theme.colors.gray}
              fontSize="16px"
              fontWeight={400}
              mt="8px"
              width={1}
            >
              {name}
            </Element>
          </Flex>
        </Flex>
      </Link>
    </RoundedBlock>
  )

  const renderWithoutLink = () => (
    <RoundedBlock alignItems="center" maxWidth={320} width={1}>
      <Flex>
        <Flex alignItems="center">
          <Logo src={avatar} />
        </Flex>
        <Flex flexWrap="wrap" ml="14px">
          <Element
            color={theme.colors.graySecondary}
            fontSize="16px"
            fontWeight={400}
            width={1}
          >
            {_('general.teacher')}:
          </Element>
          <Element
            color={theme.colors.gray}
            fontSize="16px"
            fontWeight={400}
            mt="8px"
            width={1}
          >
            {name}
          </Element>
        </Flex>
      </Flex>
    </RoundedBlock>
  )

  return link ? renderWithLink() : renderWithoutLink()
}

export default Teacher
