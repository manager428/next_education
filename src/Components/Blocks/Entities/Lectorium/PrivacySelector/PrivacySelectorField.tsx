import React from 'react'
import { Field, useForm } from 'react-final-form'

import map from 'lodash/map'

import { Flex } from 'Components/UI'

import PrivacyRadioButtons, {
  PRIVACY_OPTIONS,
} from 'Components/Blocks/Entities/Lectorium/PrivacySelector/PrivacyRadioButtons'
import { Label } from 'Components/Blocks/Entities/Lectorium/PrivacySelector/styles'
import { TeacherClassMultiSelector } from 'Components/Blocks/Entities/Teacher/Fields'

const PrivacySelector: React.FC<{
  name: string
}> = ({ name }) => {
  const form = useForm()

  const { values } = form.getState()

  const handlePrivacySelect = (value: string) => {
    form.change(name, [value])
  }

  const handleClassSelect = (selected: string[]) => {
    form.change(
      name,
      map(selected, item => item),
    )
  }

  const isShowClassSelector = values[name][0] !== PRIVACY_OPTIONS.ALL

  const renderField = ({ meta }) => {
    const error = meta.touched && meta.error

    return (
      <>
        <PrivacyRadioButtons onSelect={handlePrivacySelect} />

        {isShowClassSelector && (
          <Flex flexWrap="wrap" mt={20} width={1}>
            <Label>Choose for which classes the video will be available</Label>
            <TeacherClassMultiSelector
              isError={!!error}
              name="class"
              onSelect={handleClassSelect}
            />
          </Flex>
        )}
      </>
    )
  }

  return (
    <Flex flexWrap="wrap" width={1}>
      <Field name={name} render={renderField} />
    </Flex>
  )
}

export default PrivacySelector
