import React, { useCallback, useState } from 'react'

import InnerHTML from 'dangerously-set-html-content'
import { DateTime } from 'luxon'
import Link from 'next/link'

import get from 'lodash/get'
import map from 'lodash/map'

import {
  facebookGlyph,
  instagramGlyph,
  twitterGlyph,
  websiteGlyph,
} from 'Assets/svg/landing'
import { shareGlyph } from 'Assets/svg/lectorium'

import { Flex, Icon } from 'Components/UI'

import { CommentForm, CommentsList } from 'Components/Blocks/Comments'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'
import ShareModal from 'Components/Blocks/Modals/ShareModal'

import { PUBLIC_PATHS } from 'Constants/paths'
import { iframeRegex } from 'Constants/regex'

import useLocale from 'Hooks/useLocale'
import useRole from 'Hooks/useRole'
import useRouterQueryParams from 'Hooks/useRouterQueryParams'
import useSwrRequest from 'Hooks/useSwrRequest'

import { blogApi } from 'Services/Api/requests'
import BLOG_API_PATHS from 'Services/Api/requests/blog/paths'
import _, { useScopedI18n } from 'Services/I18n'

import { COMPLAINT_SECTIONS } from 'Utils/complaints'

import {
  Background,
  BlogLikeIcon,
  Category,
  CommentResponseError,
  Container,
  Content,
  ContentHeader,
  ContentSection,
  DateInfo,
  EventDate,
  LikesContainer,
  PostAuthor,
  PostContent,
  PostDescription,
  PostImage,
  PostInfo,
  PostTitle,
  QuoteContent,
  QuoteIcon,
  QuoteSection,
  ReadMoreButton,
  RelatedPostInfo,
  RelatedTitle,
  ShareButton,
  SocialContainer,
  SocialIcon,
  Title,
  VideoSection,
  VideoWrap,
} from './styles'

const CONTENT_TYPES = {
  header: 'header',
  video: 'video',
  image: 'image',
  text: 'text',
  quote: 'quote',
}

type Props = {
  initialData: any // TODO add response type
}

