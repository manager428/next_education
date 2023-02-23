/* eslint-disable react/jsx-handler-names */
import React from 'react'
import { Field } from 'react-final-form'
import PropTypes from 'prop-types'

import map from 'lodash/map'

import { EditorInput as BaseEditorInput } from 'Components/UI'

import { Container, Label, Tooltip } from './styles'

const renderField = ({
  input,
  meta,
  disabled,
  label,
  placeholder,
  type,
  className,
  noError,
  ...rest
}) => {
  const error = meta.touched && meta.error ? 1 : 0

  return (
    <Container
      {...rest.styles}
      className={className}
      error={error}
      left={rest.left}
    >
      {label && <Label htmlFor={input.id}>{label}</Label>}

      <BaseEditorInput
        className={className}
        error={error}
        parentRef={rest.parentRef}
        type={type}
        onSetRef={rest.onSetRef}
        {...input}
        disabled={disabled}
        placeholder={placeholder}
        {...rest}
        label={label}
        left="0"
      />

      {!noError && meta.touched && meta.error && (
        <Tooltip
          centered={rest.centered}
          className="tooltip"
          left={rest.left}
          mt={rest.left && '4px'}
        >
          {map(meta.error, item => item)}
        </Tooltip>
      )}
    </Container>
  )
}

renderField.defaultProps = {
  className: '',
  disabled: false,
  tip: null,
  tipPosition: 'center',
  noError: false,
}

renderField.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  noError: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  tip: PropTypes.string,
  tipPosition: PropTypes.string,
  type: PropTypes.string.isRequired,
}

const EditorInput = ({ label, name, placeholder, type, tip, ...rest }) => (
  <Field
    label={label}
    name={name}
    placeholder={placeholder}
    render={renderField}
    tip={tip}
    type={type}
    {...rest}
  />
)

EditorInput.defaultProps = {
  label: '',
  left: false,
  placeholder: '',
  tip: null,
  type: 'text',
  noError: false,
}

EditorInput.propTypes = {
  label: PropTypes.string,
  left: PropTypes.bool,
  name: PropTypes.string.isRequired,
  noError: PropTypes.bool,
  placeholder: PropTypes.string,
  tip: PropTypes.string,
  type: PropTypes.string,
}

export default EditorInput
