import first from 'lodash/first'

export function hasError(meta) {
  const { touched, error } = meta
  const isError = touched && error

  return { hasError: isError, error: isError ? first(error) : null }
}
