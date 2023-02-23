import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Line } from 'rc-progress'

import filter from 'lodash/filter'
import get from 'lodash/get'
import includes from 'lodash/includes'
import isEqual from 'lodash/isEqual'
import map from 'lodash/map'
import reduce from 'lodash/reduce'
import values from 'lodash/values'

import { SignIn } from 'Components/Blocks/Popups'

import { QUIZ_TYPES } from 'Constants/lectorium'

import Question from './Question'
import RepeatQuiz from './RepeatQuiz'
import { Container, Header } from './styles'

const Quiz = ({ quizzes, finished, isLogged, onFinish }) => {
  const [quizzesLoop, setQuizzesLoop] = useState(quizzes)
  const [correctAnswers, setCorrectAnswers] = useState([])
  const [isLastAnswerCorrect, setLastAnswerCorrect] = useState(false)
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [submittedQuestion, setSubmittedQuestion] = useState(false)
  const [isFinished, setFinished] = useState(finished)
  const [isShowSignIn, setShowSignIn] = useState(false)

  const handleAnswerSubmit = (questionId, answer) => {
    if (!isLogged) {
      setShowSignIn(true)

      return
    }

    let isCorrectAnswer = false
    const currentQuestion = get(quizzesLoop, [activeQuestion])
    const questionType = get(currentQuestion, 'quizType')

    setSubmittedQuestion(true)

    switch (questionType) {
      case QUIZ_TYPES.singleChoice:
      case QUIZ_TYPES.trueFalse: {
        isCorrectAnswer =
          get(values(answer), [0, 'correct', 'value']) === 'true'

        break
      }
      case QUIZ_TYPES.multipleChoice: {
        const correctQuestionAnswersIds = reduce(
          get(currentQuestion, 'answers'),
          (acc, item, index) => {
            if (get(item, 'correct.value') === 'true') {
              acc.push(index)
            }

            return acc
          },
          [],
        )

        isCorrectAnswer = isEqual(
          correctQuestionAnswersIds,
          map(Object.keys(answer), it => +it),
        )

        break
      }

      default:
        break
    }

    if (isCorrectAnswer) {
      setLastAnswerCorrect(true)
      setCorrectAnswers({
        ...correctAnswers,
        [questionId]: true,
      })
    } else {
      setLastAnswerCorrect(false)
      setCorrectAnswers({
        ...correctAnswers,
        [questionId]: false,
      })
    }
  }

  const handleNextQuestion = () => {
    const answeredQuestionsIds = reduce(
      correctAnswers,
      (acc, item, index) => {
        if (item) {
          acc.push(+index)
        }

        return acc
      },
      [],
    )
    const updatedQuizzes = filter(
      quizzes,
      quizz => !includes(answeredQuestionsIds, quizz.id),
    )

    const nextQuestionIndex = isLastAnswerCorrect
      ? activeQuestion
      : activeQuestion + 1

    setSubmittedQuestion(false)
    setQuizzesLoop(updatedQuizzes)

    if (updatedQuizzes[nextQuestionIndex]) {
      setActiveQuestion(nextQuestionIndex)
    } else {
      setActiveQuestion(0)
    }

    if (updatedQuizzes.length === 0) {
      setFinished(true)
      onFinish()
    }
  }

  const handleRepeat = () => {
    setFinished(false)
    setCorrectAnswers([])
    setActiveQuestion(0)
    setQuizzesLoop([...quizzes])
  }

  const handleCloseSignIn = () => {
    setShowSignIn(false)
  }

  const renderQuestion = () => {
    const questionData = quizzesLoop[activeQuestion]
    const questionId = get(questionData, 'id')

    return (
      <Question
        answers={get(questionData, 'answers', [])}
        isCorrectAnswered={!!correctAnswers[questionId]}
        isSubmitted={submittedQuestion}
        questionId={questionId}
        title={get(questionData, 'question', '')}
        type={get(questionData, 'quizType')}
        onNext={handleNextQuestion}
        onSubmit={handleAnswerSubmit}
      />
    )
  }

  const correctAnswersAmount = filter(correctAnswers, answ => !!answ).length
  const progressPercent = Math.floor(
    (correctAnswersAmount / quizzes.length) * 100,
  )

  return (
    <Container>
      {isFinished ? (
        <RepeatQuiz onRepeat={handleRepeat} />
      ) : (
        <>
          <Header>
            <span>QUIZ</span>
            <span>
              {correctAnswersAmount}/{quizzes.length}
            </span>
            <Line
              className="progress-line"
              percent={progressPercent}
              strokeColor="#6E46FF"
              strokeWidth="1"
              style={{
                height: '10px',
              }}
              trailColor="#D3DAE8"
            />
          </Header>

          {isShowSignIn && (
            <SignIn
              bottom="10px"
              isOpen
              left="190px"
              onClose={handleCloseSignIn}
            />
          )}

          {renderQuestion()}
        </>
      )}
    </Container>
  )
}

Quiz.defaultProps = {
  finished: false,
  isLogged: true,
  onFinish: () => null,
}

Quiz.propTypes = {
  finished: PropTypes.bool,
  isLogged: PropTypes.bool,
  quizzes: PropTypes.array.isRequired,
  onFinish: PropTypes.func,
}

export default Quiz
