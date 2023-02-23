import React, { useCallback, useEffect, useState } from 'react'

import { format, parseISO } from 'date-fns'

import cloneDeep from 'lodash/cloneDeep'
import every from 'lodash/every'
import get from 'lodash/get'
import isEqual from 'lodash/isEqual'
import map from 'lodash/map'
import pick from 'lodash/pick'
import set from 'lodash/set'

import { shareGlyph } from 'Assets/svg/lectorium'

import { Flex, Icon, Loader } from 'Components/UI'

import { CommentForm } from 'Components/Blocks/Comments'
import { PrivacySelector } from 'Components/Blocks/Entities/Lectorium'
import {
  CommentsList,
  Info,
  Instructions,
  NewWords,
  PostsList,
  Progress,
  Quiz,
  RelatedVideos,
  VideoBlock,
  VideoStatistic,
} from 'Components/Blocks/Entities/Lectorium/LectoriumExplore'
import {
  PostForm,
  VideoForm,
} from 'Components/Blocks/Entities/Lectorium/LectoriumExplore/Forms'
import { LectoriumSuccessModal } from 'Components/Blocks/Entities/Lectorium/Modals'
import { PRIVACY_OPTIONS } from 'Components/Blocks/Entities/Lectorium/PrivacySelector/PrivacyRadioButtons'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'
import { ShareModal } from 'Components/Blocks/Modals'
import NotFoundBlock from 'Components/Blocks/NotFoundBlock'
import { SignIn } from 'Components/Blocks/Popups'

import {
  ACTIVITY_TYPES,
  POST_PROGRESS_TYPES,
  SHARE_EXPERIENCE_TYPES,
} from 'Constants/lectorium'
import { PRIVATE_PATHS } from 'Constants/paths'

import useMe from 'Hooks/useMe'
import useRole from 'Hooks/useRole'
import useLocationQueryParams from 'Hooks/useRouterQueryParams'
import useSwrRequest from 'Hooks/useSwrRequest'

import { lectoriumApi } from 'Services/Api/requests'
import LECTORIUM_API_PATHS from 'Services/Api/requests/lectorium/paths'
import _ from 'Services/I18n'

import { COMPLAINT_SECTIONS } from 'Utils/complaints'
import {
  transformToQuizzesBlock,
  transformToWordsBlock,
} from 'Utils/Entities/Lectorium'

import { ErrorMessage, PrivacyWrapper, ShareButton, Wrapper } from './styles'

import { Container } from '../styles'

