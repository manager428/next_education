import React, { useRef, useState } from 'react'
import { Form } from 'react-final-form'
import PropTypes from 'prop-types'

import { EditorState } from 'draft-js'
import setFieldTouched from 'final-form-set-field-touched'
import validate from 'validate.js'

import get from 'lodash/get'

import { Flex } from 'Components/UI'

import {
  EditorInputField,
  ImageUploadField,
  InputField,
} from 'Components/Blocks/Fields'
import { NotAllowedAction, SignIn } from 'Components/Blocks/Popups'

import { englishCharsRegex } from 'Constants/regex'

import useRole from 'Hooks/useRole'

import _, { useScopedI18n } from 'Services/I18n'

import { presenceConstraint } from 'Utils/constraints'

import {
  ErrorMessage,
  ErrorsContainer,
  FieldsWrapper,
  FormWrapper,
  SubmitButton,
  SuccessMessage,
  Title,
} from './styles'

const PostForm = ({
  formTitle,
  onSuccess,
  error,
  withSignInPopup,
  isLoggedUser,
}) => {
  const s = useScopedI18n('lectorium.view')
  const commentFormRef = useRef(null)
  const [isPublished, setPublished] = useState(false)
  const [isShowSignIn, setShowSignIn] = useState(false)
  const [isShowNotAllowedPopup, setShowNotAllowedAction] = useState(false)
  const { isParent, isSchoolAdmin } = useRole()

  const handleValidate = values =>
    validate(values, {
      ...presenceConstraint('title'),
      ...presenceConstraint('image'),
      description: {
        presence: {
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
  }

  const onSubmit = async (values, form) => {
    const { image, title, description } = values
    const formData = new FormData()

    if (!isLoggedUser) {
      if (withSignInPopup) setShowSignIn(true)

      return
    }

    if ((isParent && withSignInPopup) || (isSchoolAdmin && withSignInPopup)) {
      setShowNotAllowedAction(true)
      return
    }

    formData.append('image', image)
    formData.append('title', title)
    formData.append('content', description)

    onSuccess(formData)

    setTimeout(form.reset)
    handleReset(form)
    form.mutators.setFieldTouched('image', false)
    form.mutators.setFieldTouched('title', false)
    form.mutators.setFieldTouched('description', false)

    setPublished(true)
  }

  const handleCloseSignIn = () => {
    setShowSignIn(false)
  }

  const handleSetRef = ref => {
    commentFormRef.current = ref
  }

  // eslint-disable-next-line react/prop-types
  const renderForm = ({ handleSubmit, invalid, errors, touched }) => {
    const isImageError =
      get(touched, 'image', false) && get(errors, 'image', false)
    const isTitleError =
      get(touched, 'title', false) && get(errors, 'title', false)
    const isDescriptionError =
      get(touched, 'description', false) && get(errors, 'description', false)

    const validationError =
      isImageError || isTitleError || isDescriptionError
        ? _('error.fillAllRequired')
        : null

    return (
      <FieldsWrapper>
        <Flex flexGrow={1} flexWrap="wrap" width={360}>
          <ImageUploadField maxFileSizeInMb={5} mt={0} name="image" noError />
        </Flex>
        <Flex
          alignContent="flex-start"
          alignItems="flex-start"
          className="submit-container"
          flexWrap="wrap"
          width={580}
        >
          <InputField
            name="title"
            noError
            placeholder={s('fields.titlePlaceholder')}
            styles={{ mb: '13px' }}
          />

          <EditorInputField
            height="137px"
            maxContentHeight="75px"
            name="description"
            parentRef={commentFormRef}
            placeholder={s('fields.postPlaceholder')}
            type="textarea"
            onSetRef={handleSetRef}
          />
        </Flex>

        <Flex flexWrap="wrap" justifyContent="center" width="100%">
          {isShowSignIn && (
            <SignIn
              isOpen
              left="390px"
              top="280px"
              onClose={handleCloseSignIn}
            />
          )}

          {isShowNotAllowedPopup && (
            <NotAllowedAction
              left="390px"
              top="280px"
              onClose={() => setShowNotAllowedAction(false)}
            />
          )}

          <ErrorsContainer>{validationError}</ErrorsContainer>
          <SubmitButton
            disabled={invalid || !isLoggedUser || isParent}
            onClick={handleSubmit}
          >
            {s('fields.submitPost')}
          </SubmitButton>

          {isPublished && !error && (
            <SuccessMessage>{s('fields.successPostMessage')}</SuccessMessage>
          )}

          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Flex>
      </FieldsWrapper>
    )
  }

  return (
    <FormWrapper>
      <Title color="black" mt={10} textAlign="center">
        {formTitle}
      </Title>
      <Flex mt={20} width={1}>
        <Form
          initialValues={{
            title: null,
            content: null,
            image: null,
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

PostForm.defaultProps = {
  error: null,
  withSignInPopup: true,
  isLoggedUser: false,
}

PostForm.propTypes = {
  error: PropTypes.string,
  formTitle: PropTypes.string.isRequired,
  isLoggedUser: PropTypes.bool,
  withSignInPopup: PropTypes.bool,

  onSuccess: PropTypes.func.isRequired,
}

export default PostForm
