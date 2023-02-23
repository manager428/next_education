import React from 'react'
import { Field } from 'react-final-form'

import map from 'lodash/map'

import { EntitySelect } from 'Components/UI'
import { EntitySelectProps } from 'Components/UI/EntitySelect'

import { hasError } from 'Utils/form'

import { Container, Label, Tooltip } from './styles'

type EntitySelectFieldProps = Omit<EntitySelectProps, 'onChange'> & {
  name: string
  showErrorMessage?: boolean
  label?: string
  className?: string
  isDisabled?: boolean
}

const EntitySelectField: React.FC<EntitySelectFieldProps> = ({
  placeholder,
  label,
  name,
  optionsMapper,
  url,
  queryKey,
  showErrorMessage = true,
  className,
  isDisabled,
  ...rest
}) => (
  <Field
    name={name}
    url={url}
    {...rest}
    render={({ meta, input }) => {
      const { hasError: isError } = hasError(meta)

      return (
        <Container
          className={`${className ?? ''} ${isError ? 'error' : ''}`}
          width={1}
        >
          {label && (
            <Label
              dangerouslySetInnerHTML={{ __html: label }}
              htmlFor={input.id}
              mb={2}
            />
          )}

          <EntitySelect
            isDisabled={isDisabled}
            optionsMapper={optionsMapper}
            queryKey={queryKey}
            url={url}
            {...input}
            {...rest}
            placeholder={placeholder}
            // eslint-disable-next-line react/jsx-handler-names
            onChange={input.onChange}
          />

          {showErrorMessage && isError && (
            <Tooltip className="error-tooltip">
              {map(meta.error, item => item)}
            </Tooltip>
          )}
        </Container>
      )
    }}
  />
)

export default EntitySelectField
