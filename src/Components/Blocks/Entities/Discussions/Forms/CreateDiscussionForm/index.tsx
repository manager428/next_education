import React, { useCallback, useEffect, useRef, useState } from 'react'
import { withTypes } from 'react-final-form'

import get from 'lodash/get'
import pick from 'lodash/pick'
import pickBy from 'lodash/pickBy'

import { deleteIconGlyph, whiteSendMessageGlyph } from 'Assets/svg/common'
import { hashtagGlyph, photoGlyph, posterGlyph } from 'Assets/svg/discussions'

import { Flex, Icon } from 'Components/UI'
import PosterInput from 'Components/UI/Forms/PosterInput'

import { ImageUploadField } from 'Components/Blocks/Fields'
import TextEmoji from 'Components/Blocks/Fields/TextEmoji'
import TagsModal from 'Components/Blocks/Modals/TagsModal'

import { DISCUSSIONS_TAGS } from 'Constants/discussions'

import useMe from 'Hooks/useMe'

import {
  Avatar,
  CancelButton,
  Container,
  Content,
  DeletePreviewButton,
  Footer,
  FooterButton,
  HiddenContainer,
  ImagePreview,
  SubmitButton,
} from './styles'
import { FIELDS, FormEditor, FormValues, Props } from './types'

const { Form } = withTypes<FormValues>()

const POSTER_FORM_COLORS = [
  '#49CEB1',
  '#8DE1D1',
  '#FFA08C',
  '#FFD0C6',
  '#293E5F',
  '#5D708E',
]

const CreateDiscussionForm: React.FC<Props> = ({
  initialValues = {
    [FIELDS.IMAGE]: undefined,
    [FIELDS.CONTENT]: undefined,
    [FIELDS.TAGS]: undefined,
  },
  edit,
  onReset,
  onSubmit,
}) => {
  const me = useMe()

  const imageRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [editor, setEditor] = useState<FormEditor>(FormEditor.TEXT)
  const [isTagsModalOpen, setTagsModalOpen] = useState(false)

  useEffect(() => {
    if (initialValues?.id && containerRef?.current) {
      window.scrollTo(0, containerRef.current.offsetTop + 80)
    }
  }, [initialValues])

  const handleReset = useCallback(
    form => {
      form.change(FIELDS.IMAGE, undefined)
      form.change(FIELDS.CONTENT, undefined)
      form.change(FIELDS.TAGS, undefined)

      if (edit) {
        onReset()
      }
    },
    [edit],
  )

  const handleFormSubmit = useCallback(
    (values: FormValues, form) => {
      const params: any = {
        ...values,
      }

      if (initialValues?.id) {
        params.id = initialValues.id
      }

      onSubmit(params)

      setTimeout(() => {
        handleReset(form)
      }, 0)
    },
    [initialValues],
  )

  const handleImageClick = useCallback(() => {
    if (imageRef.current) {
      imageRef.current.click()
    }
  }, [imageRef])

  const handleDeletePreview = useCallback(form => {
    form.change(FIELDS.IMAGE, undefined)
  }, [])

  const handleSetPoster = useCallback((file: File, form) => {
    form.change(FIELDS.IMAGE, file)
    setEditor(FormEditor.TEXT)
  }, [])

  const handleSelectTags = useCallback((form, tags) => {
    form.change(FIELDS.TAGS, tags)
    setTagsModalOpen(false)
  }, [])

  const renderImagePreview = useCallback(
    (file, form) => {
      if (!file || editor !== FormEditor.TEXT) return null

      const isFile = file instanceof File

      const filePreview = edit && !isFile ? file : URL.createObjectURL(file)

      return (
        <ImagePreview mt="10px">
          <DeletePreviewButton onClick={() => handleDeletePreview(form)}>
            <Icon fill="#FFA08C" icon={deleteIconGlyph} size={15} />
          </DeletePreviewButton>
          <img alt="preview" src={filePreview} />
        </ImagePreview>
      )
    },
    [editor, edit],
  )

  const renderEditor = useCallback(
    form => {
      if (editor === FormEditor.TEXT) {
        return <TextEmoji name={FIELDS.CONTENT} />
      }

      if (editor === FormEditor.POSTER) {
        return (
          <PosterInput
            colors={POSTER_FORM_COLORS}
            onClose={() => setEditor(FormEditor.TEXT)}
            onSubmit={file => handleSetPoster(file, form)}
          />
        )
      }

      return null
    },
    [editor],
  )

  const renderForm = useCallback(
    ({ handleSubmit, values, form }) => {
      const requiredValues = pick(pickBy(values), [
        FIELDS.CONTENT,
        FIELDS.IMAGE,
      ])

      const isValid =
        !!get(requiredValues, [FIELDS.CONTENT]) ||
        !!get(requiredValues, [FIELDS.IMAGE])

      return (
        <Flex flexWrap="wrap" width={1}>
          <TagsModal
            initialTags={DISCUSSIONS_TAGS}
            isOpen={isTagsModalOpen}
            selectedTags={get(values, [FIELDS.TAGS], [])}
            onClose={() => setTagsModalOpen(false)}
            onSubmit={tags => handleSelectTags(form, tags)}
          />
          <Content>
            <Avatar alignSelf="flex-start" as="img" mr={14} src={me?.avatar} />

            <Flex flexWrap="wrap" width={1}>
              {renderEditor(form)}

              {renderImagePreview(get(values, [FIELDS.IMAGE]), form)}

              <HiddenContainer>
                <ImageUploadField
                  innerRef={imageRef}
                  maxFileSizeInMb={3}
                  name={FIELDS.IMAGE}
                />
              </HiddenContainer>
            </Flex>
          </Content>
          <Footer>
            <Flex>
              <FooterButton onClick={handleImageClick}>
                <Icon
                  icon={photoGlyph}
                  size={18}
                  wrapperStyles={{ mr: '5px' }}
                />
                Photo/GIF
              </FooterButton>
              <FooterButton onClick={() => setEditor(FormEditor.POSTER)}>
                <Icon
                  icon={posterGlyph}
                  size={18}
                  wrapperStyles={{ mr: '5px' }}
                />
                Poster
              </FooterButton>
              <FooterButton onClick={() => setTagsModalOpen(true)}>
                <Icon
                  icon={hashtagGlyph}
                  size={15}
                  wrapperStyles={{ mr: '5px' }}
                />
                {values?.tags?.length > 0
                  ? `${values.tags?.length} Tags Selected`
                  : 'Add Tags'}
              </FooterButton>
            </Flex>
            <Flex>
              <CancelButton mr={14} onClick={() => handleReset(form)}>
                Cancel
              </CancelButton>
              <SubmitButton
                disabled={!isValid}
                onClick={e => {
                  e.preventDefault()
                  handleSubmit()
                }}
              >
                {edit ? 'Update' : 'Publish'}
                <Icon
                  icon={whiteSendMessageGlyph}
                  size={13}
                  wrapperStyles={{ ml: '5px' }}
                />
              </SubmitButton>
            </Flex>
          </Footer>
        </Flex>
      )
    },
    [editor, isTagsModalOpen, edit, initialValues],
  )

  return (
    <Container ref={containerRef}>
      <Form
        initialValues={initialValues}
        render={renderForm}
        onSubmit={handleFormSubmit}
      />
    </Container>
  )
}

export default CreateDiscussionForm
