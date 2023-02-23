import React from 'react'
import { Field } from 'react-final-form'
import PropTypes from 'prop-types'

import { Flex } from 'Components/UI'

import {
  DeleteIcon,
  ErrorElem,
  ImageWrapper,
  UploadIcon,
  UploadInfo,
} from './styles'

const GIF_MAX_SIZE = 30
const IMAGE_MAX_SIZE = 2

const renderField = ({ input, meta, mt, disabled, noError }) => {
  let filePreview = ''

  if (input.value) {
    filePreview = input.value?.type
      ? URL.createObjectURL(input.value)
      : input.value
  }
  const error = meta.touched && meta.error ? 1 : 0

  const handleChange = ({ target }) => {
    const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png']
    const { onChange } = input
    const file = target.files[0]

    const fileSizeinMB = file.size / 1024 / 1024

    if (file.type === 'image/gif' && fileSizeinMB.toFixed(2) <= GIF_MAX_SIZE) {
      onChange(file)
    } else if (
      fileSizeinMB.toFixed(2) <= IMAGE_MAX_SIZE &&
      acceptedImageTypes.includes(file.type)
    ) {
      onChange(file)
    } else {
      onChange('')
    }
  }

  const handleDelete = () => {
    input.onChange(null)
  }

  return (
    <Flex flex={1} flexWrap="wrap" mt={mt}>
      <ImageWrapper error={error}>
        <UploadIcon />
        <UploadInfo>
          <div className="title">
            Drag and drop <span>Image to the Call</span>
          </div>
          <div className="sub-title">
            or <span>browse</span> to choose a file
          </div>
          <div className="description">
            (Max file size 2MB for image, 30MB for gif)
          </div>
        </UploadInfo>
        <input
          {...input}
          accept="image/*"
          disabled={disabled}
          placeholder="image"
          type="file"
          value=""
          onChange={handleChange}
        />
        {filePreview && (
          <>
            <img alt="preview" src={filePreview} />
            <DeleteIcon onClick={() => handleDelete()} />
          </>
        )}
      </ImageWrapper>

      {!noError && (
        <ErrorElem as="div">
          {meta.touched && meta.error && <span>{meta.error}</span>}
        </ErrorElem>
      )}
    </Flex>
  )
}
renderField.defaultProps = {
  className: '',
  disabled: false,
  noError: false,
}

renderField.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  mt: PropTypes.number.isRequired,
  noError: PropTypes.bool,
}

const ImageUpload = ({ name, ...rest }) => (
  <Field name={name} render={renderField} {...rest} />
)

ImageUpload.defaultProps = {
  mt: 25,
  noError: false,
}

ImageUpload.propTypes = {
  mt: PropTypes.number,
  name: PropTypes.string.isRequired,
  noError: PropTypes.bool,
}

export default ImageUpload
