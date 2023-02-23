import React, { useCallback, useMemo, useState } from 'react'

import InnerHTML from 'dangerously-set-html-content'

import filter from 'lodash/filter'
import get from 'lodash/get'
import map from 'lodash/map'

import { shareGlyph } from 'Assets/svg/lectorium'

import { Flex, Icon, Loader } from 'Components/UI'

import { CommentsList } from 'Components/Blocks/Comments'
import { DebateType } from 'Components/Blocks/Entities/Debates/Debate/Debate'
import DebateVoteButton from 'Components/Blocks/Entities/Debates/Debate/DebateVoteButton'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'
import { ShareModal } from 'Components/Blocks/Modals'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'
import useSwrRequest from 'Hooks/useSwrRequest'

import { debatesApi } from 'Services/Api/requests'
import DEBATES_API_PATHS from 'Services/Api/requests/debates/paths'
import _, { useScopedI18n } from 'Services/I18n'

import { COMPLAINT_SECTIONS } from 'Utils/complaints'

import {
  Author,
  AvatarImage,
  Background,
  Category,
  Container,
  DebateDescription,
  DebateImage,
  DebateInfo,
  DebatesLikeIcon,
  DebateTitle,
  Inner,
  Percents,
  ProgressContainer,
  ProgressLine,
  ShareButton,
  VotesContent,
} from './styles'

type Props = {
  initialData: {
    data: DebateType
  }
}

