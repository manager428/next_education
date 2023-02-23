import React, { useEffect, useMemo, useRef, useState } from 'react'

import get from 'lodash/get'

import {
  DebatesLikeIcon,
  Tooltip,
  VoteButton,
} from 'Containers/Pages/Debate/styles'

import { Flex } from 'Components/UI'

import DebateVoteForm from 'Components/Blocks/Entities/Debates/Debate/DebatesVoteForm/DebateVoteForm'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'

import { useScopedI18n } from 'Services/I18n'

type Props = {
  error: string | null
  votes: number
  voteType: 'positive' | 'negative'
  isLoading: boolean
  short?: boolean
  isOpen: boolean
  isVoted: boolean
  userVoteType: 'positive' | 'negative'
  variant: 'yesTop' | 'yesBottom' | 'noTop' | 'noBottom'
  onSubmitForm: (values: any, cb: any) => void
  onOpen: () => void
  onClose: () => void
}

const DebateVoteButton: React.FC<Props> = ({
  error,
  votes,
  voteType,
  short,
  isLoading,
  isOpen,
  isVoted,
  userVoteType,
  onSubmitForm,
  onOpen,
  onClose,
}) => {
  const s = useScopedI18n('debates')
  const [isShowForm, setShowForm] = useState<boolean>(false)
  const [isShowTooltip, setShowTooltip] = useState<boolean>(false)

  const params = useRouterQueryParams()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isVoted && userVoteType !== voteType && isOpen) {
      setShowTooltip(true)

      setTimeout(() => {
        setShowTooltip(false)
      }, 3000)
      onClose()
    } else {
      setShowForm(isOpen)
    }
  }, [isOpen, isShowTooltip])

  useEffect(() => {
    if (!short) {
      const voteParam = get(params, 'vote')
      if (
        (voteParam === 'positive' && voteType === 'positive') ||
        (voteParam === 'negative' && voteType === 'negative')
      ) {
        onOpen()

        if (ref.current) {
          ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          })
        }
      }
    }
  }, [])

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault()
    onOpen()
  }

  const renderButton = useMemo(() => {
    if (short) {
      return (
        <VoteButton
          variant={voteType === 'positive' ? 'green' : 'orange'}
          width={120}
          onClick={handleClick}
        >
          {voteType === 'positive' ? (
            <>
              <DebatesLikeIcon fill="white" wrapperStyles={{ mr: '10px' }} />{' '}
              {s('yes')}
            </>
          ) : (
            <>
              <DebatesLikeIcon
                fill="white"
                variant="rotated"
                wrapperStyles={{ mr: '10px' }}
              />{' '}
              {s('no')}
            </>
          )}

          {isShowTooltip && <Tooltip>{s('view.tooltip')}</Tooltip>}
        </VoteButton>
      )
    }

    return (
      <VoteButton
        variant={voteType === 'positive' ? 'green' : 'orange'}
        width={470}
        onClick={handleClick}
      >
        {voteType === 'positive' ? (
          <>
            <DebatesLikeIcon fill="white" wrapperStyles={{ mr: '10px' }} />{' '}
            {s('yes')} -{' '}
          </>
        ) : (
          <>
            <DebatesLikeIcon
              fill="white"
              variant="rotated"
              wrapperStyles={{ mr: '10px' }}
            />{' '}
            {s('no')} -{' '}
          </>
        )}
        {`${votes} `} {s('view.votes')}
        {isShowTooltip && <Tooltip>{s('view.tooltip')}</Tooltip>}
      </VoteButton>
    )
  }, [isShowForm, votes, isOpen, isShowTooltip])

  return (
    <Flex flexWrap="wrap" width={470}>
      {renderButton}

      <Flex mt={20} ref={ref}>
        {isShowForm && (
          <DebateVoteForm
            error={error}
            isLoading={isLoading}
            voteType={voteType}
            onCancel={() => {
              setShowForm(false)
              onClose()
            }}
            onSubmit={values => onSubmitForm(values, () => setShowForm(false))}
          />
        )}
      </Flex>
    </Flex>
  )
}

export default DebateVoteButton