const LectoriumExplore = ({ initialData, withLoader }) => {
  const me = useMe()

  const params = useLocationQueryParams()
  const { isTeacher, isStudent, isLoggedIn } = useRole()

  const {
    data,
    data: { post = {}, statistic = {} },
    mutate,
    error: requestError,
  } = useSwrRequest({
    url: LECTORIUM_API_PATHS.VIEW(params.id),
    options: { fallbackData: initialData },
  })

  const [replyToUser, setReplyToUser] = useState(null)
  const [error, setError] = useState(null)

  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false)
  const [isShareModalOpen, setShareModalOpen] = useState(false)
  const [directMessageTo, setDirectMessageTo] = useState(null)
  const [selectedPrivacy, setSelectedPrivacy] = useState([
    PRIVACY_OPTIONS.STUDENTS,
  ])
  const [signInModal, setSignInModal] = useState({
    isOpen: false,
    top: '0px',
    left: '0px',
  })

  useEffect(() => {
    if (post?.privacy) {
      setSelectedPrivacy(post.privacy)
    }
  }, [post])

  const getPartners = () => {
    const isSpecialProejct = get(post, 'is_special_project', false)

    const author = isSpecialProejct
      ? get(post, 'special_author_data')
      : get(post, 'author_data')
    const authorRole = get(author, 'role')
    const partners = get(post, 'partners')

    if (authorRole === 'teacher') {
      return [
        {
          name: author.full_name,
          logo: author.avatar,
          isRounded: true,
          id: 1,
          web_url: PRIVATE_PATHS.USER_PROFILE(author.id),
        },
      ]
    }

    return partners
  }

  const handleShowSuccessPopup = progress => {
    const activityType = get(post, 'activity_type')

    let progressBase = pick(progress, [
      POST_PROGRESS_TYPES.READING,
      POST_PROGRESS_TYPES.SHARE_EXPERIENCE,
      POST_PROGRESS_TYPES.VIDEO,
    ])

    switch (activityType) {
      case ACTIVITY_TYPES.quiz:
        progressBase = {
          ...progressBase,
          [POST_PROGRESS_TYPES.QUIZ]: get(progress, [POST_PROGRESS_TYPES.QUIZ]),
        }
        break
      case ACTIVITY_TYPES.newWords:
        progressBase = {
          ...progressBase,
          [POST_PROGRESS_TYPES.WORDS]: get(progress, [
            POST_PROGRESS_TYPES.WORDS,
          ]),
        }
        break
      default:
        break
    }

    if (every(progressBase, prg => prg === 'active')) {
      setSuccessModalOpen(true)
    }
  }

  const handleSetProgress = async type => {
    const id = get(params, 'id')
    const isCreatedByLoggedTeacher = get(post, 'author_data.id') === me?.id

    if (isCreatedByLoggedTeacher || !isStudent) {
      return Promise.resolve()
    }

    const updatedData = cloneDeep(data)
    set(updatedData, ['post', 'progress', [type]], 'active')

    try {
      await lectoriumApi.setProgress(id, type)

      await mutate(
        {
          data: updatedData,
        },
        false,
      )
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }

    handleShowSuccessPopup(updatedData.post.progress)

    return Promise.resolve()
  }

  const handleAddLike = async e => {
    if (!isLoggedIn) {
      setSignInModal({
        isOpen: true,
        top: `${e.pageY}px`,
        left: `${e.pageX}px`,
      })

      return
    }

    const id = get(params, 'id')

    const updatedPost = {
      ...post,
      is_liked: true,
      likes_count: post?.likes_count + 1,
    }

    try {
      await lectoriumApi.addLike(id)

      await mutate(
        {
          data: {
            ...data,
            post: {
              ...updatedPost,
            },
          },
        },
        false,
      )
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }

  const handleAddExperienceLike = async experienceId => {
    const id = get(params, 'id')

    const isCreatedByLoggedTeacher = get(post, 'author_data.id') === me?.id

    if (isCreatedByLoggedTeacher) {
      return
    }

    try {
      const updatedPost = {
        ...post,
        experience: map(post.experience, item => {
          if (item.id === experienceId) {
            return {
              ...item,
              likes_count: item.likes_count + 1,
              is_liked: true,
            }
          }
          return item
        }),
      }

      await lectoriumApi.addExperienceLike(id, experienceId)

      await mutate(
        {
          data: {
            ...data,
            post: { ...updatedPost },
          },
        },
        false,
      )
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }

  const handleCreateExperience = async values => {
    const id = get(params, 'id')

    const isPassed =
      get(post, ['progress', POST_PROGRESS_TYPES.SHARE_EXPERIENCE]) === 'active'

    try {
      setError(null)

      const type = get(post, 'share_experience')

      if (type === SHARE_EXPERIENCE_TYPES.COMMENTS) {
        await lectoriumApi.addExperience(id, {
          ...values,
          notification_user_id: directMessageTo,
        })
      } else {
        values.append('notification_user_id', directMessageTo)
        await lectoriumApi.addExperience(id, values)
      }

      if (!isPassed) {
        await handleSetProgress(POST_PROGRESS_TYPES.SHARE_EXPERIENCE)
      }

      return mutate()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
      const errorsData = map(e?.data.errors, er => er)

      setError(
        errorsData.length > 0
          ? errorsData.join(', ')
          : 'Something going wrong, please contact with support!',
      )

      // eslint-disable-next-line consistent-return
      return Promise.reject(e)
    }
  }

  const handleSetProgressActivity = activity => {
    const isCreatedByLoggedTeacher = get(post, 'author_data.id') === me?.id

    if (isCreatedByLoggedTeacher) {
      return
    }

    const isPassed =
      get(post, ['progress', POST_PROGRESS_TYPES[activity]]) === 'active'

    if (!isPassed) handleSetProgress(activity)
  }

  const handleClickReply = (userId, username) => {
    setDirectMessageTo(userId)
    setReplyToUser(`<span style="color: rgb(246,139,106);">${username}</span>,`)
  }

  const handleResetReplyTo = useCallback(() => {
    setDirectMessageTo(null)
    setReplyToUser(null)
  }, [])

  const handlePrivacyChange = async value => {
    if (isEqual(selectedPrivacy, value)) {
      return
    }

    const id = get(params, 'id')

    if (value?.length > 0) {
      try {
        await lectoriumApi.updateLectoriumPrivacy(id, value)
        mutate()
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    }
  }

  const handleOpenShareModal = () => {
    setShareModalOpen(true)
  }

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false)
  }

  const handleCloseShareModal = () => {
    setShareModalOpen(false)
  }

  const renderForm = () => {
    const type = get(post, 'share_experience')
    const shareTitle = get(post, 'share_experience_title', '')
    const posts = get(post, 'experience', [])
    const relatedVideos = get(post, 'related', [])
    const friends = get(post, 'friends', [])
    const friendsInfo = get(post, 'friendsInfo', [])

    switch (type) {
      case SHARE_EXPERIENCE_TYPES.STUDENT_POSTS:
        return (
          <PostForm
            error={error}
            formTitle={shareTitle}
            isLoggedUser={!!me?.id}
            onSuccess={handleCreateExperience}
          />
        )
      case SHARE_EXPERIENCE_TYPES.STUDENT_VIDEOS:
        return (
          <>
            <VideoForm
              error={error}
              formTitle={shareTitle}
              isLoggedUser={!!me?.id}
              onSuccess={handleCreateExperience}
            />
          </>
        )
      case SHARE_EXPERIENCE_TYPES.COMMENTS:
        return (
          <Flex alignItems="flex-start">
            <Flex flexWrap="wrap" maxWidth={600}>
              <CommentForm
                formTitle={shareTitle}
                isLoggedUser={isLoggedIn}
                isSubmitAllowed={isStudent || isTeacher}
                replyToUser={replyToUser}
                title={_('forms.comment.title')}
                onReplyReset={handleResetReplyTo}
                onSuccess={handleCreateExperience}
              />
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <CommentsList
                data={posts}
                experienceType={SHARE_EXPERIENCE_TYPES.COMMENTS}
                friends={friends}
                friendsInfo={friendsInfo}
                isLogged={!!me?.id}
                section={COMPLAINT_SECTIONS.LECTORIUM}
                onAddLike={handleAddExperienceLike}
                onReplyClick={handleClickReply}
              />
            </Flex>
            <RelatedVideos posts={relatedVideos} />
          </Flex>
        )
      default:
        return null
    }
  }

  const renderListBlock = () => {
    const type = get(post, 'share_experience')
    const posts = get(post, 'experience', [])
    const lectoriumId = get(params, 'id')

    switch (type) {
      case SHARE_EXPERIENCE_TYPES.STUDENT_POSTS:
      case SHARE_EXPERIENCE_TYPES.STUDENT_VIDEOS:
        return (
          <PostsList
            data={posts}
            isLoading={false}
            isLogged={!!me?.id}
            lectoriumId={lectoriumId}
            type={type}
            onQuery={() => null}
          />
        )
      default:
        return null
    }
  }

  const title = get(post, 'title')
  const id = get(post, 'id')
  const preview = get(post, 'preview_url', '')
  const activityType = get(post, 'activity_type', '')
  const videoUrl = get(post, 'video_url', '')
  const videoDuration = get(post, 'duration', 0)
  const readingDuration = get(post, 'duration_reading', 0)
  const quizDuration = get(post, 'duration_quiz', 0)
  const wordsDuration = get(post, 'duration_word', 0)
  const category = get(post, 'category', '')
  const level = get(post, 'english_level', '')
  const date = format(
    parseISO(get(post, 'created_at', '2099-12-19T15:28:46.493Z')),
    'dd MMM yyyy',
  )
  const description = get(post, 'description', '')
  const progress = get(post, 'progress')
  const likesAmount = get(post, 'likes_count', 0)
  const isLiked = get(post, 'is_liked', false)
  const quizzes = get(post, 'quizzes', [])
  const words = get(post, 'words', [])

  const isLogged = !!me?.id
  const partners = getPartners()
  const isCreatedByLoggedTeacher = get(post, 'author_data.id') === me?.id

  const totalLectoriumViews = get(statistic, 'total_count_views', 0)
  const totalLectorimViewsInProgress = get(statistic, 'total_in_progress', 0)
  const totalCompleted = get(statistic, 'total_completed', 0)
  const studentsInProgress = get(statistic, 'students_in_progress', 0)
  const studentsCompleted = get(statistic, 'students_completed', 0)
  const studentsNotStarted = get(statistic, 'students_not_started', 0)
  const weeklyData = get(statistic, 'weekly', {})

  return (
    <Wrapper flexWrap="wrap" pt={30} width={1}>
      <Head description={post.description} title={post.title} />

      {requestError ? (
        <NotFoundBlock />
      ) : (
        <>
          {withLoader ? (
            <Container>
              <Loader />
            </Container>
          ) : (
            <>
              {signInModal.isOpen && (
                <SignIn
                  isOpen
                  left={signInModal.left}
                  portal
                  top={signInModal.top}
                  onClose={() =>
                    setSignInModal({ isOpen: false, left: '0px', top: '0px' })
                  }
                />
              )}

              <LectoriumSuccessModal
                isOpen={isSuccessModalOpen}
                onClose={handleCloseSuccessModal}
              />

              <ShareModal
                isOpen={isShareModalOpen}
                title={title}
                onClose={handleCloseShareModal}
              />

              <Container>
                <Flex justifyContent="space-between" width={1}>
                  <VideoBlock
                    isLogged={isLogged}
                    passed={
                      get(progress, POST_PROGRESS_TYPES.VIDEO) === 'active'
                    }
                    previewUrl={preview}
                    videoUrl={videoUrl}
                    onPlay={() => handleSetProgress(POST_PROGRESS_TYPES.VIDEO)}
                  />
                  <Progress
                    activity={activityType}
                    newWordsDuration={wordsDuration}
                    progress={progress}
                    quizDuration={quizDuration}
                    readingDuration={readingDuration}
                    videoDuration={videoDuration}
                  />
                </Flex>
                <Flex width={1}>
                  <Info
                    category={category}
                    date={date}
                    duration={videoDuration}
                    isLiked={isLiked}
                    level={level}
                    likesAmount={likesAmount}
                    partners={partners}
                    onLike={handleAddLike}
                  />
                  <Flex
                    alignItems="center"
                    className="share-container"
                    flexGrow={1}
                    justifyContent="flex-end"
                  >
                    <ShareButton onClick={handleOpenShareModal}>
                      {_('buttons.share')} <Icon icon={shareGlyph} size={13} />
                    </ShareButton>
                  </Flex>
                </Flex>

                {isTeacher && isCreatedByLoggedTeacher && (
                  <>
                    <PrivacyWrapper>
                      <Flex maxWidth={390} width={1}>
                        <PrivacySelector
                          value={selectedPrivacy}
                          onSelect={handlePrivacyChange}
                        />
                      </Flex>
                    </PrivacyWrapper>
                    <VideoStatistic
                      id={id}
                      studentsCompleted={studentsCompleted}
                      studentsInProgress={studentsInProgress}
                      studentsNotStarted={studentsNotStarted}
                      title={title}
                      totalCompleted={totalCompleted}
                      totalInProgress={totalLectorimViewsInProgress}
                      totalViews={totalLectoriumViews}
                      weeklyData={weeklyData}
                    />
                  </>
                )}

                <Instructions
                  description={description}
                  isLogged={isLogged}
                  passed={
                    get(progress, POST_PROGRESS_TYPES.READING) === 'active'
                  }
                  title={title}
                  onRead={() => handleSetProgress(POST_PROGRESS_TYPES.READING)}
                />

                {activityType === ACTIVITY_TYPES.quiz && (
                  <Quiz
                    finished={
                      get(progress, [POST_PROGRESS_TYPES.QUIZ]) === 'active'
                    }
                    isLogged={isLogged}
                    quizzes={transformToQuizzesBlock(quizzes)}
                    onFinish={() =>
                      handleSetProgressActivity(POST_PROGRESS_TYPES.QUIZ)
                    }
                  />
                )}

                {activityType === ACTIVITY_TYPES.newWords && (
                  <NewWords
                    data={transformToWordsBlock(words)}
                    isFinished={
                      get(progress, [POST_PROGRESS_TYPES.WORDS]) === 'active'
                    }
                    isLogged={isLogged}
                    onFinish={() =>
                      handleSetProgressActivity(POST_PROGRESS_TYPES.WORDS)
                    }
                  />
                )}

                <Flex flexWrap="wrap" mb={20} mt={50} width={1}>
                  {renderForm()}
                  {renderListBlock()}
                </Flex>
              </Container>
            </>
          )}
        </>
      )}
      <Footer />
    </Wrapper>
  )
}

export default LectoriumExplore
