import React from 'react'
import { Field } from 'react-final-form'
import PropTypes from 'prop-types'

import InnerHtml from 'dangerously-set-html-content'

import { Flex } from 'Components/UI'

import { useScopedI18n } from 'Services/I18n'

import { ErrorElem, ImageWrapper, UploadIcon, UploadInfo } from './styles'

const renderField = ({
  input,
  meta,
  mt,
  disabled,
  noError,
  maxFileSizeInMb,
  ...rest
}) => {
  const s = useScopedI18n('forms.uploadImage')
  let filePreview = ''

  if (input.value) {
    filePreview =
      input.value instanceof File
        ? URL.createObjectURL(input.value)
        : input.value
  }

  const error = meta.touched && meta.error ? 1 : 0

  const handleChange = ({ target }) => {
    const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png']
    const { onChange } = input
    const file = target.files[0]

    const fileSizeinMB = file.size / 1024 / 1024
    if (
      fileSizeinMB.toFixed(2) <= maxFileSizeInMb &&
      acceptedImageTypes.includes(file.type)
    ) {
      onChange(file)
    } else {
      onChange('')
    }
  }

  return (
    <Flex flex={1} flexWrap="wrap" mt={mt}>
      <ImageWrapper error={error}>
        <UploadIcon />
        <UploadInfo>
          <div className="title">
            <InnerHtml html={s('dragAndDrop')} />
          </div>
          <div className="sub-title">
            <InnerHtml html={s('browse')} />
          </div>
          <div className="description">
            <InnerHtml html={s('maxFileSize', { maxFileSizeInMb })} />
          </div>
        </UploadInfo>
        <input
          {...input}
          accept="image/*"
          disabled={disabled}
          placeholder="image"
          ref={rest.innerRef || null}
          type="file"
          value=""
          onChange={handleChange}
        />
        {filePreview && (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <img alt="preview" src={filePreview} />
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
  maxFileSizeInMb: 1,
  noError: false,
}

renderField.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  maxFileSizeInMb: PropTypes.number,
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
  maxFileSizeInMb: 1,
}

ImageUpload.propTypes = {
  maxFileSizeInMb: PropTypes.number,
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string.isRequired,
  noError: PropTypes.bool,
}

export default ImageUpload
