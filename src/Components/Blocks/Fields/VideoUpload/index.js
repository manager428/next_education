import React, { useState } from 'react'
import { Field } from 'react-final-form'
import PropTypes from 'prop-types'

import { Flex } from 'Components/UI'

import {
  ErrorElem,
  FileName,
  ImageWrapper,
  UploadIcon,
  UploadInfo,
} from './styles'

const SUPPORTED_TYPES = /(\.|\/)(mp4)$/i

// TODO: refactor with Dropzone

const renderField = ({ input, meta, mt, disabled, noError, fileSize }) => {
  const [filePreview, setPreview] = useState('')
  const error = meta.touched && meta.error ? 1 : 0

  const handleChange = ({ target }) => {
    const { onChange } = input
    const file = target.files[0]

    const fileSizeinMB = file.size / 1024 / 1024
    const isSupportedType =
      SUPPORTED_TYPES.test(file.type) || SUPPORTED_TYPES.test(file.name)
    if (fileSizeinMB.toFixed(2) <= fileSize && isSupportedType) {
      onChange(file)
      setPreview(file.name)
    } else {
      onChange('')
      setPreview('')
    }
  }

  return (
    <Flex flex={1} flexWrap="wrap" mt={mt}>
      <ImageWrapper error={error}>
        <UploadIcon />
        <UploadInfo>
          <div className="title">
            Drag and drop your <span>Video</span> (.mp4 only)
          </div>
          <div className="sub-title">
            or <span>browse</span> to choose a file
          </div>
          <div className="description">(Max file size {fileSize}MB)</div>
        </UploadInfo>
        <input
          {...input}
          accept="video/mp4"
          disabled={disabled}
          placeholder="video"
          type="file"
          value=""
          onChange={handleChange}
        />
        {filePreview && (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <FileName>{filePreview}</FileName>
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
  fileSize: 100,
}

renderField.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fileSize: PropTypes.number,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  mt: PropTypes.number.isRequired,
  noError: PropTypes.bool,
}

const VideoUpload = ({ name, ...rest }) => (
  <Field name={name} render={renderField} {...rest} />
)

VideoUpload.defaultProps = {
  mt: 25,
  noError: false,
  fileSize: 100,
}

VideoUpload.propTypes = {
  fileSize: PropTypes.number,
  mt: PropTypes.number,
  name: PropTypes.string.isRequired,
  noError: PropTypes.bool,
}

export default VideoUpload
