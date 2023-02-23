import React, { PureComponent } from 'react'
import { FieldArray } from 'react-final-form-arrays'
import PropTypes from 'prop-types'

import every from 'lodash/every'
import forEach from 'lodash/forEach'
import get from 'lodash/get'
import map from 'lodash/map'

import { deleteIconGlyph } from 'Assets/svg/common'
import { lectoriumAddQuestionGlyph } from 'Assets/svg/lectorium'

import { Flex } from 'Components/UI'
import Icon from 'Components/UI/Icon'

import {
  DEFAULT_ANSWERS,
  DEFAULT_QUIZ,
  DEFAULT_QUIZ_TRUE_FALSE,
  QUIZ_TYPES,
  TRUE_FALSE_ANSWERS,
} from 'Constants/lectorium'

import {
  AnswerInput,
  Container,
  Letter,
  QuizContainer,
  QuizDelete,
  QuizzAdd,
  Select,
  Title,
} from './styles'

import { FormInput } from '../styles'

class Quiz extends PureComponent {
  handleChangeQuestionAnswer = (fields, value, name, fieldIndex, letter) => {
    const { values } = this.props

    const fieldValues = get(values, name)
    const quizType = get(fieldValues, 'quizType.value')

    const updatedQuestions = {}

    const mergedAnswers = {
      ...fieldValues.answers,
      [letter]: { correct: value },
    }

    if (
      every(mergedAnswers, answer => answer.correct.value === 'false') &&
      quizType !== QUIZ_TYPES.trueFalse
    ) {
      fields.update(fieldIndex, {
        ...fieldValues,
        answers: {
          ...mergedAnswers,
          [letter]: { correct: { label: 'Right Answer', value: 'true' } },
        },
      })

      return
    }

    if (quizType === QUIZ_TYPES.singleChoice) {
      forEach(DEFAULT_ANSWERS, item => {
        const answer = get(fieldValues, ['answers', item, 'answer'])

        // We should have only 1 correct answer
        if (get(value, 'value') === 'true') {
          if (item === letter) {
            updatedQuestions[item] = {
              answer,
              correct: {
                ...value,
              },
            }
          } else {
            updatedQuestions[item] = {
              answer,
              correct: {
                value: 'false',
                label: 'Wrong Answer',
              },
            }
          }
        } else if (item === letter) {
          updatedQuestions[item] = {
            answer,
            correct: {
              ...value,
            },
          }
        } else {
          updatedQuestions[item] = {
            ...get(fieldValues, ['answers', item]),
          }
        }
      })
    }

    if (quizType === QUIZ_TYPES.multipleChoice) {
      forEach(DEFAULT_ANSWERS, item => {
        const answer = get(fieldValues, ['answers', item, 'answer'])

        if (item === letter) {
          updatedQuestions[item] = {
            answer,
            correct: {
              ...value,
            },
          }
        } else {
          updatedQuestions[item] = {
            ...get(fieldValues, ['answers', item]),
          }
        }
      })
    }

    if (quizType === QUIZ_TYPES.trueFalse) {
      forEach(DEFAULT_ANSWERS, item => {
        const answer = get(fieldValues, ['answers', item, 'answer'])
        if (item === letter) {
          updatedQuestions[item] = {
            answer,
            correct: {
              ...value,
            },
          }
        } else {
          updatedQuestions[item] = {
            answer,
            correct:
              get(value, 'value') === 'true'
                ? {
                    label: 'Wrong Answer',
                    value: 'false',
                  }
                : {
                    label: 'Right Answer',
                    value: 'true',
                  },
          }
        }
      })
    }

    const updatedValues = {
      ...fieldValues,
      answers: {
        ...updatedQuestions,
      },
    }

    fields.update(fieldIndex, updatedValues)
  }

  handleChangeQuizType = (index, fields) => value => {
    const updatedField = {
      quizType: value,
      answers:
        get(value, 'value') === QUIZ_TYPES.trueFalse
          ? {
              ...DEFAULT_QUIZ_TRUE_FALSE.answers,
            }
          : {
              ...DEFAULT_QUIZ.answers,
            },
    }

    fields.update(index, updatedField)
  }

