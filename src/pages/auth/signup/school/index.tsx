import React, { useCallback, useState } from 'react'
import { Form } from 'react-final-form'

import { createGlobalStyle } from 'styled-components'

import setFieldTouched from 'final-form-set-field-touched'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDebouncedCallback } from 'use-debounce'
import validate from 'validate.js'

import { isNil } from 'lodash'
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
  SubmitButton,
  WarningWrap,
} from 'Containers/Pages/Auth/styles'

import { Element, Flex, WarningTooltip } from 'Components/UI'
import Loader from 'Components/UI/Loader'

import Head from 'Components/Blocks/Head'

import countriesList from 'Constants/countries.json'
import { USER_ROLES } from 'Constants/ids'
import { MEDIA_SIZES } from 'Constants/media'
import { AUTH_PATHS, LANDING_PATHS, SCHOOL_PATHS } from 'Constants/paths'
import { emailRegex } from 'Constants/regex'

import useLocale from 'Hooks/useLocale'
import { useAppDispatch } from 'Hooks/useStore'

import { set as setAuth } from 'Store/auth/slice'

import ApiService from 'Services/Api'
import { authApi } from 'Services/Api/requests'
import AuthService from 'Services/Auth'
import _, { useScopedI18n } from 'Services/I18n'

import { Media } from 'Theme'

import {
  emailConstraint,
  presenceConstraint,
  termsConstraint,
} from 'Utils/constraints'

const FIELDS = {
  EMAIL: 'email',
  SCHOOL_NAME: 'schoolName',
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  PASSWORD: 'password',
  PASSWORD_CONFIRMATION: 'passwordConfirmation',
  COUNTRY_CODE: 'countryCode',
  SCHOOL_CODE: 'schoolCode',
}

const GlobalStyle = createGlobalStyle`
  body, html {
    min-width: 320px !important;
  }
`

const validateForm = (values: any) =>
  validate(
    {
      ...values,
      [FIELDS.COUNTRY_CODE]: get(values, [`${FIELDS.COUNTRY_CODE}`, 'value']),
    },
    {
      ...emailConstraint(FIELDS.EMAIL),
      ...presenceConstraint(FIELDS.SCHOOL_NAME),
      ...presenceConstraint(FIELDS.FIRST_NAME),
      ...presenceConstraint(FIELDS.LAST_NAME),
      ...presenceConstraint(FIELDS.PASSWORD),
      [FIELDS.PASSWORD_CONFIRMATION]: {
        presence: true,
        equality: FIELDS.PASSWORD,
      },
      ...presenceConstraint(FIELDS.COUNTRY_CODE),
      ...presenceConstraint(FIELDS.SCHOOL_CODE),
      ...termsConstraint,
    },
  )