const Debate: React.FC<Props> = ({ initialData }) => {
  const params = useRouterQueryParams()
  const s = useScopedI18n('debates.view')

  const [errors, setErrors] = useState<null | string>(null)
  const [isVoteLoading, setVoteLoading] = useState<boolean>(false)
  const [isShowShareModal, setShowShareModal] = useState<boolean>(false)

  const [openedForms, setOpenedForms] = useState({
    yesTop: false,
    yesBottom: false,
    noTop: false,
    noBottom: false,
  })

  const id = +get(params, 'id', 0)

  const { data, isLoading, mutate } = useSwrRequest({
    url: DEBATES_API_PATHS.details(id),
    options: {
      initialData,
    },
  })

  const negativeVotes = get(data, 'count_negative_votes', 0)
  const positiveVotes = get(data, 'count_positive_votes', 0)
  const title = get(data, 'title')
  const category = get(data, 'category')
  const description = get(data, 'content', null)
  const comments = get(data, 'comments', [])
  const authorImage = get(data, 'author_data.avatar', null)
  const authorName = get(data, 'author_data.full_name')
  const debatePreview = get(data, 'image')
  const isVoted = get(data, 'user_has_vote', false)
  const isVotePositive = get(data, 'is_vote_positive')

  const positiveComments = useMemo(
    () =>
      filter(
        comments,
        (it: { vote_type: string }) => it.vote_type === 'positive',
      ),
    [data],
  )
  const negativeComments = useMemo(
    () =>
      filter(
        comments,
        (it: { vote_type: string }) => it.vote_type === 'negative',
      ),
    [data],
  )

  const handleCloseVoteForm = (): void => {
    setOpenedForms({
      yesBottom: false,
      noBottom: false,
      noTop: false,
      yesTop: false,
    })
  }

  const handleVote = async (
    values: any,
    onCloseCallback: any,
  ): Promise<any> => {
    setErrors(null)
    setVoteLoading(true)

    try {
      await debatesApi.vote({
        id,
        vote_type: get(values, 'voteType', 'negative'),
        comment: get(values, 'comment', ''),
      })

      onCloseCallback()
      handleCloseVoteForm()

      await mutate()
    } catch (e) {
      const errorsData = map(e?.data.errors, er => er)
      setErrors(
        errorsData.length > 0 ? errorsData.join(', ') : 'Something going wrong',
      )
    }

    setVoteLoading(false)
  }

  const handleLike = async (commentId: number): Promise<any> => {
    try {
      await debatesApi.likeComment(commentId)

      const updatedComments = map(comments, comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            likes_count: comment.likes_count + 1,
          }
        }
        return comment
      })

      await mutate({
        data: {
          ...data,
          comments: updatedComments,
        },
      })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }

  const getProgressLineData = useMemo(() => {
    if (negativeVotes === 0 && positiveVotes === 0) {
      return {
        positivePercent: 0,
        negativePercent: 0,
        isEmpty: true,
      }
    }
    const totalVotes = negativeVotes + positiveVotes
    const negativePercent = ((negativeVotes / totalVotes) * 100).toFixed(0)
    const positivePercent = ((positiveVotes / totalVotes) * 100).toFixed(0)

    return {
      positivePercent,
      negativePercent,
      isEmpty: false,
    }
  }, [id, data])

  const renderProgress = useCallback(() => {
    const { positivePercent, negativePercent, isEmpty } = getProgressLineData
    if (isEmpty) {
      return (
        <ProgressContainer>
          <ProgressLine variant="gray" width="100%">
            0%
          </ProgressLine>
        </ProgressContainer>
      )
    }

    return (
      <ProgressContainer>
        <Percents mr="12px" variant="green">
          <DebatesLikeIcon fill="#49CEB1" wrapperStyles={{ mr: '10px' }} />
          {positivePercent}%
        </Percents>
        <ProgressLine variant="green" width={`${positivePercent}%`} />
        <ProgressLine variant="orange" width={`${negativePercent}%`} />
        <Percents ml="12px" variant="orange">
          {negativePercent}
          %
          <DebatesLikeIcon
            fill="#ffa08c"
            variant="rotated"
            wrapperStyles={{ ml: '10px' }}
          />
        </Percents>
      </ProgressContainer>
    )
  }, [data])

  return (
    <Background>
      <Head description={description} ogImage={debatePreview} title={title} />

      <Container pb={60} pt={60}>
        <ShareModal
          isOpen={isShowShareModal}
          title={title}
          onClose={() => setShowShareModal(false)}
        />

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <DebateInfo>
              <ShareButton onClick={() => setShowShareModal(true)}>
                {_('general.share')} <Icon icon={shareGlyph} size={13} />
              </ShareButton>
              <Inner>
                <Category>{category}</Category>
                <Author mt={14}>
                  <Flex mr="10px">
                    <AvatarImage src={authorImage} />
                  </Flex>
                  {s('createdBy')} {authorName}
                </Author>

                <Flex mt={14}>
                  <DebateImage alt="preview" src={debatePreview} />
                </Flex>

                <DebateTitle mt={20}>{title}</DebateTitle>

                {description && (
                  <DebateDescription mt={14}>
                    <InnerHTML html={description} />
                  </DebateDescription>
                )}

                {renderProgress()}
              </Inner>
            </DebateInfo>

            <VotesContent>
              <Flex
                alignContent="flex-start"
                alignItems="flex-start"
                flexWrap="wrap"
                width={470}
              >
                <DebateVoteButton
                  error={errors}
                  isLoading={isVoteLoading}
                  isOpen={openedForms.yesTop}
                  isVoted={isVoted}
                  userVoteType={isVotePositive ? 'positive' : 'negative'}
                  variant="yesTop"
                  voteType="positive"
                  votes={positiveVotes}
                  onClose={handleCloseVoteForm}
                  onOpen={() =>
                    setOpenedForms({
                      yesTop: true,
                      noBottom: false,
                      noTop: false,
                      yesBottom: false,
                    })
                  }
                  onSubmitForm={handleVote}
                />
                {positiveComments.length > 0 && (
                  <CommentsList
                    color="#49CEB1"
                    data={positiveComments}
                    listType="votes"
                    section={COMPLAINT_SECTIONS.DEBATES}
                    withCommentsCounter={false}
                    onAddLike={handleLike}
                    onReplyClick={() => null}
                  />
                )}

                {positiveComments.length > 0 && (
                  <DebateVoteButton
                    error={errors}
                    isLoading={isVoteLoading}
                    isOpen={openedForms.noTop}
                    isVoted={isVoted}
                    short
                    userVoteType={isVotePositive ? 'positive' : 'negative'}
                    variant="noTop"
                    voteType="positive"
                    votes={positiveVotes}
                    onClose={handleCloseVoteForm}
                    onOpen={() =>
                      setOpenedForms({
                        yesTop: false,
                        noBottom: false,
                        noTop: true,
                        yesBottom: false,
                      })
                    }
                    onSubmitForm={handleVote}
                  />
                )}
              </Flex>

              <Flex
                alignContent="flex-start"
                alignItems="flex-start"
                flexWrap="wrap"
                width={470}
              >
                <DebateVoteButton
                  error={errors}
                  isLoading={isVoteLoading}
                  isOpen={openedForms.yesBottom}
                  isVoted={isVoted}
                  userVoteType={isVotePositive ? 'positive' : 'negative'}
                  variant="yesBottom"
                  voteType="negative"
                  votes={negativeVotes}
                  onClose={handleCloseVoteForm}
                  onOpen={() =>
                    setOpenedForms({
                      yesTop: false,
                      noBottom: false,
                      noTop: false,
                      yesBottom: true,
                    })
                  }
                  onSubmitForm={handleVote}
                />

                {negativeComments.length > 0 && (
                  <CommentsList
                    color="#FFA08C"
                    data={negativeComments}
                    listType="votes"
                    section={COMPLAINT_SECTIONS.DEBATES}
                    withCommentsCounter={false}
                    onAddLike={handleLike}
                    onReplyClick={() => null}
                  />
                )}
                {negativeComments.length > 0 && (
                  <DebateVoteButton
                    error={errors}
                    isLoading={isVoteLoading}
                    isOpen={openedForms.noBottom}
                    isVoted={isVoted}
                    short
                    userVoteType={isVotePositive ? 'positive' : 'negative'}
                    variant="noBottom"
                    voteType="negative"
                    votes={negativeVotes}
                    onClose={handleCloseVoteForm}
                    onOpen={() =>
                      setOpenedForms({
                        yesTop: false,
                        noBottom: true,
                        noTop: false,
                        yesBottom: false,
                      })
                    }
                    onSubmitForm={handleVote}
                  />
                )}
              </Flex>
            </VotesContent>
          </>
        )}
      </Container>
      <Footer />
    </Background>
  )
}

export default Debate
