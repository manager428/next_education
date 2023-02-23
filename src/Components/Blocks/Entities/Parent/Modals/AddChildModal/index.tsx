import React, { useCallback, useRef, useState } from 'react'
import { withTypes } from 'react-final-form'

import InnerHTML from 'dangerously-set-html-content'
import validate from 'validate.js'

import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'

import { Flex } from 'Components/UI'
import Loader from 'Components/UI/Loader'

import { year4DigitsRegex } from 'Constants/regex'

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
  FIRST_NAME = 'first_name',
  USERNAME = 'user',
  PASSWORD = 'password',
  YEAR_OF_BIRTH = 'year_of_birth',
}

type FormValues = {
  [FIELDS.FIRST_NAME]: string
  [FIELDS.USERNAME]: string
  [FIELDS.PASSWORD]: string
  [FIELDS.YEAR_OF_BIRTH]: string
}

const { Form } = withTypes<FormValues>()

type Props = {
  isOpen: boolean
  onSuccess: () => void
  onClose: () => void
}

const AddChildModal: React.FC<Props> = ({ isOpen, onSuccess, onClose }) => {
  const FORM_CONSTRAINS = {
    [FIELDS.FIRST_NAME]: {
      presence: {
        presence: true,
        message: `^${_('error.cantBeBlank')}`,
      },
    },
    [FIELDS.USERNAME]: {
      presence: {
        presence: true,
        message: `^${_('error.cantBeBlank')}`,
      },
    },
    [FIELDS.PASSWORD]: {
      presence: {
        presence: true,
        message: `^${_('error.cantBeBlank')}`,
      },
    },
    [FIELDS.YEAR_OF_BIRTH]: {
      presence: true,
      format: {
        pattern: year4DigitsRegex,
        message: `^${_('modals.addChild.fields.yearError')}`,
      },
    },
  }
  const s = useScopedI18n('modals.addChild')
  const ref = useRef(null)

  const [responseError, setResponseError] = useState<string | null>(null)
  const [isLoading, setLoading] = useState(false)

  useOutsideClick({ ref, onClick: onClose })

  const handleSubmitForm = async (values: FormValues): Promise<any> => {
    setResponseError(null)

    setLoading(true)

    try {
      await parentApi.addChild({
        ...values,
        username: values[FIELDS.USERNAME],
      })

      onSuccess()
      onClose()

      setLoading(false)
    } catch (e) {
      const errors = map(e?.data.errors, er => er)

      setResponseError(
        errors.length > 0 ? errors.join(', ') : _('error.somethingGoingWrong'),
      )

      setLoading(false)
    }
  }

  const renderForm = useCallback(
    ({ handleSubmit, errors, submitFailed }) => {
      const validationError =
        !isEmpty(errors) && submitFailed ? _('error.fillAllRequired') : null

      return (
        <FormContainer>
          {isLoading && <Loader />}
          <Flex mb="12px" width={1}>
            <FormInput
              highlight
              label={s('fields.firstNameLabel')}
              name={FIELDS.FIRST_NAME}
              noError
              placeholder={s('fields.placeholder')}
            />
          </Flex>

          <Flex mb="12px" width={1}>
            <FormInput
              autoComplete="off"
              highlight
              label={s('fields.usernameLabel')}
              name={FIELDS.USERNAME}
              noError
              parse={(value: string) => {
                const formattedValue = value
                return (
                  formattedValue &&
                  formattedValue.replace(/[^A-Za-z0-9_@]/gi, '')
                )
              }}
              placeholder={s('fields.placeholder')}
            />
          </Flex>
          <Flex mb="12px" width={1}>
            <FormInput
              highlight
              label={s('fields.temporaryPasswordLabel')}
              name={FIELDS.PASSWORD}
              noError
              placeholder={s('fields.placeholder')}
              type="password"
            />
          </Flex>

          <Flex mb="12px" width={1}>
            <FormInput
              highlight
              id={FIELDS.YEAR_OF_BIRTH}
              label={s('fields.yearOfBirthLabel')}
              name={FIELDS.YEAR_OF_BIRTH}
              placeholder="2002"
              tip={null}
              type="text"
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
    [responseError, isLoading],
  )

  return (
    <Modal isOpen={isOpen} onCallback={onClose}>
      <Content ref={ref}>
        <Title>
          <InnerHTML html={s('title')} />
        </Title>

        <Form
          render={renderForm}
          validate={values => validate(values, FORM_CONSTRAINS)}
          onSubmit={handleSubmitForm}
        />
      </Content>
    </Modal>
  )
}

export default AddChildModal
