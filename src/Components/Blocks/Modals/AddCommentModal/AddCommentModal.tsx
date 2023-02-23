import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Modal from 'react-modal'

import InnerHTML from 'dangerously-set-html-content'
import { DateTime } from 'luxon'
import Image from 'next/image'
import Link from 'next/link'

import debounce from 'lodash/debounce'
import get from 'lodash/get'
import map from 'lodash/map'
import sortBy from 'lodash/sortBy'
import toUpper from 'lodash/toUpper'

import { Flex, Loader } from 'Components/UI'

import FriendStatus from 'Components/Blocks/Entities/Friends/FriendStatus'
import AuthorMenu from 'Components/Blocks/Modals/AddCommentModal/AuthorMenu'
import { NotAllowedAction, SignIn } from 'Components/Blocks/Popups'

import { ADD_COMMENT_MODAL_TYPES } from 'Constants/ids'
import { AUTH_PATHS, PUBLIC_PATHS } from 'Constants/paths'
import { englishCharsRegex } from 'Constants/regex'

import useOutsideClick from 'Hooks/useOutsideClick'
import useRole from 'Hooks/useRole'
import useLocationQueryParams from 'Hooks/useRouterQueryParams'
import { useAppSelector } from 'Hooks/useStore'
import useSwrRequest from 'Hooks/useSwrRequest'

import {
  challengesApi,
  communityApi,
  lectoriumApi,
} from 'Services/Api/requests'
import CHALLENGES_API_PATHS from 'Services/Api/requests/challenges/paths'
import COMMUNITY_API_PATHS from 'Services/Api/requests/community/paths'
import LECTORIUM_API_PATHS from 'Services/Api/requests/lectorium/paths'
import CookieService, { CookiesKeys } from 'Services/Cookies'
import _, { useScopedI18n } from 'Services/I18n'

import { Media } from 'Theme'

import { copyToClipboard } from 'Utils/common'
import { COMPLAINT_SECTIONS } from 'Utils/complaints'

import CommentItem from './CommentItem'
import {
  CommentForm,
  CommentNameBlock,
  CommentsContent,
  CommentsCount,
  CommentsFormButton,
  CommentsFormInputEditableDiv,
  CommentsFormInputName,
  CommentsList,
  CommentsTabs,
  CommentTab,
  Container,
  Content,
  CopyButton,
  CopyButtonSuccess,
  Date,
  ErrorsContainer,
  Info,
  ItemCommentsLikes,
  Label,
  LeftPart,
  LikeIcon,
  modalStyles,
  MultipleCommentsIcon,
  RightPart,
  SendIcon,
  Title,
  VideoContainer,
} from './styles'

import { MEDIA_SIZES } from '../../../../Constants/media'

type Props = {
  postType: ADD_COMMENT_MODAL_TYPES
  postId: number
  section?: COMPLAINT_SECTIONS
  lectoriumId?: number
  experienceId?: number
  onClose: () => void
}

