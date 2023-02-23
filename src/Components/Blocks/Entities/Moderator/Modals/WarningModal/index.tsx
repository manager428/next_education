import React, { useCallback, useRef, useState } from 'react'
import { withTypes } from 'react-final-form'

import validate from 'validate.js'

import map from 'lodash/map'

import { Flex, Loader } from 'Components/UI'

import useOutsideClick from 'Hooks/useOutsideClick'

import moderatorApi from 'Services/Api/requests/moderator'

import { presenceConstraint } from 'Utils/constraints'

import {
  Content,
  ErrorsContainer,
  FormContainer,
  FormEditorInput,
  InnerContent,
  Modal,
  SubmitButton,
  Title,
} from './styles'

const { Form } = withTypes<FormValues>()

const FIELDS = {
  description: 'description',
}

type FormValues = {
  description?: string
}

type Props = {
  entity?: {
    user_id: number
    fullname: string
  } | null
  isOpen: boolean
  onClose: () => void
}

const FORM_CONSTRAINS = {
  ...presenceConstraint(FIELDS.description),
}

const WarningModal: React.FC<Props> = ({
  entity,
  isOpen,
  onClose,
}): React.ReactElement => {
  const ref = useRef(null)
  useOutsideClick({ ref, onClick: onClose })

  const [isLoading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmitForm = async (values: FormValues): Promise<any> => {
    setLoading(true)
    setError(null)

    if (entity) {
      try {
        await moderatorApi.addWarning({
          user_id: entity.user_id,
          comment: values.description,
        })
        onClose()
      } catch (e) {
        const errors = map(e?.data.errors, er => er)

        setError(
          errors.length > 0 ? errors.join(', ') : 'Something going wrong',
        )
      } finally {
        setLoading(false)
      }
    }
  }

  const renderForm = useCallback(
    ({ handleSubmit }) => (
      <FormContainer>
        <Flex mt="14px" width={1}>
          <FormEditorInput
            height="180px"
            maxContentHeight="120px"
            name={FIELDS.description}
            noError
            // parentRef={commentFormRef}
            placeholder="Write a warning message to the user and his teacher (optional)..."
            styles={{
              mb: 0,
            }}
            // onSetRef={handleSetRef}
            type="textarea"
          />
        </Flex>

        <Flex justifyContent="space-between" mt={14} width={1}>
          <SubmitButton gray width="100px" onClick={onClose}>
            Cancel
          </SubmitButton>
          <SubmitButton width="120px" onClick={handleSubmit}>
            Send
          </SubmitButton>
        </Flex>
      </FormContainer>
    ),
    [],
  )

  return (
    <Modal isOpen={isOpen} onCallback={onClose}>
      <Content ref={ref}>
        {isLoading && <Loader />}
        <InnerContent>
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <Flex flexWrap="wrap" justifyContent="center" mt="10px" width={1}>
              <Title>Write a warning message to the {entity?.fullname}</Title>
            </Flex>
          </Flex>
          <Form
            render={renderForm}
            validate={values => validate(values, FORM_CONSTRAINS)}
            onSubmit={handleSubmitForm}
          />
        </InnerContent>
        {error && <ErrorsContainer>{error}</ErrorsContainer>}
      </Content>
    </Modal>
  )
}

export default WarningModal
