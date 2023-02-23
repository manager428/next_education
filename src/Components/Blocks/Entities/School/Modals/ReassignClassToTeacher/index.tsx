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
  Button,
  ButtonsContainer,
  Content,
  Error,
  GroupLogo,
  Modal,
} from './styles'

const FIELDS = {
  USER: 'user',
}

type Props = {
  onCloseModal: () => void
  onSuccess: () => void
}

const handleValidate = values =>
  validate(values, {
    [FIELDS.USER]: {
      presence: true,
    },
  })

const ReassignClassToTeacher: React.FC<Props> = ({
  onCloseModal,
  onSuccess,
}) => {
  const me = useMe()
  const { classroomName, classIds } = useAppSelector(
    state => state.modals.schoolReassignClassToTeacherModal,
  )

  const [responseError, setResponseError] = useState<string[] | null>()
  const [isLoading, setIsLoading] = useState(false)

  const schoolId = me?.school?.id ?? 0

  useEffect(
    () => () => {
      onCloseModal()
    },
    [],
  )

  const handleSubmitForm = async values => {
    if (!classIds) {
      setResponseError(['Class id not provided'])
      return
    }

    setIsLoading(true)
    setResponseError(null)

    try {
      await schoolApi.reassignClassToTeacher(schoolId, {
        classes_ids: classIds,
        user_id: values[FIELDS.USER].value,
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

  const renderResponseErrors = () => (
    <Error>{map(responseError, err => err).join(' ')}</Error>
  )

  const renderForm = ({ handleSubmit, invalid }) => (
    <Flex flexWrap="wrap" mt={14} width="100%">
      <EntitySelectField
        label="Select a new teacher for the class"
        name={FIELDS.USER}
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

      <ButtonsContainer mt={14} width={1}>
        <Button onClick={onCloseModal}>Cancel</Button>
        <Button disabled={invalid} primary onClick={handleSubmit}>
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

        {classIds && classIds.length > 1 ? (
          <Flex width={1}>
            <Element
              fontSize="18px"
              fontWeight={600}
              lineHeight="24px"
              textAlign="center"
            >
              Assign selected classes to a new teacher. Please note that they
              will all be reassigned to the same teacher.
            </Element>
          </Flex>
        ) : (
          <Flex flexWrap="wrap" width={1}>
            <Flex justifyContent="center" width={1}>
              <GroupLogo />
            </Flex>

            {classroomName && (
              <Element
                fontSize="18px"
                fontWeight={600}
                lineHeight="24px"
                mt={14}
                textAlign="center"
                width={1}
              >
                Classroom name: {classroomName}
              </Element>
            )}
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

export default ReassignClassToTeacher
