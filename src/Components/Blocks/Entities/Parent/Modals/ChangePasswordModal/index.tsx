import React, { useCallback, useRef, useState } from 'react'
import { withTypes } from 'react-final-form'

import validate from 'validate.js'

import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'

import { Flex } from 'Components/UI'
import Loader from 'Components/UI/Loader'

import useLocale from 'Hooks/useLocale'
import useOutsideClick from 'Hooks/useOutsideClick'

import { parentApi } from 'Services/Api/requests'
import _, { useScopedI18n } from 'Services/I18n'

import {
  Content,
  ErrorsContainer,
  FormContainer,
  FormInput,
  Modal,
  SubmitButton,
  Title,
} from './styles'

enum FIELDS {
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'password_confirmation',
}

type FormValues = {
  [FIELDS.PASSWORD]: string
  [FIELDS.CONFIRM_PASSWORD]: string
}

const { Form } = withTypes<FormValues>()

type Props = {
  isOpen: boolean
  userId: number
  onSuccess: () => void
  onClose: () => void
}

const ChangePasswordModal: React.FC<Props> = ({
  userId,
  isOpen,
  onSuccess,
  onClose,
}) => {
  const FORM_CONSTRAINS = {
    [FIELDS.PASSWORD]: {
      presence: {
        presence: true,
        message: `^${_('error.cantBeBlank')}`,
      },
    },
    [FIELDS.CONFIRM_PASSWORD]: {
      presence: true,
      equality: {
        attribute: FIELDS.PASSWORD,
        message: `^${_('error.passwordValidationError')}`,
      },
      length: {
        minimum: 6,
      },
    },
  }
  const s = useScopedI18n('modals.childResetPassword')
  const ref = useRef(null)
  const locale = useLocale()

  const [isLoading, setLoading] = useState(false)
  const [responseError, setResponseError] = useState<string | null>(null)

  useOutsideClick({ ref, onClick: onClose })

  const handleSubmitForm = async (values: FormValues): Promise<any> => {
    setLoading(true)
    setResponseError(null)

    try {
      await parentApi.changeChildPassword({
        ...values,
        userId,
      })

      onSuccess()
      onClose()
    } catch (e) {
      setLoading(false)

      const errors = map(e?.data.errors, er => er)

      setResponseError(
        errors.length > 0 ? errors.join(', ') : _('somethingGoingWrong'),
      )
    }
  }

  const renderForm = useCallback(
    ({ handleSubmit, errors, submitFailed }) => {
      const validationError =
        !isEmpty(errors) && submitFailed
          ? map(errors, (err, index) =>
              map(err, (singleError, singleErrorIndex) => (
                <Flex
                  justifyContent="flex-start"
                  key={`error${index}-${singleErrorIndex}`}
                  width={1}
                >
                  {singleError}
                </Flex>
              )),
            )
          : null

      return (
        <FormContainer>
          {isLoading && <Loader />}
          <Flex mb={12} width={1}>
            <FormInput
              label={s('fields.passwordLabel')}
              name={FIELDS.PASSWORD}
              noError
              placeholder={s('fields.placeholder')}
              tabIndex={0}
            />
          </Flex>

          <Flex width={1}>
            <FormInput
              label={s('fields.passwordConfirmLabel')}
              name={FIELDS.CONFIRM_PASSWORD}
              noError
              placeholder={s('fields.placeholder')}
              tabIndex={0}
            />
          </Flex>

          <ErrorsContainer>{validationError || responseError}</ErrorsContainer>

          <Flex justifyContent="space-between" mt={30} width={1}>
            <SubmitButton gray width="100px" onClick={() => onClose()}>
              {_('buttons.cancel')}
            </SubmitButton>
            <SubmitButton width="120px" onClick={handleSubmit}>
              {_('buttons.submit')}
            </SubmitButton>
          </Flex>
        </FormContainer>
      )
    },
    [responseError, locale, isLoading],
  )

  return (
    <Modal isOpen={isOpen} onCallback={onClose}>
      <Content locale={locale} ref={ref}>
        <Title>{s('title')}</Title>

        <Form
          render={renderForm}
          validate={values => validate(values, FORM_CONSTRAINS)}
          onSubmit={handleSubmitForm}
        />
      </Content>
    </Modal>
  )
}

export default ChangePasswordModal
