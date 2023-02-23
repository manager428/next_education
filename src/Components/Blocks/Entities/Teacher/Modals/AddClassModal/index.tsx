import React, { useState } from 'react'
import { Form } from 'react-final-form'

import { useSWRConfig } from 'swr'
import validate from 'validate.js'

import get from 'lodash/get'
import map from 'lodash/map'

import { Flex, Loader } from 'Components/UI'

import { InputField, SelectField } from 'Components/Blocks/Fields'

import { BASE_ENGLISH_LEVEL_OPTIONS } from 'Constants/ids'

import { teacherApi } from 'Services/Api/requests'
import TEACHER_API_PATHS from 'Services/Api/requests/teacher/paths'

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
  onSuccess: (classId: number) => void
}

const FIELDS = {
  CLASS_NAME: 'className',
  ENGLISH_LEVEL: 'englishLevel',
}

const FORM_CONSTRAINS = {
  [FIELDS.CLASS_NAME]: {
    presence: true,
  },
  [FIELDS.ENGLISH_LEVEL]: {
    presence: true,
  },
}

const AddClassModal: React.FC<Props> = ({
  isOpen,
  onCloseModal,
  onSuccess,
}) => {
  const { mutate } = useSWRConfig()

  const [responseError, setResponseError] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleValidate = values => validate(values, FORM_CONSTRAINS)

  const handleSubmitForm = async values => {
    setIsLoading(true)
    setResponseError([])

    try {
      const response = await teacherApi.addClass({
        className: values[FIELDS.CLASS_NAME],
        englishLevel: values[FIELDS.ENGLISH_LEVEL].value,
      })

      await mutate(
        TEACHER_API_PATHS.classes,
        currentState => {
          const updatedData = currentState?.data
            ? [...currentState?.data, response?.data]
            : [response?.data]

          return { data: updatedData }
        },
        true,
      )

      onSuccess(response.data?.id)
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
        id={FIELDS.CLASS_NAME}
        label="Classroom Name"
        name={FIELDS.CLASS_NAME}
        noError
        placeholder="Write here..."
        tip={null}
        type="text"
      />

      <Flex mt="14px" width={1}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <SelectField
          id={FIELDS.ENGLISH_LEVEL}
          label="Classroom Language Level"
          name={FIELDS.ENGLISH_LEVEL}
          noError
          options={BASE_ENGLISH_LEVEL_OPTIONS}
          placeholder="Select"
          selectProps={{
            maxMenuHeight: 220,
          }}
          width="100%"
        />
      </Flex>

      <Error>{renderResponseErrors()}</Error>

      <ButtonsContainer mt="20px">
        <Button onClick={onCloseModal}>Cancel</Button>
        <Button minWidth={160} primary onClick={handleSubmit}>
          Confirm
        </Button>

        {isLoading && <Loader />}
      </ButtonsContainer>
    </Flex>
  )

  return (
    <Modal isOpen={isOpen} onCallback={onCloseModal}>
      <Content>
        <Title>Fill in the information about the new classroom</Title>
        <Form
          render={renderForm}
          validate={handleValidate}
          onSubmit={handleSubmitForm}
        />
      </Content>
    </Modal>
  )
}

export default AddClassModal
