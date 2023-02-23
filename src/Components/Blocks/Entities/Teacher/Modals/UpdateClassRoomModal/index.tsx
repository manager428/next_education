import React, { useRef, useState } from 'react'
import { Form } from 'react-final-form'

import validate from 'validate.js'

import get from 'lodash/get'
import map from 'lodash/map'

import { Element, Flex, Loader } from 'Components/UI'

import { ImageField, InputField, SelectField } from 'Components/Blocks/Fields'

import { BASE_ENGLISH_LEVEL_OPTIONS } from 'Constants/ids'

import { useAppSelector } from 'Hooks/useStore'

import { teacherApi } from 'Services/Api/requests'

import {
  AvatarButton,
  AvatarFieldWrapper,
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
  AVATAR: 'avatar',
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

const UpdateClassRoomModal: React.FC<Props> = ({
  isOpen,
  onCloseModal,
  onSuccess,
}) => {
  const dropzoneRef = useRef<any>(null)

  const { className, classId, englishLevel, classRoomLogo } = useAppSelector(
    state => state.modals.updateClassRoomModal,
  )

  const [responseError, setResponseError] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleValidate = values => validate(values, FORM_CONSTRAINS)

  const handleOpenAvatarDropzone = () => {
    dropzoneRef.current.click()
  }

  const handleSubmitForm = async values => {
    setIsLoading(true)

    const avatarValue = values[FIELDS.AVATAR]
    const isAvatarFile = avatarValue instanceof File

    try {
      await teacherApi.updateClass({
        classId: classId ?? 0,
        className: values[FIELDS.CLASS_NAME],
        englishLevel: values[FIELDS.ENGLISH_LEVEL].value,
        classLogo: isAvatarFile ? values[FIELDS.AVATAR] : undefined,
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
    <Flex flexWrap="wrap" justifyContent="center" width="100%">
      <AvatarFieldWrapper>
        <ImageField
          imageHeight="64px"
          imageWidth="64px"
          name={FIELDS.AVATAR}
          ref={dropzoneRef}
        />
        <AvatarButton
          ml="20px"
          tertiary
          width="110px"
          onClick={handleOpenAvatarDropzone}
        >
          <Element color="white" lineHeight="16px">
            Change avatar
          </Element>
        </AvatarButton>
      </AvatarFieldWrapper>

      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <InputField
        id={FIELDS.CLASS_NAME}
        label="New Name"
        name={FIELDS.CLASS_NAME}
        noError
        placeholder="Enter new name here..."
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
        <Title>Edit Classroom {className}</Title>
        <Form
          initialValues={{
            [FIELDS.AVATAR]: classRoomLogo,
            [FIELDS.CLASS_NAME]: className,
            [FIELDS.ENGLISH_LEVEL]: BASE_ENGLISH_LEVEL_OPTIONS.find(
              item => item.value === englishLevel,
            ),
          }}
          render={renderForm}
          validate={handleValidate}
          onSubmit={handleSubmitForm}
        />
      </Content>
    </Modal>
  )
}

export default UpdateClassRoomModal
