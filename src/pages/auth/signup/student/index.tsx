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
  StudentLogo,
  SubmitButton,
  WarningWrap,
} from 'Containers/Pages/Auth/styles'

import { Element, Flex, Loader } from 'Components/UI'
import WarningTooltip from 'Components/UI/WarningTooltip'

import Head from 'Components/Blocks/Head'

import countriesList from 'Constants/countries.json'
import { USER_ROLES } from 'Constants/ids'
import { MEDIA_SIZES } from 'Constants/media'
import { AUTH_PATHS } from 'Constants/paths'
import { year4DigitsRegex } from 'Constants/regex'

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

enum FIELDS {
  USERNAME = 'username',
  PASSWORD = 'password',
  PASSWORD_CONFIRMATION = 'passwordConfirmation',
  YEAR_OF_BIRTH = 'yearOfBirth',
  CLASS_CODE = 'class_code',
  COUNTRY = 'country',
}

const GlobalStyle = createGlobalStyle`
  body, html {
    min-width: 320px !important;
  }
`

const Student: React.FC = () => {
  const router = useRouter()
  const s = useScopedI18n('auth.signUpStudent')
  const dispatch = useAppDispatch()

  const [userName, setUsername] = useState<{
    isValid: boolean | null
    value: string | null
  }>({ isValid: null, value: null })
  const [isShowPassword, setShowPassword] = useState<boolean>(false)
  const [isLoading, setLoading] = useState(false)
  const [responseError, setResponseError] = useState<string[] | null>(null)

  const handleTogglePassword = useCallback(() => {
    setShowPassword(prevState => !prevState)
  }, [isShowPassword])

  const validate = (values: any) =>
    validator(values, {
      ...presenceConstraint(FIELDS.USERNAME),
      ...presenceConstraint(FIELDS.PASSWORD),
      ...presenceConstraint(FIELDS.CLASS_CODE),
      ...termsConstraint,
      ...passwordConfirmationConstraint,
      ...presenceConstraint(FIELDS.COUNTRY),

      [FIELDS.YEAR_OF_BIRTH]: {
        presence: true,
        format: {
          pattern: year4DigitsRegex,
          message: '^ Year of birth invalid, format should be like ex: 2002',
        },
      },
    })

  const debouncedUsernameValidation = useDebouncedCallback(
    async (value: any) => {
      // TODO Write Async validation with validate.js or create Validation Form field with Promise

      if (isLoading) return undefined

      if (!value || value === '') {
        return _('error.shouldBeFilled')
      }

      if (value === userName.value) {
        return userName.isValid
      }

      setUsername(prevState => ({
        ...prevState,
        value,
      }))

      await authApi
        .checkUsername({ username: value })
        .then(() => {
          setUsername({
            value,
            isValid: null,
          })
        })
        .catch(() => {
          setUsername(prevState => ({
            ...prevState,
            isValid: false,
          }))

          return _('error.usernameAlreadyTaken')
        })

      return undefined
    },
    1000,
  )

  const handleSubmit = async (values: any) => {
    setLoading(true)

    const variables = {
      username: get(values, FIELDS.USERNAME),
      password: get(values, FIELDS.PASSWORD),
      password_confirmation: get(values, FIELDS.PASSWORD_CONFIRMATION),
      class_code: get(values, FIELDS.CLASS_CODE),
      role: USER_ROLES.student,
      year_of_birth: values[FIELDS.YEAR_OF_BIRTH],
      country_code: values[FIELDS.COUNTRY].value,
    }

    try {
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

        await router.push(AUTH_PATHS.SUCCESS)
      } else {
        setResponseError(
          get(response, 'errors') || [_('error.somethingGoingWrong')],
        )
      }
    } catch (error) {
      setResponseError(
        get(error, 'data.errors') || [_('error.somethingGoingWrong')],
      )
    }

    setLoading(false)
  }

  const renderForm = (form: any) => {
    const isUsernameError =
      get(form, `touched.${FIELDS.USERNAME}`, false) &&
      get(form, `errors.${FIELDS.USERNAME}`)

    const isPasswordError =
      get(form, `touched.${FIELDS.PASSWORD}`, false) &&
      get(form, `errors.${FIELDS.PASSWORD}`, false)
    const isConfirmPasswordError =
      get(form, `touched.${FIELDS.PASSWORD_CONFIRMATION}`, false) &&
      get(form, `errors.${FIELDS.PASSWORD_CONFIRMATION}`, false)
    const isClassCodeError =
      get(form, `touched.${FIELDS.CLASS_CODE}`, false) &&
      get(form, `errors.${FIELDS.CLASS_CODE}`, false)
    const isYearOfBirthError =
      get(form, `touched.${FIELDS.YEAR_OF_BIRTH}`, false) &&
      get(form, `errors.${FIELDS.YEAR_OF_BIRTH}`, false)
    const isCountryError =
      get(form, `touched.${FIELDS.COUNTRY}`, false) &&
      get(form, `errors.${FIELDS.COUNTRY}`, false)

    const validationError =
      !isEmpty(get(form, 'errors')) && get(form, 'submitFailed')
        ? _('error.fillAllRequired')
        : null

    const renderResponseErrors = () => map(responseError, err => err).join(' ')

    return (
      <FormWrap justifyContent="center" mt={42} width={1}>
        <Flex flexDirection="column" flexWrap="wrap" width={1}>
          <FormTitle mb={20} width={1}>
            {s('title')}
          </FormTitle>
          <WarningWrap>
            <DebouncedInput
              isError={isUsernameError || userName.isValid === false}
              name={FIELDS.USERNAME}
              noError
              parse={(value: string) => {
                const formattedValue = value

                return (
                  formattedValue &&
                  formattedValue.replace(/[^A-Za-z0-9_@]/gi, '')
                )
              }}
              placeholder={s('fields.usernamePlaceholder')}
              validate={debouncedUsernameValidation}
              validateFields={[FIELDS.USERNAME]}
            />

            {userName.isValid === false && (
              <WarningTooltip
                iconSize={20}
                left="auto"
                position="absolute"
                right="10px"
                text={s('usernameAlreadyTaken')}
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
              name={FIELDS.PASSWORD}
              noError
              placeholder={s('fields.passwordPlaceholder')}
              validateFields={[FIELDS.PASSWORD, FIELDS.PASSWORD_CONFIRMATION]}
            />
            <Flex onClick={handleTogglePassword}>
              <ShowPasswordButton active={isShowPassword} />
            </Flex>
          </PasswordContainer>

          <WarningWrap>
            <Input
              isError={isConfirmPasswordError}
              masked
              name={FIELDS.PASSWORD_CONFIRMATION}
              noError
              placeholder={s('fields.repeatPasswordPlaceholder')}
              validateFields={[FIELDS.PASSWORD_CONFIRMATION, FIELDS.PASSWORD]}
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

          <Input
            id={FIELDS.YEAR_OF_BIRTH}
            isError={isYearOfBirthError}
            name={FIELDS.YEAR_OF_BIRTH}
            noError
            placeholder={s('fields.yearOfBirthPlaceholder')}
            type="text"
            validateFields={[FIELDS.YEAR_OF_BIRTH]}
          />

          <Input
            isError={isClassCodeError}
            name={FIELDS.CLASS_CODE}
            noError
            placeholder={s('fields.codePlaceholder')}
            validateFields={['class_code']}
          />

          <Select
            isError={isCountryError}
            name={FIELDS.COUNTRY}
            noError
            options={countriesList}
            placeholder={s('fields.countryPlaceholder')}
            validateFields={[FIELDS.COUNTRY]}
          />

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
                  <Element color="#8DE1D1" fontSize="14px">
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

          <ErrorsContainer>
            {isLoading && <Loader />}
            {validationError || renderResponseErrors()}
          </ErrorsContainer>

          <SubmitButton mt={20} onClick={form.handleSubmit}>
            {s('submit')}
          </SubmitButton>

          <Flex alignItems="center" justifyContent="center" mt={20} width={1}>
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
      </FormWrap>
    )
  }

  return (
    <Background>
      <GlobalStyle />
      <Head description="Sign up as Student" title="Sign Up Student" />

      <FormContainer alignItems="center" flexWrap="wrap">
        <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
          <Flex justifyContent="center" width={1}>
            <Flex maxWidth="370px">
              <Form
                mutators={{ setFieldTouched } as any}
                render={renderForm}
                validate={validate}
                onSubmit={handleSubmit}
              />
            </Flex>

            <Flex ml="30px">
              <StudentLogo height="520px" width="566px" />
            </Flex>
          </Flex>
        </Media>

        <Media at={MEDIA_SIZES.TABLET}>
          <Flex justifyContent="center" width={1}>
            <Flex maxWidth="370px">
              <Form
                mutators={{ setFieldTouched } as any}
                render={renderForm}
                validate={validate}
                onSubmit={handleSubmit}
              />
            </Flex>

            <Flex alignItems="center" ml="30px">
              <StudentLogo height="360px" width="392px" />
            </Flex>
          </Flex>
        </Media>

        <Media at={MEDIA_SIZES.MOBILE}>
          <Flex
            justifyContent="center"
            margin="0 auto"
            maxWidth="300px"
            width={1}
          >
            <Form
              mutators={{ setFieldTouched } as any}
              render={renderForm}
              validate={validate}
              onSubmit={handleSubmit}
            />
          </Flex>
        </Media>
      </FormContainer>
    </Background>
  )
}

export default Student
