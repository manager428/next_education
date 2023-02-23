import React from 'react'
import { Field, FieldInputProps, FieldMetaState } from 'react-final-form'

import { Flex } from 'Components/UI'

import ImageInput from './Components/ImageInput'
import { Container } from './styles'

interface FieldRenderProps<FieldValue, T extends HTMLElement = HTMLElement> {
  input: FieldInputProps<FieldValue, T>
  meta: FieldMetaState<FieldValue>
  disabled: boolean
  fileSizeInMb: number
  placeholder?: string
  label?: string
  withError?: boolean
  debounced?: boolean
}

const RenderField: React.FC<FieldRenderProps<string>> = ({ input, meta }) => {
  const error = meta.touched && meta.error ? 1 : 0

  return (
    <Container isError={error} justifyContent="space-between" width={1}>
      <Flex alignItems="center" justifyContent="space-between" maxWidth={176}>
        <ImageInput name={`${input.name}[0]`} />
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" maxWidth={176}>
        <ImageInput name={`${input.name}[1]`} />
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" maxWidth={176}>
        <ImageInput name={`${input.name}[2]`} />
      </Flex>
    </Container>
  )
}

type Props = {
  name: string
}

const ImagesField: React.FC<Props> = ({
  name,
  ...rest
}): React.ReactElement => (
  <Field name={name} render={RenderField} type="file" {...rest} />
)

export default ImagesField