const SchoolRegistration = () => {
  const router = useRouter()
  const s = useScopedI18n('auth.signUpSchool')
  const locale = useLocale()
  const dispatch = useAppDispatch()

  const [isShowPassword, setShowPassword] = useState(false)
  const [responseError, setResponseError] = useState<string[] | null>(null)
  const [isLoading, setLoading] = useState(false)

  const [userEmail, setUserEmail] = useState<{
    email: string | null
    isValid: boolean | null
  }>({
    email: null,
    isValid: null,
  })

  const debouncedUserEmailValidation = useDebouncedCallback(
    async (value: any) => {
      // TODO Write Async validation with validate.js or create Validation Form field with Promise

      if (isLoading) return undefined

      if (!value || value === '') {
        return 'should be filled'
      }

      if (value === userEmail.email) {
        return userEmail.isValid
      }

      setUserEmail(prevState => ({
        ...prevState,
        email: value,
      }))

      if (!value.match(emailRegex)) {
        return 'should be entered correct email'
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

          return "email already taken'"
        })

      return undefined
    },
    1000,
  )

  const handleSubmit = async (values: any) => {
    const variables = {
      email: get(values, FIELDS.EMAIL),
      first_name: get(values, FIELDS.FIRST_NAME),
      last_name: get(values, FIELDS.LAST_NAME),
      password: get(values, FIELDS.PASSWORD),
      password_confirmation: get(values, FIELDS.PASSWORD_CONFIRMATION),
      country_code: get(values, [FIELDS.COUNTRY_CODE, 'value']),
      school_name: get(values, FIELDS.SCHOOL_NAME),
      school_code: get(values, FIELDS.SCHOOL_CODE),
      role: USER_ROLES.schoolAdmin,
    }

    setLoading(true)

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

        await router.push(SCHOOL_PATHS.MANAGE)
      } else {
        setResponseError(
          get(response, 'errors') || [
            'Something going wrong, please contact with support!',
          ],
        )
      }
    } catch (error) {
      setResponseError(
        get(error, 'data.errors') || [
          'Something going wrong, please contact with support!',
        ],
      )
    }

    setLoading(false)
  }

  const handleTogglePassword = useCallback(() => {
    setShowPassword(prevState => !prevState)
  }, [isShowPassword])

  const renderResponseErrors = () => map(responseError, err => err).join('')

  const renderForm = (form: any) => {
    const isConfirmPasswordError =
      get(form, 'touched.passwordConfirmation', false) &&
      get(form, 'errors.passwordConfirmation', false)

    const isEmailError =
      get(form, 'touched.email', false) && get(form, 'errors.email')

    const validationError =
      !isEmpty(get(form, 'errors')) && get(form, 'submitFailed')
        ? _('error.fillAllRequired')
        : null

    const renderLeftColumn = () => (
      <Flex flexDirection="column" flexWrap="wrap" width={1}>
        <Input
          highlight
          name={FIELDS.SCHOOL_NAME}
          noError
          placeholder={s('fields.schoolNamePlaceholder')}
        />
        <Input
          highlight
          name={FIELDS.FIRST_NAME}
          noError
          placeholder={s('fields.firstNamePlaceholder')}
        />
        <Input
          highlight
          name={FIELDS.LAST_NAME}
          noError
          placeholder={s('fields.lastNamePlaceholder')}
        />
        <Select
          highlight
          name={FIELDS.COUNTRY_CODE}
          noError
          options={countriesList}
          placeholder={s('fields.countryPlaceholder')}
        />
        <WarningWrap>
          <DebouncedInput
            isError={isEmailError || userEmail.isValid === false}
            name={FIELDS.EMAIL}
            noError
            placeholder={s('fields.emailPlaceholder')}
            validate={debouncedUserEmailValidation}
          />

          {!userEmail.isValid && !isNil(userEmail.isValid) && (
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
      </Flex>
    )

    const renderRightColumn = () => (
      <Flex flexDirection="column" flexWrap="wrap" width={1}>
        <PasswordContainer>
          <Input
            highlight
            masked={!isShowPassword}
            name={FIELDS.PASSWORD}
            noError
            placeholder={s('fields.passwordPlaceholder')}
          />
          <Flex onClick={handleTogglePassword}>
            <ShowPasswordButton active={isShowPassword} />
          </Flex>
        </PasswordContainer>

        <WarningWrap width={1}>
          <Input
            highlight
            masked
            name={FIELDS.PASSWORD_CONFIRMATION}
            noError
            placeholder={s('fields.repeatPasswordPlaceholder')}
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
          highlight
          name={FIELDS.SCHOOL_CODE}
          noError
          placeholder={s('fields.codePlaceholder')}
        />

        <Flex flexWrap="wrap" justifyContent="center" width={1}>
          <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
            <Flex
              color="#071D40"
              fontSize={18}
              fontWeight="600"
              justyfContent="center"
              width={1}
            >
              {s('dontHaveCode')}
            </Flex>

            <Flex
              alignItems="center"
              flexWrap="wrap"
              justifyContent="center"
              mt={14}
              width={1}
            >
              <Link href={LANDING_PATHS.PRINCIPLES} passHref>
                <ButtonLink as="a" target="_blank" width={160}>
                  {s('clickHere')}
                </ButtonLink>
              </Link>

              <Element ml="5px" mr="5px">
                {s('or')}
              </Element>

              <Link href={AUTH_PATHS.REQUEST_A_DEMO} passHref>
                <ButtonLink as="a" green width={164}>
                  {s('requestDemo')}
                </ButtonLink>
              </Link>
            </Flex>
          </Media>

          <Media lessThan={MEDIA_SIZES.DESKTOP}>
            <Flex
              color="#071D40"
              fontSize={16}
              fontWeight="600"
              justifyContent="center"
              width={1}
            >
              {s('dontHaveCode')}
            </Flex>
            <Flex
              alignItems="center"
              flexWrap="wrap"
              justifyContent="center"
              mt="14px"
              width={1}
            >
              <Link href={LANDING_PATHS.PRINCIPLES} passHref>
                <ButtonLink
                  as="a"
                  padding="5px 10px"
                  target="_blank"
                  width="180px"
                >
                  {s('clickHere')}
                </ButtonLink>
              </Link>

              <Element mb="4px" mt="4px" textAlign="center" width={1}>
                {s('or')}
              </Element>

              <Link href={AUTH_PATHS.REQUEST_A_DEMO} passHref>
                <ButtonLink as="a" green padding="5px 10px" width="180px">
                  {s('requestDemo')}
                </ButtonLink>
              </Link>
            </Flex>
          </Media>
        </Flex>
      </Flex>
    )

    return (
      <FormWrap locale={locale} maxWidth={760} width={1}>
        <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
          <Flex alignItems="center" mb={20} mt="20px" width={1}>
            <FormTitle>{s('title')}</FormTitle>
          </Flex>
          <Flex justifyContent="space-between" width={1}>
            <Flex maxWidth="360px" width={1}>
              {renderLeftColumn()}
            </Flex>
            <Flex maxWidth="360px" mb="5px" width={1}>
              {renderRightColumn()}
            </Flex>
          </Flex>
        </Media>

        <Media at={MEDIA_SIZES.TABLET}>
          <Flex
            alignItems="center"
            margin="0 auto 20px auto"
            maxWidth="576px"
            width={1}
          >
            <FormTitle>{s('title')}</FormTitle>
          </Flex>

          <Flex
            alignItems="flex-start"
            justifyContent="space-between"
            margin="0 auto 30px auto"
            maxWidth="576px"
            width={1}
          >
            <Flex maxWidth="270px" width={1}>
              {renderLeftColumn()}
            </Flex>
            <Flex maxWidth="270px" width={1}>
              {renderRightColumn()}
            </Flex>
          </Flex>
        </Media>

        <Media at={MEDIA_SIZES.MOBILE}>
          <Flex
            alignItems="center"
            margin="0 auto 20px auto"
            maxWidth="280px"
            width={1}
          >
            <FormTitle>{s('title')}</FormTitle>
          </Flex>

          <Flex
            alignItems="flex-start"
            flexWrap="wrap"
            justifyContent="space-between"
            margin="0 auto 30px auto"
            maxWidth="280px"
            width={1}
          >
            <Flex maxWidth="288px" width={1}>
              {renderLeftColumn()}
            </Flex>
            <Flex maxWidth="288px" width={1}>
              {renderRightColumn()}
            </Flex>
          </Flex>
        </Media>

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
                <Flex color="#8DE1D1" fontSize={14}>
                  {s('fields.agree')}{' '}
                  <LinkHtml
                    color="#49CEB1"
                    fontWeight="700"
                    href="/privacy-policy"
                    target="_blank"
                  >
                    {s('fields.terms')}
                  </LinkHtml>
                </Flex>
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

        <Flex flexWrap="wrap" justifyContent="center" width={1}>
          <Flex flexWrap="wrap" maxWidth={360} width={1}>
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
        </Flex>
      </FormWrap>
    )
  }

  return (
    <Background>
      <GlobalStyle />
      <Head description="School registration" title="School Registration" />

      <FormContainer flexWrap="wrap" p="0 20px">
        <Form
          mutators={{ setFieldTouched } as any}
          render={renderForm}
          validate={validateForm}
          onSubmit={handleSubmit}
        />
      </FormContainer>
    </Background>
  )
}

export default SchoolRegistration
