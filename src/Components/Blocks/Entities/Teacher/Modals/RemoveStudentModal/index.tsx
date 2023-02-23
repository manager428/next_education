import React, { useEffect, useState } from 'react'

import get from 'lodash/get'
import map from 'lodash/map'

import { trashGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'
import Loader from 'Components/UI/Loader'

import { teacherApi } from 'Services/Api/requests'

import {
  Avatar,
  Button,
  ButtonsContainer,
  Content,
  Error,
  Message,
  Modal,
  Name,
} from './styles'

type Props = {
  isOpen: boolean
  selectedUser: Record<string, any>
  onCloseModal: () => void
  onSuccess: (userId: number) => void
}
const RemoveStudentModal: React.FC<Props> = ({
  selectedUser,
  isOpen,
  onCloseModal,
  onSuccess,
}) => {
  const [responseError, setResponseError] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(
    () => () => {
      onCloseModal()
    },
    [],
  )

  const handleDelete = async () => {
    setIsLoading(true)

    try {
      await teacherApi.removeStudent(selectedUser.id)
      onSuccess(selectedUser.id)
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

  const avatar = get(selectedUser, 'avatar', '')
  const fullname = get(selectedUser, 'fullName', '')

  return (
    <Modal isOpen={isOpen} onCallback={onCloseModal}>
      <Content>
        <Flex flexWrap="wrap" width="100%">
          <Flex flexWrap="wrap" justifyContent="center" width="100%">
            <Avatar src={avatar} />
            <Name mt="10px">{fullname}</Name>
          </Flex>
          <Flex width="100%">
            <Message mt="10px">
              will be removed from the class. <br /> Are you sure you want to
              continue?
            </Message>
          </Flex>
          <Error>{renderResponseErrors()}</Error>
          <ButtonsContainer mt="20px">
            <Button disabled={isLoading} onClick={onCloseModal}>
              Cancel
            </Button>
            <Button disabled={isLoading} primary onClick={handleDelete}>
              <Icon
                fill="white"
                icon={trashGlyph}
                size={16}
                wrapperStyles={{ mr: '8px' }}
              />
              DELETE
            </Button>
            {isLoading && <Loader />}
          </ButtonsContainer>
        </Flex>
      </Content>
    </Modal>
  )
}

export default RemoveStudentModal
