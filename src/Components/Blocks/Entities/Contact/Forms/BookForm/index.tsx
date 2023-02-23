import React from 'react'
import { openPopupWidget } from 'react-calendly'
import { Form } from 'react-final-form'

import setFieldTouched from 'final-form-set-field-touched'
import validate from 'validate.js'

import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'

import { Flex } from 'Components/UI'

import countriesList from 'Constants/countries.json'

import { entityToOptions } from 'Utils/common'
import { emailConstraint, presenceConstraint } from 'Utils/constraints'

import {
  ErrorsContainer,
  FormWrap,
  Input,
  Select,
  SubmitButton,
} from './styles'

const FIELDS = {
  NAME: 'name',
  COUNTRY: 'country',
  POSITION: 'position',
  EMAIL: 'email',
}

const POSITIONS = ['Organization', 'School Admin', 'Teacher', 'Parent']
const POSITION_OPTIONS = entityToOptions(POSITIONS, {
  uppercase: false,
  withHash: false,
})

const SchoolForm: React.FC = () => {
  const handleSubmit = (values: any) => {
    const positionCalendlyIndex = (
      POSITIONS.indexOf(values[FIELDS.POSITION]?.value) + 1
    ).toFixed(1)

    openPopupWidget({
      url: 'https://calendly.com/nataliabut/idialogue-call',
      prefill: {
        name: values[FIELDS.NAME],
        email: values[FIELDS.EMAIL],
        customAnswers: {
          a1: positionCalendlyIndex,
          a2: values[FIELDS.COUNTRY]?.label,
        },
      },
    })
  }

  const validateForm = (values: any) =>
    validate(values, {
      ...presenceConstraint(FIELDS.NAME),
      ...emailConstraint(FIELDS.EMAIL),
    })

  const renderForm = (form: any) => {
    const validationError =
      !isEmpty(get(form, 'errors')) && get(form, 'submitFailed')
        ? 'Oops! You should fill all required fields!'
        : null

    const getError = (field: string) =>
      get(form, ['touched', field], false) &&
      get(form, ['errors', field], false)

    return (
      <FormWrap width={1}>
        <Flex
          alignItems="center"
          flexDirection="column"
          flexWrap="wrap"
          maxWidth={370}
          mt={20}
          width={1}
        >
          <Input
            isError={getError(FIELDS.NAME)}
            name={FIELDS.NAME}
            noError
            placeholder="Name"
          />

          <Flex mt={20} width={1}>
            <Select
              name={FIELDS.POSITION}
              noError
              options={POSITION_OPTIONS}
              placeholder="Position"
              width="100%"
            />
          </Flex>

          <Flex mt={20} width={1}>
            <Select
              name={FIELDS.COUNTRY}
              noError
              options={countriesList}
              placeholder="Select your country"
              width="100%"
            />
          </Flex>

          <Flex mt={20} width={1}>
            <Input
              isError={getError(FIELDS.EMAIL)}
              name={FIELDS.EMAIL}
              noError
              placeholder="Email"
            />
          </Flex>

          <ErrorsContainer>{validationError}</ErrorsContainer>

          <SubmitButton onClick={form.handleSubmit}>
            Request a Demo
          </SubmitButton>
        </Flex>
      </FormWrap>
    )
  }

  return (
    <Form
      mutators={{ setFieldTouched } as any}
      render={renderForm}
      validate={validateForm}
      onSubmit={handleSubmit}
    />
  )
}

export default SchoolForm
