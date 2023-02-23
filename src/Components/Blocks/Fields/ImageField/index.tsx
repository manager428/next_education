import React from 'react'
import { Field } from 'react-final-form'

import map from 'lodash/map'

import Flex from 'Components/UI/Flex'
import ImageInput from 'Components/UI/Forms/ImageInput'

import { hasError } from 'Utils/form'

import { Tooltip } from './styles'

type Props = {
  name: string
  showErrorMessage: boolean
  disabled: boolean
  imageWidth?: string
  imageHeight?: string
  [rest: string]: any
}

const ImageField = React.forwardRef<React.RefObject<any>, Props>(
  (
    {
      name,
      disabled,
      showErrorMessage,
      imageWidth = '64px',
      imageHeight = '64px',
      ...rest
    },
    ref,
  ) => (
    <Field name={name}>
      {({ input, meta }) => {
        const { hasError: isError } = hasError(meta)

        return (
          <Flex flexWrap="wrap">
            <ImageInput
              disabled={disabled}
              imageHeight={imageHeight}
              imageWidth={imageWidth}
              {...input}
              {...rest}
              ref={ref}
            />

            {showErrorMessage && isError && (
              <Tooltip className="error-tooltip">
                {map(meta.error, item => item)}
              </Tooltip>
            )}
          </Flex>
        )
      }}
    </Field>
  ),
)

export default ImageField
