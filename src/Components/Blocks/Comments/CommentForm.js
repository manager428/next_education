import React, { useEffect, useRef, useState } from 'react'
import { Form, FormSpy } from 'react-final-form'
import PropTypes from 'prop-types'

import InnerHTML from 'dangerously-set-html-content'
import { ContentState, EditorState } from 'draft-js'
import setFieldTouched from 'final-form-set-field-touched'
import htmlToDraft from 'html-to-draftjs'
import validate from 'validate.js'

import get from 'lodash/get'
import replace from 'lodash/replace'
import trim from 'lodash/trim'

import { Flex } from 'Components/UI'

import { EditorInputField } from 'Components/Blocks/Fields'
import { NotAllowedAction, SignIn } from 'Components/Blocks/Popups'

import { englishCharsRegex } from 'Constants/regex'

import _ from 'Services/I18n'

import {
  CommentInputWrapper,
  Description,
  ErrorsContainer,
  FormWrapper,
  SubmitButton,
  Title,
} from './styles'

const CommentForm = ({
  color, // color for input wrapper
  replyToUser,
  formTitle,
  onSuccess,
  isLoggedUser,
  isSubmitAllowed,
  withSignInPopup,
  title,
  titleAlign,
  titleFontSize,
  onReplyReset,
}) => {
  const commentFormRef = useRef()

  const [isShowSignIn, setShowSignIn] = useState(false)
  const [isShowNotAllowedPopup, setShowNotAllowedAction] = useState(false)

  useEffect(() => {
    if (replyToUser) {
      // commentFormRef.current.editorContainer.innerHTML = replyToUser

      const contentBlock = htmlToDraft(replyToUser)
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks,
      )

      const editorState = EditorState.moveFocusToEnd(
        EditorState.createWithContent(contentState),
      )

      commentFormRef.current.focus()
      commentFormRef.current.update(editorState) // Update the editor with updated content.
    }
  })

  const handleValidate = values =>
    validate(values, {
      comment: {
        presence: {
          presence: true,
          message: `^${_('error.cantBeBlank')}`,
        },
        format: {
          pattern: englishCharsRegex,
          flags: 'm',
          message: `^${_('error.textShouldBeWrittenInEnglish')}`,
        },
      },
    })

  const handleReset = form => {
    const editorState = EditorState.createEmpty()

    setTimeout(form.reset)

    commentFormRef.current.update(editorState) // Update the editor with updated content.

    onReplyReset()
  }

  const onSubmit = async (values, form) => {
    if (!isLoggedUser) {
      if (withSignInPopup) setShowSignIn(true)
      return
    }

    if (!isSubmitAllowed && withSignInPopup) {
      setShowNotAllowedAction(true)
      return
    }

    onSuccess(values)

    handleReset(form)

    setTimeout(form.reset)

    form.mutators.setFieldTouched('comment', false)
  }

  const handleCloseSignIn = () => {
    setShowSignIn(false)
  }

  const handleSetRef = ref => {
    commentFormRef.current = ref
  }

  const handleListenReplyTo = props => {
    const currentValue = trim(`${get(props, 'values.comment', '')}`)

    if (currentValue.length === 0) {
      onReplyReset()
    }

    const wrappedReplyToUser = trim(
      `<p>${replace(replyToUser, /,\s*$/, '')}</p>`,
    )

    if (wrappedReplyToUser === currentValue && replyToUser) {
      const editorState = EditorState.createEmpty()
      commentFormRef.current.update(editorState) // Update the editor with updated content.

      setTimeout(() => {
        commentFormRef.current.focus()
      }, 0)
    }
  }

  // eslint-disable-next-line react/prop-types
  const renderForm = ({ handleSubmit, invalid, form, touched, errors }) => {
    const isCommentError =
      get(touched, 'comment', false) && get(errors, 'comment', false)

    const validationError = isCommentError ? _('error.fillAllRequired') : null

    return (
      <Flex flexWrap="wrap" justifyContent="space-between" width="100%">
        <FormSpy
          subscription={{ values: true }}
          onChange={handleListenReplyTo}
        />
        <CommentInputWrapper
          alignContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
          width={600}
        >
          <EditorInputField
            height="164px"
            maxContentHeight="103px"
            name="comment"
            parentRef={commentFormRef}
            placeholder={_('forms.comment.commentPlaceholder')}
            replyTo={replyToUser}
            type="textarea"
            onSetRef={handleSetRef}
          />

          {isShowNotAllowedPopup && (
            <NotAllowedAction
              left="390px"
              top="204px"
              onClose={() => setShowNotAllowedAction(false)}
            />
          )}

          {isShowSignIn && (
            <SignIn
              isOpen
              left="390px"
              top="204px"
              onClose={handleCloseSignIn}
            />
          )}
        </CommentInputWrapper>

        <Flex flexWrap="wrap" justifyContent="flex-end" mt={0} width="100%">
          <ErrorsContainer>{validationError}</ErrorsContainer>
          <SubmitButton
            gray
            maxWidth={142}
            mr={40}
            onClick={() => handleReset(form)}
          >
            {_('buttons.cancel')}
          </SubmitButton>
          <SubmitButton
            color={color}
            gray={invalid}
            maxWidth={142}
            onClick={handleSubmit}
          >
            {_('buttons.send')}
          </SubmitButton>
        </Flex>
      </Flex>
    )
  }

  return (
    <FormWrapper color={color}>
      <Title color="black" fontSize={titleFontSize} textAlign={titleAlign}>
        <InnerHTML html={title} />
      </Title>
      <Description mt={10}>{formTitle}</Description>
      <Flex flex={1} minWidth="unset" mt={20}>
        <Form
          initialValues={{
            comment: null,
          }}
          mutators={{ setFieldTouched }}
          render={renderForm}
          validate={handleValidate}
          onSubmit={onSubmit}
        />
      </Flex>
    </FormWrapper>
  )
}

CommentForm.defaultProps = {
  color: undefined,
  replyToUser: null,
  isLoggedUser: false,
  withSignInPopup: true,
  isSubmitAllowed: true,
  title: 'Share your experience',
  titleAlign: 'center',
  titleFontSize: '24px',
}

CommentForm.propTypes = {
  color: PropTypes.string,
  formTitle: PropTypes.string.isRequired,
  isLoggedUser: PropTypes.bool,
  replyToUser: PropTypes.string,
  title: PropTypes.string,
  titleAlign: PropTypes.string,
  titleFontSize: PropTypes.string,
  withSignInPopup: PropTypes.bool,
  isSubmitAllowed: PropTypes.bool,
  onReplyReset: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
}

export default CommentForm
