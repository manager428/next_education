import React from 'react'

import { copyGlyph } from 'Assets/svg/common'

import { Element, Flex, Icon } from 'Components/UI'

import { theme } from 'Theme'

import { copyToClipboard } from 'Utils/common'

import { CopyButton, RoundedFlex } from '../styles'

const CopyCode = ({ classRoomCode }: { classRoomCode?: string }) => (
  <RoundedFlex flexDirection="column" maxWidth="474px">
    <Element
      color={theme.colors.orange}
      fontSize={22}
      lineHeight="22px"
      textAlign="center"
      width={1}
    >
      Enrol your students to this classroom
    </Element>

    <Element
      color={theme.colors.gray}
      fontSize={16}
      lineHeight="22px"
      mt={14}
      textAlign="center"
      width={1}
    >
      Your students can join the program at idialogue.com using <br />
      your project code (press button to copy):
    </Element>

    <Flex maxWidth={474} mt={14}>
      {classRoomCode && (
        <CopyButton onClick={() => copyToClipboard(classRoomCode)}>
          <Icon
            fill="white"
            icon={copyGlyph}
            size={18}
            wrapperStyles={{ mr: 10 }}
          />
          {classRoomCode}
        </CopyButton>
      )}
    </Flex>
  </RoundedFlex>
)

export default CopyCode
