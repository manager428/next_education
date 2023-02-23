import React, { useCallback, useState } from 'react'

import filter from 'lodash/filter'
import get from 'lodash/get'
import map from 'lodash/map'

import { useUserContext } from 'Containers/Pages/Moderator/User/context'
import { Container } from 'Containers/Pages/Moderator/User/styles'

import { EditCommentModal } from 'Components/Blocks/Entities/Moderator/Modals'
import { UserCommentsTable } from 'Components/Blocks/Entities/Moderator/Tables'
import AddCommentModal from 'Components/Blocks/Modals/AddCommentModal'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'

import moderatorApi, {
  UserCommentsParams,
} from 'Services/Api/requests/moderator'

const Comments: React.FC = () => {
  const { onUpdateUser } = useUserContext()
  const { id } = useRouterQueryParams()

  const [commentsData, setCommentsData] = useState<{
    comments?: Array<{
      comment: string
      comment_id: string
    }>
  }>({})
  const [isLoading, setLoading] = useState(false)

  const [postModal, setPostModal] = useState({
    entity: null,
    isOpen: false,
  })
  const [commentModal, setCommentModal] = useState({
    entity: null,
    isOpen: false,
  })

  const fetchData = useCallback(async params => {
    setLoading(true)
    if (!id) return

    const dateSortBy = get(params.sortBy, [0, 'desc'])

    const updatedParams: UserCommentsParams = {
      section: params.section,
      order: dateSortBy === false ? 'asc' : 'desc',
      page: params.pageIndex + 1,
    }

    if (typeof dateSortBy === 'undefined') {
      delete updatedParams.order
    }

    const response = await moderatorApi.userComments(updatedParams, +id)

    setCommentsData(response?.data)

    onUpdateUser(get(response?.data, 'user', {}))

    setLoading(false)
  }, [])

  const handleOpenModal = useCallback(({ entity, type }) => {
    switch (type) {
      case 'commentModal':
        setCommentModal({
          entity,
          isOpen: true,
        })
        break
      default:
    }
  }, [])

  const handleOpenPostModal = useCallback(entity => {
    setPostModal({
      isOpen: true,
      entity,
    })
  }, [])

  const handleCloseCommentModal = useCallback(params => {
    setCommentModal({
      entity: null,
      isOpen: false,
    })

    if (params?.commentId) {
      setCommentsData(prevState => {
        const updatedComments = map(prevState.comments, item => {
          if (item.comment_id === params.commentId) {
            return {
              ...item,
              comment: params.comment,
            }
          }
          return item
        })
        return {
          // eslint-disable-next-line @typescript-eslint/ban-types
          ...prevState,
          comments: updatedComments,
        }
      })
    }
  }, [])

  const handleDeleteComment = useCallback(async ({ section, commentId }) => {
    try {
      await moderatorApi.deleteComment({
        section,
        id: commentId,
      })

      setCommentsData(prevState => {
        const updatedComments = filter(
          prevState.comments,
          item => item.comment_id !== commentId,
        )
        return {
          ...prevState,
          comments: updatedComments,
        }
      })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }, [])

  const postId = get(postModal, ['entity', 'entityId'])
  const postType = get(postModal, ['entity', 'experienceType'])
  const postSection = get(postModal, ['entity', 'section'])

  return (
    <Container pb={60} pt="28px" width={1}>
      <UserCommentsTable
        data={commentsData}
        isLoading={isLoading}
        onDeleteComment={handleDeleteComment}
        onFetch={fetchData}
        onModalOpen={handleOpenModal}
        onPostViewModalOpen={handleOpenPostModal}
      />

      {postModal.isOpen && (
        <AddCommentModal
          experienceId={postId}
          postId={postId}
          postType={postType || postSection}
          onClose={() => setPostModal({ entity: null, isOpen: false })}
        />
      )}

      <EditCommentModal
        entity={commentModal.entity}
        isOpen={commentModal.isOpen}
        onClose={handleCloseCommentModal}
      />
    </Container>
  )
}

export default Comments
