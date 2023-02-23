// eslint-disable-next-line import/prefer-default-export
import validate from 'validate.js'

import forEach from 'lodash/forEach'
import get from 'lodash/get'
import reduce from 'lodash/reduce'

import { QUIZ_TYPES } from 'Constants/lectorium'

import _ from 'Services/I18n'

export const presenceConstraint = (field = 'email', presence = true) => ({
  [field]: {
    presence: {
      presence,
      message: `^${_('error.cantBeBlank')}`,
    },
  },
})

export const presenceUrlConstraint = (field = 'url', url = true) => ({
  [field]: {
    presence: true,
    url,
  },
})

export const passwordConfirmationConstraint = {
  passwordConfirmation: {
    presence: true,
    equality: {
      attribute: 'password',
      message: 'does not match password',
    },
  },
}

export const equalPasswordConstraint = field => ({
  [field]: {
    presence: true,
    equality: {
      attribute: 'newPassword',
      message: 'does not match new password',
    },
  },
})

export const termsConstraint = {
  terms: {
    presence: {
      message: 'should be accepted',
    },
    inclusion: {
      within: [true],
      message: 'should be accepted',
    },
  },
}

export const selectConstraint = (field, minimum = 1) => ({
  [field]: {
    presence: minimum > 0,
    length: { minimum, message: `should be selected` },
  },
})

export const emailConstraint = field => ({
  [field]: {
    presence: true,
    email: true,
  },
})

export const presenceWithLengthConstraint = (field, minimum = 1) => ({
  [field]: {
    presence: true,
    length: { minimum, message: `should be selected` },
  },
})

export const quizzesCustomValidation = (errors, values) => {
  const currentErrors = { ...errors }
  const quizzes = get(values, 'quizzes', {})

  const quizzesErrors = reduce(
    quizzes,
    (acc, value, index) => {
      const answers = get(value, 'answers')
      const question = get(value, 'question')
      const type = get(value, 'quizType.value')

      const questionValidation = validate(
        { question },
        {
          ...presenceWithLengthConstraint('question'),
        },
      )

      if (questionValidation)
        acc.quizzes[index] = {
          ...questionValidation,
        }

      forEach(answers, (item, letter) => {
        const answer = get(item, 'answer')

        let answerValidation = validate(
          { answer },
          {
            ...presenceWithLengthConstraint('answer'),
          },
        )

        if (
          type === QUIZ_TYPES.trueFalse &&
          (letter === 'C' || letter === 'D')
        ) {
          // We don't need to validate c,d answers for true / false question
          answerValidation = false
        }

        if (answerValidation) {
          acc.quizzes[index] = {
            ...acc.quizzes[index],
            [letter]: answerValidation,
          }
        }
      })

      return acc
    },
    {
      quizzes: [],
    },
  )

  if (quizzes.length > 0) {
    return { ...currentErrors, ...quizzesErrors }
  }

  delete currentErrors.quizzes

  return currentErrors
}

export const newWordsCustomValidation = (errors, values) => {
  const newWords = get(values, 'newWords', {})
  const currentErrors = { ...errors }

  const newWordsErrors = reduce(
    newWords,
    (acc, value, index) => {
      const word = get(value, 'word')
      const description = get(value, 'description')

      const wordValidation = validate(
        { word },
        {
          ...presenceWithLengthConstraint('word'),
        },
      )

      const descriptionValidation = validate(
        { description },
        {
          ...presenceWithLengthConstraint('description'),
        },
      )

      if (wordValidation)
        acc.newWords[index] = {
          ...wordValidation,
        }

      if (descriptionValidation) {
        acc.newWords[index] = {
          ...acc.newWords[index],
          ...descriptionValidation,
        }
      }

      return acc
    },
    {
      newWords: [],
    },
  )

  if (newWords.length > 0) {
    return { ...currentErrors, ...newWordsErrors }
  }

  delete currentErrors.newWords

  return currentErrors
}
