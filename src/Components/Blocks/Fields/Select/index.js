import React from 'react'
import { Field } from 'react-final-form'
import PropTypes from 'prop-types'

import map from 'lodash/map'

import BaseSelect from 'Components/UI/Select'

import { Container, Label, Tooltip } from './styles'

const renderField = ({
  className,
  disabled,
  options,
  placeholder,
  components,
  noError,
  meta,
  input,
  portal,
  label,
  height,
  selectProps,
  ...rest
}) => {
  const error = meta.touched && meta.error ? 1 : 0

  return (
    <Container
      className={`${className} ${error ? 'error' : null}`}
      // error={hasError ? 'true' : undefined}
      {...rest}
    >
      {label && (
        <Label
          dangerouslySetInnerHTML={{ __html: label }}
          htmlFor={input.id}
          mb={2}
        />
      )}

      <BaseSelect
        blurInputOnSelect={false}
        className="react-select__container"
        classNamePrefix="react-select"
        components={components}
        error={error}
        isDisabled={disabled}
        menuPortalTarget={portal}
        options={options}
        {...input}
        {...selectProps}
        height={height}
        placeholder={placeholder}
        onBlur={event => input.onBlur(event)}
      />

      {!noError && meta.touched && meta.error && (
        <Tooltip
          centered={rest.centered}
          className="error-tooltip"
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
  disabled: false,
  portal: null,
  height: null,
  noError: false,
  selectProps: null,
}

renderField.propTypes = {
  className: PropTypes.string.isRequired,
  components: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  height: PropTypes.number,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
  noError: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ).isRequired,
  placeholder: PropTypes.string.isRequired,
  portal: PropTypes.object,
  selectProps: PropTypes.object,
  top: PropTypes.number.isRequired,
}

const Select = ({
  className,
  options,
  portal,
  placeholder,
  top,
  label,
  height,
  ...rest
}) => (
  <Field
    className={`${className} react-select__container`}
    height={height}
    label={label}
    options={options}
    placeholder={placeholder}
    portal={portal}
    render={renderField}
    top={top}
    {...rest}
  />
)

Select.defaultProps = {
  className: '',
  disabled: false,
  label: '',
  portal: null,
  top: 0,
  height: null,
  placeholder: '',
}

Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  height: PropTypes.number,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ).isRequired,
  placeholder: PropTypes.string,
  portal: PropTypes.object,
  top: PropTypes.number,
}

export default Select
