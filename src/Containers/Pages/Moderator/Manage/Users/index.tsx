import React, { useCallback, useState } from 'react'

import get from 'lodash/get'
import map from 'lodash/map'

import Header from 'Components/Blocks/Entities/Moderator/Header'
import {
  BanUserModal,
  BlockUserModal,
} from 'Components/Blocks/Entities/Moderator/Modals'
import { ManageUserTable } from 'Components/Blocks/Entities/Moderator/Tables'
import Footer from 'Components/Blocks/Footer'

import moderatorApi, { UsersParams } from 'Services/Api/requests/moderator'

import { Background, Container } from './styles'

const Users: React.FC = () => {
  const [isLoading, setLoading] = useState(false)

  const [usersData, setUsersData] = useState<{
    users?: Array<{
      id: number | string
      is_saved: boolean
    }>
  }>({})

  const [banModal, setBanModal] = useState({
    entity: null,
    isOpen: false,
  })
  const [blockModal, setBlockModal] = useState({
    entity: null,
    isOpen: false,
  })

  const fetchData = useCallback(async params => {
    setLoading(true)

    const dateSortBy = get(params.sortBy, [0, 'desc'])

    const values: UsersParams = {
      order: dateSortBy === false ? 'asc' : 'desc',
      page: params.pageIndex + 1,
      search: params.search,
      status: params.status,
      list: params.list,
    }

    if (typeof dateSortBy === 'undefined') {
      delete values.order
    }

    const response = await moderatorApi.users(values)

    setUsersData(response?.data)
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

      default:
    }
  }, [])

  const handleBookmarkUser = useCallback(async (userId: number) => {
    try {
      await moderatorApi.addUserBookmark({ user_id: userId })

      setUsersData(prevState => {
        const updatedUsers = map(prevState.users, user => {
          if (user.id === userId) {
            return {
              ...user,
              is_saved: !user.is_saved,
            }
          }
          return user
        })

        return {
          ...prevState,
          users: updatedUsers,
        }
      })
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }, [])

  const handleCloseBanModal = useCallback(userId => {
    setBanModal({
      entity: null,
      isOpen: false,
    })

    if (userId) {
      setUsersData(prevState => ({
        ...prevState,
        users: map(prevState.users, user => {
          if (user.id === userId) {
            return {
              ...user,
              is_banned: true,
              is_blocked: false,
            }
          }
          return user
        }),
      }))
    }
  }, [])

  const handleCloseBlockModal = useCallback(userId => {
    setBlockModal({
      isOpen: false,
      entity: null,
    })

    if (userId) {
      setUsersData(prevState => ({
        ...prevState,
        users: map(prevState.users, user => {
          if (user.id === userId) {
            return {
              ...user,
              is_banned: false,
              is_blocked: true,
            }
          }
          return user
        }),
      }))
    }
  }, [])

  const handleRemoveFromBanOrBlock = useCallback(async (userId: number) => {
    try {
      await moderatorApi.removeBanOrBlock({ user_id: userId })

      setUsersData(prevState => ({
        // eslint-disable-next-line @typescript-eslint/ban-types
        ...(prevState as {}),
        users: map(prevState.users, user => {
          if (user.id === userId) {
            return {
              ...user,
              is_banned: false,
              is_blocked: false,
            }
          }
          return user
        }),
      }))
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }, [])

  return (
    <Background pt={60}>
      <Header />

      <Container pb={60} pt={28} width={1}>
        <ManageUserTable
          data={usersData}
          isLoading={isLoading}
          onBookmark={handleBookmarkUser}
          onFetch={fetchData}
          onModalOpen={handleOpenModal}
          onRemoveFromBanOrBlock={handleRemoveFromBanOrBlock}
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
      </Container>

      <Footer />
    </Background>
  )
}

export default Users
