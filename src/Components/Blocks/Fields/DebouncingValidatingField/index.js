import React from 'react'
import PropTypes from 'prop-types'

import Input from 'Components/Blocks/Fields/Input'

class DebouncingValidatingField extends React.Component {
  validate = (value, values, fieldState) => {
    const { validate, debounce } = this.props

    if (fieldState.active) {
      return new Promise(resolve => {
        if (this.clearTimeout) this.clearTimeout()

        const timerId = setTimeout(() => {
          resolve(validate(value, values, fieldState))
        }, debounce)

        this.clearTimeout = () => {
          clearTimeout(timerId)
          resolve()
        }
      })
    }
    return validate(value, values, fieldState)
  }

  render() {
    return <Input {...this.props} validate={this.validate} />
  }
}
DebouncingValidatingField.propTypes = {
  debounce: PropTypes.number,
  validate: PropTypes.func.isRequired,
}

DebouncingValidatingField.defaultProps = {
  debounce: 500,
}
export default DebouncingValidatingField
