import React, { useRef } from 'react'

import { Flex } from 'Components/UI'

import useOutsideClick from 'Hooks/useOutsideClick'

import { useScopedI18n } from 'Services/I18n'

import CreateDebateForm from './CreateDebateForm'
import { CloseButton, Content, InnerContent, Modal, Title } from './styles'

type Props = {
  isOpen: boolean
  onClose: (withSuccessModal: boolean) => void
}

const CreateDebateModal: React.FC<Props> = ({
  isOpen,
  onClose,
}): React.ReactElement => {
  const s = useScopedI18n('modals.createDebate')
  const ref = useRef<HTMLDivElement>(null)
  useOutsideClick({ ref, onClick: onClose })

  return (
    <Modal isOpen={isOpen} onCallback={onClose}>
      <Content ref={ref}>
        <Flex onClick={() => onClose(false)}>
          <CloseButton />
        </Flex>

        <InnerContent>
          <Title justifyContent="center" mt={20} width={1}>
            {s('title')}
            <span>{s('description')}</span>
          </Title>
          <CreateDebateForm onSuccess={() => onClose(true)} />
        </InnerContent>
      </Content>
    </Modal>
  )
}

export default CreateDebateModal
