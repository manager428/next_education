import React, { useEffect, useState } from 'react'

import get from 'lodash/get'
import map from 'lodash/map'

import { trashGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'
import Loader from 'Components/UI/Loader'

import useMe from 'Hooks/useMe'
import { useAppSelector } from 'Hooks/useStore'

import { schoolApi } from 'Services/Api/requests'

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
  onCloseModal: () => void
  onSuccess: (userId: number) => void
}
const DeleteStudentModal: React.FC<Props> = ({ onCloseModal, onSuccess }) => {
  const me = useMe()
  const { avatar, fullName, userId } = useAppSelector(
    state => state.modals.schoolDeleteStudentModal,
  )

  const [responseError, setResponseError] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const schoolId = me?.school?.id ?? 0

  useEffect(
    () => () => {
      onCloseModal()
    },
    [],
  )

  const handleDelete = async () => {
    setIsLoading(true)

    if (!userId) return

    try {
      await schoolApi.deleteStudent(schoolId, userId)
      onSuccess(userId)
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

  return (
    <Modal isOpen onCallback={onCloseModal}>
      <Content>
        <Flex flexWrap="wrap" width="100%">
          <Flex flexWrap="wrap" justifyContent="center" width="100%">
            {avatar && <Avatar src={avatar} />}
            {fullName && <Name mt="10px">{fullName}</Name>}
          </Flex>
          <Flex width="100%">
            <Message mt="10px">will be deleted from iDialogue.com</Message>
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

export default DeleteStudentModal
