import React, { useRef } from 'react'

import { CreateCallForm } from 'Components/Blocks/Entities/Calls/Forms'

import { CALL_ENUM } from 'Constants/calls'

import useOutsideClick from 'Hooks/useOutsideClick'

import { Content, InnerContent, Modal } from './styles'

type Props = {
  isOpen: boolean
  type: CALL_ENUM | string
  onClose: () => void
}

const CreateCallModal: React.FC<Props> = ({
  isOpen,
  onClose,
  type,
}): React.ReactElement => {
  const ref = useRef(null)
  useOutsideClick({ ref, onClick: onClose })

  return (
    <Modal isOpen={isOpen} onCallback={onClose}>
      <Content ref={ref}>
        <InnerContent>
          <CreateCallForm type={type} onClose={onClose} />
        </InnerContent>
      </Content>
    </Modal>
  )
}

export default CreateCallModal
