import React, { useEffect, useState } from 'react'
import { Form } from 'react-final-form'

import validate from 'validate.js'

import get from 'lodash/get'
import map from 'lodash/map'

import { Element, Flex } from 'Components/UI'
import Loader from 'Components/UI/Loader'

import { EntitySelectField } from 'Components/Blocks/Fields'

import useMe from 'Hooks/useMe'
import { useAppSelector } from 'Hooks/useStore'

import { schoolApi } from 'Services/Api/requests'
import SCHOOL_API_PATHS from 'Services/Api/requests/school/paths'

import {
  Avatar,
  Button,
  ButtonsContainer,
  Content,
  Error,
  Modal,
  Name,
} from './styles'

const FIELDS = {
  TEACHER: 'teacher',
  CLASSROOM: 'classroom',
}

type Props = {
  onCloseModal: () => void
  onSuccess: () => void
}

const handleValidate = values =>
  validate(values, {
    [FIELDS.TEACHER]: {
      presence: true,
    },
    [FIELDS.CLASSROOM]: {
      presence: true,
    },
  })

const ReassignStudentTeacher: React.FC<Props> = ({
  onCloseModal,
  onSuccess,
}) => {
  const [responseError, setResponseError] = useState<string[] | null>()
  const [isLoading, setIsLoading] = useState(false)

  const me = useMe()
  const schoolId = me?.school?.id ?? 0

  const { avatar, userIds, fullName } = useAppSelector(
    state => state.modals.schoolReassignStudentTeacherModal,
  )

  useEffect(
    () => () => {
      onCloseModal()
    },
    [],
  )

  const handleSubmitForm = async values => {
    setIsLoading(true)
    setResponseError(null)

    if (!userIds) return

    try {
      await schoolApi.reassignStudentToTeacher({
        studentsIds: userIds,
        schoolId,
        teacherId: values[FIELDS.TEACHER].value,
        classroomId: values[FIELDS.CLASSROOM].value,
      })

      onSuccess()
      onCloseModal()
    } catch (e) {
      const errors = get(
        e,
        ['data', 'errors'],
        ['Something going wrong, please contact with support!'],
      )

      setResponseError(errors)
    } finally {
      setIsLoading(false)
    }
  }

  const handleTeacherChange = (form, value) => {
    form.change(FIELDS.CLASSROOM, null)
    form.change(FIELDS.TEACHER, value)
  }

  const renderResponseErrors = () => (
    <Error>{map(responseError, err => err).join(' ')}</Error>
  )

  const renderForm = ({ handleSubmit, invalid, values, form }) => (
    <Flex flexWrap="wrap" mt={14} width="100%">
      <EntitySelectField
        input={{
          onChange: value => handleTeacherChange(form, value),
        }}
        label="Select a new teacher for the student"
        name={FIELDS.TEACHER}
        optionsMapper={data =>
          map(data, item => ({
            label: item.full_name,
            value: item.id,
          }))
        }
        placeholder="Search by email or name"
        queryKey="teachers"
        showErrorMessage={false}
        url={SCHOOL_API_PATHS.schoolTeachers(schoolId)}
      />

      <Flex mt="14px" width={1}>
        <EntitySelectField
          isDisabled={!values[FIELDS.TEACHER]?.value}
          label="Select a new class for the student"
          name={FIELDS.CLASSROOM}
          optionsMapper={data =>
            map(data, item => ({
              label: item.class_name,
              value: item.id,
            }))
          }
          placeholder="Search classroom name"
          queryKey="classes"
          showErrorMessage={false}
          url={SCHOOL_API_PATHS.teacherClassrooms(
            schoolId,
            values[FIELDS.TEACHER]?.value,
          )}
        />
      </Flex>

      <ButtonsContainer mt={14} width={1}>
        <Button onClick={onCloseModal}>Cancel</Button>
        <Button gray={invalid} primary onClick={handleSubmit}>
          Confirm
        </Button>
      </ButtonsContainer>
      {responseError && <Error>{renderResponseErrors()}</Error>}
    </Flex>
  )

  return (
    <Modal isOpen onCallback={onCloseModal}>
      <Content>
        {isLoading && <Loader />}

        {userIds && userIds.length > 1 ? (
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <Element
              fontSize="18px"
              fontWeight="600"
              lineHeight="24px"
              textAlign="center"
            >
              Assign selected students to a new teacher. Please note that they
              will all be reassigned to the same class.
            </Element>
          </Flex>
        ) : (
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            {avatar && <Avatar src={avatar} />}
            {fullName && <Name mt="10px">{fullName} </Name>}
          </Flex>
        )}

        <Form
          render={renderForm}
          validate={handleValidate}
          onSubmit={handleSubmitForm}
        />
      </Content>
    </Modal>
  )
}

export default ReassignStudentTeacher
