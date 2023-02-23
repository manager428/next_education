import React, { useRef, useState } from 'react'
import { withTypes } from 'react-final-form'

import { EditorState } from 'draft-js'
import { Mutator } from 'final-form'
import setFieldTouched from 'final-form-set-field-touched'
import validate from 'validate.js'

import get from 'lodash/get'
import map from 'lodash/map'

import { Flex } from 'Components/UI'

import {
  EditorInputField,
  ImageUploadField,
  InputField,
  SelectField,
} from 'Components/Blocks/Fields'

import { COMMUNITY_POST_TAGS } from 'Constants/community'
import { englishCharsRegex } from 'Constants/regex'

import { communityApi } from 'Services/Api/requests'
import _, { useScopedI18n } from 'Services/I18n'

import { presenceConstraint } from 'Utils/constraints'

import {
  ErrorsContainer,
  FormWrapper,
  SubmitButton,
  SuccessMessage,
  Title,
} from './styles'

const TAG_OPTIONS = map(COMMUNITY_POST_TAGS, entity => ({
  label: `#${entity.toUpperCase()}`,
  value: entity,
}))

type Props = {
  onSuccess: () => void
}

enum FIELDS {
  TITLE = 'title',
  IMAGE = 'image',
  CONTENT = 'content',
  CATEGORY = 'category',
}

type FormValues = {
  [FIELDS.TITLE]: string
  [FIELDS.IMAGE]: File
  [FIELDS.CONTENT]: string
  [FIELDS.CATEGORY]: { label: string; value: string }
}

const { Form } = withTypes<FormValues>()

const CreatePostForm: React.FC<Props> = ({ onSuccess }) => {
  const commentFormRef = useRef<any>()
  const s = useScopedI18n('community')

  const [isPublished, setPublished] = useState(false)
  const [responseError, setResponseError] = useState<string | null>(null)

  const handleValidate = (values: FormValues) =>
    validate(values, {
      ...presenceConstraint(FIELDS.TITLE),
      ...presenceConstraint(FIELDS.CATEGORY),
      ...presenceConstraint(FIELDS.IMAGE),
      [FIELDS.CONTENT]: {
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

  const handleSetRef = (ref: HTMLDivElement) => {
    commentFormRef.current = ref
  }

  const handleReset = (form: any) => {
    const editorState = EditorState.createEmpty()

    setTimeout(form.reset)

    if (commentFormRef.current) {
      commentFormRef.current.update(editorState) // Update the editor with updated content.
    }
  }

  const onSubmit = async (values: FormValues, form: any) => {
    setResponseError(null)

    const { image, title, category, content } = values
    const formData = new FormData()

    formData.append('image', image)
    formData.append('title', title)
    formData.append('content', content)
    formData.append('category', category.value)

    try {
      await communityApi.createPost(formData)

      handleReset(form)

      form.mutators.setFieldTouched(FIELDS.IMAGE, false)
      form.mutators.setFieldTouched(FIELDS.TITLE, false)
      form.mutators.setFieldTouched(FIELDS.CONTENT, false)
      form.mutators.setFieldTouched(FIELDS.CATEGORY, false)

      onSuccess()
      setPublished(true)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
      setResponseError('Something going wrong, contact with support!')
    }
  }

  const mutators = { setFieldTouched }

  return (
    <FormWrapper>
      <Title>{s('joinGlobal')}</Title>
      <Title color="black" mt={10}>
        {s('selectTopic')}
      </Title>
      <Flex mt={20} width={1}>
        <Form
          mutators={(mutators as unknown) as { [key: string]: Mutator<any> }}
          render={({ handleSubmit, invalid, errors, touched }) => {
            const isImageError =
              get(touched, 'image', false) && get(errors, 'image', false)
            const isTitleError =
              get(touched, 'title', false) && get(errors, 'title', false)
            const isContentError =
              get(touched, 'content', false) && get(errors, 'content', false)
            const isTagError =
              get(touched, 'tag', false) && get(errors, 'tag', false)

            const validationError =
              isTitleError || isImageError || isContentError || isTagError
                ? _('error.fillAllRequired')
                : null

            return (
              <Flex
                alignContent="flex-start"
                alignItems="flex-start"
                flexWrap="wrap"
                width="100%"
              >
                <Flex flexWrap="wrap" width={580}>
                  <InputField
                    highlight
                    label={null}
                    name={FIELDS.TITLE}
                    noError
                    placeholder={s('fields.titlePlaceholder')}
                    tip={null}
                    type="text"
                  />
                  <EditorInputField
                    height="200px"
                    highlight
                    label={null}
                    maxContentHeight="123px"
                    name={FIELDS.CONTENT}
                    parentRef={commentFormRef}
                    placeholder={s('fields.descriptionPlaceholder')}
                    styles={{ mt: 12 }}
                    tip={null}
                    type="textarea"
                    onSetRef={handleSetRef}
                  />
                </Flex>
                <Flex flexGrow={1} flexWrap="wrap" pl={40} width={360}>
                  <SelectField
                    className={null}
                    height={null}
                    label={null}
                    name={FIELDS.CATEGORY}
                    noError
                    options={TAG_OPTIONS}
                    placeholder={s('fields.selectTagPlaceholder')}
                    portal={null}
                    top={null}
                    width={220}
                  />
                  <Flex width="100%">
                    <ImageUploadField mt="8px" name={FIELDS.IMAGE} noError />
                  </Flex>
                </Flex>

                <Flex flexWrap="wrap" justifyContent="center" width="100%">
                  <ErrorsContainer>
                    {validationError || responseError}
                  </ErrorsContainer>
                  <SubmitButton gray={invalid} onClick={handleSubmit}>
                    {s('submit')}
                  </SubmitButton>

                  {isPublished && (
                    <SuccessMessage>{s('successMessage')}</SuccessMessage>
                  )}
                </Flex>
              </Flex>
            )
          }}
          validate={handleValidate}
          onSubmit={onSubmit}
        />
      </Flex>
    </FormWrapper>
  )
}

export default CreatePostForm
