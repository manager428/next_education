import React, { useState } from 'react'
import PropTypes from 'prop-types'

import get from 'lodash/get'
import map from 'lodash/map'

import { Checkbox, Flex } from 'Components/UI'

import {
  Answer,
  Button,
  Description,
  MultipleAnswer,
  QuestionContainer,
  SubmitMessage,
  Title,
} from 'Components/Blocks/Entities/Lectorium/LectoriumExplore/Quiz/styles'

import { QUIZ_TYPES } from 'Constants/lectorium'

import { useScopedI18n } from 'Services/I18n'

const Question = ({
  title,
  type,
  answers,
  onSubmit,
  onNext,
  isSubmitted,
  isCorrectAnswered,
  questionId,
}) => {
  const s = useScopedI18n('lectorium.view')
  const [selectedAnswer, setSelectedAnswer] = useState({})

  const handleSelectAnswer = answer => {
    if (isSubmitted) return

    if (type === QUIZ_TYPES.multipleChoice) {
      const answerKey = get(Object.keys(answer), [0])
      const updatedAnswers = { ...selectedAnswer, ...answer }

      if (selectedAnswer[answerKey]) {
        // Remove existing key
        delete updatedAnswers[answerKey]

        setSelectedAnswer(updatedAnswers)
      } else {
        setSelectedAnswer(updatedAnswers)
      }
    } else {
      setSelectedAnswer(answer)
    }
  }

  const handleAnswerSubmit = e => {
    e.preventDefault()

    onSubmit(questionId, selectedAnswer)
  }

  const handleNext = () => {
    onNext()
    setSelectedAnswer({})
  }

  const renderTitle = () => {
    switch (type) {
      case QUIZ_TYPES.singleChoice: {
        return (
          <>
            <Title>{title}</Title>
            <Description>{s('quizOneAnswer')}</Description>
          </>
        )
      }
      case QUIZ_TYPES.multipleChoice: {
        return (
          <>
            <Title>{title}</Title>
            <Description>{s('quizSomeAnswers')}</Description>
          </>
        )
      }
      case QUIZ_TYPES.trueFalse: {
        return (
          <>
            <Title>{title}</Title>
            <Description>{s('quizAgree')}</Description>
          </>
        )
      }
      default:
        return null
    }
  }

  const renderAnswers = () =>
    map(answers, (answer, index) => {
      const answerText = get(answer, 'answer', '')

      const isHighlightIncorrect =
        isSubmitted && get(selectedAnswer[index], 'correct.value') === 'false'

      switch (type) {
        case QUIZ_TYPES.singleChoice:
        case QUIZ_TYPES.trueFalse: {
          return (
            <Answer
              key={index}
              mb={20}
              orange={isHighlightIncorrect}
              selected={selectedAnswer[index]}
              onClick={() => handleSelectAnswer({ [index]: answer })}
            >
              {answerText}
            </Answer>
          )
        }
        case QUIZ_TYPES.multipleChoice: {
          const selected = !!selectedAnswer[index]

          return (
            <MultipleAnswer
              key={index}
              mb={20}
              onClick={() => handleSelectAnswer({ [index]: answer })}
            >
              <Checkbox
                checked={selected}
                color="#49CEB1"
                id={`checkbox-${index}`}
                size="big"
                value={false}
              />
              <Answer
                key={index}
                ml="10px"
                orange={isHighlightIncorrect}
                selected={selected}
              >
                {answerText}
              </Answer>
            </MultipleAnswer>
          )
        }

        default: {
          return null
        }
      }
    })

  return (
    <QuestionContainer mt={30}>
      <Flex flexWrap="wrap" mb={20} width={1}>
        {renderTitle()}
      </Flex>

      <Flex flexWrap="wrap" width={1}>
        {renderAnswers()}
      </Flex>

      <Flex width={1}>
        <Button gray mr={40} width={98} onClick={handleNext}>
          Skip
        </Button>
        {!isSubmitted ? (
          <Button width={142} onClick={handleAnswerSubmit}>
            Submit
          </Button>
        ) : (
          <Button width={142} onClick={handleNext}>
            Next
          </Button>
        )}

        {isSubmitted && (
          <SubmitMessage correct={isCorrectAnswered} ml={40}>
            {isCorrectAnswered ? s('quizCorrect') : s('quizInCorrect')}
          </SubmitMessage>
        )}
      </Flex>
    </QuestionContainer>
  )
}

Question.propTypes = {
  answers: PropTypes.array.isRequired,
  isCorrectAnswered: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
  questionId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onNext: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default Question
