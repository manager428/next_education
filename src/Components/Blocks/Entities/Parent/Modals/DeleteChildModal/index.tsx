import React, { useCallback, useRef, useState } from 'react'

import InnerHTML from 'dangerously-set-html-content'

import map from 'lodash/map'

import { Flex, Loader } from 'Components/UI'

import useOutsideClick from 'Hooks/useOutsideClick'

import { parentApi } from 'Services/Api/requests'
import _, { useScopedI18n } from 'Services/I18n'

import {
  Content,
  ErrorsContainer,
  FormContainer,
  Modal,
  SubmitButton,
  Text,
  Title,
} from './styles'

type Props = {
  isOpen: boolean
  userId: number
  fullName: string
  onSuccess: () => void
  onClose: () => void
}

const DeleteChildModal: React.FC<Props> = ({
  userId,
  fullName,
  isOpen,
  onSuccess,
  onClose,
}) => {
  const s = useScopedI18n('modals.deleteChild')
  const ref = useRef(null)

  const [locale] = useState('en')
  const [responseError, setResponseError] = useState<string | null>(null)
  const [isLoading, setLoading] = useState(false)

  useOutsideClick({ ref, onClick: onClose })

  const handleSubmitForm = async (): Promise<any> => {
    setLoading(true)
    setResponseError(null)

    try {
      await parentApi.deleteChild(userId)
      onSuccess()
      onClose()
    } catch (e) {
      const errors = map(e?.data.errors, er => er)
      setResponseError(
        errors.length > 0 ? errors.join(', ') : 'Something going wrong',
      )
      setLoading(false)
    }
  }

  const renderForm = useCallback(
    () => (
      <FormContainer>
        {isLoading && <Loader />}

        <Text>
          <InnerHTML html={s('title')} />
        </Text>

        <ErrorsContainer>{responseError}</ErrorsContainer>

        <Flex justifyContent="space-between" mt={30} width={1}>
          <SubmitButton gray width="100px" onClick={() => onClose()}>
            {_('buttons.cancel')}
          </SubmitButton>
          <SubmitButton width="160px" onClick={handleSubmitForm}>
            {_('buttons.submit')}
          </SubmitButton>
        </Flex>
      </FormContainer>
    ),
    [responseError, isLoading, locale],
  )

  return (
    <Modal isOpen={isOpen} onCallback={onClose}>
      <Content locale={locale} ref={ref}>
        <Title>{fullName}</Title>
        {renderForm()}
      </Content>
    </Modal>
  )
}

export default DeleteChildModal
