import React, { useEffect, useState } from 'react'
import useClipboard from 'react-use-clipboard'

import InnerHTML from 'dangerously-set-html-content'
import Link from 'next/link'

import { Flex } from 'Components/UI'

import { PUBLIC_PATHS } from 'Constants/paths'

import { isServer } from 'Utils/common'

import {
  Answer,
  AnswerContent,
  Button,
  QuestionContainer,
  QuestionLinkIcon,
  QuestionOpenIcon,
  QuestionTitle,
} from './styles'

type Props = {
  opened: boolean
  answer: string
  id: string
  withFullInstructions: boolean
  title: string
  role: string
}

const Question: React.FC<Props> = ({
  opened,
  answer,
  id,
  withFullInstructions,
  title,
  role,
}) => {
  const link = !isServer
    ? `${window.location.origin}${window.location.pathname}?openId=${id}`
    : ''

  const [isOpen, setOpen] = useState(opened)
  const [, setCopied] = useClipboard(link)

  useEffect(() => {
    setOpen(opened)
  }, [opened])

  return (
    <QuestionContainer id={id}>
      <Flex alignItems="center" width={1}>
        <QuestionOpenIcon isOpen={isOpen} onClick={() => setOpen(!isOpen)} />
        <QuestionTitle onClick={() => setOpen(!isOpen)}>{title}</QuestionTitle>
        <QuestionLinkIcon onClick={() => setCopied()} />
      </Flex>
      {isOpen && (
        <Answer>
          <AnswerContent>
            <InnerHTML html={answer} />
            {withFullInstructions && (
              <Flex mt={28} width={1}>
                <Link href={PUBLIC_PATHS.FAQ_DETAILED(role, +id)} passHref>
                  <Button>View Full Instructions</Button>
                </Link>
              </Flex>
            )}
          </AnswerContent>
        </Answer>
      )}
    </QuestionContainer>
  )
}

export default Question
