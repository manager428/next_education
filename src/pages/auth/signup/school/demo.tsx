import React from 'react'
import { openPopupWidget } from 'react-calendly'
import { Form } from 'react-final-form'

import { createGlobalStyle } from 'styled-components'

import setFieldTouched from 'final-form-set-field-touched'
import { useRouter } from 'next/router'
import validate from 'validate.js'

import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'

import {
  Background,
  ErrorsContainer,
  FormContainer,
  FormTitle,
  FormWrap,
  Input,
  SchoolLogo,
  Select,
  SubmitButton,
} from 'Containers/Pages/Auth/styles'

import { Element, Flex } from 'Components/UI'

import Head from 'Components/Blocks/Head'

import countriesList from 'Constants/countries.json'
import { MEDIA_SIZES } from 'Constants/media'

import _, { useScopedI18n } from 'Services/I18n'

import { Media, theme } from 'Theme'

import { emailConstraint, presenceConstraint } from 'Utils/constraints'

const FIELDS = {
  SCHOOL_NAME: 'schoolName',
  SCHOOL_PRINCIPAL_NAME: 'schoolPrincipalName',
  COUNTRY: 'country',
  SCHOOL_EMAIL: 'email',
}

const formConstraints = {
  ...presenceConstraint(FIELDS.SCHOOL_NAME),
  ...presenceConstraint(FIELDS.SCHOOL_PRINCIPAL_NAME),
  ...presenceConstraint(FIELDS.COUNTRY),
  ...emailConstraint(FIELDS.SCHOOL_EMAIL),
}

const GlobalStyle = createGlobalStyle`
  body, html {
    min-width: 320px !important;
  }
`

const SchoolBook = () => {
  const router = useRouter()
  const s = useScopedI18n('auth.signUpSchoolDemo')

  function handleGoBack(e) {
    e.preventDefault()
    router.back()
  }

  const handleSubmit = (values: any) => {
    openPopupWidget({
      url: 'https://calendly.com/nataliabut/idialogue-school-demo',
      prefill: {
        name: values[FIELDS.SCHOOL_PRINCIPAL_NAME],
        email: values[FIELDS.SCHOOL_EMAIL],
        customAnswers: {
          a1: values[FIELDS.COUNTRY]?.label,
          a2: values[FIELDS.SCHOOL_NAME],
          a3: 'Admin',
        },
      },
    })
  }

  const renderForm = (form: any) => {
    const validationError =
      !isEmpty(get(form, 'errors')) && get(form, 'submitFailed')
        ? _('error.fillAllRequired')
        : null

    const getError = (field: string) =>
      get(form, ['touched', field], false) &&
      get(form, ['errors', field], false)

    return (
      <FormWrap alignItems="center" maxWidth="360px" pt={42} width={1}>
        <FormTitle mb={24}>{s('title')}</FormTitle>

        <Input
          highlight
          name={FIELDS.SCHOOL_NAME}
          noError
          placeholder={s('fields.schoolNamePlaceholder')}
        />

        <Input
          highlight
          name={FIELDS.SCHOOL_PRINCIPAL_NAME}
          noError
          placeholder={s('fields.principalNamePlaceholder')}
        />

        <Select
          name={FIELDS.COUNTRY}
          noError
          options={countriesList}
          placeholder={s('fields.countryPlaceholder')}
          width="100%"
        />

        <Input
          isError={getError(FIELDS.SCHOOL_EMAIL)}
          name={FIELDS.SCHOOL_EMAIL}
          noError
          placeholder={s('fields.emailPlaceholder')}
        />

        <ErrorsContainer>{validationError}</ErrorsContainer>

        <SubmitButton width={1} onClick={form.handleSubmit}>
          {s('submit')}
        </SubmitButton>

        <Element
          as="button"
          color={theme.colors.graySecondary}
          fontSize={16}
          fontWeight={600}
          margin="0 auto"
          mt={28}
          textAlign="center"
          onClick={handleGoBack}
        >
          {s('goBack')}
        </Element>
      </FormWrap>
    )
  }

  return (
    <Background>
      <GlobalStyle />
      <Head description="School demo request" title="School demo request" />

      <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
        <FormContainer flexWrap="wrap">
          <Form
            mutators={{ setFieldTouched } as any}
            render={renderForm}
            validate={values => validate(values, formConstraints)}
            onSubmit={handleSubmit}
          />
          <Flex alignSelf="center" maxWidth="392px" width={1}>
            <SchoolLogo />
          </Flex>
        </FormContainer>
      </Media>

      <Media lessThan={MEDIA_SIZES.DESKTOP}>
        <FormContainer flexWrap="wrap" p="0 20px">
          <Form
            mutators={{ setFieldTouched } as any}
            render={renderForm}
            validate={values => validate(values, formConstraints)}
            onSubmit={handleSubmit}
          />
        </FormContainer>
      </Media>
    </Background>
  )
}

export default SchoolBook
