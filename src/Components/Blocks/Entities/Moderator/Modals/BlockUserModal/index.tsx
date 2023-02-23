import React, { useCallback, useRef, useState } from 'react'
import { withTypes } from 'react-final-form'

import validate from 'validate.js'

import map from 'lodash/map'

import { Flex, Loader } from 'Components/UI'

import { BAN_REASON_OPTIONS } from 'Constants/moderator'

import useOutsideClick from 'Hooks/useOutsideClick'

import moderatorApi from 'Services/Api/requests/moderator'

import { presenceConstraint } from 'Utils/constraints'

import {
  Avatar,
  Content,
  ErrorsContainer,
  FormContainer,
  FormEditorInput,
  FormSelect,
  InnerContent,
  Modal,
  Name,
  SubmitButton,
  Title,
} from './styles'

const { Form } = withTypes<FormValues>()

const FIELDS = {
  reason: 'reason',
  description: 'description',
}

type FormValues = {
  reason: {
    value: string
    label: string
  }
  description?: string
}

type Props = {
  entity?: {
    user_id: number
    full_name: string
    avatar: string
  } | null
  isOpen: boolean
  onClose: (userId?: number) => void
}

const FORM_CONSTRAINS = {
  ...presenceConstraint(FIELDS.reason),
}

const BlockUserModal: React.FC<Props> = ({
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
        await moderatorApi.blockUser({
          user_id: entity.user_id,
          complaint_reason: values.reason.value,
          text_reason: values.description,
        })
        onClose(entity.user_id)
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
          <FormSelect
            label="Block reason"
            name={FIELDS.reason}
            options={BAN_REASON_OPTIONS}
            placeholder="Select..."
          />
        </Flex>

        <Flex mt="14px" width={1}>
          <FormEditorInput
            height="180px"
            maxContentHeight="120px"
            name={FIELDS.description}
            noError
            // parentRef={commentFormRef}
            placeholder="Write an explanatory message to the user's teacher and parent (optional) ..."
            styles={{
              mb: 0,
            }}
            // onSetRef={handleSetRef}
            type="textarea"
          />
        </Flex>

        <Flex justifyContent="space-between" mt={14} width={1}>
          <SubmitButton gray width="100px" onClick={() => onClose()}>
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
            <Flex flexWrap="wrap" justifyContent="center" width={1}>
              {entity && <Avatar height={60} src={entity?.avatar} width={60} />}
            </Flex>
            <Flex flexWrap="wrap" justifyContent="center" mt="10px" width={1}>
              <Name>{entity?.full_name}</Name>
            </Flex>
            <Flex flexWrap="wrap" justifyContent="center" mt="10px" width={1}>
              <Title>User will be blocked indefinitely</Title>
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

export default BlockUserModal
