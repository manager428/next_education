import React, { useState } from 'react'
import { Form } from 'react-final-form'

import validate from 'validate.js'

import get from 'lodash/get'
import map from 'lodash/map'

import { Element, Flex, Loader } from 'Components/UI'

import { InputField } from 'Components/Blocks/Fields'

import { year4DigitsRegex } from 'Constants/regex'

import { profileApi } from 'Services/Api/requests'

import { theme } from 'Theme'

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
    setResponseError([])

    try {
      await profileApi.update({
        year_of_birth: values[FIELDS.YEAR_OF_BIRTH],
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

      <Element
        color={theme.colors.orange}
        fontSize={14}
        lineHeight="21px"
        mt={14}
        textAlign="center"
        width={1}
      >
        Please note that you cannot change your date of birth later!
      </Element>

      {responseError && <Error>{renderResponseErrors()} </Error>}

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
        <Title>Input your year of birth</Title>
        <Form
          render={renderForm}
          validate={handleValidate}
          onSubmit={handleSubmitForm}
        />
      </Content>
    </Modal>
  )
}

export default UpdateUserDateOfBirthModal
