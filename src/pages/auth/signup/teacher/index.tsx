import React, { useCallback, useState } from 'react'
import { Form } from 'react-final-form'

import { createGlobalStyle } from 'styled-components'

import setFieldTouched from 'final-form-set-field-touched'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDebouncedCallback } from 'use-debounce'
import validator from 'validate.js'

import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'

import {
  Background,
  ButtonLink,
  CheckBox,
  DebouncedInput,
  ErrorsContainer,
  FormContainer,
  FormTitle,
  FormWrap,
  Input,
  LinkHtml,
  PasswordContainer,
  Select,
  ShowPasswordButton,
  WarningWrap,
} from 'Containers/Pages/Auth/styles'

import { Button, Element, Flex } from 'Components/UI'
import Loader from 'Components/UI/Loader'
import WarningTooltip from 'Components/UI/WarningTooltip'

import Head from 'Components/Blocks/Head'

import countriesList from 'Constants/countries.json'
import { MEDIA_SIZES } from 'Constants/media'
import { AUTH_PATHS, LANDING_PATHS, TEACHER_PATHS } from 'Constants/paths'
import { emailRegex } from 'Constants/regex'

import { useAppDispatch } from 'Hooks/useStore'

import { set as setAuth } from 'Store/auth/slice'

import ApiService from 'Services/Api'
import { authApi } from 'Services/Api/requests'
import AuthService from 'Services/Auth'
import _, { useScopedI18n } from 'Services/I18n'

import { Media } from 'Theme'

import {
  passwordConfirmationConstraint,
  presenceConstraint,
  termsConstraint,
} from 'Utils/constraints'

const GlobalStyle = createGlobalStyle`
  body, html {
    min-width: 320px !important;
  }
`

