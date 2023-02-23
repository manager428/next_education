import React, { useState } from 'react'
import { Form } from 'react-final-form'

import { createGlobalStyle } from 'styled-components'

import InnerHTML from 'dangerously-set-html-content'
import setFieldTouched from 'final-form-set-field-touched'
import Link from 'next/link'
import { useRouter } from 'next/router'
import validator from 'validate.js'

import get from 'lodash/get'
import map from 'lodash/map'

import {
  Button,
  CheckBox,
  Container,
  ErrorsContainer,
  FormContainer,
  Input,
  LinkHtml,
  PasswordContainer,
  ShowPasswordButton,
  SignInTitle,
  StudentLogo,
} from 'Containers/Pages/Auth/styles'

import { Flex, Link as LinkUI } from 'Components/UI'
import Loader from 'Components/UI/Loader'

import { SubscriptionExpiredModal } from 'Components/Blocks/Entities/Parent/Modals'
import Head from 'Components/Blocks/Head'

import { USER_ROLES } from 'Constants/ids'
import { MEDIA_SIZES } from 'Constants/media'
import {
  AUTH_PATHS,
  MODERATOR_PATHS,
  PARENT_PATHS,
  PUBLIC_PATHS,
  ROOT_PATH,
  SCHOOL_PATHS,
  TEACHER_PATHS,
} from 'Constants/paths'

import { useAppDispatch } from 'Hooks/useStore'

import { set as setAuth } from 'Store/auth/slice'

import ApiService from 'Services/Api'
import { authApi } from 'Services/Api/requests'
import AuthService from 'Services/Auth'
import _, { useScopedI18n } from 'Services/I18n'

import { Media, theme } from 'Theme'

import { presenceConstraint } from 'Utils/constraints'

const GlobalStyle = createGlobalStyle`
  body, html {
    min-width: 320px !important;
  }
`