// TODO: Refactor this shit!
const AddCommentModal: React.FC<Props> = ({
  postType,
  postId,
  section,
  lectoriumId,
  experienceId,
  onClose,
}) => {
  const params = useLocationQueryParams()
  const { isSchoolAdmin } = useRole()
  const s = useScopedI18n('modals.addCommentModal')

  const { me, isLoggedIn } = useAppSelector(state => state.me)

  const modalRef = useRef<HTMLDivElement>(null)
  const editableDivRef = useRef<HTMLDivElement>(null)
  const commentsRef = useRef<HTMLDivElement>(null)
  const directMessageRef = useRef<HTMLDivElement>(null)

  const [isSending, setSending] = useState(false)
  const [isSuccessCopy, setShowSuccessCopy] = useState(false)
  const [isShowSignIn, setShowSignIn] = useState(false)
  const [isShowNotAllowedPopup, setShowNotAllowedAction] = useState(false)

  const [formData, setFormData] = useState<{
    fullName: string | null
    comment: string | null
  }>({
    fullName: null,
    comment: null,
  })

  const [replyToData, setReplyToData] = useState<{
    selectedUsername: string | null
    userId: number | null
  }>({
    selectedUsername: '',
    userId: 0,
  })

  const [serverError, setServerError] = useState<string | null>(null)
  const [commentActiveTab, setCommentActiveTab] = useState('latest')
  const [guestLikeAdded, setGuestLikeAdded] = useState(false)

  const getApiURL = useCallback(() => {
    if (
      postType === ADD_COMMENT_MODAL_TYPES.STUDENT_POSTS ||
      postType === ADD_COMMENT_MODAL_TYPES.STUDENT_VIDEOS
    ) {
      return LECTORIUM_API_PATHS.EXPRIENCE_POST(postType, postId)
    }

    if (postType === ADD_COMMENT_MODAL_TYPES.COMMUNITY) {
      return COMMUNITY_API_PATHS.communityDetails(postId)
    }

    return CHALLENGES_API_PATHS.CHALLENGE_DETAILS(postId)
  }, [postType, postId])

  const URL = getApiURL()

  const { data: post, mutate: postMutate } = useSwrRequest({
    url: URL,
  })

  useOutsideClick({ ref: modalRef, onClick: onClose })

  useEffect(() => {
    if (postType === ADD_COMMENT_MODAL_TYPES.CHALLENGE) {
      setGuestLikeAdded(
        !!CookieService.getCookie(
          null,
          `${CookiesKeys.challengeLike}-${postId}`,
        ),
      )
    }
  }, [postId])

  const handleAddLike = async () => {
    try {
      if (guestLikeAdded) {
        return
      }

      if (postType === ADD_COMMENT_MODAL_TYPES.CHALLENGE) {
        await challengesApi.likeChallenge(postId)
      }

      if (postType === ADD_COMMENT_MODAL_TYPES.COMMUNITY) {
        await communityApi.likeCommunity(postId)
      }

      if (
        postType === ADD_COMMENT_MODAL_TYPES.STUDENT_POSTS ||
        postType === ADD_COMMENT_MODAL_TYPES.STUDENT_VIDEOS
      ) {
        if (lectoriumId && experienceId) {
          await lectoriumApi.addExperienceLike(lectoriumId, experienceId)
        }
      }

      await postMutate(
        {
          data: {
            ...post,
            is_liked: true,
            likes_count: post.likes_count + 1,
          },
        },
        false,
      )
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }

    if (!isLoggedIn) {
      CookieService.setCookie(null, `${CookiesKeys.challengeLike}-${postId}`, {
        liked: true,
      })
    }
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({ ...prevState, fullName: e.target.value }))
  }

  const debouncedCommentChange = useCallback(
    debounce((e: React.ChangeEvent<HTMLDivElement>) => {
      setFormData(prevState => ({
        ...prevState,
        comment: e.target.innerHTML,
      }))
    }, 500),
    [],
  )

  const handleCopyLinkClick = () => {
    const pageUrl = `${window.location.origin}/${PUBLIC_PATHS.CHALLENGES}?id=${postId}`

    copyToClipboard(pageUrl)

    setShowSuccessCopy(true)
    setTimeout(() => {
      setShowSuccessCopy(false)
    }, 2000)
  }

  const handleAddComment = async () => {
    if (isSchoolAdmin) {
      setShowNotAllowedAction(true)
      return
    }

    if (!isLoggedIn) {
      setShowSignIn(true)
      return
    }

    // TODO: REWRITE WITH FINAL FORM!
    const fullName = get(formData, 'fullName') || me?.full_name
    const comment = get(formData, 'comment')

    if (!fullName) {
      setFormData(prevState => ({
        ...prevState,
        fullName: '',
      }))
    }

    if (!comment) {
      setFormData(prevState => ({
        ...prevState,
        comment: '',
      }))
    }

    const isReply = comment?.startsWith('<span')
    const splittedComment: any = comment?.split('span>,')

    if (
      fullName &&
      fullName.length > 0 &&
      comment &&
      comment.length > 0 &&
      (isReply ? splittedComment[1] : comment).match(englishCharsRegex)
    ) {
      try {
        setSending(true)

        if (postType === ADD_COMMENT_MODAL_TYPES.CHALLENGE) {
          await challengesApi.addComment({
            id: postId,
            author_name: fullName,
            comment,
            notification_user_id: replyToData.userId,
          })
        }

        if (postType === ADD_COMMENT_MODAL_TYPES.COMMUNITY) {
          await communityApi.addComment({
            id: postId,
            comment,
            notification_user_id: replyToData.userId,
          })
        }

        if (
          postType === ADD_COMMENT_MODAL_TYPES.STUDENT_POSTS ||
          ADD_COMMENT_MODAL_TYPES.STUDENT_VIDEOS
        ) {
          if (lectoriumId && experienceId) {
            await lectoriumApi.addExperienceComment({
              lectoriumId,
              experienceId,
              comment,
              notification_user_id: replyToData.userId,
            })
          }
        }

        await postMutate()

        if (editableDivRef?.current?.innerHTML)
          editableDivRef.current.innerHTML = ''

        setReplyToData({ userId: null, selectedUsername: null })
        setServerError(null)
        setFormData({
          comment: null,
          fullName: null,
        })
      } catch (e) {
        const errorsData = map(e?.data.errors, er => er)
        setServerError(
          errorsData.length > 0
            ? errorsData.join(', ')
            : _('error.fillAllRequired'),
        )
      }

      setSending(false)
    }
  }

  const handleAddCommentLike = async (
    e: React.MouseEvent,
    commentId: number,
  ) => {
    e.stopPropagation()

    const isAllowed =
      postType === ADD_COMMENT_MODAL_TYPES.CHALLENGE ||
      (isLoggedIn &&
        (postType === ADD_COMMENT_MODAL_TYPES.STUDENT_POSTS ||
          postType === ADD_COMMENT_MODAL_TYPES.COMMUNITY ||
          postType === ADD_COMMENT_MODAL_TYPES.STUDENT_VIDEOS))

    if (!isAllowed) {
      return
    }

    try {
      if (postType === ADD_COMMENT_MODAL_TYPES.CHALLENGE) {
        await challengesApi.likeChallengeComment(commentId)
      }

      if (postType === ADD_COMMENT_MODAL_TYPES.COMMUNITY) {
        await communityApi.likeCommunityComment(commentId)
      }

      if (
        postType === ADD_COMMENT_MODAL_TYPES.STUDENT_POSTS ||
        postType === ADD_COMMENT_MODAL_TYPES.STUDENT_VIDEOS
      ) {
        await lectoriumApi.addExperienceCommentLike(commentId)
      }

      await postMutate(
        {
          data: {
            ...post,
            comments: map(post.comments, item => {
              if (item.id === commentId) {
                return {
                  ...item,
                  likes_count: item.likes_count + 1,
                  is_liked: true,
                }
              }
              return { ...item }
            }),
          },
        },
        false,
      )
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  const handleAddFriendClick = () => null

  const placeCaretAtEnd = (el: any) => {
    el.focus()

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (
      typeof window.getSelection !== 'undefined' &&
      typeof document.createRange !== 'undefined'
    ) {
      const range = document.createRange()
      range.selectNodeContents(el)
      range.collapse(false)

      const selection = window.getSelection()

      if (selection) {
        selection.removeAllRanges()
        selection.addRange(range)
      }
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    else if (typeof document.body.createTextRange !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const textRange = document.body.createTextRange()
      textRange.moveToElementText(el)
      textRange.collapse(false)
      textRange.select()
    }
  }

  const handleUsernameClick = (userId: number, username: string) => {
    if (userId !== 0) {
      if (editableDivRef.current) {
        editableDivRef.current.innerHTML = `<span contentEditable="false" class="direct-message-to">${username}</span>, `

        placeCaretAtEnd(editableDivRef.current)

        setReplyToData({
          selectedUsername: username,
          userId,
        })
      }
    }
  }

  const handleOnPasteEditableHandler = (e: any) => {
    e.preventDefault()
    const text = e.clipboardData.getData('text/plain')
    document.execCommand('insertHTML', false, text)
  }

  const handleOnBackspaceClickHandle = (event: any) => {
    if (window.getSelection && event.which === 8) {
      // backspace
      // fix backspace bug in FF
      // https://bugzilla.mozilla.org/show_bug.cgi?id=685445
      const selection = window.getSelection()
      if (!selection?.isCollapsed || !selection?.rangeCount) {
        return
      }

      const curRange = selection.getRangeAt(selection.rangeCount - 1)
      if (
        curRange.commonAncestorContainer.nodeType === 3 &&
        curRange.startOffset > 0
      ) {
        // we are in child selection. The characters of the text node is being deleted
        return
      }

      const range = document.createRange()
      if (selection.anchorNode && selection.anchorNode !== event.target) {
        // selection is in character mode. expand it to the whole editable field
        range.selectNodeContents(event.target)
        range.setEndBefore(selection.anchorNode)
      } else if (selection.anchorOffset > 0) {
        range.setEnd(event.target, selection.anchorOffset)
      } else {
        // reached the beginning of editable field
        return
      }
      range.setStart(event.target, range.endOffset - 1)

      const previousNode = range.cloneContents().lastChild as HTMLDivElement
      if (previousNode && previousNode.contentEditable === 'false') {
        // this is some rich content, e.g. smile. We should help the user to delete it
        range.deleteContents()
        event.preventDefault()

        // Delete selected userId
        setReplyToData({
          userId: null,
          selectedUsername: null,
        })

        setFormData(prevState => ({
          ...prevState,
          comment: '',
        }))

        if (editableDivRef?.current) {
          editableDivRef.current.innerHTML = ''
        }
      }
    }
  }

  const authorId = useMemo(() => {
    switch (postType) {
      case ADD_COMMENT_MODAL_TYPES.STUDENT_POSTS:
      case ADD_COMMENT_MODAL_TYPES.STUDENT_VIDEOS:
        return get(post, ['author_data', 'id'], '')
      case ADD_COMMENT_MODAL_TYPES.CHALLENGE:
        return get(post, ['challenge', 'user_id'], '')
      default:
        return get(post, ['challenge', 'author_id'], '')
    }
  }, [post])

  const getPostTooltipContent = (friendId: number) => {
    // Show info that user needs to login.
    if (!isLoggedIn) {
      return (
        <span className="info-block">
          <Link href={AUTH_PATHS.SIGN_IN} passHref>
            <a>Login</a>&nbsp; to add User to your Friend list
          </Link>
        </span>
      )
    }
    // Show info that user already in the friend list.
    if ([1].includes(friendId)) {
      return (
        <span className="info-block">This user in on your friends list</span>
      )
    }
    // Show info that friend request already sent.

    return null
  }

  const renderVideoContainer = useCallback(() => {
    const image = post.image || post.preview_url
    const video = post.video || post.video_url

    switch (postType) {
      case ADD_COMMENT_MODAL_TYPES.CHALLENGE:
      case ADD_COMMENT_MODAL_TYPES.STUDENT_VIDEOS:
        return (
          <VideoContainer>
            {video ? (
              <video controls src={video}>
                <track kind="captions" />
              </video>
            ) : (
              <Image
                height={288}
                layout="responsive"
                objectFit="contain"
                src={image}
                width={480}
              />
            )}

            <Flex>
              {postType === ADD_COMMENT_MODAL_TYPES.CHALLENGE && (
                <CopyButton onClick={handleCopyLinkClick}>
                  {_('buttons.copyLink')}

                  {isSuccessCopy && (
                    <CopyButtonSuccess>{s('copySuccess')}</CopyButtonSuccess>
                  )}
                </CopyButton>
              )}
            </Flex>
          </VideoContainer>
        )

      case ADD_COMMENT_MODAL_TYPES.STUDENT_POSTS:
      case ADD_COMMENT_MODAL_TYPES.COMMUNITY:
        return (
          <VideoContainer>
            <Image
              height={288}
              layout="fixed"
              objectFit="contain"
              src={image}
              width={480}
            />
          </VideoContainer>
        )

      default:
        return null
    }
  }, [postType, isSuccessCopy, post])

  const renderComments = useCallback(
    (sort = 'latest') => {
      let comments = get(post, 'comments', [])

      if (sort === 'mostPopular') {
        comments = sortBy(comments, comment => comment.likes_count).reverse()
      }

      return map(comments, comment => (
        <CommentItem
          age={me?.age ?? ''}
          authorId={authorId}
          comment={comment}
          directMessageRef={
            parseInt(params['notification-message'] as string, 10) ===
            comment.id
              ? directMessageRef
              : null
          }
          getPostTooltipContent={getPostTooltipContent}
          key={comment.id}
          notificationMassageId={parseInt(
            params['notification-message'] as string,
            10,
          )}
          postType={postType}
          section={section}
          onAddCommentLike={handleAddCommentLike}
          onAddFriendClick={handleAddFriendClick}
          onUsernameClick={handleUsernameClick}
        />
      ))
    },
    [commentActiveTab, post],
  )

  const commentNotEnglish = !englishCharsRegex.test(formData.comment as string)
  const isNotValidComment = formData.comment?.length === 0 || commentNotEnglish
  const isFullNameEmpty = formData?.fullName?.length === 0

  const validationError =
    isNotValidComment || isFullNameEmpty ? _('error.fillAllRequired') : null

  const friend = {
    ...get(post, ['author_data', 'friends_data'], {}),
    userId: get(post, ['author_data', 'id'], ''),
  }

  return (
    <Modal
      ariaHideApp={false}
      contentLabel="Challenge Modal"
      isOpen
      style={modalStyles}
      onRequestClose={onClose}
    >
      <Media greaterThanOrEqual={MEDIA_SIZES.DESKTOP}>
        <Container ref={modalRef}>
          {!post?.id ? (
            <Flex
              alignItems="center"
              flex={1}
              flexDirection="column"
              justifyContent="center"
            >
              <Loader />
            </Flex>
          ) : (
            <Container>
              <LeftPart>
                {renderVideoContainer()}
                <Info>
                  <Title>{post?.title}</Title>
                  <Date>
                    {DateTime.fromISO(post?.created_at).toFormat('dd MMM yyyy')}
                  </Date>
                </Info>
                <Flex
                  alignContent="center"
                  alignItems="center"
                  justifyContent="space-between"
                  width={1}
                >
                  <Flex alignItems="center">
                    <AuthorMenu
                      authorId={post?.author_data?.id}
                      avatarUrl={post?.author_data?.avatar}
                      commentRef={commentsRef}
                      name={post?.author_data?.full_name}
                      username={post?.author_data?.username}
                      onReply={handleUsernameClick}
                      onShowSignIn={setShowSignIn}
                    />

                    <FriendStatus friend={friend} />
                  </Flex>

                  <ItemCommentsLikes onClick={handleAddLike}>
                    <LikeIcon
                      liked={post?.is_liked || guestLikeAdded}
                      top="3px"
                    />
                    {post?.likes_count}
                  </ItemCommentsLikes>
                </Flex>

                <Content>
                  <InnerHTML html={post?.content || ''} />
                </Content>
              </LeftPart>

              <RightPart>
                {isShowSignIn && (
                  <SignIn
                    isOpen
                    left="390px"
                    position="fixed"
                    top="35%"
                    onClose={() => setShowSignIn(false)}
                  />
                )}
                <CommentForm>
                  <Label withError={formData?.fullName?.length === 0}>
                    {s('yourName')}
                  </Label>

                  {isLoggedIn ? (
                    <CommentNameBlock>
                      <span>{me?.full_name}</span>
                    </CommentNameBlock>
                  ) : (
                    <CommentsFormInputName
                      value={formData.fullName ? formData.fullName : undefined}
                      withError={isFullNameEmpty}
                      onChange={handleNameChange}
                    />
                  )}

                  <Label withError={isNotValidComment}>
                    {s('yourComment')}
                  </Label>
                  <CommentsFormInputEditableDiv
                    isAllowed={isLoggedIn}
                    ref={editableDivRef}
                    withError={isNotValidComment}
                    onInput={debouncedCommentChange}
                    onKeyDown={handleOnBackspaceClickHandle}
                    onPaste={handleOnPasteEditableHandler}
                  />

                  {isShowNotAllowedPopup && (
                    <NotAllowedAction
                      left="auto"
                      top="204px"
                      onClose={() => setShowNotAllowedAction(false)}
                    />
                  )}

                  {commentNotEnglish && (
                    <ErrorsContainer>
                      {_('error.textShouldBeWrittenInEnglish')}
                    </ErrorsContainer>
                  )}

                  {serverError && (
                    <ErrorsContainer>{serverError}</ErrorsContainer>
                  )}

                  <ErrorsContainer>{validationError}</ErrorsContainer>

                  {isSending ? (
                    <div
                      style={{
                        width: '100%',
                        height: '24px',
                        marginTop: '14px',
                        position: 'relative',
                      }}
                    >
                      <Loader height="40px" width="40px" />
                    </div>
                  ) : (
                    <CommentsFormButton
                      disabled={isSending}
                      onClick={handleAddComment}
                    >
                      <span>
                        <SendIcon />
                        {_('buttons.send')}
                      </span>
                    </CommentsFormButton>
                  )}
                </CommentForm>

                <CommentsTabs>
                  <CommentsCount>
                    <MultipleCommentsIcon />
                    {post?.comments?.length}
                  </CommentsCount>
                  <Flex justifyContent="flex-end" width={1}>
                    <CommentTab
                      active={commentActiveTab === 'latest'}
                      onClick={() => setCommentActiveTab('latest')}
                      onKeyDown={() => setCommentActiveTab('latest')}
                    >
                      {toUpper(_('buttons.latest'))}
                    </CommentTab>

                    <CommentTab
                      active={commentActiveTab === 'mostPopular'}
                      onClick={() => setCommentActiveTab('mostPopular')}
                      onKeyDown={() => setCommentActiveTab('mostPopular')}
                    >
                      {toUpper(_('buttons.popular'))}
                    </CommentTab>
                  </Flex>
                </CommentsTabs>
                <CommentsList autoHide={false}>
                  <CommentsContent ref={commentsRef}>
                    {commentActiveTab === 'latest' && renderComments()}
                    {commentActiveTab === 'mostPopular' &&
                      renderComments('mostPopular')}
                  </CommentsContent>
                </CommentsList>
              </RightPart>
            </Container>
          )}
        </Container>
      </Media>
      <Media lessThan={MEDIA_SIZES.DESKTOP}>
        <Container ref={modalRef}>
          {!post?.id ? (
            <Flex
              alignItems="center"
              flex={1}
              flexDirection="column"
              justifyContent="center"
            >
              <Loader />
            </Flex>
          ) : (
            <Container>
              {renderVideoContainer()}
              <Info>
                <Title>{post?.title}</Title>
                <Date>
                  {DateTime.fromISO(post?.created_at).toFormat('dd MMM yyyy')}
                </Date>
              </Info>
              <Flex
                alignContent="center"
                alignItems="center"
                justifyContent="space-between"
                width={1}
              >
                <Flex alignItems="center">
                  <AuthorMenu
                    authorId={post?.author_data?.id}
                    avatarUrl={post?.author_data?.avatar}
                    commentRef={commentsRef}
                    name={post?.author_data?.full_name}
                    username={post?.author_data?.username}
                    onReply={handleUsernameClick}
                    onShowSignIn={setShowSignIn}
                  />

                  <FriendStatus friend={friend} />
                </Flex>

                <ItemCommentsLikes onClick={handleAddLike}>
                  <LikeIcon
                    liked={post?.is_liked || guestLikeAdded}
                    top="3px"
                  />
                  {post?.likes_count}
                </ItemCommentsLikes>
              </Flex>

              <Content>
                <InnerHTML html={post?.content || ''} />
              </Content>

              {isShowSignIn && (
                <SignIn
                  isOpen
                  left="390px"
                  position="fixed"
                  top="35%"
                  onClose={() => setShowSignIn(false)}
                />
              )}
              <CommentForm>
                <Label withError={formData?.fullName?.length === 0}>
                  {s('yourName')}
                </Label>

                {isLoggedIn ? (
                  <CommentNameBlock>
                    <span>{me?.full_name}</span>
                  </CommentNameBlock>
                ) : (
                  <CommentsFormInputName
                    value={formData.fullName ? formData.fullName : undefined}
                    withError={isFullNameEmpty}
                    onChange={handleNameChange}
                  />
                )}

                <Label withError={isNotValidComment}>{s('yourComment')}</Label>
                <CommentsFormInputEditableDiv
                  isAllowed={isLoggedIn}
                  ref={editableDivRef}
                  withError={isNotValidComment}
                  onInput={debouncedCommentChange}
                  onKeyDown={handleOnBackspaceClickHandle}
                  onPaste={handleOnPasteEditableHandler}
                />

                {isShowNotAllowedPopup && (
                  <NotAllowedAction
                    left="auto"
                    top="204px"
                    onClose={() => setShowNotAllowedAction(false)}
                  />
                )}

                {commentNotEnglish && (
                  <ErrorsContainer>
                    {_('error.textShouldBeWrittenInEnglish')}
                  </ErrorsContainer>
                )}

                {serverError && (
                  <ErrorsContainer>{serverError}</ErrorsContainer>
                )}

                <ErrorsContainer>{validationError}</ErrorsContainer>

                {isSending ? (
                  <div
                    style={{
                      width: '100%',
                      height: '24px',
                      marginTop: '14px',
                      position: 'relative',
                    }}
                  >
                    <Loader height="40px" width="40px" />
                  </div>
                ) : (
                  <CommentsFormButton
                    disabled={isSending}
                    onClick={handleAddComment}
                  >
                    <span>
                      <SendIcon />
                      {_('buttons.send')}
                    </span>
                  </CommentsFormButton>
                )}
              </CommentForm>

              <CommentsTabs>
                <CommentsCount>
                  <MultipleCommentsIcon />
                  {post?.comments?.length}
                </CommentsCount>
                <Flex justifyContent="flex-end" width={1}>
                  <CommentTab
                    active={commentActiveTab === 'latest'}
                    onClick={() => setCommentActiveTab('latest')}
                    onKeyDown={() => setCommentActiveTab('latest')}
                  >
                    {toUpper(_('buttons.latest'))}
                  </CommentTab>

                  <CommentTab
                    active={commentActiveTab === 'mostPopular'}
                    onClick={() => setCommentActiveTab('mostPopular')}
                    onKeyDown={() => setCommentActiveTab('mostPopular')}
                  >
                    {toUpper(_('buttons.popular'))}
                  </CommentTab>
                </Flex>
              </CommentsTabs>
              <CommentsList autoHide={false}>
                <CommentsContent ref={commentsRef}>
                  {commentActiveTab === 'latest' && renderComments()}
                  {commentActiveTab === 'mostPopular' &&
                    renderComments('mostPopular')}
                </CommentsContent>
              </CommentsList>
            </Container>
          )}
        </Container>
      </Media>
    </Modal>
  )
}

export default AddCommentModal
