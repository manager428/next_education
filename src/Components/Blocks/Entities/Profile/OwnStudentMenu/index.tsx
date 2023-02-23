import React, { useRef, useState } from 'react'

import { CALL_ENUM } from 'Constants/calls'

import useOutsideClick from 'Hooks/useOutsideClick'
import { useAppDispatch } from 'Hooks/useStore'

import {
  openChangeStudentPasswordModal,
  openCreateCallModal,
  openRemoveStudentModal,
} from 'Store/modals/slice'

import { useScopedI18n } from 'Services/I18n'

import { Container, MenuButton, MenuIcon, RequestButton, Wrap } from './styles'

type Props = {
  selectedUser: Record<string, any>
}

const OwnStudentMenu: React.FC<Props> = ({ selectedUser }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const ref = useRef(null)
  const dispatch = useAppDispatch()
  const s = useScopedI18n('profile.sidebar')

  useOutsideClick({ ref, onClick: () => setIsMenuVisible(false) })

  const handleShowResetPasswordModal = () => {
    dispatch(
      openChangeStudentPasswordModal({
        id: selectedUser.id,
      }),
    )
    setIsMenuVisible(false)
  }

  const handleShowDeleteStudentModal = () => {
    dispatch(
      openRemoveStudentModal({
        id: selectedUser.id,
        avatar: selectedUser.avatar,
        fullName: selectedUser.full_name,
      }),
    )
    setIsMenuVisible(false)
  }

  const handleCreateIndividualCall = () => {
    dispatch(openCreateCallModal({ type: CALL_ENUM.INDIVIDUAL_CALLS }))
    setIsMenuVisible(false)
  }

  return (
    <Wrap>
      <Container ref={ref}>
        <RequestButton>{s('yourStudent')}</RequestButton>
        <MenuButton onClick={() => setIsMenuVisible(!isMenuVisible)}>
          <MenuIcon />
        </MenuButton>
        {isMenuVisible && (
          <div className="menu">
            <button
              className="menu-item"
              type="button"
              onClick={handleCreateIndividualCall}
            >
              {s('createIndividualCall')}
            </button>
            <button
              className="menu-item"
              type="button"
              onClick={handleShowResetPasswordModal}
            >
              {s('resetPassword')}
            </button>
            <button
              className="menu-item"
              type="button"
              onClick={handleShowDeleteStudentModal}
            >
              {s('removeStudentFromList')}
            </button>
          </div>
        )}
      </Container>
    </Wrap>
  )
}

export default OwnStudentMenu
