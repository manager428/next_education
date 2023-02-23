import React, { useRef } from 'react'

import { Flex } from 'Components/UI'

import { Button, Content, Modal, Title } from './styles'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const DebateSuccessModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const ref = useRef(null)

  return (
    <Modal isOpen={isOpen} ref={ref} onCallback={onClose}>
      <Content>
        <Title>
          Your debate will be <br /> published after moderation!
        </Title>
        <Flex justifyContent="center" mt={14}>
          <Button onClick={onClose}>OK</Button>
        </Flex>
      </Content>
    </Modal>
  )
}

export default DebateSuccessModal
