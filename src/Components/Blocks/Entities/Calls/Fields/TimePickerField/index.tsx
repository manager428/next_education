import React, { useState } from 'react'
import { Field, FieldInputProps, FieldMetaState } from 'react-final-form'

import TimePickerWidget from 'Components/Blocks/TimePickerWidget'

import { CalendarContainer, Container, ValueContainer } from './styles'

type Props = {
  name: string
  placeholder: string | undefined
}

interface FieldRenderProps<FieldValue, T extends HTMLElement = HTMLElement> {
  input: FieldInputProps<FieldValue, T>
  meta: FieldMetaState<FieldValue>
}

const TimePickerField: React.FC<Props> = ({
  name,
  placeholder,
  ...rest
}): React.ReactElement => {
  const [isShowPicker, setShowPicker] = useState<boolean>(false)
  const handleChange = (time: string, input: FieldInputProps<string>): void => {
    input.onChange(time)
  }

  const renderField: React.FC<FieldRenderProps<string>> = ({
    input,
    meta,
  }): React.ReactElement => {
    const renderValue = input.value ? input.value : placeholder
    const error = meta.touched && meta.error ? 1 : 0

    return (
      <CalendarContainer
        isError={error}
        maxWidth="170px"
        minWidth="170px"
        onClick={() => setShowPicker(true)}
      >
        <ValueContainer>{renderValue}</ValueContainer>
        <TimePickerWidget
          initialValue={input.value}
          isOpened={isShowPicker}
          onClose={() => setShowPicker(false)}
          onTimeSelected={time => handleChange(time, input)}
        />
      </CalendarContainer>
    )
  }

  return (
    <Container>
      <Field disabled name={name} render={renderField} {...rest} />
    </Container>
  )
}

export default TimePickerField
