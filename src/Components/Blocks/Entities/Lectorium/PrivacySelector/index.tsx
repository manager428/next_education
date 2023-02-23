import React from 'react'

import { useDebouncedCallback } from 'use-debounce'

import { Flex } from 'Components/UI'

import PrivacyRadioButtons, {
  PRIVACY_OPTIONS,
} from 'Components/Blocks/Entities/Lectorium/PrivacySelector/PrivacyRadioButtons'
import { Label } from 'Components/Blocks/Entities/Lectorium/PrivacySelector/styles'
import { TeacherClassMultiSelector } from 'Components/Blocks/Entities/Teacher/Fields'

const PrivacySelector: React.FC<{
  onSelect: (value) => void
  value?: string[]
}> = ({ value, onSelect }) => {
  const handlePrivacySelect = (selectedValue: string) => {
    onSelect([selectedValue])
  }

  const isShowClassSelector = value && value[0] !== PRIVACY_OPTIONS.ALL

  const privacyButtonValue =
    value && value[0] === PRIVACY_OPTIONS.ALL
      ? PRIVACY_OPTIONS.ALL
      : PRIVACY_OPTIONS.STUDENTS

  const debouncedHandleClassSelect = useDebouncedCallback(selected => {
    onSelect(selected)
  }, 0)

  return (
    <Flex flexWrap="wrap" width={1}>
      <PrivacyRadioButtons
        value={privacyButtonValue}
        onSelect={handlePrivacySelect}
      />

      {isShowClassSelector && (
        <Flex flexWrap="wrap" mt={20} width={1}>
          <Label>Choose for which classes the video will be available</Label>
          <TeacherClassMultiSelector
            name="class"
            value={value}
            onSelect={debouncedHandleClassSelect}
          />
        </Flex>
      )}
    </Flex>
  )
}

export default PrivacySelector
