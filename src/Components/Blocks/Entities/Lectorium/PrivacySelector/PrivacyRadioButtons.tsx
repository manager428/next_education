import React, { useEffect, useState } from 'react'

import { Element, Flex } from 'Components/UI'

import { theme } from 'Theme'

import { Container, StyledCheckbox } from './styles'

export enum PRIVACY_OPTIONS {
  ALL = 'all_students',
  STUDENTS = 'students',
}

const PrivacyRadioButtons: React.FC<{
  onSelect: (value: PRIVACY_OPTIONS) => void
  value?: PRIVACY_OPTIONS
}> = ({ value, onSelect }) => {
  const [privacy, setPrivacy] = useState<PRIVACY_OPTIONS>(PRIVACY_OPTIONS.ALL)

  useEffect(() => {
    if (value) {
      setPrivacy(value)
    }
  }, [value])

  const handleChangePrivacySelector = selected => () => {
    setPrivacy(selected)
    onSelect(selected)
  }

  return (
    <Container flexWrap="wrap" width={1}>
      <Element color={theme.colors.graySecondary} fontSize={16} width={1}>
        Choose Video Privacy:
      </Element>

      <Flex flexWrap="wrap" mt={14} width={1}>
        <Flex width={1}>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <StyledCheckbox
            checked={privacy === PRIVACY_OPTIONS.ALL}
            id="privacy-all"
            withLabel
            onChange={handleChangePrivacySelector(PRIVACY_OPTIONS.ALL)}
          >
            <Element color={theme.colors.graySecondary} fontSize={14}>
              For all students
            </Element>
          </StyledCheckbox>
        </Flex>

        <Flex mt={14} width={1}>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <StyledCheckbox
            checked={privacy === PRIVACY_OPTIONS.STUDENTS}
            id="privacy-students"
            withLabel
            onChange={handleChangePrivacySelector(PRIVACY_OPTIONS.STUDENTS)}
          >
            <Element color={theme.colors.graySecondary} fontSize={14}>
              For your students only
            </Element>
          </StyledCheckbox>
        </Flex>
      </Flex>
    </Container>
  )
}

export default PrivacyRadioButtons
