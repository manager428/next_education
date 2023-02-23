import React from 'react'
import { Field } from 'react-final-form'

import TeacherClassMultiSelector from 'Components/Blocks/Entities/Teacher/Fields/TeacherClassMultiSelector/index'
import { Container } from 'Components/Blocks/Entities/Teacher/Fields/TeacherClassMultiSelector/styles'

const TeacherClassMultiSelectorField: React.FC<{
  name: string
  placeholder?: string
  selectProps?: Record<string, unknown>
}> = ({ name, selectProps = {}, placeholder, ...rest }) => {
  const renderField = ({ input, meta }) => {
    const error = meta.touched && meta.error

    return (
      <TeacherClassMultiSelector
        {...input}
        isError={!!error}
        name={name}
        placeholder={placeholder}
        selectProps={selectProps}
        // eslint-disable-next-line react/jsx-handler-names
        onSelect={input.onChange}
      />
    )
  }

  return (
    <Container>
      <Field name={name} render={renderField} {...rest} />
    </Container>
  )
}

export default TeacherClassMultiSelectorField
