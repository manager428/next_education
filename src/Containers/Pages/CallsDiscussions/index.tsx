import React, { useCallback, useState } from 'react'

import find from 'lodash/find'
import forEach from 'lodash/forEach'
import get from 'lodash/get'
import map from 'lodash/map'
import take from 'lodash/take'

import { Flex, Loader } from 'Components/UI'

import { Discussion, Tags } from 'Components/Blocks/Entities/Discussions'
import CreateDiscussionForm from 'Components/Blocks/Entities/Discussions/Forms/CreateDiscussionForm'
import Footer from 'Components/Blocks/Footer'
import Head from 'Components/Blocks/Head'

import { discussionApi } from 'Services/Api/requests'
import _ from 'Services/I18n'

import useCallDiscussionsQuery from './Hooks/useCallDiscussionsQuery'
import { Background, Container, LoadMore, Relative } from './styles'

const CallsDiscussions: React.FC = () => {
  const [isDiscussionCreating, setDiscussionCreating] = useState(false)

  const [queryParams, setQueryParams] = useState<{
    page: number
    order: 'latest' | 'popular'
    tags: string[]
  }>({
    page: 1,
    order: 'latest',
    tags: [],
  })

  const {
    posts,
    isLoading,
    isLoadingMore,
    lastPage,
    error,
    mutate,
    setSize,
    size,
    updateComments,
    addComment,
    deleteDiscussion,
    addDiscussionLike,
    addDiscussionCommentLike,
  } = useCallDiscussionsQuery(queryParams)

  const [commentsPage, setCommentsPage] = useState<{
    [key: number]: { page: number }
  }>({})

  const [editDiscussionState, setEditDiscussionState] = useState<{
    id: number
    image?: File
    content?: string
    tags?: string[]
  }>()

  const fetchDiscussionComments = useCallback(
    async (discussionId: number, page: number) => {
      try {
        const response = await discussionApi.getDiscussionComments({
          id: discussionId,
          page,
        })

        const nextComments = get(response, ['data', 'comments'], [])

        await updateComments(discussionId, nextComments)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    },
    [posts],
  )

  const handleCreateDiscussion = useCallback(
    async values => {
      setDiscussionCreating(true)

      const formData = new FormData()

      if (values?.id) formData.append('id', values.id)
      if (values?.content) formData.append('content', values.content)
      if (values?.image) formData.append('image', values.image)

      if (values?.id && !values?.image && editDiscussionState?.image) {
        formData.append('image', 'null')
      }

      if (values?.tags?.length > 0) {
        forEach(values?.tags, (tag: string, ind) => {
          formData.append(`tags[${ind}]`, tag)
        })
      }

      try {
        await discussionApi.addDiscussion(formData)
        mutate()
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      } finally {
        if (values?.id) {
          setEditDiscussionState(undefined)
        }
        setDiscussionCreating(false)
      }
    },
    [editDiscussionState],
  )

  const handleLoadMoreComments = useCallback(discussionId => {
    setCommentsPage(prevState => {
      const currentPage = prevState[discussionId]?.page || 1
      const nextPage = currentPage

      if (nextPage > 1) {
        fetchDiscussionComments(discussionId, nextPage)
      }

      return {
        ...prevState,
        [discussionId]: {
          page: nextPage,
        },
      }
    })
  }, [])

  const handleAddComment = useCallback(async (id, message) => {
    const response = await discussionApi.addDiscussionComment(id, {
      comment: message,
    })

    const comment = response?.data

    await addComment(id, comment)
  }, [])

  const hanldeDeleteDiscussion = useCallback(
    async id => {
      try {
        await discussionApi.deleteDiscussion(id)

        await deleteDiscussion(id)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    },
    [posts],
  )

  const handleEditDiscussion = useCallback(
    async id => {
      const discussion = find(posts, post => post.id === id)

      setEditDiscussionState({
        id: discussion.id,
        image: discussion.image,
        content: discussion.content,
        tags: discussion.tags,
      })
    },
    [posts],
  )

  const handleAddDiscussionLike = useCallback(async (id: number) => {
    try {
      await discussionApi.addDiscussionLike(id)
      await addDiscussionLike(id)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }, [])

  const hanldeAddCommentLike = useCallback(
    async (id: number, commentId: number) => {
      try {
        await discussionApi.addDiscussionCommentLike(commentId)
        await addDiscussionCommentLike(id, commentId)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    },
    [],
  )

  const handleLoadMore = useCallback(() => {
    setSize(size + 1)
  }, [queryParams])

  const handleSelectSort = useCallback(value => {
    setQueryParams(prevParams => ({
      ...prevParams,
      order: value,
    }))
  }, [])

  const handleSelectTag = useCallback(tags => {
    setQueryParams(prevParams => ({
      ...prevParams,
      tags,
    }))
  }, [])

  const renderDiscussions = useCallback(() => {
    if (posts.length === 0) {
      return (
        <Flex maxWidth="520px" width={1}>
          No discussions found
        </Flex>
      )
    }

    return map(posts, discussion => {
      const commentsCount = get(discussion, 'comments_count', 0)
      const commentsCurrentPage = commentsPage[discussion.id]?.page

      const comments = commentsCurrentPage
        ? discussion?.comments
        : take(discussion?.comments, 3)

      const currentCommentsCount = comments?.length || 0

      const author = {
        full_name: get(discussion, ['author_data', 'full_name']),
        avatar: get(discussion, ['author_data', 'avatar']),
        id: get(discussion, ['author_data', 'id']),
        role: get(discussion, ['author_data', 'role']),
        friends_data: get(discussion, ['author_data', 'friends_data']),
      }

      return (
        <Discussion
          author={author}
          comments={comments}
          commentsCount={commentsCount}
          content={get(discussion, 'content', null)}
          date={get(discussion, ['created_at'])}
          id={discussion.id}
          image={get(discussion, 'image', null)}
          isLiked={get(discussion, ['is_liked'], false)}
          key={discussion.id}
          likesCount={get(discussion, 'likes_count', 0)}
          showLoadMoreComments={commentsCount > currentCommentsCount}
          tags={get(discussion, ['tags'], [])}
          onAddComment={handleAddComment}
          onAddCommentLike={hanldeAddCommentLike}
          onAddLike={handleAddDiscussionLike}
          onDelete={hanldeDeleteDiscussion}
          onEdit={handleEditDiscussion}
          onLoadMoreComments={() => handleLoadMoreComments(discussion.id)}
        />
      )
    })
  }, [posts, commentsPage])

  return (
    <Background>
      <Head description="Discussions" title="Discussions" />

      <Container justifyContent="center" pb={60} pt={20}>
        <Relative
          alignContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
          justifyContent="center"
          minHeight="500px"
        >
          <Relative>
            <CreateDiscussionForm
              edit={!!editDiscussionState}
              initialValues={editDiscussionState}
              onReset={() => setEditDiscussionState(undefined)}
              onSubmit={handleCreateDiscussion}
            />
            {isDiscussionCreating && <Loader />}
          </Relative>

          <Relative mt={20}>
            <Tags
              onSortSelect={handleSelectSort}
              onTagSelect={handleSelectTag}
            />
          </Relative>

          {error && (
            <Flex justifyContent="center" mb={20} width={1}>
              Something going wrong, please contact with support
            </Flex>
          )}

          {isLoading ? <Loader /> : renderDiscussions()}

          {lastPage !== size && lastPage !== 0 && (
            <Relative width={1}>
              <LoadMore onClick={handleLoadMore}>
                {_('buttons.loadMore')}
              </LoadMore>
            </Relative>
          )}

          {isLoadingMore && (
            <Relative height="100px" width={1}>
              <Loader top="70px" />
            </Relative>
          )}
        </Relative>
      </Container>

      <Footer />
    </Background>
  )
}

export default CallsDiscussions
