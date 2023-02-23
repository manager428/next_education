import React, { useMemo, useState } from 'react'
import { withTypes } from 'react-final-form'

import validate from 'validate.js'

import get from 'lodash/get'
import map from 'lodash/map'

import { Flex } from 'Components/UI'
import Loader from 'Components/UI/Loader'

import { InputField, SelectField } from 'Components/Blocks/Fields'

import { year4DigitsRegex } from 'Constants/regex'

import useSwrRequest from 'Hooks/useSwrRequest'

import { teacherApi } from 'Services/Api/requests'
import TEACHER_API_PATHS from 'Services/Api/requests/teacher/paths'

import { presenceConstraint } from 'Utils/constraints'

import {
  Button,
  ButtonsContainer,
  Content,
  Error,
  FormContent,
  Modal,
  Title,
} from './styles'

enum FIELDS {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  USERNAME = 'user',
  PASSWORD = 'password',
  YEAR_OF_BIRTH = 'yearOfBirth',
  CLASS = 'class',
}

type FormValues = {
  [FIELDS.FIRST_NAME]: string
  [FIELDS.LAST_NAME]: string
  [FIELDS.USERNAME]: string
  [FIELDS.PASSWORD]: string
  [FIELDS.YEAR_OF_BIRTH]: string
  [FIELDS.CLASS]: { label: string; value: number }
}

const { Form } = withTypes<FormValues>()

type Props = {
  isOpen: boolean
  onCloseModal: () => void
  onSuccess: () => void
}

const AddStudentModal: React.FC<Props> = ({
  isOpen,
  onCloseModal,
  onSuccess,
}) => {
  const [responseError, setResponseError] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const { data: teacherClasses, isLoading: isClassesLoading } = useSwrRequest({
    url: TEACHER_API_PATHS.classes,
  })

  const classesOptions = useMemo(
    () =>
      map(teacherClasses, teacherClass => ({
        label: teacherClass.class_name,
        value: teacherClass.id,
      })),
    [[teacherClasses]],
  )

  const handleValidate = (values: FormValues) =>
    validate(values, {
      ...presenceConstraint(FIELDS.FIRST_NAME),
      ...presenceConstraint(FIELDS.LAST_NAME),
      ...presenceConstraint(FIELDS.USERNAME),
      ...presenceConstraint(FIELDS.PASSWORD),
      ...presenceConstraint(FIELDS.CLASS),
      [FIELDS.YEAR_OF_BIRTH]: {
        presence: true,
        format: {
          pattern: year4DigitsRegex,
          message: '^ Year of birth invalid, format should be like ex: 2002',
        },
      },
    })

  const handleSubmitForm = async (values: FormValues) => {
    setIsLoading(true)
    setResponseError([])

    try {
      await teacherApi.addStudent({
        username: values[FIELDS.USERNAME],
        first_name: values[FIELDS.FIRST_NAME],
        last_name: values[FIELDS.LAST_NAME],
        password: values[FIELDS.PASSWORD],
        password_confirmation: values[FIELDS.PASSWORD],
        year_of_birth: +values[FIELDS.YEAR_OF_BIRTH],
        class_id: values[FIELDS.CLASS]?.value,
      })
      setIsLoading(false)
      onSuccess()
    } catch (e) {
      const errors = get(e, ['data', 'errors']) || [
        'Something going wrong, please contact with support!',
      ]

      setIsLoading(false)

      setResponseError(errors)
    }
  }

  const handleChangeUserName = form => e => {
    const { value } = e.target

    form.change(FIELDS.USERNAME, value.replace(/[^A-Za-z0-9_@]/gi, ''))
  }

  const renderResponseErrors = () => (
    <Error>{map(responseError, err => err).join(' ')}</Error>
  )

  const renderForm = ({ handleSubmit, invalid, submitFailed, form }) => (
    <Flex flexWrap="wrap" width="100%">
      <FormContent onSubmit={handleSubmit}>
        <InputField
          id={FIELDS.FIRST_NAME}
          label="Student First Name"
          name={FIELDS.FIRST_NAME}
          noError
          placeholder="Write here..."
          tip={null}
          type="text"
        />

        <InputField
          id={FIELDS.LAST_NAME}
          label="Student Last Name"
          name={FIELDS.LAST_NAME}
          noError
          placeholder="Write here..."
          styles={{ mt: 14 }}
          tip={null}
          type="text"
        />

        <InputField
          id={FIELDS.YEAR_OF_BIRTH}
          label="Student's year of birth"
          name={FIELDS.YEAR_OF_BIRTH}
          noError
          placeholder="ex: 2002"
          styles={{ mt: 14 }}
          tip={null}
          type="text"
        />

        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <SelectField
          label="Class"
          mt={14}
          name={FIELDS.CLASS}
          noError
          options={classesOptions}
          placeholder="Select student class"
          selectProps={{
            isLoading: isClassesLoading,
            disabled: isClassesLoading,
          }}
          width="100%"
        />

        <InputField
          id={FIELDS.USERNAME}
          label="Student Username"
          name={FIELDS.USERNAME}
          noError
          parse={(value: string) =>
            value && value.replace(/[^A-Za-z0-9_@]/gi, '')
          }
          placeholder="Write here..."
          styles={{ mt: 14 }}
          tip={null}
          type="text"
          onChange={handleChangeUserName(form)}
        />

        <InputField
          autoComplete="off"
          id={FIELDS.PASSWORD}
          label="Student password"
          name={FIELDS.PASSWORD}
          noError
          placeholder="Write here..."
          styles={{ mt: 14 }}
          tip={null}
          type="text"
        />
      </FormContent>

      <Error>
        {invalid && submitFailed && (
          <>Oops! You should fill all required fields!</>
        )}

        {responseError && renderResponseErrors()}
      </Error>

      <ButtonsContainer mt="20px">
        <Button onClick={onCloseModal}>Cancel</Button>
        <Button primary onClick={handleSubmit}>
          Add Student
        </Button>
        {isLoading && <Loader />}
      </ButtonsContainer>
    </Flex>
  )

  return (
    <Modal isOpen={isOpen} onCallback={onCloseModal}>
      <Content>
        <Title>
          Fill in the information about <br />
          your new student!
        </Title>
        <Form
          render={renderForm}
          validate={handleValidate}
          onSubmit={handleSubmitForm}
        />
      </Content>
    </Modal>
  )
}

export default AddStudentModal
