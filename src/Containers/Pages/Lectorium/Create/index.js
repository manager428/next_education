import React, { PureComponent } from 'react'
import { Form } from 'react-final-form'

import InnerHTML from 'dangerously-set-html-content'
import arrayMutators from 'final-form-arrays'
import setFieldTouched from 'final-form-set-field-touched'
import validate from 'validate.js'

import forEach from 'lodash/forEach'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'

import {
  lectoriumNumberFourGlyph,
  lectoriumNumberOneGlyph,
  lectoriumNumberThreeGlyph,
  lectoriumNumberTwoGlyph,
} from 'Assets/svg/lectorium'

import { Flex, Icon } from 'Components/UI'

import { PRIVACY_OPTIONS } from 'Components/Blocks/Entities/Lectorium/PrivacySelector/PrivacyRadioButtons'
import PrivacySelectorField from 'Components/Blocks/Entities/Lectorium/PrivacySelector/PrivacySelectorField'
import { ImageUploadField, VideoUploadField } from 'Components/Blocks/Fields'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import { ENGLISH_LEVEL_OPTIONS } from 'Constants/ids'
import {
  ACTIVITY_TYPES,
  DEFAULT_NEW_WORD,
  DEFAULT_QUIZ,
  LECTORIUM_CATEGORIES,
  LECTORIUM_DURATION_OPTIONS,
} from 'Constants/lectorium'

import { lectoriumApi } from 'Services/Api/requests'

import {
  newWordsCustomValidation,
  presenceConstraint,
  presenceUrlConstraint,
  quizzesCustomValidation,
} from 'Utils/constraints'
import {
  transformToCreateRequest,
  transformToPreview,
} from 'Utils/Entities/Lectorium'

import { NewWords, Quiz } from './Activity'
import Preview from './Preview'
import {
  Background,
  Container,
  ErrorsContainer,
  FormEditorInput,
  FormInput,
  FormSelect,
  LectoriumLogo,
  SectionTitle,
  Step,
  StyledForm,
  SubmitButton,
  SubText,
  Title,
  VideoDescription,
} from './styles'

const STEPS = [
  {
    icon: lectoriumNumberOneGlyph,
    text: 'Make and <span>Upload</span> a good quality <span>Video</span>',
  },
  {
    icon: lectoriumNumberTwoGlyph,
    text: '<span>Write a text description </span> for students',
  },
  {
    icon: lectoriumNumberThreeGlyph,
    text:
      '<span>SelectField the activity</span> for students  (Quiz or New Words)',
  },
  {
    icon: lectoriumNumberFourGlyph,
    text:
      'Decide how students should <span>share</span> their <span>experiences</span>',
  },
]

class CreateLectorium extends PureComponent {
  state = {
    isShowPreview: false,
    isCreating: false,
    isPublished: false,
    isPublishError: false,
    initialValues: {
      videoPrivacy: [PRIVACY_OPTIONS.ALL],
      activity: {
        label: 'Quiz',
        value: 'quiz',
      },
      quizzes: [{ ...DEFAULT_QUIZ }],
      newWords: [{ ...DEFAULT_NEW_WORD }],
    },
  }

  validate = values => {
    const uploadType = get(values, 'uploadType.value')
    const activity = get(values, 'activity.value')

    let constrains = {
      ...presenceConstraint('videoTitle'),
      ...presenceConstraint('uploadType'),
      ...presenceConstraint('category'),
      ...presenceConstraint('englishLevel'),
      ...presenceConstraint('duration'),
      ...presenceConstraint('description'),
      ...presenceConstraint('shareExperience'),
      ...presenceConstraint('experienceDescription'),
      videoPrivacy: {
        presence: true,
        length: {
          minimum: 1,
        },
      },
    }

    switch (uploadType) {
      case 'uploadFile': {
        constrains = {
          ...constrains,
          ...presenceConstraint('videoUrl'),
          ...presenceConstraint('videoPreview'),
        }
        break
      }

      case 'shareUrl': {
        constrains = {
          ...constrains,
          ...presenceUrlConstraint('videoDirectUrl'),
          ...presenceConstraint('videoPreview'),
        }

        break
      }

      case 'youtubeEmbed': {
        constrains = {
          ...constrains,
          ...presenceConstraint('youtubeEmbed'),
          ...presenceConstraint('videoPreview'),
        }
        break
      }

      default:
        break
    }

    let errors = validate(values, constrains)

    switch (activity) {
      case 'quiz': {
        errors = quizzesCustomValidation(errors, values)
        break
      }

      case 'newWords': {
        errors = newWordsCustomValidation(errors, values)
        break
      }

      default:
        break
    }

    return errors
  }

