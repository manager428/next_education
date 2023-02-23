import React, { useRef, useState } from 'react'
import { withTypes } from 'react-final-form'

import validate from 'validate.js'

import { Flex, Loader } from 'Components/UI'

import { NotAllowedAction, SignIn } from 'Components/Blocks/Popups'

import { englishCharsRegex } from 'Constants/regex'

import useRole from 'Hooks/useRole'

import _, { useScopedI18n } from 'Services/I18n'

import {
  Button,
  ErrorContainer,
  FormContainer,
  FormEditorInput,
  FormMessage,
} from './styles'

type FormValues = {
  comment: string | undefined
}

type Props = {
  initValues?: FormValues
  onSubmit: (values: FormValues & { voteType: 'negative' | 'positive' }) => void
  onCancel: () => void
  error: null | string
  voteType: 'positive' | 'negative'
  isLoading: boolean
}

const { Form } = withTypes<FormValues>()

const INITIAL_VALUES: FormValues = {
  comment: undefined,
}

enum FIELDS {
  comment = 'comment',
}

const DebateVoteForm: React.FC<Props> = ({
  voteType,
  onSubmit,
  error,
  isLoading,
  onCancel,
}) => {
  const s = useScopedI18n('debates.view')
  const ref = useRef<any>()
  const { isParent, isLoggedIn } = useRole()

  const [isShowSignIn, setShowSignIn] = useState<boolean>(false)
  const [isShowParentPopup, setShowParentPopup] = useState<boolean>(false)

  const FORM_CONSTRAINS = {
    [FIELDS.comment]: {
      presence: true,
      format: {
        pattern: englishCharsRegex,
        flags: 'm',
        message: `^${_('error.textShouldBeWrittenInEnglish')}`,
      },
    },
  }

  const handleSubmitForm = async (values: FormValues): Promise<any> => {
    if (isParent) {
      setShowParentPopup(true)
      return
    }

    if (!isLoggedIn) {
      setShowSignIn(true)
    } else {
      onSubmit({ ...values, voteType })
    }
  }
  const handleSetRef = (editorRef: HTMLDivElement): void => {
    ref.current = editorRef
  }

  const renderForm = ({
    handleSubmit,
  }: {
    handleSubmit: () => void
  }): React.ReactNode => (
    <FormContainer>
      <FormMessage color={voteType === 'positive' ? '#49ceb1' : '#ffa08c'}>
        {s('stateYourOpinion')}
      </FormMessage>

      <FormEditorInput
        className="description-field"
        height="220px"
        maxContentHeight="160px"
        name={FIELDS.comment}
        placeholder={s('fields.descriptionPlaceholder')}
        type="textarea"
        variant={voteType === 'negative' && 'orange'}
        onSetRef={handleSetRef}
      />

      <Flex justifyContent="center" mt={24} width={1}>
        {isLoading ? (
          <Loader />
        ) : (
          <Flex justifyContent="space-between" width={1}>
            <Button variant="gray" onClick={onCancel}>
              {_('buttons.cancel')}
            </Button>
            <Button
              variant={voteType === 'positive' ? 'green' : 'orange'}
              width={142}
              onClick={handleSubmit}
            >
              {_('buttons.submit')}
            </Button>

            {isShowParentPopup && (
              <NotAllowedAction
                left="63%"
                top="30px"
                onClose={() => setShowParentPopup(false)}
              />
            )}

            {isShowSignIn && (
              <SignIn
                isOpen={isShowSignIn}
                left="63%"
                top="105%"
                onClose={() => setShowSignIn(false)}
              />
            )}
          </Flex>
        )}
      </Flex>
      {error && <ErrorContainer>{error}</ErrorContainer>}
    </FormContainer>
  )

  return (
    <Flex flexWrap="wrap" width={1}>
      <Form
        initialValues={INITIAL_VALUES}
        render={renderForm}
        validate={values => validate(values, FORM_CONSTRAINS)}
        onSubmit={handleSubmitForm}
      />
    </Flex>
  )
}

export default DebateVoteForm
