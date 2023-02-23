import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import useOutsideClick from 'Hooks/useOutsideClick'

import {
  CloseButton,
  Congratulation,
  Content,
  Modal,
  SubText,
  Title,
} from './styles'

const LectoriumSuccessModal = ({ isOpen, onClose }) => {
  const ref = useRef(null)
  useOutsideClick({ ref, onClick: onClose })

  return (
    <Modal isOpen={isOpen} onCallback={onClose}>
      <Content ref={ref}>
        <CloseButton onClick={onClose} />
        <Title>Congratulations!</Title>
        <SubText>You have completed all the tasks!</SubText>
        <Congratulation />
      </Content>
    </Modal>
  )
}

LectoriumSuccessModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default LectoriumSuccessModal
