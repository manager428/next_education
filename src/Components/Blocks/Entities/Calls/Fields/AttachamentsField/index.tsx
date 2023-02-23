import React, { useState } from 'react'
import { Field, FieldInputProps, FieldMetaState } from 'react-final-form'

import filter from 'lodash/filter'
import forEach from 'lodash/forEach'
import get from 'lodash/get'
import map from 'lodash/map'

import { Flex } from 'Components/UI'

import {
  AttachmentIcon,
  Button,
  Container,
  DeleteIcon,
  ErrorContainer,
  FileIcon,
  FileName,
  Limit,
} from './styles'

interface FieldRenderProps<FieldValue, T extends HTMLElement = HTMLElement> {
  input: FieldInputProps<FieldValue, T>
  meta: FieldMetaState<FieldValue>
  disabled: boolean
  label?: string
  placeholder?: string
  fileSizeInMb: number
  withError?: boolean
  debounced?: boolean
}

const RenderField: React.FC<FieldRenderProps<string>> = ({
  input,
  meta,
  disabled,
  fileSizeInMb,
  ...rest
}) => {
  const [isError, setError] = useState<boolean>(false)

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setError(false)
    const filteredFiles: Array<File> = []

    forEach(get(target, 'files', []), file => {
      const fileSize = file.size / 1024 / 1024

      if (fileSize < fileSizeInMb) {
        filteredFiles.push(file)
      } else {
        setError(true)
      }
    })

    input.onChange(filteredFiles)
  }

  const error = meta.touched && meta.error ? 1 : 0

  const handleDeleteAttachment = (name: string): void => {
    input.onChange(
      filter(
        get(input, 'value', []),
        attachment => get(attachment, 'name', '') !== name,
      ),
    )
  }

  const renderAddedAttachments = (): React.ReactElement[] => {
    const attachments = get(input, 'value', [])

    return map(attachments, (attachment, index) => {
      const fileName = get(attachment, 'name')

      return (
        <Flex key={index} mb={14} width={1}>
          <FileIcon wrapperStyles={{ mr: '10px' }} />
          <FileName>{fileName}</FileName>
          <Flex flexGrow={1} flexShrink={0} justifyContent="flex-end">
            <DeleteIcon onClick={() => handleDeleteAttachment(fileName)} />
          </Flex>
        </Flex>
      )
    })
  }

  return (
    <Container isError={error} width={1}>
      <Flex flexWrap="wrap" width={1}>
        {renderAddedAttachments()}
        {isError && (
          <ErrorContainer mb={20}>
            Some files were not added because their size exceeded {fileSizeInMb}{' '}
            mb
          </ErrorContainer>
        )}
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" width={1}>
        <Button>
          <AttachmentIcon wrapperStyles={{ mr: '6px' }} />
          Add Attachment
          <input
            {...input}
            disabled={disabled}
            {...rest}
            multiple
            value={undefined}
            onChange={handleChange}
          />
        </Button>
        <Limit>Max attachment size 20 MB</Limit>
      </Flex>
    </Container>
  )
}

type AttachmentFieldProps = {
  name: string
  fileSizeInMb: number
}

const AttachmentField: React.FC<AttachmentFieldProps> = ({
  name,
  ...rest
}): React.ReactElement => (
  <Field name={name} render={RenderField} type="file" {...rest} />
)

export default AttachmentField
