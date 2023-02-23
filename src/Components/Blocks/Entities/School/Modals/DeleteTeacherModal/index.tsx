import React, { useEffect, useState } from 'react'

import get from 'lodash/get'
import map from 'lodash/map'

import { trashGlyph } from 'Assets/svg/common'

import { Flex, Icon } from 'Components/UI'
import Loader from 'Components/UI/Loader'

import useMe from 'Hooks/useMe'
import { useAppDispatch, useAppSelector } from 'Hooks/useStore'

import { closeDeleteTeacherModal } from 'Store/modals/slice'

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
  onCloseModal?: () => void
  onSuccess: (userId: number) => void
}
const DeleteTeacherModal: React.FC<Props> = ({ onCloseModal, onSuccess }) => {
  const me = useMe()
  const dispatch = useAppDispatch()
  const { isOpen, userId, fullName, avatar } = useAppSelector(
    state => state.modals.deleteTeacherModal,
  )

  const [responseError, setResponseError] = useState<string[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isShowDeleteNotification, setShowDeleteNotification] = useState(false)

  const schoolId = me?.school?.id ?? 0

  const handleClose = () => {
    if (onCloseModal) onCloseModal()
    dispatch(closeDeleteTeacherModal())
  }

  useEffect(
    () => () => {
      handleClose()
    },
    [],
  )

  const handleDelete = async () => {
    if (!userId) return

    setResponseError(null)
    setIsLoading(true)

    try {
      await schoolApi.deleteTeacher(schoolId, userId)
      onSuccess(userId)
    } catch (e) {
      const errors = get(e, ['data', 'errors', 'error']) || [
        'Something going wrong, please contact with support!',
      ]
      const isNotEmptyClassError =
        errors[0] ===
        'To delete the teacher, you must reassign all students to another teacher.'

      if (isNotEmptyClassError) {
        setShowDeleteNotification(true)
      } else {
        setResponseError(errors)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const renderResponseErrors = () => map(responseError, err => err).join(' ')

  const renderMessage = () => {
    if (isShowDeleteNotification) {
      return (
        <Flex flexWrap="wrap">
          <Flex flexWrap="wrap" justifyContent="center" width="100%">
            {avatar && <Avatar src={avatar} />}
            {fullName && (
              <Name mt="10px">The teacher {fullName} cannot be deleted!</Name>
            )}
          </Flex>
          <Flex width="100%">
            <Message mt="10px">
              To delete the teacher, you must reassign all students to another
              teacher.
            </Message>
          </Flex>
        </Flex>
      )
    }

    return (
      <Flex flexWrap="wrap">
        <Flex flexWrap="wrap" justifyContent="center" width="100%">
          {avatar && <Avatar src={avatar} />}
          {fullName && <Name mt="10px">{fullName}</Name>}
        </Flex>
        <Flex width="100%">
          <Message mt="10px">
            will be deleted from iDialogue.com <br />
            Are you sure you want to continue?
          </Message>
        </Flex>
      </Flex>
    )
  }

  const renderFooter = () => {
    if (isShowDeleteNotification) {
      return (
        <Flex justifyContent="center" width={1}>
          <Button minWidth="110px" primary onClick={onCloseModal}>
            OK
          </Button>
          {isLoading && <Loader />}
        </Flex>
      )
    }

    return (
      <ButtonsContainer>
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
    )
  }

  return (
    <Modal isOpen={isOpen} onCallback={handleClose}>
      <Content>
        <Flex flexWrap="wrap" width="100%">
          {renderMessage()}

          <Error>{responseError && renderResponseErrors()}</Error>

          {renderFooter()}
        </Flex>
      </Content>
    </Modal>
  )
}

export default DeleteTeacherModal
