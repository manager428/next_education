import React, { useEffect } from 'react'

import get from 'lodash/get'
import map from 'lodash/map'

import Question from './Question'
import { List, QuestionListContainer, QuestionListTitle } from './styles'

type Props = {
  category: string
  questions: any[]
  openedAnswerId?: string
  role: string
}

const QuestionList: React.FC<Props> = ({
  category,
  questions,
  openedAnswerId = '0',
  role,
}) => {
  useEffect(() => {
    if (openedAnswerId) {
      setTimeout(() => {
        const elem = document.getElementById(openedAnswerId)
        if (elem) elem.scrollIntoView()
      }, 500)
    }
  }, [openedAnswerId])

  const renderQuestions = () => {
    if (questions?.length === 0) return 'Oops, no questions yet!'

    return map(questions, question => (
      <Question
        answer={question.description}
        id={question.id}
        key={question.id}
        opened={+openedAnswerId === question.id}
        role={role}
        title={question.title}
        withFullInstructions={get(question, 'details_count') > 0}
      />
    ))
  }
  return (
    <QuestionListContainer>
      <QuestionListTitle>{category}</QuestionListTitle>
      <List>{renderQuestions()}</List>
    </QuestionListContainer>
  )
}

export default QuestionList
