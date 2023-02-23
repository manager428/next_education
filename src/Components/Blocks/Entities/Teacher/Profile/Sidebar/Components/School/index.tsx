import React from 'react'

import { Element, Flex } from 'Components/UI'

import { Logo } from 'Components/Blocks/Entities/Teacher/Profile/Sidebar/Components/School/styles'
import { RoundedBlock } from 'Components/Blocks/Entities/Teacher/Profile/Sidebar/styles'

import { theme } from 'Theme'

const School = ({ logo, schoolName }: { logo: string; schoolName: string }) => (
  <RoundedBlock alignItems="center" maxWidth={320} width={1}>
    <Flex>
      <Logo src={logo} />
    </Flex>
    <Flex flexWrap="wrap" ml="14px">
      <Element
        color={theme.colors.graySecondary}
        fontSize="16px"
        fontWeight={400}
        width={1}
      >
        School:
      </Element>
      <Element
        color={theme.colors.gray}
        fontSize="16px"
        fontWeight={400}
        mt="8px"
        width={1}
      >
        {schoolName}
      </Element>
    </Flex>
  </RoundedBlock>
)

export default School