  handleFormSubmit = values => {
    this.setState({
      isShowPreview: true,
      initialValues: values,
    })
  }

  handleTogglePreview = () => {
    this.setState(prevState => ({
      isShowPreview: !prevState.isShowPreview,
    }))
  }

  handlePublish = async e => {
    e.preventDefault()

    this.setState({ isCreating: true })

    const { initialValues } = this.state
    const formData = new FormData()

    const values = transformToCreateRequest(initialValues)

    forEach(values, (value, index) => {
      if (index === 'quiz') {
        formData.append('quiz', JSON.stringify(value))
      } else if (index === 'words') {
        formData.append('words', JSON.stringify(value))
      } else if (index === 'privacy') {
        forEach(value, (privacyValue, ind) => {
          formData.append(`privacy[${ind}]`, privacyValue)
        })
      } else {
        formData.append(index, value)
      }
    })

    try {
      await lectoriumApi.createLectorium(formData)
      this.setState({
        isCreating: false,
        isPublished: true,
      })
    } catch (error) {
      this.setState({
        isCreating: false,
        isPublished: false,
        isPublishError: true,
      })
    }
  }

  renderVideoUpload = (type, errors, touched) => {
    let videoFields = null

    switch (type) {
      case 'shareUrl': {
        videoFields = (
          <Flex flexWrap="wrap" mt={20} width={1}>
            <FormInput
              debounced
              isError={
                get(touched, 'videoDirectUrl', false) &&
                get(errors, 'videoDirectUrl')
              }
              name="videoDirectUrl"
              noError
              placeholder="Type Video URL here..."
            />
            <Flex maxWidth="448px" mt={16} width={1}>
              <ImageUploadField
                maxFileSizeInMb={5}
                mt={0}
                name="videoPreview"
                noError
              />
            </Flex>
          </Flex>
        )
        break
      }
      case 'uploadFile': {
        videoFields = (
          <Flex flexWrap="wrap" mt={20} width={1}>
            <Flex maxWidth="448px" mr={20} width={1}>
              <VideoUploadField fileSize={250} mt={0} name="videoUrl" noError />
            </Flex>
            <Flex maxWidth="448px" width={1}>
              <ImageUploadField
                maxFileSizeInMb={5}
                mt={0}
                name="videoPreview"
                noError
              />
            </Flex>
            <VideoDescription width={1}>
              Need a video converter?
              <a
                href="https://cloudconvert.com/mp4-converter"
                rel="noopener noreferrer"
                target="_blank"
              >
                Click here
              </a>
            </VideoDescription>
          </Flex>
        )
        break
      }
      case 'youtubeEmbed': {
        videoFields = (
          <Flex flexWrap="wrap" mt={16} width={1}>
            <Flex flexWrap="wrap">
              <FormInput
                debounced
                isError={
                  get(touched, 'youtubeEmbed', false) &&
                  get(errors, 'youtubeEmbed')
                }
                mt={20}
                name="youtubeEmbed"
                noError
                placeholder="Type Embed Code here..."
                styles={{ width: '100%' }}
                type="textarea"
              />

              <VideoDescription width={1}>
                Not sure how to share the Video URL correctly?{' '}
                <a
                  href="https://support.google.com/youtube/answer/171780?hl=en"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Click here for instructions!
                </a>
              </VideoDescription>
            </Flex>

            <Flex maxWidth="448px" mt={16} width={1}>
              <ImageUploadField
                maxFileSizeInMb={5}
                mt={0}
                name="videoPreview"
                noError
              />
            </Flex>
          </Flex>
        )
        break
      }
      default:
        return null
    }

    return (
      <>
        {videoFields}
        <Flex alignItems="center" mt={25}>
          <FormSelect
            isError={get(touched, 'category', false) && get(errors, 'category')}
            label="Select Video Category"
            mr={30}
            name="category"
            noError
            options={LECTORIUM_CATEGORIES}
            placeholder="Select a category"
            width="220px"
          />
          <FormSelect
            isError={
              get(touched, 'englishLevel', false) && get(errors, 'englishLevel')
            }
            label="Choose English Level"
            mr={30}
            name="englishLevel"
            noError
            options={map(ENGLISH_LEVEL_OPTIONS, level => level)}
            placeholder="Select level"
            width="220px"
          />
          <FormSelect
            isError={get(touched, 'duration', false) && get(errors, 'duration')}
            label="Video duration (min)"
            name="duration"
            noError
            options={map(LECTORIUM_DURATION_OPTIONS, value => {
              if (value === 4) {
                return {
                  value,
                  label: `< 5 min`,
                }
              }
              if (value === 121) {
                return {
                  value,
                  label: `> 120 min`,
                }
              }

              return {
                value,
                label: `${value} min`,
              }
            })}
            placeholder="Duration in minutes"
            styles={{
              width: 220,
            }}
            width="220px"
          />
        </Flex>
      </>
    )
  }

