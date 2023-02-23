import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

import get from 'lodash/get'

import { Flex } from 'Components/UI'
import Loader from 'Components/UI/Loader'

import { CommentForm } from 'Components/Blocks/Comments'
import {
  Info,
  Instructions,
  NewWords,
  Progress,
  Quiz,
  VideoBlock,
} from 'Components/Blocks/Entities/Lectorium/LectoriumExplore'
import {
  PostForm,
  VideoForm,
} from 'Components/Blocks/Entities/Lectorium/LectoriumExplore/Forms'

import { ACTIVITY_TYPES, SHARE_EXPERIENCE_TYPES } from 'Constants/lectorium'
import { TEACHER_PATHS } from 'Constants/paths'

import {
  Button,
  Container,
  Description,
  LastStep,
  LoaderWrapper,
  Title,
} from './styles'

import { ErrorsContainer, SubmitButton } from '../styles'

const Preview = ({
  onBackClick,
  onPublish,
  formData,
  isCreating,
  isPublished,
  isPublishError,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const renderActivity = () => {
    const selectedActivity = get(formData, 'activityBlock.activityType')
    const data = get(formData, 'activityBlock.data', [])

    switch (selectedActivity) {
      case ACTIVITY_TYPES.quiz:
        return <Quiz quizzes={data} />
      case ACTIVITY_TYPES.newWords: {
        return <NewWords data={data} />
      }
      default:
        return null
    }
  }

  const renderExperience = () => {
    const type = get(formData, 'experienceBlock.experienceType')
    const title = get(formData, 'experienceBlock.experienceTitle')

    switch (type) {
      case SHARE_EXPERIENCE_TYPES.STUDENT_POSTS:
        return (
          <Flex mt={20}>
            <PostForm
              error=""
              formTitle={title}
              isLoggedUser={false}
              withSignInPopup={false}
              onSuccess={() => null}
            />
          </Flex>
        )
      case SHARE_EXPERIENCE_TYPES.STUDENT_VIDEOS:
        return (
          <Flex mt={20}>
            <VideoForm
              error=""
              formTitle={title}
              isLoggedUser={false}
              withSignInPopup={false}
              onSuccess={() => null}
            />
          </Flex>
        )
      case SHARE_EXPERIENCE_TYPES.COMMENTS:
        return (
          <Flex alignItems="flex-start" minWidth="unset" mt={20}>
            <Flex flexWrap="wrap" maxWidth={600}>
              <CommentForm
                formTitle={title}
                isLoggedUser={false}
                withSignInPopup={false}
                onSuccess={() => null}
              />
            </Flex>
          </Flex>
        )
      default:
        return null
    }
  }

  const previewUrl = get(formData, 'videoBlock.previewUrl', '')
  const selectedActivity = get(formData, 'progressBlock.activity')
  const videoDuration = get(formData, 'progressBlock.videoDuration')
  const quizzDuration = get(formData, 'progressBlock.quizzDuration')
  const readingDuration = get(formData, 'progressBlock.readingDuration')
  const newWordsDuration = get(formData, 'progressBlock.newWordsDuration')
  const category = get(formData, 'infoBlock.category')
  const date = get(formData, 'infoBlock.date')
  const videoLevel = get(formData, 'infoBlock.level')
  const description = get(formData, 'descriptionBlock.description')

  return (
    <Container>
      <LastStep>
        {isPublished ? (
          <>
            <Title>Your video has been sent for moderation</Title>
            <Description>Usually it takes less than 24 hours</Description>
          </>
        ) : (
          <>
            <Title>Last Step: Preview</Title>
            <Description>
              Check all the information and if everything right, post the video.
              <br />
              If you decide to change something, then you can return to editing.
            </Description>
          </>
        )}

        <Flex flexWrap="wrap" justifyContent="center" mt={20} width={1}>
          {isPublished ? (
            <>
              <Link href={TEACHER_PATHS.MANAGE} passHref>
                <Button gray width="160px">
                  Go to your Profile
                </Button>
              </Link>
            </>
          ) : (
            <>
              <SubmitButton mr={30} width="160px" onClick={onPublish}>
                Publish Video
              </SubmitButton>
              <SubmitButton gray width="160px" onClick={onBackClick}>
                Back
              </SubmitButton>
            </>
          )}

          {isCreating && (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          )}

          {isPublishError && (
            <ErrorsContainer>
              Something going wrong, please contact with support!
            </ErrorsContainer>
          )}
        </Flex>
      </LastStep>

      <Flex flexWrap="wrap" mt={40} width={1}>
        <Flex justifyContent="space-between" width={1}>
          <VideoBlock
            isLogged={false}
            passed={false}
            previewUrl={previewUrl}
            videoUrl="someurl"
            withSignInPopup={false}
            onPlay={() => null}
          />
          <Progress
            activity={selectedActivity}
            newWordsDuration={newWordsDuration}
            progress={{}}
            quizDuration={quizzDuration}
            readingDuration={readingDuration}
            videoDuration={videoDuration}
          />
        </Flex>
        <Flex width={1}>
          <Info
            category={category}
            date={date}
            duration={videoDuration}
            isLiked={false}
            level={videoLevel}
            likesAmount={0}
            partners={[]}
            onLike={() => null}
          />
        </Flex>
        <Instructions
          description={description}
          isLogged
          passed={false}
          onRead={() => null}
        />

        {renderActivity()}
        {renderExperience()}
      </Flex>
    </Container>
  )
}

Preview.propTypes = {
  formData: PropTypes.shape({
    experienceBlock: PropTypes.shape({
      experienceType: PropTypes.string.isRequired,
      experienceTitle: PropTypes.string.isRequired,
    }),
    videoBlock: PropTypes.shape({
      previewUrl: PropTypes.string.isRequired,
    }),
    progressBlock: PropTypes.shape({
      activity: PropTypes.string.isRequired,
      videoDuration: PropTypes.string,
      quizzDuration: PropTypes.string,
      readingDuration: PropTypes.string,
      newWordsDuration: PropTypes.string,
    }),
    infoBlock: PropTypes.shape({
      category: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
    }),
    descriptionBlock: PropTypes.shape({
      description: PropTypes.string.isRequired,
    }),
    activityBlock: PropTypes.shape({
      activityType: PropTypes.string.isRequired,
      data: PropTypes.array,
    }),
  }).isRequired,
  isCreating: PropTypes.bool.isRequired,
  isPublishError: PropTypes.bool.isRequired,
  isPublished: PropTypes.bool.isRequired,
  onBackClick: PropTypes.func.isRequired,
  onPublish: PropTypes.func.isRequired,
}

export default Preview
