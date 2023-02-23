import React, { useState } from 'react'
import { Form } from 'react-final-form'

import { createGlobalStyle } from 'styled-components'

import setFieldTouched from 'final-form-set-field-touched'
import Link from 'next/link'
import validator from 'validate.js'

import get from 'lodash/get'
import map from 'lodash/map'

import {
  Button,
  Container,
  ErrorsContainer,
  Input,
  LinkHtml,
  PasswordContainer,
  PasswordMatchIcon,
  ResetPasswordLogo,
  ShowPasswordButton,
  SignInTitle,
  SuccessText,
} from 'Containers/Pages/Auth/styles'

import { Flex } from 'Components/UI'
import Loader from 'Components/UI/Loader'

import FollowUs from 'Components/Blocks/FollowUs'
import Head from 'Components/Blocks/Head'

import { MEDIA_SIZES } from 'Constants/media'
import { AUTH_PATHS } from 'Constants/paths'

import useLocationQueryParams from 'Hooks/useRouterQueryParams'

import { authApi } from 'Services/Api/requests'
import _, { useScopedI18n } from 'Services/I18n'

import { Media } from 'Theme'

const GlobalStyle = createGlobalStyle`
  body, html {
    min-width: 320px !important;
  }
`

const ResetPassword: React.FC = () => {
  const s = useScopedI18n('auth.resetPassword')
  const params = useLocationQueryParams()

  const [errorMessage, setErrorMessage] = useState<null | string[]>(null)
  const [successMessage, setSuccessMessage] = useState<null | string>(null)
  const [isLoading, setLoading] = useState(false)
  const [isShowPassword, setShowPassword] = useState(false)

  const validate = (values: any) =>
    validator(values, {
      password: {
        presence: true,
      },
      passwordConfirmation: {
        presence: true,
        equality: {
          attribute: 'password',
          message: `^${s('passwordValidationError')}`,
        },
      },
    })

  const handleShowPassword = () => {
    setShowPassword(prevState => !prevState)
  }

  const renderResponseErrors = () => map(errorMessage, err => err).join(' ')

  const handleSubmit = async (values: any) => {
    setErrorMessage(null)
    setSuccessMessage(null)
    setLoading(true)

    if (!params?.email || !params?.token) {
      setErrorMessage([_('error.somethingGoingWrong')])
    }

    try {
      await authApi.resetPassword({
        email: params?.email as string,
        token: params?.token as string,
        password: values.password,
        password_confirmation: values.passwordConfirmation,
      })

      setSuccessMessage(s('successMessage'))
    } catch (error) {
      setErrorMessage(
        get(error, 'data.errors') || [_('error.somethingGoingWrong')],
      )
    }

    setLoading(false)
  }

  const renderForm = (form: any) => {
    const isPasswordError =
      get(form, 'touched.password', false) &&
      get(form, 'errors.password', false)
    const isConfirmPasswordError =
      get(form, 'touched.passwordConfirmation', false) &&
      get(form, 'errors.passwordConfirmation', false)
    const isConfirmMatched =
      get(form, 'touched.passwordConfirmation', false) &&
      typeof get(form, 'errors.passwordConfirmation') === 'undefined'

    const validationError =
      isConfirmPasswordError || isPasswordError
        ? s('fields.passwordValidationError')
        : null

    return (
      <form>
        <Flex alignContent="flex-start" flexWrap="wrap" width={1}>
          <SignInTitle>{s('title')}</SignInTitle>
          <PasswordContainer>
            <Input
              isError={false}
              masked={!isShowPassword}
              name="password"
              noError
              placeholder={s('fields.passwordPlaceholder')}
            />
            <Flex onClick={handleShowPassword}>
              <ShowPasswordButton active={isShowPassword} />
            </Flex>
          </PasswordContainer>
          <PasswordContainer>
            <Input
              isError={false}
              masked
              name="passwordConfirmation"
              noError
              placeholder={s('fields.confirmPasswordPlaceholder')}
            />
            {isConfirmMatched && <PasswordMatchIcon />}
          </PasswordContainer>

          <Flex flexWrap="wrap" width={1}>
            <Button mt="7px" onClick={form.handleSubmit}>
              {s('confirmPassword')}
            </Button>
            <ErrorsContainer>
              {isLoading && <Loader />}
              {validationError || renderResponseErrors()}
              {successMessage && <SuccessText>{successMessage}</SuccessText>}
            </ErrorsContainer>
            <Flex alignItems="center" justifyContent="center" mt={20} width={1}>
              {successMessage && (
                <Link href={AUTH_PATHS.SIGN_IN} passHref>
                  <LinkHtml color="#49CEB1" fontWeight={600} type="border">
                    {s('goToSignIn')}
                  </LinkHtml>
                </Link>
              )}
            </Flex>
          </Flex>
        </Flex>
      </form>
    )
  }

  return (
    <Flex backgroundColor="#f7faff" flex=" 1 0 auto" flexWrap="wrap" width={1}>
      <GlobalStyle />
      <Head description="Reset password" title="Reset password" />

      <Container p="0px 20px">
        <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
          <FollowUs />
          <Flex justifyContent="space-between" width={1}>
            <Flex maxWidth={360} mt="112px" width={1}>
              <Form
                mutators={{ setFieldTouched } as any}
                render={renderForm}
                validate={validate}
                onSubmit={handleSubmit}
              />
            </Flex>

            <ResetPasswordLogo height="472px" width="582px" />
          </Flex>
        </Media>

        <Media at={MEDIA_SIZES.TABLET}>
          <FollowUs />
          <Flex justifyContent="center" mt={42} width={1}>
            <Flex alignItems="center" maxWidth={360} width={1}>
              <Form
                mutators={{ setFieldTouched } as any}
                render={renderForm}
                validate={validate}
                onSubmit={handleSubmit}
              />
            </Flex>
            <Flex ml="20px">
              <ResetPasswordLogo height="318px" width="392px" />
            </Flex>
          </Flex>
        </Media>

        <Media at={MEDIA_SIZES.MOBILE}>
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <Flex>
              <ResetPasswordLogo height="200px" width="246px" />
            </Flex>

            <Flex justifyContent="center" mt="20px" width={1}>
              <Flex maxWidth={300} width={1}>
                <Form
                  mutators={{ setFieldTouched } as any}
                  render={renderForm}
                  validate={validate}
                  onSubmit={handleSubmit}
                />
              </Flex>
            </Flex>
          </Flex>
        </Media>
      </Container>
    </Flex>
  )
}

export default ResetPassword
