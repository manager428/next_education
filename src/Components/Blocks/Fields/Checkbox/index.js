import React from 'react'
import { Field } from 'react-final-form'
import PropTypes from 'prop-types'

import BaseCheckbox from 'Components/UI/Checkbox'

import { Container, Tooltip } from './styles'

const renderField = ({
  meta,
  className,
  label,
  input,
  noError,
  id,
  ...rest
}) => {
  const error = meta.touched && meta.error
  // TODO: rewrite logic for label ( current implementation has two labels , withLabel, label prop
  return (
    <Container className={className} error={error}>
      <BaseCheckbox error={error} {...input} {...rest} id={`checkbox-${id}`} />
      {label && <label htmlFor={`checkbox-${input.name}`}>{label}</label>}
      {!noError && meta.touched && meta.error && (
        <Tooltip centered={rest.centered}>
          {meta.error.map(item => item)}
        </Tooltip>
      )}
    </Container>
  )
}

renderField.defaultProps = {
  className: '',
  disabled: false,
  label: null,
  noError: false,
}

renderField.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  meta: PropTypes.object.isRequired,
  noError: PropTypes.bool,
}

const Checkbox = props => (
  <Field type="checkbox" {...props} render={renderField} />
)

export default Checkbox
