import React, { useState } from 'react'

import { trashGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'
import Loader from 'Components/UI/Loader'

import { useAppSelector } from 'Hooks/useStore'

import { teacherApi } from 'Services/Api/requests'

import {
  Button,
  ButtonsContainer,
  Content,
  Message,
  Modal,
  Title,
} from './styles'

type Props = {
  isOpen: boolean
  onCloseModal: () => void
  onSuccess: () => void
}
const DeleteClassModal: React.FC<Props> = ({
  isOpen,
  onCloseModal,
  onSuccess,
}) => {
  const { className, classId } = useAppSelector(
    state => state.modals.deleteClassModal,
  )

  const [isShowLimit, setShowLimit] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleDelete = async () => {
    setIsLoading(true)

    try {
      await teacherApi.deleteClass({ classId: classId ?? 0 })
      onSuccess()
      onCloseModal()
    } catch (e) {
      // users exist in class
      if (e.status === 422) setShowLimit(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Modal isOpen={isOpen} onCallback={onCloseModal}>
      <Content wide={isShowLimit}>
        <Flex flexWrap="wrap" width="100%">
          {isShowLimit && <Title>You cannot delete the class!</Title>}

          <Flex width="100%">
            {isShowLimit ? (
              <Message fontSize={16} lineHeight="22px">
                To delete the class “{className}”, you need to reassign all
                students from that class to another.
              </Message>
            ) : (
              <Message fontSize={18} lineHeight="24px">
                Are you sure you want to delete the class “{className}”?
              </Message>
            )}
          </Flex>

          {isShowLimit ? (
            <ButtonsContainer justifyContent="center">
              <Button
                disabled={isLoading}
                minWidth={120}
                primary
                onClick={onCloseModal}
              >
                OK
              </Button>
            </ButtonsContainer>
          ) : (
            <ButtonsContainer justifyContent="space-between">
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
            </ButtonsContainer>
          )}

          {isLoading && <Loader />}
        </Flex>
      </Content>
    </Modal>
  )
}

export default DeleteClassModal
