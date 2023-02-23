/* eslint-disable camelcase */

import { format } from 'date-fns'

import filter from 'lodash/filter'
import get from 'lodash/get'
import map from 'lodash/map'

import { ENGLISH_LEVEL_OPTIONS } from 'Constants/ids'
import { ACTIVITY_TYPES } from 'Constants/lectorium'

const getVideoUrl = formData => {
  const uploadType = get(formData, 'uploadType.value')

  switch (uploadType) {
    case 'uploadFile':
      return get(formData, 'videoUrl')
    case 'shareUrl':
      return get(formData, 'videoDirectUrl')
    case 'youtubeEmbed':
      return get(formData, 'youtubeEmbed')

    default:
      return get(formData, 'videoUrl')
  }
}

const getReadingDurationByLevel = (level, wordsCount) => {
  let readingDivider = 0

  switch (level) {
    case ENGLISH_LEVEL_OPTIONS.beginner.value:
      readingDivider = 50
      break
    case ENGLISH_LEVEL_OPTIONS.intermediate.value:
      readingDivider = 100
      break
    case ENGLISH_LEVEL_OPTIONS.advanced.value:
      readingDivider = 150
      break

    default:
      readingDivider = 50
  }

  return `${Math.ceil(wordsCount / readingDivider)} min`
}

export const transformToPreview = formData => {
  const englishLevel = get(formData, 'englishLevel.value', {})
  const readingDuration = getReadingDurationByLevel(
    englishLevel,
    get(formData, 'description', '').length,
  )

  return {
    experienceBlock: {
      experienceType: get(formData, 'shareExperience.value', ''),
      experienceTitle: get(formData, 'experienceDescription', ''),
    },
    videoBlock: {
      previewUrl: URL.createObjectURL(get(formData, 'videoPreview')),
    },
    progressBlock: {
      activity: get(formData, 'activity.value', ''),
      videoDuration: `${get(formData, 'duration.value', '')} min`,
      quizzDuration: `${get(formData, 'quizzes', []).length} min`,
      readingDuration,
      newWordsDuration: `${get(formData, 'newWords', []).length} min`,
    },
    infoBlock: {
      category: get(formData, 'category.value', ''),
      date: format(new Date(), 'dd MMM yyyy'),
      duration: `${get(formData, 'duration.value', '')} min`,
      level: get(formData, 'englishLevel.label', ''),
    },
    descriptionBlock: {
      description: get(formData, 'description', ''),
    },
    activityBlock: {
      activityType: get(formData, 'activity.value', ''),
      data:
        get(formData, 'activity.value', '') === ACTIVITY_TYPES.quiz
          ? map(get(formData, 'quizzes', []), (it, index) => ({
              ...it,
              id: index + 1,
              quizType: get(it, 'quizType.value'),
              answers: filter(get(it, 'answers'), answer => !!answer.answer),
            }))
          : map(get(formData, 'newWords', []), (it, index) => ({
              ...it,
              id: index + 1,
            })),
    },
  }
}

export const transformToCreateRequest = formData => {
  const videoUrl = getVideoUrl(formData)

  return {
    title: get(formData, 'videoTitle'),
    description: get(formData, 'description'),
    preview_url: get(formData, 'videoPreview'),
    video_url: videoUrl,
    privacy: formData.videoPrivacy,
    category: get(formData, 'category.value'),
    duration: get(formData, 'duration.value'),
    english_level: get(formData, 'englishLevel.value'),
    uploadType: get(formData, 'uploadType.value'),
    share_experience: get(formData, 'shareExperience.value'),
    share_experience_title: get(formData, 'experienceDescription'),
    activity_type: get(formData, 'activity.value'),
    quiz: map(get(formData, 'quizzes', []), quizz => {
      const answers = map(get(quizz, 'answers'), answer => ({
        title: answer.answer,
        right_answer: answer.correct.value === 'true' ? 1 : 0,
      }))

      return {
        title: get(quizz, 'question'),
        quiz_type: get(quizz, 'quizType.value'),
        answers: filter(answers, answer => !!answer.title),
      }
    }),
    words: map(get(formData, 'newWords', []), word => ({
      title: get(word, 'word'),
      description: get(word, 'description'),
    })),
  }
}

export const transformToQuizzesBlock = quizzes =>
  map(quizzes, quizz => ({
    question: get(quizz, 'title', ''),
    id: get(quizz, 'id'),
    quizType: get(quizz, 'quiz_type'),
    answers: map(get(quizz, 'quiz_variants'), answer => ({
      answer: get(answer, 'title'),
      correct: {
        value: get(answer, 'right_answer') ? 'true' : 'false',
      },
    })),
  }))

export const transformToWordsBlock = words =>
  map(words, word => ({
    id: get(word, 'id'),
    word: get(word, 'title'),
    description: get(word, 'description'),
  }))
