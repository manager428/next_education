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
  comment: 'comment',
}

type FormValues = {
  comment: string
}

type onCloseProps = {
  commentId: number
  comment: string
}

type Props = {
  entity: {
    comment_id: number
    user_id: string
    full_name: string
    avatar: string
    comment: string
    section: string
  } | null
  isOpen: boolean
  onClose: (props: onCloseProps | void) => void
}

const FORM_CONSTRAINS = {
  ...presenceConstraint(FIELDS.comment),
}

const EditCommentModal: React.FC<Props> = ({
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

    if (entity?.comment_id) {
      try {
        await moderatorApi.updateComment({
          id: entity.comment_id,
          comment: values.comment,
          section: entity.section,
        })
        onClose({ commentId: entity.comment_id, comment: values.comment })
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
        <Flex width={1}>
          <FormEditorInput
            height="180px"
            maxContentHeight="120px"
            name={FIELDS.comment}
            noError
            placeholder="Write comment here"
            styles={{
              mb: 0,
            }}
            type="textarea"
            value={entity?.comment}
          />
        </Flex>

        <Flex justifyContent="flex-end" mt={14} width={1}>
          <SubmitButton gray mr={20} width="100px" onClick={() => onClose()}>
            Cancel
          </SubmitButton>
          <SubmitButton width="120px" onClick={handleSubmit}>
            Send
          </SubmitButton>
        </Flex>
      </FormContainer>
    ),
    [entity],
  )

  return (
    <Modal isOpen={isOpen} onCallback={onClose}>
      <Content ref={ref}>
        {isLoading && <Loader />}
        <InnerContent>
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <Flex flexWrap="wrap" justifyContent="center" mt="10px" width={1}>
              <Title>Edit Text</Title>
            </Flex>
          </Flex>
          <Form
            initialValues={{
              comment: entity?.comment ? entity.comment : '',
            }}
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

export default EditCommentModal
