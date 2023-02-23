/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useCallback, useMemo, useState } from 'react'
import { withTypes } from 'react-final-form'

import validate from 'validate.js'

import get from 'lodash/get'
import map from 'lodash/map'
import pickBy from 'lodash/pickBy'

import { Flex, Loader } from 'Components/UI'

import {
  Error,
  FormButton,
  Success,
} from 'Components/Blocks/Entities/Settings/Forms/styles'
import { InputField } from 'Components/Blocks/Fields'

import { profileApi } from 'Services/Api/requests'
import _, { useScopedI18n } from 'Services/I18n'

enum FIELDS {
  CURRENT_PASSWORD = 'currentPassword',
  NEW_PASSWORD = 'newPassword',
  CONFIRM_PASSWORD = 'confirmPassword',
}

type FormValues = {
  [FIELDS.CURRENT_PASSWORD]: string
  [FIELDS.NEW_PASSWORD]: string
  [FIELDS.CONFIRM_PASSWORD]: string
}

const { Form } = withTypes<FormValues>()

const PasswordForm: React.FC = () => {
  const s = useScopedI18n('settings')

  const [responseError, setResponseError] = useState<string[]>([])
  const [isSuccess, setSuccess] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const FORM_CONSTRAINS = useMemo(() => {
    const constrains = {
      [FIELDS.CURRENT_PASSWORD]: {
        presence: true,
      },
      [FIELDS.NEW_PASSWORD]: {
        presence: true,
      },
      [FIELDS.CONFIRM_PASSWORD]: {
        presence: true,
        equality: {
          attribute: FIELDS.NEW_PASSWORD,
          message: `^${_('error.passwordValidationError')}`,
        },
      },
    }

    return constrains
  }, [])

  const handleSubmitForm = useCallback(async values => {
    setResponseError([])
    setSuccess(false)
    setLoading(true)

    try {
      const filledValues = pickBy({
        password: values[FIELDS.CURRENT_PASSWORD],
        new_password: values[FIELDS.NEW_PASSWORD],
        new_password_confirmation: values[FIELDS.CONFIRM_PASSWORD],
      })

      await profileApi.update(filledValues)

      setSuccess(true)
    } catch (e) {
      const errors = get(e, ['data', 'errors']) || [
        _('error.somethingGoingWrong'),
      ]
      setResponseError(errors)
    } finally {
      setLoading(false)
    }
  }, [])

  const renderResponseErrors = () => (
    <Error>{map(responseError, err => err).join(' ')}</Error>
  )

  const renderForm = useCallback(
    ({ handleSubmit, form }) => (
      <Flex
        alignContent="flex-start"
        alignItems="flex-start"
        flexWrap="wrap"
        width={1}
      >
        <Flex
          alignContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
          mt={20}
          width="354px"
        >
          <InputField
            height="40px"
            initialValue=""
            label={s('fields.passwordLabel')}
            name={FIELDS.CURRENT_PASSWORD}
            noError
            placeholder={s('fields.passwordPlaceholder')}
            styles={{ mb: '14px' }}
            tip={null}
            type="password"
          />

          <InputField
            height="40px"
            initialValue=""
            label={s('fields.newPasswordLabel')}
            name={FIELDS.NEW_PASSWORD}
            noError
            placeholder={s('fields.passwordPlaceholder')}
            styles={{ mb: '14px' }}
            tip={null}
            type="password"
          />

          <InputField
            height="40px"
            initialValue=""
            label={s('fields.repeatPasswordLabel')}
            name={FIELDS.CONFIRM_PASSWORD}
            placeholder={s('fields.passwordPlaceholder')}
            styles={{ mb: '14px' }}
            tip={null}
            type="password"
          />
        </Flex>

        <Flex mt={20} width={1}>
          <FormButton gray mr={20} width="146px" onClick={() => form.reset()}>
            {_('buttons.cancel')}
          </FormButton>
          <FormButton
            as="button"
            ml={30}
            type="submit"
            width="146px"
            onClick={handleSubmit}
          >
            {_('buttons.saveChanges')}
          </FormButton>
        </Flex>

        {isLoading && <Loader />}

        {isSuccess && <Success>{s('successMessage')}</Success>}

        {renderResponseErrors()}
      </Flex>
    ),
    [responseError, isSuccess, isLoading],
  )

  return (
    <Flex>
      <Form
        render={renderForm}
        validate={values => validate(values, FORM_CONSTRAINS)}
        onSubmit={handleSubmitForm}
      />
    </Flex>
  )
}

export default PasswordForm
