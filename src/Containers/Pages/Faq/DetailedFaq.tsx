import React, { useCallback, useState } from 'react'
import ModalImage from 'react-modal-image'

import Link from 'next/link'

import get from 'lodash/get'
import map from 'lodash/map'
import upperFirst from 'lodash/upperFirst'

import { Flex, Loader } from 'Components/UI'

import { CommentForm, CommentsList } from 'Components/Blocks/Comments'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import { PUBLIC_PATHS } from 'Constants/paths'

import useRole from 'Hooks/useRole'
import useRouterQueryParams from 'Hooks/useRouterQueryParams'
import useSwrRequest from 'Hooks/useSwrRequest'

import { faqApi } from 'Services/Api/requests'
import FAQ_API_PATHS from 'Services/Api/requests/faq/paths'

import { COMPLAINT_SECTIONS } from 'Utils/complaints'

import {
  Background,
  CommentResponseError,
  CommentsWrapper,
  Container,
  Content,
  QuestionOpenIcon,
  RelatedQuestion,
  RelatedQuestionsWrap,
  RelatedQuestionTitle,
  RelatedTitle,
  SearchTitle,
  Section,
  SectionDescription,
  SectionImageCont,
  SectionImages,
  SectionImageTitle,
  SectionTitle,
  Title,
  VideoWrap,
} from './styles'

type Props = {
  initialData: any
}

const DetailedFAQ: React.FC<Props> = ({ initialData }) => {
  const { isLoggedIn } = useRole()
  const params = useRouterQueryParams() as { role: string; id: string }
  const { role } = params
  const { id } = params

  const [replyToUser, setReplyToUser] = useState<string | null>(null)
  const [commentError] = useState('')
  const [directMessageTo, setDirectMessageTo] = useState<null | number>(null)

  const { data, isLoading, error, mutate } = useSwrRequest({
    url: FAQ_API_PATHS.detailes(+id, role),
    options: {
      initialData,
    },
  })

  const handleClickReply = (userId: number, username: string) => {
    setReplyToUser(`<span style="color: rgb(246,139,106);">${username}</span>,`)
  }

  const handleAddComment = async (value: { comment: string }) => {
    try {
      const requestData: any = {
        comment: value.comment,
        notification_user_id: directMessageTo,
      }

      await faqApi.addComment(+id, requestData)

      mutate()

      setDirectMessageTo(null)
      setReplyToUser(null)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }

  const handleResetReplyTo = useCallback(() => {
    setDirectMessageTo(null)
    setReplyToUser(null)
  }, [])

  const handleAddLike = async (commentId: number) => {
    try {
      await faqApi.addCommentLike(commentId)

      const updatedComments = map(data?.post?.comments, comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            is_liked: true,
            likes_count: comment.likes_count + 1,
          }
        }
        return comment
      })

      await mutate({
        data: {
          ...data,
          post: {
            ...data.post,
            comments: { ...updatedComments },
          },
        },
      })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }

  const renderDetails = () => {
    const details = get(data, 'post.details', [])

    return map(details, section => {
      const sectionTitle = get(section, 'title', '')
      const sectionDescription = get(section, 'description', '')
      const sectionId = get(section, 'id')
      const images = get(section, 'images', [])

      return (
        <Section key={sectionId} mb={30}>
          <SectionTitle>{sectionTitle}</SectionTitle>
          {sectionDescription.length > 0 && (
            <SectionDescription mt={14}>
              {sectionDescription}
            </SectionDescription>
          )}
          <SectionImages>
            {map(images, (image, index) => {
              const imageTitle = get(image, 'title')
              const imagePath = get(image, 'image')
              const videoPath = get(image, 'video')

              return (
                <SectionImageCont center={!!videoPath} key={index} mt={14}>
                  <SectionImageTitle mb={14}>{imageTitle}</SectionImageTitle>
                  {videoPath ? (
                    <VideoWrap>
                      <video controls src={videoPath}>
                        <track kind="captions" />
                      </video>
                    </VideoWrap>
                  ) : (
                    <ModalImage
                      alt="FAQ image"
                      className="preview"
                      hideDownload
                      hideZoom
                      medium={imagePath}
                      showRotate={false}
                      small={imagePath}
                    />
                  )}
                </SectionImageCont>
              )
            })}
          </SectionImages>
        </Section>
      )
    })
  }

  const postTitle = get(data, 'post.title', '')
  const comments = get(data, 'post.comments', [])
  const relatedQuestions = get(data, 'related', [])

  return (
    <Background>
      <Head title={postTitle} />
      <Container pb={60} pt={60}>
        {error && <div>{error}</div>}
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Title>FAQ - {upperFirst(role)}</Title>
            <SearchTitle mt={14}>{postTitle}</SearchTitle>
            <Content mt={30}>{renderDetails()}</Content>
            <CommentsWrapper>
              <Flex
                alignItems="flex-start"
                justifyContent="space-between"
                width={1}
              >
                <Flex flexWrap="wrap" maxWidth={600}>
                  <CommentForm
                    color={null}
                    formTitle=""
                    isLoggedUser={isLoggedIn}
                    isSubmitAllowed
                    replyToUser={replyToUser}
                    title="Want to discuss the section with colleagues? <br/> You can write here!"
                    titleAlign="left"
                    titleFontSize="28px"
                    withSignInPopup
                    onReplyReset={handleResetReplyTo}
                    onSuccess={handleAddComment}
                  />
                  {commentError.length > 0 && (
                    <CommentResponseError>{commentError}</CommentResponseError>
                  )}
                  <CommentsList
                    data={comments}
                    section={COMPLAINT_SECTIONS.FAQ}
                    onAddLike={handleAddLike}
                    onReplyClick={handleClickReply}
                  />
                </Flex>

                {relatedQuestions.length > 0 && (
                  <RelatedQuestionsWrap>
                    <RelatedTitle mb={24}>Related Questions</RelatedTitle>
                    {map(relatedQuestions, question => (
                      <Link
                        href={{
                          pathname: `${PUBLIC_PATHS.FAQ(role)}`,
                          query: `openId=${question.id}`,
                        }}
                        key={question.id}
                        passHref
                      >
                        <RelatedQuestion mb={40}>
                          <QuestionOpenIcon wrapperStyles={{ mr: 20 }} />
                          <RelatedQuestionTitle>
                            {question.title}
                          </RelatedQuestionTitle>
                        </RelatedQuestion>
                      </Link>
                    ))}
                  </RelatedQuestionsWrap>
                )}
              </Flex>
            </CommentsWrapper>
          </>
        )}
      </Container>
      <Footer />
    </Background>
  )
}

export default DetailedFAQ