const Teacher: React.FC = () => {
  const router = useRouter()
  const s = useScopedI18n('auth.signUpTeacher')
  const dispatch = useAppDispatch()

  const [isEmailCollected, setEmailCollected] = useState(false)
  const [isShowPassword, setShowPassword] = useState(false)
  const [userEmail, setUserEmail] = useState<{
    email: string | null
    isValid: boolean | null
  }>({
    email: null,
    isValid: null,
  })
  const [responseError, setResponseError] = useState<string | null>(null)
  const [isLoading, setLoading] = useState(false)

  const validate = (values: any) =>
    validator(
      {
        ...values,
        country: get(values, 'country.value'),
        age: get(values, 'age.value'),
      },
      {
        ...presenceConstraint('firstName'),
        ...presenceConstraint('lastName'),
        ...presenceConstraint('password'),
        ...presenceConstraint('email'),
        ...passwordConfirmationConstraint,
        ...presenceConstraint('country'),
        ...presenceConstraint('teacherCode'),
        ...termsConstraint,
      },
    )

  const debouncedUserEmailValidation = useDebouncedCallback(
    async (value: any) => {
      // TODO Write Async validation with validate.js or create Validation Form field with Promise

      if (isLoading) return undefined

      if (!value || value === '') {
        return _('error.shouldBeFilled')
      }

      if (value === userEmail.email) {
        return userEmail.isValid
      }

      setUserEmail(prevState => ({
        ...prevState,
        email: value,
      }))

      if (!value.match(emailRegex)) {
        return _('error.shouldBeCorrectEmail')
      }

      await authApi
        .checkEmail({ email: value })
        .then(() => {
          setUserEmail({
            email: value,
            isValid: null,
          })
        })
        .catch(() => {
          setUserEmail(prevState => ({
            ...prevState,
            isValid: false,
          }))

          return _('error.emailAlreadyTaken')
        })

      return undefined
    },
    1000,
  )

  const handleCollectFields = async (values: any) => {
    const emailValue = values.email
    const fullName = `${values.first_name} ${values.last_name}`
    const { country } = values

    const data = {
      email: emailValue,
      fullName,
      country,
    }

    await authApi.collectFormData(data)
  }

  const handleSubmit = async (values: any) => {
    try {
      const variables = {
        email: get(values, 'email'),
        password: get(values, 'password'),
        password_confirmation: get(values, 'passwordConfirmation'),
        first_name: get(values, 'firstName'),
        last_name: get(values, 'lastName'),
        country_code: get(values, 'country.value'),
        role: 'teacher',
        teacher_payment_code: get(values, 'teacherCode'),
      }

      setLoading(true)

      await handleCollectFields(variables)

      const response = await authApi.registerUser(variables)

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

        await router.push(TEACHER_PATHS.MANAGE)
      } else {
        setResponseError(
          get(response, 'message') || _('error.somethingGoingWrong'),
        )
        setLoading(false)
      }
    } catch (e) {
      const errors = map(e?.data.errors, er => er)

      setResponseError(
        errors.length > 0 ? errors.join(', ') : _('error.somethingGoingWrong'),
      )
      setLoading(false)
    }
  }

  const handleEmailCollect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = String(e.target.value)
    const isEmail = emailRegex.test(emailValue.toLowerCase())

    if (isEmail && !isEmailCollected) {
      const data = {
        email: emailValue,
      }
      const response = await authApi.collectFormData(data)
      if (response) {
        setEmailCollected(true)
      }
    }
  }

  const handleTogglePassword = useCallback(() => {
    setShowPassword(prevState => !prevState)
  }, [isShowPassword])

  const renderForm = useCallback(
    form => {
      const isEmailError =
        get(form, 'touched.email', false) && get(form, 'errors.email')
      const isFirstNameError =
        get(form, 'touched.firstName', false) && get(form, 'errors.firstName')
      const isLastNameError =
        get(form, 'touched.lastName', false) && get(form, 'errors.lastName')
      const isPasswordError =
        get(form, 'touched.password', false) &&
        get(form, 'errors.password', false)
      const isConfirmPasswordError =
        get(form, 'touched.passwordConfirmation', false) &&
        get(form, 'errors.passwordConfirmation', false)
      const isCountryError =
        get(form, 'touched.country', false) &&
        get(form, 'errors.country', false)
      const isTeacherCodeError =
        get(form, 'touched.teacherCode', false) &&
        get(form, 'errors.teacherCode', false)

      const validationError =
        !isEmpty(get(form, 'errors')) && get(form, 'submitFailed')
          ? _('error.fillAllRequired')
          : null

      const renderLeftColumn = () => (
        <Flex flexDirection="column" flexWrap="wrap" width={1}>
          <Input
            isError={isFirstNameError}
            name="firstName"
            noError
            placeholder={s('fields.firstNamePlaceholder')}
            validateFields={['firstName']}
          />
          <Input
            isError={isLastNameError}
            name="lastName"
            noError
            placeholder={s('fields.lastNamePlaceholder')}
            validateFields={['lastName']}
          />
          <Select
            isError={isCountryError}
            name="country"
            noError
            options={countriesList}
            placeholder={s('fields.countryPlaceholder')}
          />
          <WarningWrap>
            <DebouncedInput
              isError={isEmailError || userEmail.isValid === false}
              name="email"
              noError
              placeholder={s('fields.emailPlaceholder')}
              validate={debouncedUserEmailValidation}
              validateFields={['email']}
              onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleEmailCollect(e)
              }}
            />

            {userEmail.isValid === false && (
              <WarningTooltip
                iconSize={20}
                left="auto"
                position="absolute"
                right="10px"
                text={s('emailAlreadyTaken')}
                tooltipHeight={null}
                tooltipWidth={null}
                top="12px"
                type="warning"
              />
            )}
          </WarningWrap>
          <PasswordContainer>
            <Input
              isError={isPasswordError}
              masked={!isShowPassword}
              name="password"
              noError
              placeholder={s('fields.passwordPlaceholder')}
              validateFields={['password', 'passwordConfirmation']}
            />
            <Flex onClick={handleTogglePassword}>
              <ShowPasswordButton active={isShowPassword || undefined} />
            </Flex>
          </PasswordContainer>

          <WarningWrap>
            <Input
              isError={isConfirmPasswordError}
              masked
              name="passwordConfirmation"
              noError
              placeholder={s('fields.repeatPasswordPlaceholder')}
              validateFields={['passwordConfirmation', 'password']}
            />
            {isConfirmPasswordError && (
              <WarningTooltip
                iconSize={20}
                left="auto"
                position="absolute"
                right="10px"
                text={s('passwordMismatch')}
                tooltipHeight={null}
                tooltipWidth={null}
                top="12px"
                type="warning"
              />
            )}
          </WarningWrap>
        </Flex>
      )

      const renderRightColumn = () => (
        <Flex flexDirection="column" flexWrap="wrap" width={1}>
          <Flex flexWrap="wrap">
            <Input
              backgroundColor="#EEFFF9"
              isError={isTeacherCodeError}
              name="teacherCode"
              noError
              placeholder={s('fields.codePlaceholder')}
            />
            <Flex flexWrap="wrap" justifyContent="center" width={1}>
              <Flex color="#071D40" fontSize={18} fontWeight="600">
                {s('dontHaveCode')}
              </Flex>
              <Flex justifyContent="center" mt={14} width={1}>
                <ButtonLink
                  as="a"
                  href={LANDING_PATHS.EDUCATORS}
                  target="_blank"
                >
                  {s('getIt')}
                </ButtonLink>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )

      return (
        <FormWrap justifyContent="center" maxWidth={780} mt={42} width={1}>
          <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
            <FormTitle fontSize="24px" lineHeight="34px" mb={20} width={1}>
              {s('title')}
            </FormTitle>

            <Flex width={1}>
              <Flex
                flexDirection="column"
                flexWrap="wrap"
                maxWidth={370}
                width={1}
              >
                {renderLeftColumn()}
              </Flex>

              <Flex
                flexDirection="column"
                flexWrap="wrap"
                maxWidth={370}
                ml="30px"
                width={1}
              >
                {renderRightColumn()}
              </Flex>
            </Flex>
          </Media>

          <Media at={MEDIA_SIZES.TABLET}>
            <FormTitle fontSize="24px" lineHeight="34px" mb={20} width={1}>
              {s('title')}
            </FormTitle>

            <Flex justifyContent="center" width={1}>
              <Flex
                flexDirection="column"
                flexWrap="wrap"
                maxWidth={276}
                width={1}
              >
                {renderLeftColumn()}
              </Flex>

              <Flex
                flexDirection="column"
                flexWrap="wrap"
                maxWidth={276}
                ml="30px"
                width={1}
              >
                {renderRightColumn()}
              </Flex>
            </Flex>
          </Media>

          <Media at={MEDIA_SIZES.MOBILE}>
            <FormTitle fontSize="18px" lineHeight="18px" mb="16px" width={1}>
              {s('title')}
            </FormTitle>

            <Flex flexWrap="wrap" justifyContent="center" width={1}>
              <Flex justifyContent="center" width={1}>
                <Flex
                  flexDirection="column"
                  flexWrap="wrap"
                  maxWidth={288}
                  width={1}
                >
                  {renderLeftColumn()}
                </Flex>
              </Flex>

              <Flex
                flexDirection="column"
                flexWrap="wrap"
                maxWidth={288}
                width={1}
              >
                {renderRightColumn()}
              </Flex>
            </Flex>
          </Media>

          <Flex flexWrap="wrap" justifyContent="center" mt="20px" width={1}>
            <Media greaterThanOrEqual={MEDIA_SIZES.TABLET}>
              <Flex justifyContent="center" mb={16} mt="auto" width={1}>
                <Flex>
                  <CheckBox
                    id="terms"
                    name="terms"
                    noError
                    validateFields={['terms']}
                    withLabel
                  >
                    <Element color="#8DE1D1" fontSize={14}>
                      {s('fields.agree')}{' '}
                      <LinkHtml
                        color="#49CEB1"
                        fontWeight="700"
                        href="/privacy-policy"
                        target="_blank"
                      >
                        {s('fields.terms')}
                      </LinkHtml>
                    </Element>
                  </CheckBox>
                </Flex>
              </Flex>
            </Media>

            <Media at={MEDIA_SIZES.MOBILE}>
              <Flex justifyContent="center" mb={16} mt="auto" width={1}>
                <Flex>
                  <CheckBox
                    id="terms"
                    name="terms"
                    noError
                    validateFields={['terms']}
                    withLabel
                  >
                    <Element color="#8DE1D1" fontSize="10px">
                      {s('fields.agree')}{' '}
                      <LinkHtml
                        color="#49CEB1"
                        fontSize="10px"
                        fontWeight="700"
                        href="/privacy-policy"
                        target="_blank"
                      >
                        {s('fields.terms')}
                      </LinkHtml>
                    </Element>
                  </CheckBox>
                </Flex>
              </Flex>
            </Media>

            <Flex flexWrap="wrap" maxWidth={360} width={1}>
              <ErrorsContainer>
                {isLoading && <Loader />}
                {validationError || responseError}
              </ErrorsContainer>
              <Button color="white" green width={1} onClick={form.handleSubmit}>
                {s('submit')}
              </Button>
              <Flex
                alignItems="center"
                justifyContent="center"
                mt={20}
                width={1}
              >
                <Flex color="#8DE1D1" fontSize={14} mr="5px">
                  {s('alreadyHaveAccount')}
                </Flex>
                <Link href={AUTH_PATHS.SIGN_IN} passHref>
                  <LinkHtml color="#49CEB1" fontWeight={600}>
                    {s('signIn')}
                  </LinkHtml>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </FormWrap>
      )
    },
    [isLoading, userEmail, isShowPassword, s],
  )

  return (
    <Background>
      <GlobalStyle />
      <Head description="Sign up as Teacher" title="Sign Up Teacher" />

      <FormContainer flexWrap="wrap" minHeight="100vh" p="0px 10px">
        <Form
          mutators={{ setFieldTouched } as any}
          render={renderForm}
          validate={validate}
          onSubmit={handleSubmit}
        />
      </FormContainer>
    </Background>
  )
}

export default Teacher
