import React, { useCallback, useEffect, useState } from 'react'
import { Form } from 'react-final-form'

import { createGlobalStyle } from 'styled-components'

import setFieldTouched from 'final-form-set-field-touched'
import Link from 'next/link'
import { useRouter } from 'next/router'
import validate from 'validate.js'

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

import { Element, Flex } from 'Components/UI'
import Loader from 'Components/UI/Loader'
import WarningTooltip from 'Components/UI/WarningTooltip'

import Head from 'Components/Blocks/Head'

import countriesList from 'Constants/countries.json'
import { USER_ROLES } from 'Constants/ids'
import { MEDIA_SIZES } from 'Constants/media'
import { AUTH_PATHS, LANDING_PATHS, PARENT_PATHS } from 'Constants/paths'
import { emailRegex } from 'Constants/regex'

import useLocale from 'Hooks/useLocale'
import useRouterQueryParams from 'Hooks/useRouterQueryParams'
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

const ParentForm: React.FC = () => {
  const router = useRouter()
  const s = useScopedI18n('auth.signupParent')
  const locale = useLocale()
  const dispatch = useAppDispatch()
  const params = useRouterQueryParams()

  const [isShowPassword, setShowPassword] = useState(false)
  const [isUserEmailValid, setUserEmailValid] = useState<boolean | null>(false)
  const [responseError, setResponseError] = useState<string[] | null>(null)
  const [isLoading, setLoading] = useState(false)
  const [defaultEmail, setDefaultEmail] = useState<null | string | string[]>(
    null,
  )
  const [defaultParentCode, setDefaultParentCode] = useState<
    null | string | string[]
  >(null)

  useEffect(() => {
    if (params?.email) {
      setDefaultEmail(params.email)
    }
    if (params?.code) {
      setDefaultParentCode(params.code)
    }
  }, [params])

  const userEmailValidation = async (value: any) => {
    // TODO: refactor check email

    if (isLoading) return undefined

    if (!value || value === '') {
      setUserEmailValid(null)
      return 'should be filled'
    }

    if (!value.match(emailRegex)) {
      return 'should be entered correct email'
    }

    await authApi
      .checkEmail({ email: value })
      .then(() => {
        setUserEmailValid(true)
      })
      .catch(() => {
        setUserEmailValid(false)

        return "email already taken'"
      })

    return undefined
  }

  const handleSubmit = async (values: any) => {
    const variables = {
      email: get(values, 'email'),
      password: get(values, 'password'),
      password_confirmation: get(values, 'passwordConfirmation'),
      first_name: get(values, 'firstName'),
      last_name: get(values, 'lastName'),
      country_code: get(values, 'country.value'),
      parent_code: get(values, 'parentCode'),
      role: USER_ROLES.parent,
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

        await router.push(PARENT_PATHS.MANAGE)
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

  const validateForm = (values: any) =>
    validate(
      {
        ...values,
        country: get(values, 'country.value'),
        age: get(values, 'age.value'),
      },
      {
        ...presenceConstraint('firstName'),
        ...presenceConstraint('lastName'),
        ...presenceConstraint('password'),
        ...presenceConstraint('country'),
        ...presenceConstraint('parentCode'),
        ...passwordConfirmationConstraint,
        ...termsConstraint,
      },
    )

  const renderResponseErrors = () => map(responseError, err => err).join('')

  // eslint-disable-next-line no-shadow
  const renderForm = (form: any) => {
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
    const isParentCodeError =
      get(form, 'touched.parentCode', false) &&
      get(form, 'errors.parentCode', false)
    const isCountryError =
      get(form, 'touched.country', false) && get(form, 'errors.country', false)

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
            isError={isEmailError || isUserEmailValid === false}
            name="email"
            noError
            placeholder={s('fields.emailPlaceholder')}
            validate={userEmailValidation}
            validateFields={['email']}
          />

          {isUserEmailValid === false && (
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
            <ShowPasswordButton active={isShowPassword} />
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
        <Flex flexWrap="wrap" mb="10px">
          <Input
            backgroundColor="rgba(110, 70, 255, 0.1)"
            isError={isParentCodeError}
            name="parentCode"
            noError
            placeholder={s('fields.codePlaceholder')}
          />
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <Flex color="#071D40" fontSize={18} fontWeight="600">
              {s('dontHaveCode')}
            </Flex>
            <Flex justifyContent="center" mt={14} width={1}>
              <Link href={LANDING_PATHS.PARENTS} passHref>
                <ButtonLink as="a" target="_blank">
                  {s('getIt')}
                </ButtonLink>
              </Link>
            </Flex>
          </Flex>
        </Flex>

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
                <Element color="#6E46FF" fontSize={14}>
                  {s('fields.agree')}{' '}
                  <LinkHtml
                    color="#6E46FF"
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
                <Element color="#6E46FF" fontSize="10px">
                  {s('fields.agree')}{' '}
                  <LinkHtml
                    color="#6E46FF"
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
      </Flex>
    )

    return (
      <FormWrap
        justifyContent="center"
        locale={locale}
        maxWidth={780}
        mt={42}
        width={1}
      >
        <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
          <Flex alignItems="center" margin="0 auto" mb={20} width={1}>
            <FormTitle>{s('title')}</FormTitle>
          </Flex>

          <Flex justifyContent="space-between" width={1}>
            <Flex maxWidth="370px" width={1}>
              {renderLeftColumn()}
            </Flex>
            <Flex maxWidth="370px" mb="5px" width={1}>
              {renderRightColumn()}
            </Flex>
          </Flex>
        </Media>

        <Media at={MEDIA_SIZES.TABLET}>
          <Flex
            alignItems="center"
            margin="0 auto"
            maxWidth="576px"
            mb={20}
            width={1}
          >
            <FormTitle>{s('title')}</FormTitle>
          </Flex>
          <Flex
            justifyContent="space-between"
            margin="0 auto"
            maxWidth="576px"
            width={1}
          >
            <Flex maxWidth="270px" width={1}>
              {renderLeftColumn()}
            </Flex>
            <Flex maxWidth="270px" mb="5px" width={1}>
              {renderRightColumn()}
            </Flex>
          </Flex>
        </Media>

        <Media at={MEDIA_SIZES.MOBILE}>
          <Flex
            alignItems="center"
            justifyContent="center"
            margin="0 auto"
            maxWidth="280px"
            mb={20}
            width={1}
          >
            <FormTitle>{s('title')}</FormTitle>
          </Flex>

          <Flex
            flexWrap="wrap"
            justifyContent="center"
            margin="0 auto"
            maxWidth="288px"
            width={1}
          >
            <Flex maxWidth="280px" width={1}>
              {renderLeftColumn()}
            </Flex>
            <Flex maxWidth="280px" width={1}>
              {renderRightColumn()}
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
              <Flex color="#6E46FF" fontSize={14} mr="5px">
                {s('alreadyHaveAccount')}
              </Flex>
              <Link href={AUTH_PATHS.SIGN_IN} passHref>
                <LinkHtml color="#6E46FF" fontWeight={600}>
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
      <Head description="Parent registration" title="Parent registration" />

      <FormContainer flexWrap="wrap" p="0px 20px">
        <Form
          initialValues={{
            email: defaultEmail,
            parentCode: defaultParentCode,
          }}
          mutators={{ setFieldTouched } as any}
          render={renderForm}
          validate={validateForm}
          onSubmit={handleSubmit}
        />
      </FormContainer>
    </Background>
  )
}

export default ParentForm
