import React, { useState } from 'react'
import { Form } from 'react-final-form'

import { createGlobalStyle } from 'styled-components'

import setFieldTouched from 'final-form-set-field-touched'
import Link from 'next/link'
import validator from 'validate.js'

import get from 'lodash/get'

import {
  Button,
  Container,
  ErrorsContainer,
  Input,
  LinkHtml,
  ResetPasswordLogo,
  SignInTitle,
  SuccessText,
} from 'Containers/Pages/Auth/styles'

import Flex from 'Components/UI/Flex'
import Loader from 'Components/UI/Loader'

import Head from 'Components/Blocks/Head'

import { MEDIA_SIZES } from 'Constants/media'
import { AUTH_PATHS } from 'Constants/paths'

import { authApi } from 'Services/Api/requests'
import _, { useScopedI18n } from 'Services/I18n'

import { Media } from 'Theme'

import { emailConstraint } from 'Utils/constraints'

const GlobalStyle = createGlobalStyle`
  body, html {
    min-width: 320px !important;
  }
`

const ForgotPassword: React.FC = () => {
  const s = useScopedI18n('auth.forgotPassword')

  const [errorMessage, setErrorMessage] = useState<null | string[]>(null)
  const [successMessage, setSuccessMessage] = useState<null | string>(null)
  const [isLoading, setLoading] = useState(false)

  const validate = (values: any) =>
    validator(values, {
      ...emailConstraint('email'),
    })

  const handleSubmit = async (values: any) => {
    setErrorMessage(null)
    setSuccessMessage(null)
    setLoading(true)

    try {
      await authApi.forgotPassword({
        email: get(values, 'email'),
      })
      setSuccessMessage(s('successMessage'))
    } catch (error) {
      setErrorMessage(get(error, 'data.errors') || [_('error.fillAllRequired')])
    }

    setLoading(false)
  }

  const renderForm = (form: any) => {
    const isEmailError =
      get(form, 'touched.email', false) && get(form, 'errors.email', false)

    const validationError = isEmailError ? _('error.fillAllRequired') : null

    return (
      <form>
        <Flex
          alignContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
          width={1}
        >
          <SignInTitle>{s('title')}</SignInTitle>
          <Input
            isError={isEmailError}
            mb={0}
            name="email"
            noError
            placeholder={s('fields.emailPlaceholder')}
          />

          <Flex flexWrap="wrap" width={1}>
            <Button mt="7px" onClick={form.handleSubmit}>
              {s('sendEmail')}
            </Button>

            <ErrorsContainer>
              {isLoading && <Loader mb="10px" mt="10px" />}

              {validationError || errorMessage}
              {successMessage && <SuccessText>{successMessage}</SuccessText>}
            </ErrorsContainer>

            <Flex alignItems="center" justifyContent="center" mt={20} width={1}>
              <Link href={AUTH_PATHS.SIGN_IN} passHref>
                <LinkHtml color="#6E46FF" fontWeight={600}>
                  {s('backToSignIn')}
                </LinkHtml>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </form>
    )
  }

  return (
    <Flex backgroundColor="#f7faff" flex=" 1 0 auto" flexWrap="wrap" width={1}>
      <GlobalStyle />
      <Head description="Forgot password" title="Forgot password" />

      <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
        <Container>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            mt="112px"
            width={1}
          >
            <Flex alignItems="center" maxWidth={360} width={1}>
              <Form
                mutators={{ setFieldTouched } as any}
                render={renderForm}
                validate={validate}
                onSubmit={handleSubmit}
              />
            </Flex>
            <Flex>
              <ResetPasswordLogo height="472px" width="582px" />
            </Flex>
          </Flex>
        </Container>
      </Media>

      <Media at={MEDIA_SIZES.TABLET}>
        <Container p="0px 20px">
          <Flex mt="112px" width={1}>
            <Flex alignItems="center" maxWidth={360} width={1}>
              <Form
                mutators={{ setFieldTouched } as any}
                render={renderForm}
                validate={validate}
                onSubmit={handleSubmit}
              />
            </Flex>
            <Flex alignContent="center" alignItems="center" ml="30px">
              <ResetPasswordLogo height="318px" width="392px" />
            </Flex>
          </Flex>
        </Container>
      </Media>

      <Media at={MEDIA_SIZES.MOBILE}>
        <Container flexWrap="wrap" p="0px 20px">
          <Flex alignItems="flex-start" justifyContent="center" width={1}>
            <ResetPasswordLogo height="220px" width="272px" />
          </Flex>
          <Flex
            alignItems="flex-start"
            justifyContent="center"
            mt="20px"
            width={1}
          >
            <Flex alignItems="center" maxWidth={300} width={1}>
              <Form
                mutators={{ setFieldTouched } as any}
                render={renderForm}
                validate={validate}
                onSubmit={handleSubmit}
              />
            </Flex>
          </Flex>
        </Container>
      </Media>
    </Flex>
  )
}

export default ForgotPassword
