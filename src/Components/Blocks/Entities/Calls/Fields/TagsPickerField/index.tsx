import React, { useState } from 'react'
import { Field, FieldInputProps, FieldMetaState } from 'react-final-form'

import filter from 'lodash/filter'
import get from 'lodash/get'
import map from 'lodash/map'

import { Flex } from 'Components/UI'

import { TagsPopup } from 'Components/Blocks/Popups/index'

import {
  Container,
  EditButton,
  EditContainer,
  Tag,
  TagsContainer,
} from './styles'

type Props = {
  name: string
}
interface FieldRenderProps<FieldValue, T extends HTMLElement = HTMLElement> {
  input: FieldInputProps<FieldValue, T>
  meta: FieldMetaState<FieldValue>
}

const TagsPickerField: React.FC<Props> = ({ name, ...rest }) => {
  const [isShowPopup, setShowPopup] = useState<boolean>(false)

  const handleShowTagsPopup = (event: React.MouseEvent): void => {
    event.preventDefault()
    setShowPopup(true)
  }

  const handleUpdate = (input, tags: Array<string>): void => {
    input.onChange(tags.join(','))
    setShowPopup(false)
  }

  const renderField: React.FC<FieldRenderProps<string>> = ({
    input,
  }): React.ReactElement => {
    const value = filter(get(input, 'value').split(','), it => it !== '')
    return (
      <>
        {isShowPopup && (
          <TagsPopup
            selectedTags={value}
            onClose={() => setShowPopup(false)}
            onSubmit={tags => handleUpdate(input, tags)}
          />
        )}
        <Flex justifyContent="space-between" width={1}>
          <TagsContainer>
            {map(value, it => (
              <Tag key={it}>#{it}</Tag>
            ))}
          </TagsContainer>
          <EditContainer onClick={handleShowTagsPopup}>
            <EditButton wrapperStyles={{ mr: '6px' }} />
            Edit Tags
          </EditContainer>
        </Flex>
      </>
    )
  }

  return (
    <Container>
      <Field disabled name={name} render={renderField} {...rest} />
    </Container>
  )
}

export default TagsPickerField
