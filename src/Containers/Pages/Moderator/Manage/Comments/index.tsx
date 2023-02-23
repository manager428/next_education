import React, { useCallback, useState } from 'react'

import filter from 'lodash/filter'
import get from 'lodash/get'
import map from 'lodash/map'

import Header from 'Components/Blocks/Entities/Moderator/Header'
import {
  BanUserModal,
  BlockUserModal,
  EditCommentModal,
  WarningModal,
} from 'Components/Blocks/Entities/Moderator/Modals'
import { ManageCommentsTable } from 'Components/Blocks/Entities/Moderator/Tables'
import Footer from 'Components/Blocks/Footer'
import AddCommentModal from 'Components/Blocks/Modals/AddCommentModal'

import moderatorApi, { CommentsParams } from 'Services/Api/requests/moderator'

import { Background, Container } from './styles'

type TComment = {
  comment_id: string
  comment: string
  user_id: string
  is_banned: boolean
  is_blocked: boolean
}

const Comments: React.FC = () => {
  const [commentsData, setCommentsData] = useState<{
    comments?: Array<TComment>
  }>({})

  const [isLoading, setLoading] = useState(false)
  const [banModal, setBanModal] = useState({
    entity: null,
    isOpen: false,
  })
  const [blockModal, setBlockModal] = useState({
    entity: null,
    isOpen: false,
  })
  const [warningModal, setWarningModal] = useState({
    entity: null,
    isOpen: false,
  })
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

    const dateSortBy = get(params.sortBy, [0, 'desc'])

    const updatedParams: CommentsParams = {
      section: params.section,
      order: dateSortBy === false ? 'asc' : 'desc',
      page: params.pageIndex + 1,
    }

    if (typeof dateSortBy === 'undefined') {
      delete updatedParams.order
    }

    const response = await moderatorApi.comments(updatedParams)

    setCommentsData(response?.data)
    setLoading(false)
  }, [])

  const handleOpenModal = useCallback(({ entity, type }) => {
    switch (type) {
      case 'banModal':
        setBanModal({
          entity,
          isOpen: true,
        })
        break
      case 'blockModal':
        setBlockModal({
          entity,
          isOpen: true,
        })
        break
      case 'postModal':
        setPostModal({
          entity,
          isOpen: true,
        })
        break
      case 'warningModal':
        setWarningModal({
          entity,
          isOpen: true,
        })
        break
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

  const handleCloseBanModal = useCallback(userId => {
    setBanModal({
      entity: null,
      isOpen: false,
    })

    if (userId) {
      setCommentsData(prevState => {
        const updatedComments = map(prevState.comments, comment => {
          if (comment.user_id === userId) {
            return {
              ...comment,
              is_banned: true,
              is_blocked: false,
            }
          }
          return comment
        })
        return {
          // eslint-disable-next-line @typescript-eslint/ban-types
          ...(prevState as {}),
          comments: updatedComments,
        }
      })
    }
  }, [])

  const handleCloseBlockModal = useCallback(userId => {
    setBlockModal({
      isOpen: false,
      entity: null,
    })

    if (userId) {
      setCommentsData(prevState => {
        const updatedComments = map(prevState.comments, comment => {
          if (comment.user_id === userId) {
            return {
              ...comment,
              is_banned: false,
              is_blocked: true,
            }
          }
          return comment
        })
        return {
          // eslint-disable-next-line @typescript-eslint/ban-types
          ...(prevState as {}),
          comments: updatedComments,
        }
      })
    }
  }, [])

  const handleCloseCommentModal = useCallback(params => {
    setCommentModal({
      entity: null,
      isOpen: false,
    })

    if (params?.commentId) {
      setCommentsData(prevState => {
        const updatedComments = map(prevState.comments, item => {
          if (item.comment_id === params?.commentId) {
            return {
              ...item,
              comment: params.comment,
            }
          }
          return item
        })
        return {
          // eslint-disable-next-line @typescript-eslint/ban-types
          ...(prevState as {}),
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
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }, [])

  const postId = get(postModal, ['entity', 'entityId'])
  const postType = get(postModal, ['entity', 'experienceType'])
  const postSection = get(postModal, ['entity', 'section'])

  return (
    <Background pt={60}>
      <Header />
      <Container pb={60} pt="28px" width={1}>
        <ManageCommentsTable
          data={commentsData}
          isLoading={isLoading}
          onDeleteComment={handleDeleteComment}
          onFetch={fetchData}
          onModalOpen={handleOpenModal}
          onPostViewModalOpen={handleOpenPostModal}
        />

        <WarningModal
          entity={warningModal.entity}
          isOpen={warningModal.isOpen}
          onClose={() => setWarningModal({ entity: null, isOpen: false })}
        />

        <BanUserModal
          entity={banModal.entity}
          isOpen={banModal.isOpen}
          onClose={handleCloseBanModal}
        />

        <BlockUserModal
          entity={blockModal.entity}
          isOpen={blockModal.isOpen}
          onClose={handleCloseBlockModal}
        />

        {postModal.isOpen && (
          <AddCommentModal
            experienceId={postId}
            postId={postId}
            postType={postType || postSection}
            onClose={() => setCommentModal({ entity: null, isOpen: false })}
          />
        )}

        <EditCommentModal
          entity={commentModal.entity}
          isOpen={commentModal.isOpen}
          onClose={handleCloseCommentModal}
        />
      </Container>

      <Footer />
    </Background>
  )
}

export default Comments
