import React, { useRef } from 'react'

import InnerHTML from 'dangerously-set-html-content'

import { Flex } from 'Components/UI'

import { useScopedI18n } from 'Services/I18n'

import {
  Content,
  ExpireLogo,
  FormContainer,
  Modal,
  SubmitButton,
  Text,
  Title,
} from './styles'

type Props = {
  isOpen: boolean
  type?: 'login'
  onClose: () => void
}

const SubscriptionExpiredModal: React.FC<Props> = ({
  isOpen,
  type,
  onClose,
}) => {
  const ref = useRef(null)
  const s = useScopedI18n('modals.subscriptionExpired')

  const renderForm = () => (
    <FormContainer>
      <Text>
        <InnerHTML html={type === 'login' ? s('loginText') : s('text')} />
      </Text>

      {type === 'login' ? (
        <Flex justifyContent="center" mt={30} width={1}>
          <SubmitButton width="100px" onClick={() => onClose()}>
            OK
          </SubmitButton>
        </Flex>
      ) : (
        <Flex justifyContent="space-between" mt={30} width={1}>
          <SubmitButton gray width="100px" onClick={() => onClose()}>
            {s('cancel')}
          </SubmitButton>
          <SubmitButton
            as="a"
            href="https://www.idialogue.online"
            target="_blank"
            width="120px"
          >
            {s('submit')}
          </SubmitButton>
        </Flex>
      )}
    </FormContainer>
  )

  return (
    <Modal isOpen={isOpen} onCallback={onClose}>
      <Content ref={ref}>
        <Flex justifyContent="center" width={1}>
          <ExpireLogo />
        </Flex>

        <Title mt={16}>
          <InnerHTML html={s('title')} />
        </Title>
        {renderForm()}
      </Content>
    </Modal>
  )
}

export default SubscriptionExpiredModal