const BlogPost: React.FC<Props> = ({ initialData }) => {
  const params = useRouterQueryParams()
  const locale = useLocale()
  const postId = +get(params, ['id'], 0)
  const { isLoggedIn } = useRole()
  const s = useScopedI18n('blog')

  const { data, mutate } = useSwrRequest({
    url: BLOG_API_PATHS.details(postId),
    options: {
      initialData,
    },
  })

  const [isShareModalOpen, setShareModalOpen] = useState(false)

  const [replyToUser, setReplyToUser] = useState<string | null>(null)
  const [commentError, setCommentError] = useState('')
  const [directMessageTo, setDirectMessageTo] = useState<null | number>(null)

  const handleOpenShareModal = useCallback(() => {
    setShareModalOpen(true)
  }, [])

  const handlePostLike = useCallback(async () => {
    if (get(data, ['post', 'is_liked']) || !isLoggedIn) return

    try {
      await blogApi.addLike(postId)

      mutate({
        data: {
          ...data,
          post: {
            ...data?.post,
            likes_count: data.post?.likes_count + 1,
            is_liked: true,
          },
        },
      })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }, [data])

  const handleReplyToUser = useCallback((username: string): void => {
    setReplyToUser(`<span style="color: rgb(246,139,106);">${username}</span>,`)
  }, [])

  const handleResetReplyTo = useCallback(() => {
    setDirectMessageTo(null)
    setReplyToUser(null)
  }, [])

  const handleAddComment = useCallback(async values => {
    try {
      const requestData: any = { comment: values?.comment }

      if (directMessageTo) {
        requestData.notification_user_id = directMessageTo
      }

      await blogApi.addComment(postId, requestData)
      mutate()
    } catch (e) {
      setCommentError(
        get(e, ['data', 'errors']) || [_('error.somethingGoingWrong')],
      )
    }

    setReplyToUser(null)
  }, [])

  const handleAddCommentLike = useCallback(
    async (commentId: number) => {
      try {
        await blogApi.addCommentLike(commentId)

        const updatedData = {
          ...data,
          post: {
            ...data.post,
            comments: map(data.post.comments, comment => {
              if (comment.id === commentId) {
                return {
                  ...comment,
                  is_liked: true,
                  likes_count: comment.likes_count + 1,
                }
              }
              return comment
            }),
          },
        }

        mutate({
          data: {
            ...updatedData,
          },
        })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    },
    [data],
  )

  const renderContent = useCallback(() => {
    const content = get(data, ['post', 'content'])

    return map(content, section => {
      const sectionContent = get(section, 'content')

      const renderContentType = (): React.ReactNode => {
        switch (section?.content_type) {
          case CONTENT_TYPES.image:
            return <img alt="section" src={sectionContent} />
          case 'header':
            return (
              <ContentHeader>
                <InnerHTML html={sectionContent} />
              </ContentHeader>
            )

          case CONTENT_TYPES.text:
            return <InnerHTML html={sectionContent} />

          case CONTENT_TYPES.video: {
            const isIframeVideo = iframeRegex.test(sectionContent)

            if (isIframeVideo) {
              return (
                <VideoSection>
                  <VideoWrap>
                    <InnerHTML html={sectionContent} />
                  </VideoWrap>
                </VideoSection>
              )
            }
            return (
              <VideoSection>
                <VideoWrap>
                  <video controls src={sectionContent}>
                    <track kind="captions" />
                  </video>
                </VideoWrap>
              </VideoSection>
            )
          }

          case CONTENT_TYPES.quote:
            return (
              <QuoteSection mt={38}>
                <QuoteIcon
                  rotated
                  wrapperStyles={{
                    left: '40px',
                    top: '-18px',
                    position: 'absolute',
                  }}
                />
                <QuoteIcon
                  rotated
                  wrapperStyles={{
                    left: '66px',
                    top: '-18px',
                    position: 'absolute',
                  }}
                />
                <QuoteContent>
                  <InnerHTML html={sectionContent} />
                </QuoteContent>
                <QuoteIcon
                  wrapperStyles={{
                    bottom: '-18px',
                    right: '40px',
                    position: 'absolute',
                  }}
                />
                <QuoteIcon
                  wrapperStyles={{
                    bottom: '-18px',
                    right: '66px',
                    position: 'absolute',
                  }}
                />
              </QuoteSection>
            )
          default:
            return null
        }
      }

      return (
        <ContentSection key={section.id}>{renderContentType()}</ContentSection>
      )
    })
  }, [data])

  const post = get(data, 'post')
  const isLiked = get(post, ['is_liked'], false)
  const likes = get(post, ['likes_count'], 0)
  const category = get(post, ['category'])
  const title = get(post, ['title'])
  const formatedDate = DateTime.fromISO(
    get(post, 'created_at', '2099-12-19T15:28:46.493Z'),
  ).toFormat(' MMMM dd, yyyy', { locale })

  const upcomingDate = get(post, 'upcoming_date')

  const comments = get(post, 'comments')
  const authorName = get(post, 'author_name', '')

  const renderRelated = useCallback(() => {
    const related = get(data, 'related', [])

    if (related.length === 0) return null

    return (
      <Flex flexWrap="wrap" justifyContent="space-between" mt={20} width={1}>
        <RelatedTitle mb={28} width={1}>
          More amazing {category}
        </RelatedTitle>

        {map(related, (relatedPost: any) => {
          const postDate = DateTime.fromISO(relatedPost?.created_at).toFormat(
            'MMMM dd, yyyy',
          )

          return (
            <Flex
              alignContent="flex-start"
              alignItems="flex-start"
              flexWrap="wrap"
              key={relatedPost.id}
              width={470}
            >
              <Link href={`${PUBLIC_PATHS.BLOG_POST(relatedPost.id)}`} passHref>
                <a>
                  <PostImage
                    alt="Main post preview"
                    height={282}
                    src={relatedPost?.image}
                    width={1}
                  />
                </a>
              </Link>

              <Flex alignItems="flex-start" mt={22} width={1}>
                <RelatedPostInfo fontWeight="bold">
                  {relatedPost?.category}
                </RelatedPostInfo>
                <RelatedPostInfo>
                  <span>•</span> {postDate}
                </RelatedPostInfo>
                <Flex flexGrow={1} justifyContent="flex-end">
                  <BlogLikeIcon wrapperStyles={{ mr: 10 }} />
                  {relatedPost.likes_count}
                </Flex>
              </Flex>

              <PostTitle fontSize={28} mt={14} width={1}>
                {relatedPost?.title}
              </PostTitle>
              <PostDescription lineHeight="22px" mt={14} width={1}>
                {relatedPost?.excerpt}
              </PostDescription>
              <Flex mt={14}>
                <Link href={`${PUBLIC_PATHS.BLOG_POST(relatedPost.id)}`}>
                  <ReadMoreButton>{_('buttons.readMore')}...</ReadMoreButton>
                </Link>
              </Flex>
            </Flex>
          )
        })}
      </Flex>
    )
  }, [data])

  const renderSocial = useCallback(() => {
    const webSiteSocial = get(post, 'author_web_url')
    const instagramSocial = get(post, 'author_instagram_url')
    const twitterSocial = get(post, 'author_twitter_url')
    const facebookSocial = get(post, 'author_facebook_url')

    const color = '#D3DAE8'

    return (
      <Flex flexGrow={1} ml="10px">
        {webSiteSocial && (
          <SocialContainer>
            <Link href={webSiteSocial} passHref>
              <a target="_blank">
                <SocialIcon fill={color} icon={websiteGlyph} />
              </a>
            </Link>
          </SocialContainer>
        )}
        {instagramSocial && (
          <SocialContainer>
            <Link href={instagramSocial}>
              <a target="_blank">
                <SocialIcon fill={color} icon={instagramGlyph} />
              </a>
            </Link>
          </SocialContainer>
        )}

        {twitterSocial && (
          <SocialContainer>
            <Link href={twitterSocial} passHref>
              <a target="_blank">
                <SocialIcon fill={color} icon={twitterGlyph} />
              </a>
            </Link>
          </SocialContainer>
        )}

        {facebookSocial && (
          <SocialContainer>
            <Link href={facebookSocial} passHref>
              <a target="_blank">
                <SocialIcon fill={color} icon={facebookGlyph} />
              </a>
            </Link>
          </SocialContainer>
        )}
      </Flex>
    )
  }, [post])

  return (
    <Background>
      <Head description={post?.excerpt} ogImage={post?.image} title={title} />

      <ShareModal
        isOpen={isShareModalOpen}
        title={title}
        onClose={() => setShareModalOpen(false)}
      />

      <Container flexShrink={0} maxWidth={720} pb={0} pt={60}>
        <Content>
          <Flex flexWrap="wrap" justifyContent="center" width={1}>
            <Category>{category}</Category>
            {post?.upcoming_date && (
              <EventDate justifyContent="center" mt={20} width={1}>
                Event Date - {upcomingDate}
              </EventDate>
            )}
          </Flex>
          <Title mt={20} width={1}>
            {title}
          </Title>

          <Flex justifyContent="space-between" mt={24} width={1}>
            <PostAuthor>
              by {authorName} {renderSocial()}
            </PostAuthor>
            <ShareButton onClick={handleOpenShareModal}>
              {_('buttons.share')} <Icon icon={shareGlyph} size={13} />
            </ShareButton>
          </Flex>

          <PostContent mb={24} mt={24}>
            {renderContent()}
          </PostContent>

          <PostInfo>
            <Flex justifyContent="center" width={1}>
              <LikesContainer>
                {isLiked ? s('liked') : s('likeThePost')}
                <BlogLikeIcon
                  isLiked={isLiked}
                  wrapperStyles={{
                    ml: '10px',
                    mr: '10px',
                  }}
                  onClick={handlePostLike}
                />{' '}
                {likes}
              </LikesContainer>
            </Flex>
            <Flex justifyContent="center" mt={14} width={1}>
              <DateInfo>
                {_('general.published')}: {formatedDate}
              </DateInfo>
            </Flex>
          </PostInfo>
        </Content>

        <Flex
          alignContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
          justifyContent="center"
          margin="0 auto"
          maxWidth="600px"
          mt={24}
        >
          <CommentForm
            color={undefined}
            formTitle=""
            isLoggedUser={isLoggedIn}
            isSubmitAllowed
            replyToUser={replyToUser}
            title={_('general.comments')}
            titleAlign="left"
            titleFontSize="24px"
            withSignInPopup
            onReplyReset={handleResetReplyTo}
            onSuccess={handleAddComment}
          />

          {commentError.length > 0 && (
            <CommentResponseError>{commentError}</CommentResponseError>
          )}

          <CommentsList
            data={comments}
            section={COMPLAINT_SECTIONS.BLOG}
            onAddLike={handleAddCommentLike}
            onReplyClick={handleReplyToUser}
          />
        </Flex>
      </Container>

      <Container flexShrink={0} maxWidth={980} mb={60}>
        {renderRelated()}
      </Container>

      <Footer />
    </Background>
  )
}

export default BlogPost