  renderActivity = (selectedType, values, errors, touched) => {
    switch (selectedType) {
      case ACTIVITY_TYPES.quiz: {
        return <Quiz errors={errors} touched={touched} values={values} />
      }
      case ACTIVITY_TYPES.newWords: {
        return <NewWords errors={errors} touched={touched} values={values} />
      }
      default:
        return null
    }
  }

  renderForm = ({
    values,
    handleSubmit,
    errors,
    touched,
    form,
    submitFailed,
  }) => {
    const uploadType = get(values, 'uploadType')
    const activity = get(values, 'activity')
    const selectedUploadType = get(uploadType, 'value')
    const selectedActivity = get(activity, 'value')

    const isVideoTitleError =
      get(touched, 'videoTitle', false) && get(errors, 'videoTitle')
    const isVideoTypeError =
      get(touched, 'uploadType', false) && get(errors, 'uploadType')
    const isExperienceError =
      get(touched, 'shareExperience', false) && get(errors, 'shareExperience')
    const isExperienceDescriptionError =
      get(touched, 'experienceDescription', false) &&
      get(errors, 'experienceDescription')

    const validationError =
      !isEmpty(errors) && submitFailed
        ? 'Oops! You should fill all required fields!'
        : null

    return (
      <StyledForm>
        <SectionTitle mt={60}>
          Step 1: Make and Upload a Good Quality Video and Cover Image
        </SectionTitle>

        <FormInput
          debounced
          isError={isVideoTitleError}
          label="Video Title"
          name="videoTitle"
          noError
          placeholder="Type here..."
          styles={{ mb: 20 }}
        />
        <Flex width={1}>
          <FormSelect
            isError={isVideoTypeError}
            mr={30}
            name="uploadType"
            noError
            options={[
              {
                label: 'Upload File',
                value: 'uploadFile',
              },
              {
                label: 'Share URL (direct link to file)',
                value: 'shareUrl',
              },
              {
                label: 'Youtube Embed code',
                value: 'youtubeEmbed',
              },
            ]}
            placeholder="Choose how you would like to upload the video"
            selectProps={{
              isSearchable: false,
            }}
            width="398px"
          />
        </Flex>

        <Flex mt={14} width={1}>
          <Flex maxWidth={390} width={1}>
            <PrivacySelectorField name="videoPrivacy" />
          </Flex>
        </Flex>

        {this.renderVideoUpload(selectedUploadType, errors, touched)}

        <SectionTitle mt={80}>Step 2: Write a text description</SectionTitle>
        <FormEditorInput
          height="240px"
          isError
          label="Video Text or Description"
          maxContentHeight="180px"
          name="description"
          noError
          placeholder="Type here..."
          // parentRef={commentFormRef}
          styles={{
            mb: 0,
          }}
          type="textarea"
          // onSetRef={handleSetRef}
        />

        <SectionTitle mt={80}>
          Step 3: Select the activity for students
        </SectionTitle>
        <FormSelect
          name="activity"
          noError
          options={[
            {
              label: 'No activity',
              value: ACTIVITY_TYPES.nothing,
            },
            {
              label: 'Quiz',
              value: ACTIVITY_TYPES.quiz,
            },
            {
              label: 'New Words',
              value: ACTIVITY_TYPES.newWords,
            },
          ]}
          placeholder="Choose Activity"
          selectProps={{ isSearchable: false }}
          width="220px"
        />

        {this.renderActivity(selectedActivity, values, errors, touched)}

        <SectionTitle mt={80}>
          Step 4: Decide how students should share their experiences
        </SectionTitle>

        <FormSelect
          isError={isExperienceError}
          name="shareExperience"
          noError
          options={[
            {
              label: 'Comments',
              value: 'comments',
            },
            {
              label: 'Videos',
              value: 'student_videos',
            },
            {
              label: 'Posts',
              value: 'student_posts',
            },
          ]}
          placeholder="Choose Activity"
          selectProps={{ isSearchable: false }}
          width="220px"
        />

        <FormInput
          debounced
          isError={isExperienceDescriptionError}
          label="Give a short description of the task for the students"
          maxLength={126}
          name="experienceDescription"
          noError
          placeholder="Type here..."
          styles={{ mb: 20, mt: 20 }}
        />

        <ErrorsContainer>{validationError}</ErrorsContainer>

        <Flex justifyContent="center" mt={20} width={1}>
          <SubmitButton mr={30} width="160px" onClick={handleSubmit}>
            Preview
          </SubmitButton>
          <SubmitButton
            gray
            width="98px"
            onClick={e => {
              e.preventDefault()
              form.reset()
            }}
          >
            Cancel
          </SubmitButton>
        </Flex>
      </StyledForm>
    )
  }

