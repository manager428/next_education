/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { Field, Form } from 'react-final-form'

import InnerHTML from 'dangerously-set-html-content'
import { DateTime } from 'luxon'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import validate from 'validate.js'

import get from 'lodash/get'

import { friendship2022 } from 'Assets/images/challenges'
import {
  firstNumberGlyph,
  fourthNumberGlyph,
  secondNumberGlyph,
  thirdNumberGlyph,
  uploadGlyph,
} from 'Assets/svg/challenges'

import {
  Background,
  BlockHeader,
  Content,
  DescriptionHeader,
  LeftSide,
  RightSide,
  Title,
} from 'Containers/Pages/Challenges/styles'
import {
  ButtonsWrap,
  Cancel,
  ErrorElem,
  FieldWrapper,
  FormColumn,
  FormFieldWrap,
  FormWrapper,
  ImageWrapper,
  NotLoggedInWrap,
  SuccessElem,
  UploadInfo,
} from 'Containers/Pages/Challenges/Submit/styles'

import { Flex } from 'Components/UI'
import Icon from 'Components/UI/Icon'
import Loader from 'Components/UI/Loader'

import { EditorInputField } from 'Components/Blocks/Fields'
import Footer from 'Components/Blocks/Footer'

import { CHALLENGE_SUBMISSION_DEADLINE } from 'Constants/challenges'
import { PUBLIC_PATHS } from 'Constants/paths'
import { englishCharsRegex } from 'Constants/regex'

import useMe from 'Hooks/useMe'

import { challengesApi } from 'Services/Api/requests'
import _, { useScopedI18n } from 'Services/I18n'

import { presenceConstraint } from 'Utils/constraints'

