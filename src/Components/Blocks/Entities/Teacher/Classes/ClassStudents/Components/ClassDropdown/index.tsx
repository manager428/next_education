import React from 'react'

import { editPencilGlyph } from 'Assets/svg/common'

import { Element, Icon } from 'Components/UI'

import { ENGLISH_LEVEL_ENUM } from 'Constants/ids'

import { theme } from 'Theme'

import { Container, Text } from './styles'

const ClassDropdown: React.FC<{
  className: string
  classId: number
  englishLevel: ENGLISH_LEVEL_ENUM | null
  onSelect: () => void
}> = ({ onSelect }) => (
  <Container>
    <Text>
      <Icon
        fill={theme.colors.grayMid}
        icon={editPencilGlyph}
        size={13}
        wrapperStyles={{ mr: '6px' }}
      />
      <Element onClick={onSelect}>Select multiple students</Element>
    </Text>
  </Container>
)

export default ClassDropdown
