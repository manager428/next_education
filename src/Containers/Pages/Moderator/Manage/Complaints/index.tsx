import React, { useCallback, useState } from 'react'

import get from 'lodash/get'
import map from 'lodash/map'

import Header from 'Components/Blocks/Entities/Moderator/Header'
import {
  BanUserModal,
  BlockUserModal,
  WarningModal,
} from 'Components/Blocks/Entities/Moderator/Modals'
import { ManageComplaintsTable } from 'Components/Blocks/Entities/Moderator/Tables'
import Footer from 'Components/Blocks/Footer'
import AddCommentModal from 'Components/Blocks/Modals/AddCommentModal'

import moderatorApi, { ComplaintsParams } from 'Services/Api/requests/moderator'

import { Background, Container } from './styles'

type TComplaint = {
  user_id: number
  user_data: {
    is_banned: boolean
  }
}

const Complaints: React.FC = () => {
  const [isLoading, setLoading] = useState(false)
  const [complaintsData, setComplaintsData] = useState<{
    complaints?: Array<TComplaint>
  }>({})

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
  const [commentModal, setCommentModal] = useState({
    entity: null,
    isOpen: false,
  })

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
      case 'warningModal':
        setWarningModal({
          entity,
          isOpen: true,
        })
        break
      default:
    }
  }, [])

  const handleOpenPostModal = useCallback(entity => {
    setCommentModal({
      isOpen: true,
      entity,
    })
  }, [])

  const fetchData = useCallback(async params => {
    setLoading(true)

    const dateSortBy = get(params.sortBy, [0, 'desc'])

    const values: ComplaintsParams = {
      section: params.section,
      order: dateSortBy === false ? 'asc' : 'desc',
      page: params.pageIndex + 1,
    }

    if (typeof dateSortBy === 'undefined') {
      delete values.order
    }

    const response = await moderatorApi.complaints(values)

    setComplaintsData(response?.data)

    setLoading(false)
  }, [])

  const handleCloseBanModal = useCallback(userId => {
    setBanModal({
      entity: null,
      isOpen: false,
    })

    if (userId) {
      setComplaintsData(prevState => {
        const updatedComplaints = map(prevState.complaints, complaint => {
          if (complaint.user_id === userId) {
            return {
              ...complaint,
              user_data: {
                ...complaint.user_data,
                is_banned: true,
                is_blocked: false,
              },
            }
          }
          return complaint
        })
        return {
          // eslint-disable-next-line @typescript-eslint/ban-types
          ...(prevState as {}),
          complaints: updatedComplaints,
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
      setComplaintsData(prevState => {
        const updatedComplaints = map(prevState.complaints, complaint => {
          if (complaint.user_id === userId) {
            return {
              ...complaint,
              user_data: {
                ...complaint.user_data,
                is_banned: false,
                is_blocked: true,
              },
            }
          }
          return complaint
        })
        return {
          // eslint-disable-next-line @typescript-eslint/ban-types
          ...(prevState as {}),
          complaints: updatedComplaints,
        }
      })
    }
  }, [])

  const handleRemoveFromBanOrBlock = useCallback(async (userId: number) => {
    try {
      await moderatorApi.removeBanOrBlock({ user_id: userId })

      setComplaintsData(prevState => {
        const updatedComplaints = map(prevState.complaints, complaint => {
          if (complaint.user_id === userId) {
            return {
              ...complaint,
              user_data: {
                ...complaint.user_data,
                is_banned: false,
                is_blocked: false,
              },
            }
          }
          return complaint
        })
        return {
          ...prevState,
          complaints: updatedComplaints,
        }
      })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }, [])

  const postId = get(commentModal, ['entity', 'entityId'])
  const postType = get(commentModal, ['entity', 'experienceType'])

  return (
    <Background pt={60}>
      <Header />
      <Container pb={60} pt="28px" width={1}>
        <ManageComplaintsTable
          data={complaintsData}
          isLoading={isLoading}
          onFetch={fetchData}
          onModalOpen={handleOpenModal}
          onPostViewModalOpen={handleOpenPostModal}
          onRemoveFromBan={handleRemoveFromBanOrBlock}
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

        {commentModal.isOpen && (
          <AddCommentModal
            experienceId={postId}
            postId={postId}
            postType={postType}
            onClose={() => setCommentModal({ entity: null, isOpen: false })}
          />
        )}
      </Container>
      <Footer />
    </Background>
  )
}

export default Complaints
