import React from 'react'
import { Field, FieldInputProps, FieldMetaState } from 'react-final-form'

import { Container } from './styles'

interface FieldRenderProps<FieldValue, T extends HTMLElement = HTMLElement> {
  input: FieldInputProps<FieldValue, T>
  meta: FieldMetaState<FieldValue>
  disabled: boolean
  label?: string
  placeholder?: string
  withError?: boolean
  debounced?: boolean
}

const renderField: React.FC<FieldRenderProps<string>> = ({
  input,
  meta,
  disabled,
  placeholder,
  ...rest
}) => {
  const error = meta.touched && meta.error ? 1 : 0

  return (
    <Container isError={error}>
      <input
        {...input}
        disabled={disabled}
        placeholder={placeholder}
        {...rest}
      />
    </Container>
  )
}

type InputProps = {
  name: string
  placeholder?: string
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  ...rest
}): React.ReactElement => (
  <Field name={name} placeholder={placeholder} render={renderField} {...rest} />
)

export default Input
