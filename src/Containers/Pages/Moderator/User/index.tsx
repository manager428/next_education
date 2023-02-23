/* eslint-disable camelcase */
import React, { useCallback, useState } from 'react'

import {
  BanUserModal,
  BlockUserModal,
  WarningModal,
} from 'Components/Blocks/Entities/Moderator/Modals'
import Footer from 'Components/Blocks/Footer'

import useRouterQueryParams from 'Hooks/useRouterQueryParams'

import moderatorApi from 'Services/Api/requests/moderator'

import BanHistory from './Tabs/BanHistory'
import Comments from './Tabs/Comments'
import Complaints from './Tabs/Complaints'
import UserContext from './context'
import Header, { UserType } from './Header'
import { Background, Container, RoutesContainer } from './styles'

enum TABS {
  comments = 'comments',
  complaints = 'complaints',
  banHistory = 'ban-history',
}

const User: React.FC = () => {
  const [user, setUser] = useState<UserType | null>(null)
  const params = useRouterQueryParams()

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

  const handleRemoveFromBanOrBlock = useCallback(async (userId: number) => {
    try {
      await moderatorApi.removeBanOrBlock({ user_id: userId })
      setUser(prevState => {
        if (prevState) {
          return { ...prevState, is_banned: false, is_blocked: false }
        }
        return null
      })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }, [])

  const handleCloseBanModal = useCallback(async userId => {
    setBanModal({
      isOpen: false,
      entity: null,
    })

    if (userId) {
      setUser(prevState => {
        if (prevState) {
          return { ...prevState, is_banned: true, is_blocked: false }
        }
        return null
      })
    }
  }, [])

  const handleCloseBlockModal = useCallback(async userId => {
    setBlockModal({
      isOpen: false,
      entity: null,
    })

    if (userId) {
      setUser(prevState => {
        if (prevState) {
          return { ...prevState, is_banned: false, is_blocked: true }
        }
        return null
      })
    }
  }, [])

  const handleUpdateUser = useCallback(userData => {
    setUser(userData)
  }, [])

  const renderTabs = useCallback(() => {
    switch (params.section) {
      case TABS.comments:
        return <Comments />

      case TABS.complaints:
        return <Complaints />

      case TABS.banHistory:
        return <BanHistory />

      default:
        return null
    }
  }, [params])

  return (
    <Background>
      <UserContext.Provider
        value={{
          onUpdateUser: handleUpdateUser,
        }}
      >
        <Container pt={28} width={1}>
          {user && (
            <Header
              user={user}
              onModalOpen={handleOpenModal}
              onRemoveFromBan={handleRemoveFromBanOrBlock}
            />
          )}

          <RoutesContainer>{renderTabs()}</RoutesContainer>

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

          <WarningModal
            entity={warningModal.entity}
            isOpen={warningModal.isOpen}
            onClose={() => setWarningModal({ entity: null, isOpen: false })}
          />
        </Container>
      </UserContext.Provider>
      <Footer />
    </Background>
  )
}

export default User
