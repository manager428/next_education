import React, { useRef, useState } from 'react'
import { Form } from 'react-final-form'
import PropTypes from 'prop-types'

import { EditorState } from 'draft-js'
import setFieldTouched from 'final-form-set-field-touched'
import validate from 'validate.js'

import get from 'lodash/get'

import { Flex } from 'Components/UI'
import Loader from 'Components/UI/Loader'

import {
  EditorInputField,
  ImageUploadField,
  InputField,
  VideoUploadField,
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
  LoaderContainer,
  SubmitButton,
  SuccessMessage,
  Title,
} from './styles'

const VideoForm = ({
  onSuccess,
  formTitle,
  error,
  isLoggedUser,
  withSignInPopup,
}) => {
  const s = useScopedI18n('lectorium.view')
  const commentFormRef = useRef(null)

  const [isPublished, setPublished] = useState(false)
  const [isUploading, setUploading] = useState(false)
  const [isShowSignIn, setShowSignIn] = useState(false)
  const [isShowNotAllowedPopup, setShowNotAllowedAction] = useState(false)

  const { isParent, isSchoolAdmin } = useRole()

  const handleValidate = values =>
    validate(values, {
      ...presenceConstraint('title'),
      ...presenceConstraint('image'),
      ...presenceConstraint('video'),
      description: {
        presence: true,
        format: {
          pattern: englishCharsRegex,
          flags: 'm',
          message: `^${_('error.textShouldBeWrittenInEnglish')}`,
        },
      },
    })

  const handleCloseSignIn = () => {
    setShowSignIn(false)
  }

  const handleReset = form => () => {
    const editorState = EditorState.createEmpty()

    form.reset()
    commentFormRef.current.update(editorState) // Update the editor with updated content.
  }

  const handleSetRef = ref => {
    commentFormRef.current = ref
  }

  const onSubmit = async (values, form) => {
    const { image, title, description, video } = values
    const formData = new FormData()

    if ((isParent || isSchoolAdmin) && withSignInPopup) {
      setShowNotAllowedAction(true)

      return
    }

    if (!isLoggedUser) {
      if (withSignInPopup) setShowSignIn(true)

      return
    }

    formData.append('image', image)
    formData.append('title', title)
    formData.append('content', description)
    formData.append('video', video)

    setUploading(true)

    try {
      await onSuccess(formData)

      setUploading(false)

      setTimeout(form.reset)

      handleReset(form)

      form.mutators.setFieldTouched('image', false)
      form.mutators.setFieldTouched('title', false)
      form.mutators.setFieldTouched('description', false)
      form.mutators.setFieldTouched('video', false)

      setPublished(true)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    } finally {
      setUploading(false)
    }
  }

  // eslint-disable-next-line react/prop-types
  const renderForm = ({ handleSubmit, invalid, touched, errors }) => {
    const isImageError =
      get(touched, 'image', false) && get(errors, 'image', false)
    const isTitleError =
      get(touched, 'title', false) && get(errors, 'title', false)
    const isDescriptionError =
      get(touched, 'description', false) && get(errors, 'description', false)
    const isVideoError =
      get(touched, 'video', false) && get(errors, 'video', false)

    const validationError =
      isImageError || isTitleError || isDescriptionError || isVideoError
        ? _('error.fillAllRequired')
        : null

    return (
      <FieldsWrapper
        alignItems="flex-start"
        flexWrap="wrap"
        justifyContent="space-between"
        width="100%"
      >
        {isShowSignIn && (
          <SignIn isOpen left="428px" top="419px" onClose={handleCloseSignIn} />
        )}

        {isShowNotAllowedPopup && (
          <NotAllowedAction
            left="428px"
            top="419px"
            onClose={() => setShowNotAllowedAction(false)}
          />
        )}

        <Flex flexGrow={1} flexShrink={0} flexWrap="wrap" mr={40} width={360}>
          <Flex mb={20} width={1}>
            <ImageUploadField maxFileSizeInMb={5} mt={0} name="image" noError />
          </Flex>
          <Flex width={1}>
            <VideoUploadField mt={0} name="video" noError />
          </Flex>
        </Flex>
        <Flex flexWrap="wrap" width={580}>
          <InputField
            name="title"
            noError
            placeholder={s('fields.titlePlaceholder')}
            styles={{ mb: '13px' }}
          />

          <EditorInputField
            height="290px"
            maxContentHeight="227px"
            name="description"
            parentRef={commentFormRef}
            placeholder={s('fields.postPlaceholder')}
            type="textarea"
            onSetRef={handleSetRef}
          />
          <Flex flexWrap="wrap" justifyContent="flex-start" mt={0} width="100%">
            <ErrorsContainer mb={25}>{validationError}</ErrorsContainer>
            <SubmitButton
              disabled={invalid || isUploading || isParent}
              onClick={handleSubmit}
            >
              {s('fields.submitPost')}
            </SubmitButton>
            {isUploading && (
              <LoaderContainer ml={35}>
                <Loader />
              </LoaderContainer>
            )}

            {isPublished && !error && (
              <SuccessMessage>{s('fields.successPostMessage')}</SuccessMessage>
            )}

            {error && <ErrorMessage>{error}</ErrorMessage>}
          </Flex>
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

VideoForm.defaultProps = {
  error: null,
  isLoggedUser: false,
  withSignInPopup: true,
}

VideoForm.propTypes = {
  error: PropTypes.any,
  formTitle: PropTypes.string.isRequired,
  isLoggedUser: PropTypes.bool,
  withSignInPopup: PropTypes.bool,
  onSuccess: PropTypes.func.isRequired,
}

export default VideoForm