  renderAnswers = (name, fields, fieldIndex, questionErrors, touched) => {
    const { values } = this.props
    const fieldValues = get(values, name)
    const quizType = get(fieldValues, 'quizType.value')

    return (
      <Flex flexWrap="wrap" mt={20} width={1}>
        {quizType === QUIZ_TYPES.trueFalse
          ? map(TRUE_FALSE_ANSWERS, letter => {
              const selectValue = get(fieldValues, [
                'answers',
                letter,
                'correct',
              ])
              const isCorrectAnswerType = get(selectValue, ['value']) === 'true'

              return (
                <Flex alignItems="center" key={letter} mb={20} width={1}>
                  <Letter>{letter}</Letter>
                  <Select
                    name={`${name}.answers[${letter}].correct`}
                    options={[
                      {
                        value: 'true',
                        label: 'Right Answer',
                      },
                      {
                        value: 'false',
                        label: 'Wrong Answer',
                      },
                    ]}
                    selectProps={{
                      isSearchable: false,
                      value: selectValue,
                      onChange: value =>
                        this.handleChangeQuestionAnswer(
                          fields,
                          value,
                          name,
                          fieldIndex,
                          letter,
                        ),
                    }}
                    width="168px"
                  />

                  <AnswerInput
                    debounced
                    defaultValue={letter === 'A' ? 'True' : 'False'}
                    disabled
                    initialValue={letter === 'A' ? 'True' : 'False'}
                    isCorrect={isCorrectAnswerType}
                    name={`${name}.answers[${letter}].answer`}
                    styles={{ ml: 30 }}
                  />
                </Flex>
              )
            })
          : map(DEFAULT_ANSWERS, letter => {
              const selectValue = get(fieldValues, [
                'answers',
                letter,
                'correct',
              ])

              const isCorrectAnswerType = get(selectValue, 'value') === 'true'
              const isAnswerError =
                get(questionErrors, [letter, 'answer'], []).length > 0 &&
                get(touched, `${name}.answers[${letter}].answer`)

              return (
                <Flex alignItems="center" key={name + letter} mb={20} width={1}>
                  <Letter>{letter}</Letter>
                  <Select
                    name={`${name}.answers[${letter}].correct`}
                    options={[
                      {
                        value: 'true',
                        label: 'Right Answer',
                      },
                      {
                        value: 'false',
                        label: 'Wrong Answer',
                      },
                    ]}
                    selectProps={{
                      initialValue: { value: 'false', label: 'Wrong Answer' },
                      isSearchable: false,
                      value: selectValue,
                      onChange: value =>
                        this.handleChangeQuestionAnswer(
                          fields,
                          value,
                          name,
                          fieldIndex,
                          letter,
                        ),
                    }}
                    width="168px"
                  />

                  <AnswerInput
                    debounced
                    initialValue=""
                    isCorrect={isCorrectAnswerType}
                    isError={isAnswerError}
                    name={`${name}.answers[${letter}].answer`}
                    placeholder="Type answer here..."
                    styles={{ ml: 30 }}
                  />
                </Flex>
              )
            })}
      </Flex>
    )
  }

  render() {
    const { errors, touched } = this.props

    return (
      <Container>
        <FieldArray name="quizzes">
          {({ fields }) => (
            <>
              {fields.map((name, index) => {
                const questionErrors = get(errors, ['quizzes', index])
                const isQuestionError =
                  get(questionErrors, 'question', []).length > 0 &&
                  get(touched, `quizzes[${index}].question`)

                return (
                  <QuizContainer key={name} width={1}>
                    <Title>Question {index + 1}</Title>

                    <Flex justifyContent="space-between" mt={20} width={1}>
                      <Select
                        name={`${name}.quizType`}
                        options={[
                          {
                            label: 'Single Choice',
                            value: QUIZ_TYPES.singleChoice,
                          },
                          {
                            label: 'Multiple Choice',
                            value: QUIZ_TYPES.multipleChoice,
                          },
                          {
                            label: 'True / False',
                            value: QUIZ_TYPES.trueFalse,
                          },
                        ]}
                        selectProps={{
                          isSearchable: false,
                          onChange: this.handleChangeQuizType(index, fields),
                        }}
                        width="220px"
                      />

                      <QuizDelete
                        onClick={e => {
                          e.preventDefault()
                          fields.remove(index)
                        }}
                      >
                        <Icon
                          fill="#FFA08C"
                          height={16}
                          icon={deleteIconGlyph}
                          stroke={123}
                          width={16}
                          wrapperStyles={{ mr: '8px' }}
                        />
                        Delete Question
                      </QuizDelete>
                    </Flex>
                    <FormInput
                      debounced
                      initialValue=""
                      isError={isQuestionError}
                      label="Write Question"
                      name={`${name}.question`}
                      noError
                      placeholder="Write here..."
                      styles={{ mt: '20px' }}
                    />
                    {this.renderAnswers(
                      name,
                      fields,
                      index,
                      questionErrors,
                      touched,
                    )}
                  </QuizContainer>
                )
              })}
              <Flex mt={30} width={1}>
                <QuizzAdd
                  onClick={e => {
                    e.preventDefault()

                    fields.push(DEFAULT_QUIZ)
                  }}
                >
                  <Icon
                    height={16}
                    icon={lectoriumAddQuestionGlyph}
                    width={16}
                    wrapperStyles={{ mr: '8px' }}
                  />{' '}
                  add another Question
                </QuizzAdd>
              </Flex>
            </>
          )}
        </FieldArray>
      </Container>
    )
  }
}

Quiz.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
}

export default Quiz
