import React, { useEffect, useState } from 'react'
import { Form } from 'react-final-form'

import validate from 'validate.js'

import get from 'lodash/get'
import map from 'lodash/map'

import { Flex, Loader } from 'Components/UI'

import { InputField } from 'Components/Blocks/Fields'

import useMe from 'Hooks/useMe'
import { useAppSelector } from 'Hooks/useStore'

import { schoolApi } from 'Services/Api/requests'

import {
  passwordConfirmationConstraint,
  presenceConstraint,
} from 'Utils/constraints'

import {
  Button,
  ButtonsContainer,
  Content,
  Error,
  Modal,
  Title,
} from './styles'

type Props = {
  onCloseModal: () => void
}

const ChangeStudentPasswordModal: React.FC<Props> = ({ onCloseModal }) => {
  const me = useMe()
  const { userId } = useAppSelector(
    state => state.modals.schoolChangeStudentPassword,
  )

  const [responseError, setResponseError] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const schoolId = me?.school?.id ?? 0

  useEffect(
    () => () => {
      onCloseModal()
    },
    [],
  )

  const handleValidate = values =>
    validate(values, {
      ...presenceConstraint('password'),
      ...passwordConfirmationConstraint,
    })

  const handleSubmitForm = async values => {
    setIsLoading(true)

    if (!userId) return

    try {
      await schoolApi.changeStudentPassword({
        schoolId,
        studentId: userId,
        password: values.password,
      })

      onCloseModal()
    } catch (e) {
      const errors = get(e, ['data', 'errors']) || [
        'Something going wrong, please contact with support!',
      ]
      setResponseError(errors)
    } finally {
      setIsLoading(false)
    }
  }

  const renderResponseErrors = () => map(responseError, err => err).join(' ')

  // eslint-disable-next-line react/prop-types
  const renderForm = ({ handleSubmit, invalid, submitFailed }) => (
    <Flex flexWrap="wrap" width="100%">
      <InputField
        label="New Student Password"
        name="password"
        noError
        placeholder="Write here"
        tip={null}
        type="text"
      />

      <InputField
        label="Repeat Password"
        name="passwordConfirmation"
        noError
        placeholder="Write here..."
        styles={{ mt: 14 }}
        tip={null}
        type="text"
      />

      <Error>
        {invalid && submitFailed && (
          <>Oops! Confirm password should match main password field!</>
        )}
        {renderResponseErrors()}
      </Error>

      <ButtonsContainer mt="20px">
        <Button onClick={onCloseModal}>Cancel</Button>
        <Button primary onClick={handleSubmit}>
          Reset Student Password
        </Button>

        {isLoading && <Loader />}
      </ButtonsContainer>
    </Flex>
  )

  return (
    <Modal isOpen onCallback={onCloseModal}>
      <Content>
        <Title>Reset Password</Title>
        <Form
          initialValues={{
            password: null,
            passwordConfirmation: null,
          }}
          render={renderForm}
          validate={handleValidate}
          onSubmit={handleSubmitForm}
        />
      </Content>
    </Modal>
  )
}

export default ChangeStudentPasswordModal
