import React, { useMemo, useState } from 'react'
import { Form } from 'react-final-form'

import validate from 'validate.js'

import get from 'lodash/get'
import map from 'lodash/map'

import { Flex, Loader } from 'Components/UI'

import { SelectField } from 'Components/Blocks/Fields'

import { useAppSelector } from 'Hooks/useStore'
import useSwrRequest from 'Hooks/useSwrRequest'

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
  onSuccess: () => void
}

const FIELDS = {
  CLASS: 'class',
}

const AssignStudentToClassModal: React.FC<Props> = ({
  isOpen,
  onCloseModal,
  onSuccess,
}) => {
  const selectedUser = useAppSelector(
    state => state.modals.assignToClassModal?.selectedUser,
  )

  const { data: teacherClasses, isLoading: isClassesLoading } = useSwrRequest({
    url: TEACHER_API_PATHS.classes,
  })

  const [responseError, setResponseError] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const classesOptions = useMemo(
    () =>
      map(teacherClasses, teacherClass => ({
        label: teacherClass.class_name,
        value: teacherClass.id,
      })),
    [[teacherClasses]],
  )

  const handleValidate = values =>
    validate(values, {
      [FIELDS.CLASS]: {
        presence: true,
      },
    })

  const handleSubmitForm = async values => {
    setIsLoading(true)

    try {
      await teacherApi.assignToClass({
        userIds: [selectedUser?.id ?? 0],
        classId: values[FIELDS.CLASS].value,
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
      <SelectField
        label="Select a new classroom for the student"
        mt={14}
        name={FIELDS.CLASS}
        noError
        options={classesOptions}
        placeholder="select class"
        selectProps={{
          isLoading: isClassesLoading,
          disabled: isClassesLoading,
          maxMenuHeight: 220,
        }}
        width="100%"
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
          Student {selectedUser?.fullName ?? ''} is now in classroom{' '}
          {selectedUser?.classDetails?.className ?? ''}
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

export default AssignStudentToClassModal
