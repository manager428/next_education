import React, { useState } from 'react'
import { Form } from 'react-final-form'

import validate from 'validate.js'

import get from 'lodash/get'
import map from 'lodash/map'

import { Element, Flex, Loader } from 'Components/UI'

import { SelectField } from 'Components/Blocks/Fields'

import { BASE_ENGLISH_LEVEL_OPTIONS } from 'Constants/ids'

import { useAppSelector } from 'Hooks/useStore'

import { teacherApi } from 'Services/Api/requests'

import { theme } from 'Theme'

import {
  Avatar,
  Button,
  ButtonsContainer,
  Content,
  Error,
  Modal,
  Title,
} from './styles'

type Props = {
  onCloseModal: () => void
  onSuccess: () => void
}

const FIELDS = {
  ENGLISH_LEVEL: 'englishLevel',
}

const FORM_CONSTRAINS = {
  [FIELDS.ENGLISH_LEVEL]: {
    presence: true,
  },
}

const UpdateClassRoomLevelModal: React.FC<Props> = ({
  onCloseModal,
  onSuccess,
}) => {
  const { isOpen, classRooms } = useAppSelector(
    state => state.modals.updateClassRoomLevelModal,
  )

  const [responseError, setResponseError] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const isLastClassroom = activeIndex + 1 === classRooms.length
  const currentClass = classRooms[activeIndex]

  const handleValidate = values => validate(values, FORM_CONSTRAINS)

  const handleSubmitForm = async (values, form) => {
    setIsLoading(true)
    setResponseError([])

    try {
      await teacherApi.updateClass({
        classId: currentClass.classId,
        englishLevel: values[FIELDS.ENGLISH_LEVEL].value,
      })

      if (isLastClassroom) {
        onSuccess()
        return
      }

      setActiveIndex(prevState => prevState + 1)
      setTimeout(form.reset)
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
    <Flex flexWrap="wrap" mt="20px" width="100%">
      <Flex width={1}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <SelectField
          id={FIELDS.ENGLISH_LEVEL}
          label=""
          name={FIELDS.ENGLISH_LEVEL}
          noError
          options={BASE_ENGLISH_LEVEL_OPTIONS}
          placeholder="Select english level"
          selectProps={{
            maxMenuHeight: 220,
          }}
          width="100%"
        />
      </Flex>

      <Error>{renderResponseErrors()}</Error>

      {!isLastClassroom && (
        <Flex justifyContent="flex-end" mt="20px" width={1}>
          <Element fontSize="18px" lineHeight="18px">
            {activeIndex + 1}/{classRooms.length} classroom(s)
          </Element>
        </Flex>
      )}

      <ButtonsContainer mt="20px">
        <Button onClick={onCloseModal}>Do it later</Button>
        <Button minWidth={160} primary onClick={handleSubmit}>
          {isLastClassroom ? 'Save' : 'Next Classroom'}
        </Button>

        {isLoading && <Loader />}
      </ButtonsContainer>
    </Flex>
  )

  const title = isLastClassroom
    ? 'Please select the level of English for the classroom!'
    : `Some of your classrooms do not have a language level! Please select the level of English for the classroom(s)!`

  if (!isOpen) {
    return null
  }

  return (
    <Modal isOpen={isOpen} onCallback={onCloseModal}>
      <Content>
        <Title>{title}</Title>
        <Flex
          alignContent="center"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          mt="20px"
          width={1}
        >
          <Avatar src={currentClass?.classLogo} />
          <Element
            color={theme.colors.primary}
            fontSize="18px"
            fontWeight="600"
            lineHeight="18px"
            mt="10px"
          >
            {currentClass?.classRoomName}
          </Element>

          <Element
            color={theme.colors.primary}
            fontSize="18px"
            lineHeight="18px"
            mt="10px"
          >
            {currentClass?.studentsCount} Students
          </Element>
        </Flex>
        <Form
          render={renderForm}
          validate={handleValidate}
          onSubmit={handleSubmitForm}
        />
      </Content>
    </Modal>
  )
}

export default UpdateClassRoomLevelModal
