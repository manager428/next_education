import React from 'react'
import { Field } from 'react-final-form'
import PropTypes from 'prop-types'

import map from 'lodash/map'

import BaseDebouncedInput from 'Components/UI/Forms/DebouncedInput'
import BaseInput from 'Components/UI/Input'

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
  debounced,
  highlight,
  ...rest
}) => {
  const error = meta.touched && meta.error ? 1 : 0

  return (
    <Container
      className={`${className} ${error && highlight ? 'error' : ''}`}
      error={error}
      left={rest.left}
      {...rest.styles}
    >
      {label && (
        <Label dangerouslySetInnerHTML={{ __html: label }} htmlFor={input.id} />
      )}

      {debounced ? (
        <BaseDebouncedInput
          error={error}
          type={type}
          {...input}
          disabled={disabled}
          placeholder={placeholder}
          {...rest}
          label={label}
          left="0"
        />
      ) : (
        <BaseInput
          error={error}
          type={type}
          {...input}
          disabled={disabled}
          placeholder={placeholder}
          {...rest}
          label={label}
          left="0"
        />
      )}

      {!noError && meta.touched && meta.error && (
        <Tooltip
          centered={rest.centered}
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
  debounced: false,
  tip: null,
  tipPosition: 'center',
  noError: false,
}

renderField.propTypes = {
  className: PropTypes.string,
  debounced: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  noError: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  tip: PropTypes.string,
  tipPosition: PropTypes.string,
  type: PropTypes.string.isRequired,
}

const Input = ({ label, name, placeholder, type, tip, ...rest }) => (
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

Input.defaultProps = {
  highlight: false,
  label: '',
  left: false,
  placeholder: '',
  tip: null,
  type: 'text',
  noError: false,
}

Input.propTypes = {
  highlight: PropTypes.bool,
  label: PropTypes.string,
  left: PropTypes.bool,
  name: PropTypes.string.isRequired,
  noError: PropTypes.bool,
  placeholder: PropTypes.string,
  tip: PropTypes.string,
  type: PropTypes.string,
}

export default Input
