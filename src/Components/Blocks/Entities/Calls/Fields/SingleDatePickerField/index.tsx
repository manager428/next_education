import React, { useState } from 'react'
import { Field, FieldInputProps, FieldMetaState } from 'react-final-form'

import { DateTime } from 'luxon'

import CalendarWidget from 'Components/Blocks/CalendarWidget'

import { CalendarContainer, Container, ValueContainer } from './styles'

type Props = {
  name: string
  placeholder: string | undefined
}

interface FieldRenderProps<FieldValue, T extends HTMLElement = HTMLElement> {
  input: FieldInputProps<FieldValue, T>
  meta: FieldMetaState<FieldValue>
}

const SingleDatePickerField: React.FC<Props> = ({
  name,
  placeholder,
  ...rest
}): React.ReactElement => {
  const [isShowPicker, setShowPicker] = useState<boolean>(false)

  const handleChange = (from, to, input) => {
    input.onChange(from)
  }

  const renderField: React.FC<FieldRenderProps<string>> = ({
    input,
    meta,
  }): React.ReactElement => {
    const fromDate = input.value ? new Date(input.value) : new Date()
    const error = meta.touched && meta.error ? 1 : 0

    return (
      <CalendarContainer
        isError={error}
        maxWidth="180px"
        minWidth="180px"
        onClick={() => setShowPicker(true)}
      >
        <ValueContainer>
          {input.value
            ? DateTime.fromISO(input.value).toFormat('dd.MM.yyyy')
            : placeholder}
        </ValueContainer>
        <CalendarWidget
          isOpened={isShowPicker}
          selectedRange={{
            from: fromDate,
            to: fromDate,
          }}
          type="single"
          onClose={() => setShowPicker(false)}
          onDateSelected={(from, to) => handleChange(from, to, input)}
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

export default SingleDatePickerField