const SubmitChallenge = () => {
  const router = useRouter()
  const s = useScopedI18n('challenges.create')
  const me = useMe()

  const [selectedPreview, setSelectedPreview] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedVideoFile, setSelectedVideoFile] = useState(null)
  const [selectedVideoFileSize, setSelectedVideoFileSize] = useState(null)
  const [selectedVideoFileSizeError, setSelectedVideoFileSizeError] = useState(
    null,
  )
  const [selectedVideoPreview, setSelectedVideoPreview] = useState(null)
  const [selectedImageFileSize, setSelectedImageFileSize] = useState(null)
  const [selectedImageFileSizeError, setSelectedImageFileSizeError] = useState(
    null,
  )
  const [isLoading, setLoading] = useState(false)
  const [isChallengeCreated, setChallengeCreated] = useState(false)
  const [isError, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const authorId = me?.id ? me.id : 0

  const LIST = [
    {
      icon: firstNumberGlyph,
      text: `<div>${s('makeAndUpload')}</div>`,
    },
    {
      icon: secondNumberGlyph,
      text: `<span>${s('makeExciting')}</span>`,
    },
    {
      icon: thirdNumberGlyph,
      text: s('receiveCertificate'),
    },
    {
      icon: fourthNumberGlyph,
      text: s('winChallenge'),
    },
  ]

  const handleValidate = values =>
    validate(values, {
      ...presenceConstraint('title'),
      ...presenceConstraint('image'),
      description: {
        presence: true,
        format: {
          pattern: englishCharsRegex,
          flags: 'm',
          message: `^${_('error.textShouldBeWrittenInEnglish')}`,
        },
      },
    })

  const mustBeMp4 = value => {
    if (value.length === 0) {
      return undefined
    }
    const extensionArr = value.split('.')
    const extension = extensionArr[extensionArr.length - 1]
    return extension !== 'mp4' ? 'Must be a mp4 video' : undefined
  }

  const handleSubmitForm = async values => {
    const formData = new FormData()

    if (selectedVideoFile) {
      formData.append('video', selectedVideoFile)
    }

    formData.append('image', selectedFile)
    formData.append('content', values.description)
    formData.append('title', values.title)

    if (selectedVideoFileSize > 100) {
      setSelectedVideoFileSizeError(true)
    } else if (selectedImageFileSize > 1024) {
      setSelectedImageFileSizeError(true)
    } else {
      setLoading(true)
      try {
        await challengesApi.createChallenge(formData)

        setLoading(false)
        setChallengeCreated(true)
        setError(false)
        setErrorMessage('')

        router.push(PUBLIC_PATHS.CHALLENGES)
      } catch (e) {
        setLoading(false)
        setError(true)
        setErrorMessage('Something going wrong, contact with support!')
      }
    }
  }

  const handleFileChange = event => {
    const file = event.target.files[0]

    if (file) {
      const filePreview = URL.createObjectURL(event.target.files[0])
      const imageFileSize = file.size / 1024

      setSelectedFile(file)
      setSelectedImageFileSize(imageFileSize)
      setSelectedPreview(filePreview)
    } else {
      setSelectedFile('')
      setSelectedPreview('')
      setSelectedImageFileSize(null)
    }
  }

  const handleVideoFileChange = event => {
    const file = event.target.files[0]
    if (file) {
      const filePreview = window.URL.createObjectURL(event.target.files[0])
      const fileSizeinMB = file.size / 1024 / 1024

      setSelectedVideoFile(file)
      setSelectedVideoPreview(filePreview)
      setSelectedVideoFileSize(fileSizeinMB.toFixed(2))
    } else {
      setSelectedVideoFile('')
      setSelectedVideoPreview('')
      setSelectedVideoFileSize(null)
    }
  }

  const renderForm = ({ handleSubmit, form, errors, touched }) => {
    const isDescriptionError =
      get(touched, 'description', false) && get(errors, 'description', false)

    return (
      <form onSubmit={handleSubmit}>
        <FormWrapper>
          <FormColumn
            style={{
              width: '420px',
            }}
          >
            <Field
              disabled={authorId === 0}
              name="video"
              type="file"
              validate={mustBeMp4}
            >
              {({ input, meta }) => (
                <Flex flexWrap="wrap" justifyContent="center" width={1}>
                  <ImageWrapper disabled={authorId === 0}>
                    <Icon
                      height={88}
                      icon={uploadGlyph}
                      width={120}
                      wrapperStyles={{
                        position: 'absolute',
                        left: '36%',
                        top: '21px',
                      }}
                    />
                    <UploadInfo>
                      <div className="title">
                        <InnerHTML html={s('fields.dragAndDropVideo')} />
                      </div>
                      <div className="sub-title">
                        <InnerHTML html={s('fields.browserFile')} />
                      </div>
                      <div className="description">(Max file size 100MB)</div>
                    </UploadInfo>
                    <input
                      type="file"
                      {...input}
                      accept="video/mp4"
                      disabled={authorId === 0}
                      onChange={e => {
                        input.onChange(e.target.value)
                        handleVideoFileChange(e)
                      }}
                    />
                    {selectedVideoPreview && (
                      // eslint-disable-next-line jsx-a11y/media-has-caption
                      <video alt="preview" src={selectedVideoPreview} />
                    )}
                  </ImageWrapper>

                  {meta.touched && meta.error && (
                    <ErrorElem as="div">
                      <span>{meta.error}</span>
                    </ErrorElem>
                  )}

                  {selectedVideoFileSizeError && (
                    <ErrorElem as="div">
                      {s('fields.fileSizeError')} 100MB
                    </ErrorElem>
                  )}
                </Flex>
              )}
            </Field>

            <Field name="image" type="file">
              {({ input, meta }) => (
                <Flex flexWrap="wrap" justifyContent="center" mt={30}>
                  <ImageWrapper disabled={authorId === 0}>
                    <Icon
                      height={88}
                      icon={uploadGlyph}
                      width={120}
                      wrapperStyles={{
                        position: 'absolute',
                        left: '36%',
                        top: '21px',
                      }}
                    />
                    <UploadInfo>
                      <div className="title">
                        <InnerHTML html={s('fields.dragAndDropImage')} />
                      </div>
                      <div className="sub-title">
                        <InnerHTML html={s('fields.browserFile')} />
                      </div>
                      <div className="description">(Max file size 1MB)</div>
                    </UploadInfo>
                    <input
                      disabled={authorId === 0}
                      type="file"
                      {...input}
                      accept="image/*"
                      placeholder="image"
                      onChange={e => {
                        input.onChange(e.target.value)
                        handleFileChange(e)
                      }}
                    />
                    {selectedPreview && (
                      // eslint-disable-next-line jsx-a11y/media-has-caption
                      <img alt="preview" src={selectedPreview} />
                    )}
                  </ImageWrapper>

                  <ErrorElem as="div">
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </ErrorElem>
                  {selectedImageFileSizeError && (
                    <ErrorElem as="div">
                      {s('fields.fileSizeError')} 1MB
                    </ErrorElem>
                  )}
                </Flex>
              )}
            </Field>
          </FormColumn>
          <FormColumn
            style={{
              width: '500px',
            }}
          >
            <FieldWrapper>
              <Field name="title" type="text" validateFields={['title']}>
                {({ input, meta }) => (
                  <FormFieldWrap withError={meta.touched && meta.error}>
                    <label>{s('fields.title')}</label>
                    <input
                      disabled={authorId === 0}
                      type="text"
                      {...input}
                      placeholder={s('fields.titlePlaceholder')}
                    />
                  </FormFieldWrap>
                )}
              </Field>
            </FieldWrapper>
            <FieldWrapper withMargin>
              <FormFieldWrap withError={isDescriptionError}>
                <label>Project Description</label>
                <EditorInputField
                  disabled={authorId === 0}
                  height="310px"
                  maxContentHeight="250px"
                  name="description"
                  placeholder={s('fields.descriptionPlaceholder')}
                  styles={{ mt: 0 }}
                  type="textarea"
                />

                <ErrorElem>
                  {authorId === 0 && (
                    <NotLoggedInWrap>
                      <a href="/auth/login">{_('buttons.login')}</a>
                      <span>{s('fields.submitProject')}</span>
                    </NotLoggedInWrap>
                  )}
                  {form.getState().submitFailed && (
                    <span>{_('error.fillAllRequired')}</span>
                  )}
                </ErrorElem>
              </FormFieldWrap>
            </FieldWrapper>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {!isChallengeCreated && (
                  <ButtonsWrap>
                    <button disabled={authorId === 0} type="submit">
                      {s('publishButton')}
                    </button>
                    <Link href={PUBLIC_PATHS.CHALLENGES} passHref>
                      <Cancel>{_('buttons.cancel')}</Cancel>
                    </Link>
                  </ButtonsWrap>
                )}
              </>
            )}
          </FormColumn>
        </FormWrapper>

        {isChallengeCreated && (
          <SuccessElem
            style={{
              marginTop: '20px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            {s('successMessage')}
          </SuccessElem>
        )}

        {isError && (
          <ErrorElem
            dangerouslySetInnerHTML={{ __html: errorMessage }}
            style={{
              marginTop: '20px',
              width: '100%',
              textAlign: 'center',
            }}
          />
        )}
      </form>
    )
  }

  return (
    <Background>
      <Content pb="60px">
        <BlockHeader>
          <LeftSide width={555}>
            <Title>
              <span>{s('uploadYour')}</span>
              <br />
              <span>#Friendship</span> Challenge
            </Title>
            <DescriptionHeader>
              {LIST.map(item => (
                <div className="list-item" key={item.text}>
                  <Icon
                    height={24}
                    icon={item.icon}
                    width={22}
                    wrapperStyles={{
                      mr: '10px',
                      flexShrink: 0,
                    }}
                  />
                  <InnerHTML html={item.text} />
                </div>
              ))}
            </DescriptionHeader>
          </LeftSide>
          <RightSide>
            <img
              alt="logo"
              src={friendship2022.src}
              style={{
                width: 240,
                height: 290,
                marginRight: 75,
                marginTop: 30,
              }}
            />
          </RightSide>
        </BlockHeader>
        <div className="form-wrap">
          <Form
            initialValues={{
              title: null,
              description: null,
              image: null,
              video: '',
            }}
            render={renderForm}
            validate={handleValidate}
            onSubmit={handleSubmitForm}
          />
        </div>
      </Content>

      <Footer />
    </Background>
  )
}

SubmitChallenge.getInitialProps = async ctx => {
  const NOW = DateTime.local()

  // REDIRECT if challenge submit finished
  if (NOW > CHALLENGE_SUBMISSION_DEADLINE) {
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, { Location: PUBLIC_PATHS.CHALLENGES })
      ctx.res.end()
    } else {
      await Router.push(PUBLIC_PATHS.CHALLENGES)
    }
  }
  return {}
}

export default SubmitChallenge
