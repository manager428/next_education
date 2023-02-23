import React, { useState } from 'react'
import { Form } from 'react-final-form'

import validate from 'validate.js'

import get from 'lodash/get'
import map from 'lodash/map'

import { Flex, Loader } from 'Components/UI'

import { InputField } from 'Components/Blocks/Fields'

import { year4DigitsRegex } from 'Constants/regex'

import { useAppSelector } from 'Hooks/useStore'

import { teacherApi } from 'Services/Api/requests'

import {
  Button,
  ButtonsContainer,
  Content,
  Error,
  Modal,
  Title,
} from './styles'

type Props = {
  isOpen: boolean
  onCloseModal: () => void
  onSuccess: () => void
}

const FIELDS = {
  YEAR_OF_BIRTH: 'yearOfBirth',
}

const UpdateUserDateOfBirthModal: React.FC<Props> = ({
  isOpen,
  onCloseModal,
  onSuccess,
}) => {
  const [responseError, setResponseError] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const selectedUser = useAppSelector(
    state => state.modals.updateYearOfBirthModal?.selectedUser,
  )

  const handleValidate = values =>
    validate(values, {
      [FIELDS.YEAR_OF_BIRTH]: {
        presence: true,
        format: {
          pattern: year4DigitsRegex,
        },
      },
    })

  const handleSubmitForm = async values => {
    setIsLoading(true)

    try {
      await teacherApi.updateYearOfBirth({
        userId: selectedUser?.id ?? 0,
        yearOfBirth: +values[FIELDS.YEAR_OF_BIRTH],
      })
      onSuccess()
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
  const renderForm = ({ handleSubmit }) => (
    <Flex flexWrap="wrap" width="100%">
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <InputField
        id={FIELDS.YEAR_OF_BIRTH}
        label="Write the year of birth here"
        name={FIELDS.YEAR_OF_BIRTH}
        noError
        placeholder="2001"
        tip={null}
        type="text"
      />

      <Error>{renderResponseErrors()}</Error>

      <ButtonsContainer mt="20px">
        <Button onClick={onCloseModal}>Cancel</Button>
        <Button primary onClick={handleSubmit}>
          Confirm
        </Button>

        {isLoading && <Loader />}
      </ButtonsContainer>
    </Flex>
  )

  return (
    <Modal isOpen={isOpen} onCallback={onCloseModal}>
      <Content>
        <Title>
          Change the year of birth for the student {selectedUser?.fullName}
        </Title>
        <Form
          initialValues={{
            [FIELDS.YEAR_OF_BIRTH]: selectedUser?.yearOfBirth,
          }}
          render={renderForm}
          validate={handleValidate}
          onSubmit={handleSubmitForm}
        />
      </Content>
    </Modal>
  )
}

export default UpdateUserDateOfBirthModal
