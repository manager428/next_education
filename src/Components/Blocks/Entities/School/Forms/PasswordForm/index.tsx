import React, { useCallback, useMemo, useState } from 'react'
import { withTypes } from 'react-final-form'

import validate from 'validate.js'

import get from 'lodash/get'
import map from 'lodash/map'
import pickBy from 'lodash/pickBy'

import { Flex, Loader } from 'Components/UI'

import { InputField } from 'Components/Blocks/Fields'

import useMe from 'Hooks/useMe'

import { schoolApi } from 'Services/Api/requests'

import { Error, FormButton, Success } from '../styles'

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
  const [responseError, setResponseError] = useState<string[]>([])
  const [isSuccess, setSuccess] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const me = useMe()
  const schoolId = me?.school?.id ?? 0

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
          message: 'does not match new password',
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

      await schoolApi.updateSchoolProfile(schoolId, filledValues)

      setSuccess(true)
    } catch (e) {
      const errors = get(e, ['data', 'errors']) || [
        'Something going wrong, please contact with support!',
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
            label="Current password"
            name={FIELDS.CURRENT_PASSWORD}
            noError
            placeholder="Type here..."
            styles={{ mb: '14px' }}
            tip={null}
            type="password"
          />

          <InputField
            height="40px"
            initialValue=""
            label="New password"
            name={FIELDS.NEW_PASSWORD}
            noError
            placeholder="Type here..."
            styles={{ mb: '14px' }}
            tip={null}
            type="password"
          />

          <InputField
            height="40px"
            initialValue=""
            label="Repeat password"
            name={FIELDS.CONFIRM_PASSWORD}
            placeholder="Type here..."
            styles={{ mb: '14px' }}
            tip={null}
            type="password"
          />
        </Flex>

        <Flex mt={20} width={1}>
          <FormButton gray mr={20} width="146px" onClick={() => form.reset()}>
            Cancel
          </FormButton>
          <FormButton
            as="button"
            ml={30}
            type="submit"
            width="146px"
            onClick={handleSubmit}
          >
            Save Changes
          </FormButton>
        </Flex>

        {isLoading && <Loader />}

        {isSuccess && <Success>Profile successfully updated!</Success>}

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
