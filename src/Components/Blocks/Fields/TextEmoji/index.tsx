import React, { useCallback } from 'react'
import { Field } from 'react-final-form'

import EmojiInput from 'Components/UI/Forms/EmojiInput'

import { Props } from './types'

const TextEmoji: React.FC<Props> = ({ name, placeholder, onSetRef }) => {
  const renderField = useCallback(
    ({ input }) => (
      <EmojiInput
        name={name}
        placeholder={placeholder}
        onSetRef={onSetRef}
        {...input}
      />
    ),
    [name],
  )

  return <Field name={name} placeholder={placeholder} render={renderField} />
}

export default TextEmoji