  render() {
    const {
      initialValues,
      isShowPreview,
      isCreating,
      isPublished,
      isPublishError,
    } = this.state

    return (
      <Background flexWrap="wrap">
        <Head description="Create Lectorium" title="Create Lectorium" />

        {isShowPreview ? (
          <Preview
            formData={transformToPreview(initialValues)}
            isCreating={isCreating}
            isPublishError={isPublishError}
            isPublished={isPublished}
            onBackClick={this.handleTogglePreview}
            onPublish={this.handlePublish}
          />
        ) : (
          <Container>
            <Flex width={1}>
              <Flex alignContent="flex-start" flexGrow={1} flexWrap="wrap">
                <Title>Upload Your Video Lesson for Students</Title>
                <SubText>
                  It is easy and fast! If you have any questions, go to FAQ or
                  contact support.
                </SubText>
                <Flex flexWrap="wrap" mt="20px" width={1}>
                  {map(STEPS, (step, index) => (
                    <Step key={index} mb={15}>
                      <Icon
                        icon={step.icon}
                        size={22}
                        wrapperStyles={{ mr: '10px' }}
                      />
                      <InnerHTML html={step.text} />
                    </Step>
                  ))}
                </Flex>
              </Flex>
              <Flex flexShrink={0}>
                <LectoriumLogo />
              </Flex>
            </Flex>

            <Flex width={1}>
              <Form
                initialValues={initialValues}
                mutators={{ setFieldTouched, ...arrayMutators }}
                render={this.renderForm}
                validate={this.validate}
                onSubmit={this.handleFormSubmit}
              />
            </Flex>
          </Container>
        )}
        <Footer />
      </Background>
    )
  }
}

export default CreateLectorium