const Login: React.FC = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const s = useScopedI18n('auth.signIn')

  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string[] | null>(null)
  const [isShowPassword, setShowPassword] = useState(false)
  const [expireModal, setExpireModal] = useState({
    isOpen: false,
  })

  const validate = (values: any) =>
    validator(values, {
      ...presenceConstraint('email'),
      ...presenceConstraint('password'),
    })

  const handleSubmit = async (values: any) => {
    setErrorMessage(null)
    setLoading(true)

    try {
      const response = await authApi.logIn({
        username: values.email,
        password: values.password,
        remember_me: values.remember_me,
      })

      const role = get(response, ['data', 'user', 'role'])

      if (response.data?.access_token) {
        const accessToken = response.data?.access_token
        const refreshToken = response.data?.refresh_token

        AuthService.setAuth({ accessToken, refreshToken })

        ApiService.setAuthorizationToken(accessToken)

        dispatch(
          setAuth({
            accessToken,
            refreshToken,
          }),
        )

        switch (role) {
          case USER_ROLES.teacher:
            await router.push(TEACHER_PATHS.MANAGE)
            break
          case USER_ROLES.student:
            await router.push(PUBLIC_PATHS.CHALLENGES)
            break
          case USER_ROLES.parent:
            await router.push(PARENT_PATHS.MANAGE)
            break
          case USER_ROLES.moderator:
            await router.push(MODERATOR_PATHS.MANAGE_USERS)
            break
          case USER_ROLES.schoolAdmin:
            await router.push(SCHOOL_PATHS.MANAGE)
            break
          default:
            await router.push(ROOT_PATH)
            break
        }
      } else {
        setErrorMessage(
          get(response, 'errors') || [_('error.somethingGoingWrong')],
        )
      }
    } catch (error) {
      if (error.status === 402) {
        setExpireModal({ isOpen: true })
      } else {
        setErrorMessage(
          get(error, ['data', 'errors']) || [_('error.somethingGoingWrong')],
        )
      }
    }

    setLoading(false)
  }

  const handleShowPassword = () => {
    setShowPassword(prevState => !prevState)
  }

  const renderResponseErrors = () => map(errorMessage, err => err).join(' ')

  const renderForm = (form: any) => {
    const isUsernameError =
      get(form, 'touched.email', false) && get(form, 'errors.email', false)

    const isPasswordError =
      get(form, 'touched.password', false) &&
      get(form, 'errors.password', false)

    const validationError =
      isUsernameError || isPasswordError ? _('error.fillAllRequired') : null

    return (
      <FormContainer>
        <Flex alignContent="flex-start" flexWrap="wrap" width={1}>
          <SignInTitle>{s('title')}</SignInTitle>
          <Input
            isError={isUsernameError}
            name="email"
            noError
            placeholder={s('fields.emailPlaceholder')}
            styles={{ mb: '14px' }}
          />
          <PasswordContainer>
            <Input
              isError={isPasswordError}
              masked={!isShowPassword}
              name="password"
              noError
              placeholder={s('fields.passwordPlaceholder')}
              styles={{ mb: '14px' }}
            />

            <Flex onClick={handleShowPassword}>
              <ShowPasswordButton active={isShowPassword || undefined} />
            </Flex>
          </PasswordContainer>

          <Flex justifyContent="space-between" width={1}>
            <CheckBox id="remember" name="remember_me" withLabel>
              <Flex color="#6E46FF" fontSize={14}>
                {s('fields.rememberMe')}
              </Flex>
            </CheckBox>
            <Link href={AUTH_PATHS.FORGOT} passHref>
              <LinkHtml>{s('forgot')}</LinkHtml>
            </Link>
          </Flex>
          <Flex flexWrap="wrap" width={1}>
            <ErrorsContainer>
              {isLoading && <Loader />}

              {validationError ||
                (errorMessage && <InnerHTML html={renderResponseErrors()} />)}
            </ErrorsContainer>

            <Button mt={20} onClick={form.handleSubmit}>
              {s('signIn')}
            </Button>

            <Media greaterThanOrEqual={MEDIA_SIZES.TABLET}>
              <Flex
                alignItems="center"
                flexWrao="wrap"
                justifyContent="center"
                mt={20}
                width={1}
              >
                <Flex color="#6E46FF" fontSize={14} mr="5px">
                  {s('dontHaveAccount')}
                </Flex>

                <Link href={AUTH_PATHS.SIGN_UP} passHref>
                  <LinkHtml color="#6E46FF" fontWeight={600}>
                    {s('signUp')}
                  </LinkHtml>
                </Link>
              </Flex>
            </Media>

            <Media at={MEDIA_SIZES.MOBILE}>
              <Flex
                alignItems="center"
                flexWrao="wrap"
                justifyContent="center"
                mt={20}
                width={1}
              >
                <LinkUI
                  color={theme.colors.grayMid}
                  href={AUTH_PATHS.SIGN_UP}
                  passHref
                  width={1}
                >
                  {s('signUp')}
                </LinkUI>
              </Flex>
            </Media>
          </Flex>
        </Flex>
      </FormContainer>
    )
  }

  return (
    <Flex backgroundColor="#f7faff" flex="1 0 auto" flexWrap="wrap" width={1}>
      <GlobalStyle />
      <Head description="Sign In" title="Sign in" />

      {expireModal.isOpen && (
        <SubscriptionExpiredModal
          isOpen={expireModal.isOpen}
          type="login"
          onClose={() => setExpireModal({ isOpen: false })}
        />
      )}

      <Container p="0px 10px">
        <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
          <Flex justifyContent="space-between" mt={42} width={1}>
            <Flex maxWidth={360} mt="70px" width={1}>
              <Form
                mutators={{ setFieldTouched } as any}
                render={renderForm}
                validate={validate}
                onSubmit={handleSubmit}
              />
            </Flex>
            <Flex alignItems="center">
              <StudentLogo height="530px" width="540px" />
            </Flex>
          </Flex>
        </Media>

        <Media at={MEDIA_SIZES.TABLET}>
          <Flex mt="92px" width={1}>
            <Flex maxWidth={360} width={1}>
              <Form
                mutators={{ setFieldTouched } as any}
                render={renderForm}
                validate={validate}
                onSubmit={handleSubmit}
              />
            </Flex>
            <Flex alignItems="center" ml="32px">
              <StudentLogo height="360px" width="392px" />
            </Flex>
          </Flex>
        </Media>

        <Media at={MEDIA_SIZES.MOBILE}>
          <Flex flexWrap="wrap" justifyContent="center" mt="20px" width={1}>
            <Flex alignItems="center">
              <StudentLogo height="220px" width="240px" />
            </Flex>
            <Flex justifyContent="center" width={1}>
              <Flex maxWidth="300px" width={1}>
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

export default Login
